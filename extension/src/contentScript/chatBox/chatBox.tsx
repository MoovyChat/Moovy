import { ChatBoxContainer, LoadMoreComments } from './chatBox.styles';
import React, { useEffect, useMemo, useRef } from 'react';
import {
  sliceCheckCommentsLoaded,
  sliceCheckNewCommentsLoaded,
} from '../../redux/slices/loading/loadingSlice';
import {
  sliceSetCommentsLoadedCount,
  sliceSetFetchingComments,
  sliceSetLastPage,
  sliceSetLoadNew,
  sliceSetNewlyLoadedTimeStamp,
  sliceSetPastLoadedCount,
  sliceSetTotalCommentsOfTheMovie,
} from '../../redux/slices/movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useFetchNewCommentsMutation,
  useGetCommentsOfTheMovieMutation,
} from '../../generated/graphql';

import { COMMENT } from '../../redux/actionTypes';
import { CommentInfo } from '../../Utils/interfaces';
import Comments from '../comments/comments';
import Loading from '../../components/loading/loading';
import SmileyWindow from '../../components/smileyWindow/smileyWindow';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { sliceComment } from '../../redux/slices/comment/commentSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
};
const ChatBox: React.FC<props> = ({ responseFromReplyWindow, type }) => {
  const mid = useAppSelector((state) => state.movie.id);
  const initialLoadedTime = useAppSelector(
    (state) => state.movie.newlyLoadedCommentTimeStamp
  );
  const currentPage = useAppSelector((state) => state.movie.currentPage);
  const newlyLoadedTimeSTamp = useAppSelector(
    (state) => state.movie.newlyLoadedCommentTimeStamp
  );
  const isTextAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const isTextAreaClicked = useAppSelector(
    (state) => state.textArea.isTextAreaClicked
  );
  const [_result, fetchNewComments] = useFetchNewCommentsMutation();

  const [{ fetching }, getMovieComments] = useGetCommentsOfTheMovieMutation();
  const comments = useAppSelector((state) => state.comments.comments);
  const totalCommentsCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  const pastLoadedCommentCount = useAppSelector(
    (state) => state.movie.pastLoadedCount
  );
  const lastPage = useAppSelector((state) => state.movie.lastPage);
  const dispatch = useAppDispatch();
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const isNewCommentsLoaded = useAppSelector(
    (state) => state.loading.isNewCommentsLoaded
  );
  // New comments
  const getComments = () => {
    fetchNewComments({
      mid,
      time: initialLoadedTime
        ? initialLoadedTime
        : new Date().getTime().toString(),
    }).then((res) => {
      const { data, error } = res;
      if (error) colorLog(error);
      if (data) {
        const newComments = data.fetchNewComments;
        if (newComments.length === 0) {
          colorLog('Unable to load new Comments');
          return;
        }
        dispatch(sliceSetNewlyLoadedTimeStamp(new Date().getTime().toString()));
        if (newComments && newComments.length !== 0) {
          dispatch(
            sliceComment({
              payload: newComments,
              type: COMMENT.ADD_COMMENTS_FIRST,
            })
          );
          dispatch(sliceCheckNewCommentsLoaded(true));
          dispatch(sliceSetPastLoadedCount(newComments.length));
        } else {
          colorLog('Failed to load new comments');
        }
      }
    });
  };

  // Load default  movie comments.
  useMemo(() => {
    getMovieComments({
      limit: 25,
      mid,
      page: currentPage,
      time: newlyLoadedTimeSTamp,
    }).then((res) => {
      const { data, error } = res;
      if (error) colorLog(error.message);
      const commentsFromData = data?.getCommentsOfTheMovie?.comments!;
      const totalCommentCount = data?.getCommentsOfTheMovie?.totalCommentCount!;
      if (currentPage === 1) {
        const pastLoadedCount = data?.getCommentsOfTheMovie?.pastLoadedCount!;
        const lastPage =
          data && data.getCommentsOfTheMovie
            ? data.getCommentsOfTheMovie.lastPage!
            : 1;
        dispatch(sliceSetNewlyLoadedTimeStamp(new Date().getTime().toString()));
        // Redux: Add last comments last page.
        dispatch(sliceSetLastPage(lastPage));
        // Redux: Add the loaded total comments before the initial time stamp.
        dispatch(sliceSetPastLoadedCount(pastLoadedCount));
      }

      batch(() => {
        // Redux: Add total comment count of the movie.
        if (totalCommentsCount)
          dispatch(sliceSetTotalCommentsOfTheMovie(totalCommentCount));
        // Redux: Add the initial 25 comments of the movie.
        dispatch(
          sliceComment({
            payload: commentsFromData,
            type: COMMENT.ADD_ALL_COMMENTS,
          })
        );
        // Redux: Add total loaded comments.
        dispatch(
          sliceSetCommentsLoadedCount(
            commentsFromData ? commentsFromData!.length : 0
          )
        );
        dispatch(sliceCheckCommentsLoaded(true));
        dispatch(sliceSetFetchingComments(fetching));
      });
    });
  }, [currentPage, mid]);

  // Handle scroll position.
  useEffect(() => {
    if (comments && comments.length > 0) {
      const scrollPos = sessionStorage.getItem('scrollPosition');
      if (scrollPos) {
        if (chatBoxRef && chatBoxRef.current) {
          chatBoxRef.current.scrollTo(0, parseInt(scrollPos, 10));
        }
        sessionStorage.removeItem('scrollPos');
      }
    }
  }, [comments]);

  const loadNewComments = () => {
    if (chatBoxRef && chatBoxRef.current) {
      chatBoxRef.current.scrollBy({
        top: chatBoxRef.current.clientHeight * (-10 * lastPage!),
        behavior: 'smooth',
      });
      sessionStorage.setItem('scrollPosition', '0');
    }
    dispatch(sliceSetLoadNew(new Date().getTime()));
    getComments();
  };

  return (
    <ChatBoxContainer
      id='chat-box-container'
      className='chat-box-container'
      isTextAreaClicked={isTextAreaFocussed}>
      {totalCommentsCount! > pastLoadedCommentCount! ? (
        <LoadMoreComments
          className='load-new'
          onClick={(e) => {
            e.stopPropagation();
            loadNewComments();
          }}>
          <p>
            Show {totalCommentsCount! - pastLoadedCommentCount!} new comments
          </p>
        </LoadMoreComments>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <div
        className='comment-section'
        ref={chatBoxRef}
        onScroll={() =>
          sessionStorage.setItem(
            'scrollPosition',
            `${chatBoxRef!.current!.scrollTop!}`
          )
        }>
        <Comments
          responseFromReplyWindow={responseFromReplyWindow}
          type={type}
          chatBoxRef={chatBoxRef}
        />
      </div>
      <SmileyWindow />
    </ChatBoxContainer>
  );
};

export default withUrqlClient(urqlClient)(ChatBox);
