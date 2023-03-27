import { ChatBoxContainer, LoadMoreComments } from './chatBox.styles';
import React, { useEffect, useMemo, useRef } from 'react';
import {
  sliceSetCommentsLoadedCount,
  sliceSetCurrentPage,
  sliceSetFetchingComments,
  sliceSetLastPage,
  sliceSetLoadNew,
  sliceSetNewlyLoadedTimeStamp,
  sliceSetPastLoadedCount,
  sliceSetTotalCommentsOfTheMovie,
} from '../../redux/slices/movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CommentInfo } from '../../Utils/interfaces';
import Comments from '../comments/comments';
import IFrameComponent from '../../components/iframe-component/iframeComponent';
import SmileyWindow from '../../components/smiley-window/smileyWindow';
import { batch } from 'react-redux';
import { sliceCheckCommentsLoaded } from '../../redux/slices/loading/loadingSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { useFetchNewCommentsMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

type props = {
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
};
const ChatBox = React.memo<props>(({ responseFromReplyWindow, type }) => {
  const mid = useAppSelector((state) => state.movie.id);
  const initialLoadedTime = useAppSelector(
    (state) => state.movie.newlyLoadedCommentTimeStamp
  );
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const currentPage = useAppSelector((state) => state.movie.currentPage);
  const newlyLoadedTimeSTamp = useAppSelector(
    (state) => state.movie.newlyLoadedCommentTimeStamp
  );
  const isTextAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const [_result, fetchNewComments] = useFetchNewCommentsMutation();
  const totalCommentsCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  const pastLoadedCommentCount = useAppSelector(
    (state) => state.movie.pastLoadedCount
  );
  const lastPage = useAppSelector((state) => state.movie.lastPage);
  const dispatch = useAppDispatch();
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  // New comments
  const getComments = () => {
    fetchNewComments({
      mid,
      time: initialLoadedTime
        ? initialLoadedTime
        : new Date().getTime().toString(),
    }).then((res) => {
      const { data, error } = res;
      if (error) console.log(error);
      if (data) {
        const newComments = data.fetchNewComments;
        if (newComments.length === 0) {
          console.log('Unable to load new Comments');
          return;
        }
        pastLoadedCommentCount &&
          dispatch(sliceSetPastLoadedCount(newComments.length));
        dispatch(sliceSetNewlyLoadedTimeStamp(new Date().getTime().toString()));
      }
    });
  };

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
          accentColor={accentColor}
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
      <IFrameComponent />
    </ChatBoxContainer>
  );
});

export default withUrqlClient(urqlClient)(ChatBox);
