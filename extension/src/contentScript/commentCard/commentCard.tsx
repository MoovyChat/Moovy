import { CommentInfo, User, textMap } from '../../Utils/interfaces';
import React, {
  Dispatch,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  colorLog,
  getFormattedWordsArray,
  getTimeFrame,
} from '../../Utils/utilities';
import {
  sliceAddToLikes,
  sliceRemoveFromLikes,
} from '../../redux/slices/comment/commentSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useCommentLikesSubscription,
  useGetCommentLikesQuery,
  useGetCommentedUserQuery,
  useGetIsUserLikedCommentQuery,
  useSetCommentLikeMutation,
} from '../../generated/graphql';

import { AnyAction } from 'redux';
import CommentInterface from '../commentInterface/commentInterface';
import _ from 'lodash';
import { msgPlace } from '../../Utils/enums';
import { textMapTypes } from '../../constants';

interface props {
  comment: any;
  responseFromReplyWindow: (comment: any) => void;
  type: string;
  className: any;
}

const CommentCard: React.FC<props> = ({
  comment,
  responseFromReplyWindow,
  type,
  className,
}) => {
  const { cid, message, createdAt } = comment;
  const [commentedUser, _q] = useGetCommentedUserQuery({
    variables: { cid: cid! },
  });
  const uid = useAppSelector((state) => state.user.uid);
  const mid = useAppSelector((state) => state.movie.mid);
  const [time, setTime] = useState<string>('');
  const [likedUsers, setLikedUser] = useState<any>([]);
  const [like, setLike] = useState<boolean>(false);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const [likesCount, setLikesCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const [_likeRes, setCommentLike] = useSetCommentLikeMutation();
  const [userLikeInfo, _isUserLiked] = useGetIsUserLikedCommentQuery({
    variables: {
      cid: cid!,
      uid,
    },
  });

  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: cid!,
    },
  });

  const [commentLikesSub] = useCommentLikesSubscription({
    variables: {
      cid: cid!,
    },
  });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) colorLog(error);
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      dispatch(sliceAddToLikes({ _users, cid }));
      setLikedUser(_users);
      setLikesCount(_count);
    }
  }, [commentLikeCountQuery.fetching]);

  useEffect(() => {
    const { fetching, error, data } = userLikeInfo;
    if (error) colorLog(error);
    if (!fetching && data) {
      const isLike = data.getIsUserLikedComment!;
      setLike(isLike);
    }
  }, [userLikeInfo.fetching]);

  //Set Comment likes count
  useEffect(() => {
    const { data, fetching, error } = commentLikesSub;
    if (error) colorLog(error);
    if (!fetching && data) {
      const commentLikesCount = data.commentLikesUpdate?.likesCount;
      setLikesCount(commentLikesCount!);
      const commentLikes = data.commentLikesUpdate?.likes;
      colorLog('sub', commentLikes);
      dispatch(sliceAddToLikes({ commentLikes, cid }));
      setLikedUser(commentLikes);
    }
  }, [commentLikesSub]);

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
  useEffect(() => {
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
      setCommentLike({
        cid: cid!,
        uid,
        mid,
        like: !like,
      }).then((res) => {
        const { error, data } = res;
        if (error) colorLog(error);
        setLike(data?.getCommentStats?.like!);
      });
    } else if (type === 'reply') {
      // TODO: Update the reply in database.
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

export default CommentCard;
