import React, { useEffect, useRef, useState } from "react";

import CommentCard from "../commentCard/commentCard";

import EmptyPage from "../empty-page/emptyPage";

import { ShowMoreComments } from "../chatBox/chatBox.styles";
import { ViewportList } from "react-viewport-list";

import { withUrqlClient } from "next-urql";
import Loading from "../../../../../components/loading/loading";
import {
  Comment,
  useGetCommentsOfTheMovieQuery,
} from "../../../../../generated/graphql";
import { CommentInfo } from "../../../../../helpers/interfaces";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  sliceSetTotalCommentsOfTheMovie,
  sliceSetPastLoadedCount,
} from "../../../../redux/slices/movie/movieSlice";

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
  const listRef = useRef(null);
  useEffect(() => {
    if (!fetching && data) {
      const _data = data.getCommentsOfTheMovie;
      if (_data) {
        const commentsFromData = _data.comments as Comment[];
        const totalCommentCount = _data.totalCommentCount;
        setComments(() => commentsFromData);
        dispatch(sliceSetTotalCommentsOfTheMovie(totalCommentCount));
        if (page === 1 && pastLoadedCommentCount === 0) {
          // Redux: Add the loaded total comments before the initial time stamp.
          dispatch(sliceSetPastLoadedCount(totalCommentCount));
          setLastPage(_data.lastPage);
        }
      }
    }
  }, [data, fetching, error]);

  if (fetching) {
    return <Loading />;
  }

  if (comments.length <= 0) {
    return <EmptyPage msg="Feel free to share your thoughts!" />;
  }

  return (
    <React.Fragment>
      {comments.length !== 0 && (
        <ViewportList ref={listRef} viewportRef={chatBoxRef} items={comments}>
          {(comment, index) =>
            comment && (
              <CommentCard
                className="comment-card"
                key={`${comment.id}${index}`}
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
          }}
        >
          show more comments
        </ShowMoreComments>
      )}
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(Comments);
