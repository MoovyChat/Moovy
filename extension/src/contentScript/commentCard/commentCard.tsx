import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { User, textMap } from '../../Utils/interfaces';
import { getFormattedWordsArray, getTimeFrame } from '../../Utils/utilities';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useCommentLikesSubscription,
  useGetCommentLikesQuery,
  useGetCommentedUserQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';

import { COMMENT } from '../../redux/actionTypes';
import CommentInterface from '../commentInterface/commentInterface';
import _ from 'lodash';
import { msgPlace } from '../../Utils/enums';
import { textMapTypes } from '../../constants';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

interface props {
  comment: any;
  responseFromReplyWindow: (comment: any) => void;
  type: string;
  className: any;
  cardRef: React.MutableRefObject<HTMLDivElement | null>;
}

const CommentCard: React.FC<props> = ({
  comment,
  responseFromReplyWindow,
  type,
  className,
}) => {
  const { id, message, createdAt } = comment;
  const [commentedUser, _q] = useGetCommentedUserQuery({
    variables: { cid: id! },
  });
  const user = useAppSelector((state) => state.user);
  const uid = useAppSelector((state) => state.user.id);
  const mid = useAppSelector((state) => state.movie.id);
  const [time, setTime] = useState<string>('');
  const [likedUsers, setLikedUser] = useState<any[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const [likesCount, setLikesCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const [_likeRes, setCommentLike] = useSetCommentLikeMutation();

  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: id!,
      page: 1,
      limit: 10,
    },
  });

  const [commentLikesSub] = useCommentLikesSubscription({
    variables: {
      cid: id!,
    },
  });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      const findCurrentUser = _users?.find((u) => u.id === uid);
      if (findCurrentUser) setLike(true);
      else setLike(false);
      setLikedUser(_users!);
      setLikesCount(_count);
    }
  }, [commentLikeCountQuery.fetching]);

  //Set Comment likes count
  useEffect(() => {
    const { data, fetching, error } = commentLikesSub;
    if (!fetching && data) {
      const commentLikesCount = data.commentLikesUpdate?.likesCount;
      setLikesCount(commentLikesCount!);
      const _users = data.commentLikesUpdate?.likes;
      setLikedUser(_users);
    }
  }, [commentLikesSub.fetching]);

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
  useMemo(() => {
    let { data, fetching, error } = commentedUser;
    if (!fetching && data) {
      const commentData = data.getCommentedUser;
      // if (!commentData) console.log('Comment data is not available');
      setCommentedUser(commentData as User);
    }
    return () => {};
  }, [commentedUser]);

  // (Spoiler) Converting message to messageArray
  useMemo(() => {
    let msgArray: textMap[] = [];
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
  const subjectLike = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (type === 'comment') {
        setLike((prevLike) => !prevLike);
        setLikedUser((prevLikedUsers) =>
          like
            ? prevLikedUsers.filter((u) => u.id !== uid)
            : [...prevLikedUsers, user]
        );
        setLikesCount((prevLikesCount) =>
          like ? prevLikesCount - 1 : prevLikesCount + 1
        );
        setCommentLike({
          cid: id!,
          uid,
          mid,
          like: !like,
        }).then((res) => {
          const { error, data } = res;
          if (data) {
            setLike(data.setCommentLike?.likeStatus?.like!);
          }
        });
      }
    },
    [
      id,
      mid,
      type,
      uid,
      user,
      like,
      setLike,
      setLikedUser,
      setLikesCount,
      setCommentLike,
    ]
  );

  return (
    <CommentInterface
      className={className}
      subjectLike={subjectLike}
      type={type}
      commentedUser={loadedCommentedUser!}
      messageArray={mArray}
      time={time}
      likedUsers={likedUsers}
      commentOrReply={comment}
      like={like}
      likesCount={likesCount}
      responseFromReplyWindow={responseFromReplyWindow}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentCard);
