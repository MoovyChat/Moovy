import { CommentInfo, User, textMap } from '../../Utils/interfaces';
import React, { MouseEvent, useEffect, useState } from 'react';
import { getFormattedWordsArray, getTimeFrame } from '../../Utils/utilities';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetReplyLikesQuery,
  useGetUserQuery,
  useSetReplyLikeMutation,
} from '../../generated/graphql';

import CommentInterface from '../commentInterface/commentInterface';
import _ from 'lodash';
import { msgPlace } from '../../Utils/enums';
import { textMapTypes } from '../../constants';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

interface props {
  reply: CommentInfo;
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
  className: any;
}

const ReplyCard: React.FC<props> = ({
  reply,
  responseFromReplyWindow,
  type,
  className,
}) => {
  const { id, message, createdAt, commentedUserId } = reply;
  const [commentedUser, _q] = useGetUserQuery({
    variables: { uid: commentedUserId! },
  });
  const loggedInUser = useAppSelector((state) => state.user);
  const uid = useAppSelector((state) => state.user.id);
  const mid = useAppSelector((state) => state.movie.id);
  const [time, setTime] = useState<string>('');
  const [likedUsers, setLikedUser] = useState<any[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const [likesCount, setLikesCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const [_likeRes, setReplyLike] = useSetReplyLikeMutation();

  const [replyLikeCountQuery, _executeQuery] = useGetReplyLikesQuery({
    variables: {
      rid: id!,
      page: 1,
      limit: 10,
    },
  });

  useEffect(() => {
    const { data, fetching, error } = replyLikeCountQuery;
    if (!fetching && data) {
      const _count = data.getReplyLikes?.likesCount!;
      const _users = data.getReplyLikes?.likes;
      //TODO:   dispatch(sliceAddToLikes({ _users, rid }));
      const isFoundUser = _users && _users.find((u) => u.id === uid);
      if (isFoundUser) setLike(true);
      else setLike(false);
      setLikesCount(_users ? _count : 0);
    }
  }, [replyLikeCountQuery.fetching]);

  useEffect(() => {
    let interval: any;
    let getTime = () => {
      if (createdAt === 'Posting...') {
        setTime(createdAt!);
      } else setTime(getTimeFrame(createdAt!));
      interval = setTimeout(getTime, 60000);
    };
    getTime();

    return () => {
      clearTimeout(interval);
    };
  }, [createdAt, time]);

  // Set commented user info.
  useEffect(() => {
    let { data, fetching, error } = commentedUser;
    if (!fetching && data) {
      const commentedUserData = data.getUser;
      // if (!commentedUserData) console.log('Comment data is not available');
      setCommentedUser(commentedUserData as User);
    }
    return () => {};
  }, [commentedUser]);

  // (Spoiler) Converting message to messageArray
  useEffect(() => {
    let msgArray: textMap[] = [];
    let isFinal: boolean = false;
    if (message) {
      let msg: string = message;
      let finalEnd = 0;
      let index = 0;
      while (index < msg.length) {
        let remaining: string = msg.substring(index, msg.length);
        let l = remaining.indexOf('<s>');
        let r = remaining.indexOf('</s>');
        if (l === -1) break;
        if (r === -1) break;
        if (l > r) break;
        if (l > 0) {
          // non-spoiler.
          let text = remaining.substring(0, l);
          let res = getFormattedWordsArray(text);
          msgArray = _.concat(msgArray, res);
        }
        if (l < r) {
          let spoilerObj: textMap = {
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
        let finalPhrase: string = msg.substring(finalEnd, msg.length);
        let res = getFormattedWordsArray(finalPhrase);
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
      rid: id!,
      uid,
      mid: mid,
      like: !like,
    }).then((res) => {
      const { error, data } = res;
      setLike(data?.setReplyLike?.likeStatus?.like!);
      setLikedUser(
        !like
          ? likedUsers.filter((u) => u.id !== uid)
          : [...likedUsers, data?.setReplyLike?.user!]
      );
      setLikesCount(
        data?.setReplyLike?.likeStatus.like! ? likesCount + 1 : likesCount - 1
      );
    });
  };
  return (
    <CommentInterface
      className={className}
      subjectLike={subjectLike}
      type={type}
      commentedUser={loadedCommentedUser!}
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
