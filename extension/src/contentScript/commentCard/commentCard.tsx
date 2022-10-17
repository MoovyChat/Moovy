import React, { MouseEvent, useEffect, useMemo, useState } from 'react';
import { User, textMap } from '../../Utils/interfaces';
import {
  colorLog,
  getFormattedWordsArray,
  getTimeFrame,
} from '../../Utils/utilities';
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
import { sliceComment } from '../../redux/slices/comment/commentSlice';
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
  const [likedUsers, setLikedUser] = useState<User[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const [likesCount, setLikesCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const [_likeRes, setCommentLike] = useSetCommentLikeMutation();

  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: id!,
    },
  });

  const [commentLikesSub] = useCommentLikesSubscription({
    variables: {
      cid: id!,
    },
  });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) colorLog(error);
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      dispatch(
        sliceComment({
          payload: { _users, id },
          type: COMMENT.ADD_TO_COMMENT_LIKES,
        })
      );
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
    if (error) colorLog(error);
    if (!fetching && data) {
      const commentLikesCount = data.commentLikesUpdate?.likesCount;
      setLikesCount(commentLikesCount!);
      const _users = data.commentLikesUpdate?.likes;
      dispatch(
        sliceComment({
          payload: { _users, id },
          type: COMMENT.ADD_TO_COMMENT_LIKES,
        })
      );
      setLikedUser(_users);
    }
  }, [commentLikesSub.fetching]);

  useEffect(() => {
    let interval: any;
    let getTime = () => {
      setTime(getTimeFrame(createdAt!));
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
    if (error) colorLog(error);
    if (!fetching && data) {
      const commentData = data.getCommentedUser;
      if (!commentData) colorLog('Comment data is not available');
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
          let res = getFormattedWordsArray(
            text,
            msgPlace.COMMENT_CARD,
            dispatch,
            comment.commentedUserId!,
            comment.createdAt!
          );
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
        let res = getFormattedWordsArray(
          finalPhrase,
          msgPlace.COMMENT_CARD,
          dispatch,
          comment.commentedUserId!,
          comment.createdAt!
        );
        msgArray = _.concat(msgArray, res);
      }
    }

    setMessageArray(msgArray);
  }, [message]);

  // Update likes
  const subjectLike = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (type === 'comment') {
      // Instant update to user.
      setLike(!like);
      setLikedUser(
        like ? likedUsers.filter((u) => u.id !== uid) : [...likedUsers, user]
      );
      setLikesCount(like ? likesCount - 1 : likesCount + 1);
      // Deal with backend
      setCommentLike({
        cid: id!,
        uid,
        mid,
        like: !like,
      }).then((res) => {
        const { error, data } = res;
        if (error) colorLog(error);
        setLike(data?.setCommentLike?.likeStatus?.like!);
        setLikedUser(
          !like
            ? likedUsers.filter((u) => u.id !== uid)
            : [...likedUsers, data?.setCommentLike?.user!]
        );
        setLikesCount(
          data?.setCommentLike?.likeStatus.like!
            ? likesCount + 1
            : likesCount - 1
        );
      });
    }
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
      commentOrReply={comment}
      like={like}
      likesCount={likesCount}
      responseFromReplyWindow={responseFromReplyWindow}
    />
  );
};

export default withUrqlClient(urqlClient)(CommentCard);
