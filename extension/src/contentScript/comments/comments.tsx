import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import CommentCard from '../commentCard/commentCard';
import { CommentInfo } from '../../Utils/interfaces';
import Loading from '../../components/loading/loading';
import { ShowMoreComments } from '../chatBox/chatBox.styles';
import { ViewportList } from 'react-viewport-list';
import { sliceSetCurrentPage } from '../../redux/slices/movie/movieSlice';

type props = {
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
  chatBoxRef: React.MutableRefObject<HTMLDivElement | null>;
};
const Comments: React.FC<props> = ({
  responseFromReplyWindow,
  type,
  chatBoxRef,
}) => {
  const commentsList = useAppSelector((state) => state.comments.comments);
  const commentsLoaded = useAppSelector(
    (state) => state.loading.isCommentsLoaded
  );
  const { currentPage, lastPage } = useAppSelector((state) => state.movie!);
  const dispatch = useAppDispatch();
  const listRef = useRef<any>(null);
  if (!commentsLoaded) return <Loading />;
  return (
    <React.Fragment>
      {commentsList.length !== 0 && (
        <ViewportList
          ref={listRef}
          viewportRef={chatBoxRef}
          items={commentsList}>
          {(comment, index) =>
            comment && (
              <CommentCard
                className='comment-card'
                key={comment.id}
                comment={comment}
                responseFromReplyWindow={responseFromReplyWindow}
                type={type}
              />
            )
          }
        </ViewportList>
      )}
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
