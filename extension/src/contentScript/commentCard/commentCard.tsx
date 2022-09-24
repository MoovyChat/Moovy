import { CommentInfo, User, textMap } from '../../Utils/interfaces';
import React, {
  Dispatch,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Unsubscribe,
  arrayRemove,
  arrayUnion,
  increment,
} from 'firebase/firestore';
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

import CommentInterface from '../commentInterface/commentInterface';
import _ from 'lodash';
import { msgPlace } from '../../Utils/enums';
import { textMapTypes } from '../../constants';
import { useGetCommentedUserQuery } from '../../generated/graphql';

interface props {
  comment: CommentInfo;
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
  let allReplies = useAppSelector((state) => state.replies.replies);
  const [time, setTime] = useState<string>('');
  const [like, setLike] = useState<boolean>(false);
  const addedReply = useAppSelector((state) => state.replies.added);
  const modifiedReply = useAppSelector((state) => state.replies.modifed);
  const [loadedCommentedUser, setCommentedUser] = useState<User>();
  const [mArray, setMessageArray] = useState<textMap[]>([]);
  const loggedUserId = useAppSelector((state) => state.user.uid);
  const dispatch = useAppDispatch();
  const ref = useRef<any>();

  //TODO: Get only the logged in user replies initially.
  //allReplies array will have only the replies made by the logged in user.
  useEffect(() => {
    let unSub: Unsubscribe;
    if (comment.cid) {
      // getUserRepliesForComment(
      //   comment,
      //   userId,
      //   dispatch,
      //   allReplies,
      //   true
      // ).then((res) => {
      //   //Update replies count to redux
      //   unSub = res;
      // });
    }
    return () => {
      if (unSub) unSub();
    };
  }, [addedReply, modifiedReply]);

  ref.current = () => {
    setLike(false);
    comment.likes?.forEach((like: string) => {
      console.log(comment.message, like, loggedUserId, comment.likes);
      if (like === loggedUserId) {
        setLike(true);
      }
    });
  };

  useEffect(() => {
    ref.current();
  }, [comment.likes?.length]);

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
    setLike(!like);
    if (!like) {
      if (type === 'comment') {
        // TODO: Update the comment in database.
        // updateComment(
        //   comment?.cid!,
        //   { likes: arrayUnion(userId), likesCount: increment(1) },
        //   comment?.movieId!
        // ).then(() => {
        //   // Update the comment in redux
        //   dispatch(
        //     sliceAddToLikes({
        //       commentId: comment.cid,
        //       userId: userId,
        //     })
        //   );
        // });
        // Update the user's profile with the comments.
      } else if (type === 'reply') {
        // TODO: Update the reply in database.
        // updateReply(comment?.rid!, comment?.parentComment!, comment?.movieId!, {
        //   likes: arrayUnion(userId),
        //   likesCount: increment(1),
        // });
      }
    } else {
      // TODO: Remove comment from redux and firebase.
      if (type === 'comment') {
        // updateComment(
        //   comment?.cid!,
        //   { likes: arrayRemove(userId), likesCount: increment(-1) },
        //   comment?.movieId!
        // ).then(() => {
        //   dispatch(
        //     sliceRemoveFromLikes({
        //       commentId: comment.cid,
        //       userId: userId,
        //     })
        //   );
        // });
        // TODO: Remove the comment from user's profile..
      } else if (type === 'reply') {
        // updateReply(comment?.rid!, comment?.parentComment!, comment?.movieId!, {
        //   likes: arrayRemove(userId),
        //   likesCount: increment(-1),
        // });
      }
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
      commentOrReply={comment}
      like={like}
      responseFromReplyWindow={responseFromReplyWindow}
    />
  );
};

export default CommentCard;
