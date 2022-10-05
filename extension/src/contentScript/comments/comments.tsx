import React, { useCallback, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import CommentCard from '../commentCard/commentCard';
import { CommentInfo } from '../../Utils/interfaces';
import { CommentList } from './comments.styles';
import { ShowMoreComments } from '../chatBox/chatBox.styles';
import { sliceSetCurrentPage } from '../../redux/slices/movie/movieSlice';

type props = {
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
};
const Comments: React.FC<props> = ({ responseFromReplyWindow, type }) => {
  const commentsList = useAppSelector((state) => state.comments.comments);
  const { currentPage, lastPage } = useAppSelector((state) => state.movie!);
  const dispatch = useAppDispatch();
  return (
    <React.Fragment>
      {commentsList.map((comment) => (
        <CommentCard
          className='comment-card'
          key={comment.cid}
          comment={comment}
          responseFromReplyWindow={responseFromReplyWindow}
          type={type}
        />
      ))}

      {currentPage !== lastPage && (
        <ShowMoreComments
          onClick={() => {
            dispatch(sliceSetCurrentPage(currentPage! + 1));
          }}>
          show more comments
        </ShowMoreComments>
      )}
    </React.Fragment>
  );
};

export default Comments;
