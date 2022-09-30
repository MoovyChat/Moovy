import React, { MouseEvent, useEffect, useState } from 'react';
import { ReplyInfo, User, textMap } from '../../Utils/interfaces';
import {
  colorLog,
  getFormattedWordsArray,
  getTimeFrame,
} from '../../Utils/utilities';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetIsUserLikedReplyQuery,
  useGetRepliedUserQuery,
  useGetReplyLikesQuery,
  useSetReplyLikeMutation,
} from '../../generated/graphql';

import CommentInterface from '../commentInterface/commentInterface';
import _ from 'lodash';
import { msgPlace } from '../../Utils/enums';
import { textMapTypes } from '../../constants';

interface props {
  reply: ReplyInfo;
  responseFromReplyWindow: (comment: any) => void;
  type: string;
  className: any;
}

const ReplyCard: React.FC<props> = ({
  reply,
  responseFromReplyWindow,
  type,
  className,
}) => {
  const { rid, message, createdAt } = reply;
  const [commentedUser, _q] = useGetRepliedUserQuery({
    variables: { rid: rid! },
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
  const [_likeRes, setReplyLike] = useSetReplyLikeMutation();
  const [userLikeInfo, _isUserLiked] = useGetIsUserLikedReplyQuery({
    variables: {
      rid: rid!,
      uid,
    },
  });

  const [commentLikeCountQuery, _executeQuery] = useGetReplyLikesQuery({
    variables: {
      rid: rid!,
    },
  });

  // TODO: Use subscription if necessary in future
  //   const [commentLikesSub] = useCommentLikesSubscription({
  //     variables: {
  //       cid: cid!,
  //     },
  //   });

  useEffect(() => {
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) colorLog(error);
    if (!fetching && data) {
      const _count = data.getReplyLikes?.likesCount!;
      const _users = data.getReplyLikes?.likes;
      //TODO:   dispatch(sliceAddToLikes({ _users, rid }));
      setLikedUser(_users);
      setLikesCount(_count);
    }
  }, [commentLikeCountQuery.fetching]);

  useEffect(() => {
    const { fetching, error, data } = userLikeInfo;
    if (error) colorLog(error);
    if (!fetching && data) {
      const isLike = data.getIsUserLikedReply!;
      setLike(isLike);
    }
  }, [userLikeInfo.fetching]);

  //TODO: Set Comment likes count subscription if needed in future.
  //   useEffect(() => {
  //     const { data, fetching, error } = commentLikesSub;
  //     if (error) colorLog(error);
  //     if (!fetching && data) {
  //       const commentLikesCount = data.commentLikesUpdate?.likesCount;
  //       setLikesCount(commentLikesCount!);
  //       const commentLikes = data.commentLikesUpdate?.likes;
  //       colorLog('sub', commentLikes);
  //       dispatch(sliceAddToLikes({ commentLikes, cid }));
  //       setLikedUser(commentLikes);
  //     }
  //   }, [commentLikesSub]);

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
      const commentData = data.getRepliedUser;
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
            reply.repliedUserUid!,
            reply.createdAt!
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
          reply.repliedUserUid!,
          reply.createdAt!
        );
        msgArray = _.concat(msgArray, res);
      }
    }

    setMessageArray(msgArray);
  }, [message]);

  // Update likes
  const subjectLike = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (type === 'reply') {
      setReplyLike({
        rid: rid!,
        uid,
        like: !like,
      }).then((res) => {
        const { error, data } = res;
        if (error) colorLog(error);
        setLike(data?.getReplyStats?.like!);
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
      commentOrReply={reply}
      like={like}
      likesCount={likesCount}
      responseFromReplyWindow={responseFromReplyWindow}
    />
  );
};

export default ReplyCard;
