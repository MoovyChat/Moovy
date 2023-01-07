import {
  Comment,
  Reply,
  useDeleteCommentMutation,
  useDeleteReplyMutation,
} from '../../generated/graphql';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { DeleteCommentParent } from './deleteComment.styles';
import { batch } from 'react-redux';

type props = {
  type: string;
};
const DeleteComment: React.FC<props> = ({ type }) => {
  const popup = useAppSelector((state) => state.popup);
  const [comment, setComment] = useState<Comment | null>(null);
  const dispatch = useAppDispatch();
  const [reply, setReply] = useState<Reply | null>(null);
  const [, deleteComment] = useDeleteCommentMutation();
  const [, deleteReply] = useDeleteReplyMutation();
  useEffect(() => {
    if (type === 'comment') setComment(popup.popupData as Comment);
    else if (type === 'reply') setReply(popup.popupData as Reply);
  }, [type]);

  const deleteCommentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (type === 'comment') {
      deleteComment({ cid: comment?.id!, mid: comment?.movieId! }).then(
        (res) => {
          const { data, error } = res;
          if (error) console.log(error);
          if (data) {
            batch(() => {
              dispatch(sliceSetIsPopupOpened(false));
              dispatch(sliceSetSelectedElement(''));
              dispatch(sliceSetPopupData(null));
            });
          }
        }
      );
    } else {
      if (type === 'reply') {
        deleteReply({ rid: reply?.id! }).then((res) => {
          const { data, error } = res;
          if (error || !data) console.log(error);
          if (data) {
            batch(() => {
              dispatch(sliceSetIsPopupOpened(false));
              dispatch(sliceSetSelectedElement(''));
              dispatch(sliceSetPopupData(null));
            });
          }
        });
      }
    }
  };

  const cancelHandler = () => {
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData(null));
    });
  };

  return (
    <DeleteCommentParent>
      <div className='heading'>
        Delete {type === 'comment' ? 'Comment' : 'Reply'}?
      </div>
      <div className='sub'>
        The comment will be deleted permanently from your profile, the feed for
        all the users, that follows you.
      </div>
      <div className='delete-cancel'>
        <div className='del' onClick={deleteCommentHandler}>
          Delete
        </div>
        <div className='cancel' onClick={cancelHandler}>
          Cancel
        </div>
      </div>
    </DeleteCommentParent>
  );
};

export default DeleteComment;
