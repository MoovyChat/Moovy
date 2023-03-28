import {
  Comment,
  useGetCommentsOfTheMovieQuery,
} from '../../generated/graphql';
import React, { useEffect, useRef, useState } from 'react';
import {
  sliceSetNewlyLoadedTimeStamp,
  sliceSetPastLoadedCount,
  sliceSetTotalCommentsOfTheMovie,
} from '../../redux/slices/movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import CommentCard from '../commentCard/commentCard';
import { CommentInfo } from '../../Utils/interfaces';
import EmptyPage from '../empty-page/emptyPage';
import Loading from '../../components/loading/loading';
import { ShowMoreComments } from '../chatBox/chatBox.styles';
import { ViewportList } from 'react-viewport-list';
import { isServerSide } from '../../constants';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

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
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [comments, setComments] = useState<Comment[]>([]);
  const pastLoadedCommentCount = useAppSelector(
    (state) => state.movie.pastLoadedCount
  );
  const movie = useAppSelector((state) => state.movie);
  const [{ data, fetching, error }] = useGetCommentsOfTheMovieQuery({
    variables: {
      mid: movie.id,
      page: page,
    },
  });

  const dispatch = useAppDispatch();
  const listRef = useRef<any>(null);
  useEffect(() => {
    if (!fetching && data) {
      const commentsFromData = data?.getCommentsOfTheMovie
        ?.comments! as Comment[];
      const totalCommentCount = data?.getCommentsOfTheMovie?.totalCommentCount!;
      setComments(() => commentsFromData);
      dispatch(sliceSetTotalCommentsOfTheMovie(totalCommentCount));
      if (page === 1 && pastLoadedCommentCount === 0) {
        // Redux: Add the loaded total comments before the initial time stamp.
        dispatch(sliceSetPastLoadedCount(totalCommentCount));
        setLastPage(data.getCommentsOfTheMovie?.lastPage!);
      }
    }
  }, [data, fetching, error]);

  if (fetching) {
    return <Loading />;
  }

  if (comments.length <= 0) {
    return <EmptyPage msg='Feel free to share your thoughts!' />;
  }

  return (
    <React.Fragment>
      {comments.length !== 0 && (
        <ViewportList ref={listRef} viewportRef={chatBoxRef} items={comments}>
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
      {page !== lastPage && (
        <ShowMoreComments
          onClick={() => {
            setPage((p) => p + 1);
          }}>
          show more comments
        </ShowMoreComments>
      )}
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(Comments);
