import React, { MouseEvent, useEffect, useState } from "react";

import CommentInterface from "../commentInterface/commentInterface";
import _ from "lodash";

import { withUrqlClient } from "next-urql";
import {
  useGetUserQuery,
  useSetReplyLikeMutation,
  useGetReplyLikesQuery,
} from "../../../../../generated/graphql";
import { textMapTypes } from "../../../../../helpers/constants";
import { CommentInfo, User, textMap } from "../../../../../helpers/interfaces";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import {
  getTimeFrame,
  getFormattedWordsArray,
} from "../../../../../helpers/utilities";
import { useAppSelector } from "../../../../redux/hooks";

interface props {
  reply: CommentInfo;
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
  className: string;
}

const ReplyCard: React.FC<props> = ({
  reply,
  responseFromReplyWindow,
  type,
  className,
}) => {
  const { id, message, createdAt, commentedUserId } = reply;
  const [commentedUser] = useGetUserQuery({
    variables: { uid: commentedUserId ? commentedUserId : "" },
  });
  const loggedInUser = useAppSelector((state) => state.user);
  const uid = useAppSelector((state) => state.user.id);
  const mid = useAppSelector((state) => state.movie.id);
  const [time, setTime] = useState<string>("");
  const [likedUsers, setLikedUser] = useState<any[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [, setReplyLike] = useSetReplyLikeMutation();

  const [replyLikeCountQuery] = useGetReplyLikesQuery({
    variables: {
      rid: id,
      page: 1,
      limit: 10,
    },
  });

  useEffect(() => {
    const { data, fetching } = replyLikeCountQuery;
    if (!fetching && data) {
      const _data = data.getReplyLikes;
      if (_data) {
        const _count = _data.likesCount;
        const _users = _data.likes;
        //TODO:   dispatch(sliceAddToLikes({ _users, rid }));
        const isFoundUser = _users && _users.find((u) => u.id === uid);
        if (isFoundUser) setLike(true);
        else setLike(false);
        setLikesCount(_users ? _count : 0);
      }
    }
  }, [replyLikeCountQuery.fetching]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const getTime = () => {
      if (createdAt === "Posting...") {
        setTime(createdAt);
      } else setTime(getTimeFrame(createdAt));
      interval = setTimeout(getTime, 60000);
    };
    getTime();

    return () => {
      clearTimeout(interval);
    };
  }, [createdAt, time]);

  // Set commented user info.
  useEffect(() => {
    const { data, fetching } = commentedUser;
    if (!fetching && data) {
      const commentedUserData = data.getUser;
      // if (!commentedUserData) console.log('Comment data is not available');
      setCommentedUser(commentedUserData as User);
    }
  }, [commentedUser]);

  // (Spoiler) Converting message to messageArray
  useEffect(() => {
    let msgArray: textMap[] = [];
    if (message) {
      const msg: string = message;
      let finalEnd = 0;
      let index = 0;
      while (index < msg.length) {
        const remaining: string = msg.substring(index, msg.length);
        const l = remaining.indexOf("<s>");
        const r = remaining.indexOf("</s>");
        if (l === -1) break;
        if (r === -1) break;
        if (l > r) break;
        if (l > 0) {
          // non-spoiler.
          const text = remaining.substring(0, l);
          const res = getFormattedWordsArray(text);
          msgArray = _.concat(msgArray, res);
        }
        if (l < r) {
          const spoilerObj: textMap = {
            type: textMapTypes.SPOILER,
            message: remaining.substring(l + 3, r),
          };
          msgArray.push(spoilerObj);
        }
        index += r + 4;
        if (index <= msg.length) finalEnd = index;
        // Both non-spoiler and spoiler are pushed into the array until 'r'
      }
      // End of loop
      if (finalEnd !== msg.length && finalEnd < msg.length) {
        // Final non-spoiler.
        const finalPhrase: string = msg.substring(finalEnd, msg.length);
        const res = getFormattedWordsArray(finalPhrase);
        msgArray = _.concat(msgArray, res);
      }
    }

    setMessageArray(msgArray);
  }, [message]);

  // Update likes
  const subjectLike = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    // Instant update to user.
    setLike(!like);
    setLikedUser(
      like
        ? likedUsers.filter((u) => u.id !== uid)
        : [...likedUsers, loggedInUser]
    );
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
    setReplyLike({
      rid: id,
      uid,
      mid: mid,
      like: !like,
    }).then((res) => {
      const { data } = res;
      if (data) {
        const _data = data.setReplyLike;
        if (_data) {
          if (
            _data.likeStatus.like !== null &&
            _data.likeStatus.like !== undefined
          )
            setLike(_data.likeStatus.like);
          setLikedUser(
            !like
              ? likedUsers.filter((u) => u.id !== uid)
              : [...likedUsers, _data.user]
          );
          setLikesCount(
            _data.likeStatus.like ? likesCount + 1 : likesCount - 1
          );
        }
      }
    });
  };
  return (
    <CommentInterface
      className={className}
      subjectLike={subjectLike}
      type={type}
      commentedUser={loadedCommentedUser}
      messageArray={mArray}
      time={time}
      likedUsers={likedUsers}
      commentOrReply={reply}
      like={like}
      likesCount={likesCount}
      responseFromReplyWindow={responseFromReplyWindow}
    />
  );
};

export default withUrqlClient(urqlClient)(ReplyCard);
