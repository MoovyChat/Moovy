import {
  ChatBoxContainer,
  LoadMoreComments,
  NoCommentBox,
  ShowMoreComments,
} from './chatBox.styles';
import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import CommentCard from '../commentCard/commentCard';
import { CommentInfo } from '../../Utils/interfaces';
import Loading from '../../components/loading/loading';
import { sliceLoadMore } from '../../redux/slices/movie/movieSlice';

type props = {
  responseFromReplyWindow: (comment: CommentInfo) => void;
  type: string;
};
const ChatBox: React.FC<props> = ({ responseFromReplyWindow, type }) => {
  const comments = useAppSelector((state) => state.comments.comments);
  const totalCommentsCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  const fetching = useAppSelector((state) => state.movie.fetchingComments);
  const loadedCommentsCount = comments.length;
  const [clickedShowMoreComments, setClickedShowMoreComments] =
    useState<boolean>(false);
  const _lastTimeStamp = useAppSelector(
    (state) => state.movie.lastCommentLoadedTimeStamp
  );
  const _movieId = useAppSelector((state) => state.movie.mid);
  const _dispatch = useAppDispatch();
  const loadMoreComments = () => {
    _dispatch(sliceLoadMore(''));
  };
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <ChatBoxContainer
      ref={chatBoxRef}
      onScroll={() =>
        sessionStorage.setItem(
          'scrollPosition',
          `${chatBoxRef!.current!.scrollTop!}`
        )
      }>
      <React.Fragment>
        {totalCommentsCount > loadedCommentsCount && (
          <LoadMoreComments
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <p>show {totalCommentsCount - loadedCommentsCount} more comments</p>
          </LoadMoreComments>
        )}
        {comments!.length > 0 ? (
          comments!.map((comment) => (
            <CommentCard
              key={comment.cid}
              comment={comment}
              responseFromReplyWindow={responseFromReplyWindow}
              type={type}
            />
          ))
        ) : type === 'comment' ? (
          <NoCommentBox>
            <h4>No Comments</h4>
            <p>Make your first comment!</p>
          </NoCommentBox>
        ) : (
          <></>
        )}
        {!fetching ? (
          totalCommentsCount - loadedCommentsCount !== 0 && (
            <ShowMoreComments onClick={loadMoreComments}>
              show {Math.min(totalCommentsCount - loadedCommentsCount, 25)} more
              comments
            </ShowMoreComments>
          )
        ) : (
          <Loading />
        )}
      </React.Fragment>
    </ChatBoxContainer>
  );
};

export default ChatBox;
