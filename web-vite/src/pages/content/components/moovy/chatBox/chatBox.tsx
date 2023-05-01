/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useRef } from "react";
import { ChatBoxContainer, LoadMoreComments } from "./chatBox.styles";
import { withUrqlClient } from "next-urql";
import Comments from "../comments/comments";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CommentInfo } from "../../../../../helpers/interfaces";
import { useFetchNewCommentsMutation } from "../../../../../generated/graphql";
import {
  sliceSetLoadNew,
  sliceSetNewlyLoadedTimeStamp,
  sliceSetPastLoadedCount,
} from "../../../../redux/slices/movie/movieSlice";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import SmileyWindow from "../../../../../components/smiley-window/smileyWindow";
import IFrameComponent from "../../../../../components/iframe-component/iframeComponent";

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
  const isTextAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const [, fetchNewComments] = useFetchNewCommentsMutation();
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
      const { data } = res;
      if (data) {
        const newComments = data.fetchNewComments;
        if (newComments.length === 0) {
          // console.log('Unable to load new Comments');
          return;
        }
        pastLoadedCommentCount &&
          dispatch(sliceSetPastLoadedCount(newComments.length));
        dispatch(sliceSetNewlyLoadedTimeStamp(new Date().getTime().toString()));
      }
    });
  };

  const loadNewComments = () => {
    if (chatBoxRef && chatBoxRef.current && lastPage) {
      chatBoxRef.current.scrollBy({
        top: chatBoxRef.current.clientHeight * (-10 * lastPage),
        behavior: "smooth",
      });
      sessionStorage.setItem("scrollPosition", "0");
    }
    dispatch(sliceSetLoadNew(new Date().getTime()));
    getComments();
  };

  return (
    <ChatBoxContainer
      id="chat-box-container"
      className="chat-box-container"
      isTextAreaClicked={isTextAreaFocussed}
    >
      {totalCommentsCount &&
      pastLoadedCommentCount &&
      totalCommentsCount > pastLoadedCommentCount ? (
        <LoadMoreComments
          accentColor={accentColor}
          className="load-new"
          onClick={(e) => {
            e.stopPropagation();
            loadNewComments();
          }}
        >
          <p>Show {totalCommentsCount - pastLoadedCommentCount} new comments</p>
        </LoadMoreComments>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <div
        className="comment-section"
        ref={chatBoxRef}
        onScroll={() =>
          chatBoxRef.current &&
          sessionStorage.setItem(
            "scrollPosition",
            `${chatBoxRef.current.scrollTop}`
          )
        }
      >
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
