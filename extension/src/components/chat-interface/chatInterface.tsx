import {
  ChatWindowParent,
  DragBar,
  NoUserScreen,
  Perimeter,
  TextAreaContainer,
} from './chatInterface.styles';
import { CommentInfo, User } from '../../Utils/interfaces';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import ChatBox from '../../contentScript/chatBox/chatBox';
import ChatStats from '../../contentScript/chatStats/chatStats';
import ChatTitle from '../chat-title/chatTitle';
import ErrorPage from '../error-page/errorPage';
import LogoLoading from '../logo-loading/logoLoading';
import MessageBox from '../../contentScript/messageBox/messageBox';
import PopSlide from '../pop-slide/popSlide';
import Toast from '../toast/toast';
import { getPlayerViewElement } from '../../contentScript/contentScript.utils';
import { sliceSetChatWindowSize } from '../../redux/slices/settings/settingsSlice';
import { sliceSetLoadingText } from '../../redux/slices/loading/loadingSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { useMousePosition } from '../../contentScript/hooks/useMouseMove';
import { withUrqlClient } from 'next-urql';

type props = {
  user: User;
  divRef?: React.MutableRefObject<HTMLDivElement | null>;
  dragRef?: React.MutableRefObject<HTMLDivElement | null>;
  widthRef: React.MutableRefObject<number>;
  videoWidthRef: React.MutableRefObject<number>;
  openChatWindow: boolean;
};
const ChatInterface: React.FC<props> = ({
  user,
  divRef,
  dragRef,
  widthRef,
  videoWidthRef,
  openChatWindow,
}) => {
  let commentIcon = document.getElementById('comment-header');
  const movie = useAppSelector((state) => state.movie);
  const networkError = useAppSelector((state) => state.loading.networkError);
  const isMovieLoaded = useAppSelector((state) => state.loading.isMovieLoaded);
  const isMovieInserted = useAppSelector(
    (state) => state.loading.isMovieInsertionFinished
  );
  let videoElem = getPlayerViewElement();
  const enableBackground = useAppSelector(
    (state) => state.misc.enableBackground
  );
  let windowTransition = `cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;`;
  let thumbs = useAppSelector((state) => state.movie.thumbs!);
  const dispatch = useAppDispatch();
  const position = useMousePosition();
  // Redux: App selectors.
  const chatWindowSize = useAppSelector(
    (state) => state.settings.chatWindowSize
  );
  const isPopSlideOpen = useAppSelector(
    (state) => state.settings.isPopSlideOpen
  );

  // React:useState hooks.
  const [replyWindowResponse, setReplyClickResponse] = useState<CommentInfo>();
  const [display, setDisplay] = useState<boolean>(true);

  // Set the response to the global text area.
  const responseFromReplyWindow = (comment: CommentInfo) => {
    setReplyClickResponse(comment);
  };

  // Drag the chat window
  useMemo(() => {
    let onMouseMoveEventListener: any;
    let onMouseUpEventListener: any;
    let dragging = false;
    onMouseUpEventListener = (event: MouseEvent) => {
      event.stopPropagation();
      dragging = false;
      document.body!.style.cursor = 'default';
      let defaultChatWidth = 100 - videoWidthRef.current;
      divRef!.current!.style.cssText = `
          max-width: ${defaultChatWidth}%;
          transition: max-width 1s ${windowTransition};
      `;
      commentIcon!.style.cssText = `
          right: ${defaultChatWidth}%;
          opacity: 1;
          transition: right 1s ${windowTransition};
      `;
      document.body.removeEventListener('mousemove', onMouseMoveEventListener);
      document.body.removeEventListener('mouseup', onMouseUpEventListener);
    };
    if (dragRef!.current) {
      dragRef!.current!.onmousedown = (event) => {
        event.stopPropagation();
        dragging = true;
        onMouseMoveEventListener = (e: MouseEvent) => {
          e.stopPropagation();
          if (dragging) {
            setDisplay(true);
            document.body!.style.cursor = 'col-resize';
            let bodyWidth = document.body!.clientWidth;
            if (divRef) {
              let newWidth = bodyWidth - e.pageX - 6;
              // Sets the chat window size.
              let newChatWindowSize = (newWidth / bodyWidth) * 100;
              if (newChatWindowSize < 30) newChatWindowSize = 30;
              dispatch(sliceSetChatWindowSize(newChatWindowSize));
              divRef!.current!.style.cssText = `
                max-width: ${newChatWindowSize}%;
                transition: none;
              `;
              commentIcon!.style.cssText = `
                right: ${newChatWindowSize}%;
                transition: none;
              `;
              if (videoElem) {
                widthRef.current = (newWidth / bodyWidth) * 100;
                videoWidthRef.current = 100 - widthRef.current;
                if (videoWidthRef.current > 70) videoWidthRef.current = 70;
                videoElem.style.cssText = `
                  max-width: ${videoWidthRef.current}% !important;
                `;
              }
            }
          }
        };
        onMouseMoveEventListener = document.body.addEventListener(
          'mousemove',
          onMouseMoveEventListener,
          { passive: true }
        );
        document.body.addEventListener('mouseup', onMouseUpEventListener, {
          once: true,
          passive: true,
        });
      };
    }
  }, [position.x, position.y]);

  // Animations on initial button click.
  useEffect(() => {
    if (!divRef || !commentIcon || !videoElem) return;
    if (openChatWindow) {
      commentIcon!.style.cssText = `
        right: ${chatWindowSize}%;
        transition: all 1s ${windowTransition};
      `;
      divRef.current!.style.cssText = `
        max-width: ${chatWindowSize}%;
      `;
      videoElem.style.cssText = `
        max-width: ${100 - parseInt(chatWindowSize)}% !important;
        transition: max-width 1s ${windowTransition};
      `;
    } else {
      commentIcon!.style.cssText = `
        right: 0%;
        transition: all 1s ${windowTransition};
      `;
      divRef.current!.style.cssText = `
        max-width: 0%;
      `;
      videoElem.style.cssText = `
        max-width: 100% !important;
        transition: max-width 1s ${windowTransition};
      `;
    }
  }, [openChatWindow]);

  // Animation detection
  useEffect(() => {
    setDisplay(false);
    let timeout = setTimeout(() => {
      if (!openChatWindow) setDisplay(false);
      else setDisplay(true);
      clearTimeout(timeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [openChatWindow]);

  useEffect(() => {
    let loadingText = '';
    if (!isMovieLoaded)
      loadingText = movie.name
        ? `Loading Title "${movie.name}"`
        : 'Unable to fetch Title.';
    dispatch(sliceSetLoadingText(loadingText));
  }, [isMovieLoaded]);

  return (
    <Perimeter
      className='chat-perimeter'
      thumbs={thumbs}
      enableBackground={enableBackground}
      ref={divRef}
      chatWindowSize={chatWindowSize}
      openChatWindow={openChatWindow!}>
      <DragBar className='drag-bar' ref={dragRef}></DragBar>
      {!isMovieLoaded || !isMovieInserted || networkError ? (
        <LogoLoading />
      ) : (
        <ChatWindowParent
          className='chat-interface'
          openChatWindow={openChatWindow!}
          chatWindowSize={chatWindowSize}
          onClick={(e) => e.stopPropagation()}
          windowOpened={display}>
          {user ? (
            <React.Fragment>
              <ChatTitle />
              <ChatStats />
              <TextAreaContainer
                className='text-area-container'
                onClick={(e) => e.stopPropagation()}>
                <MessageBox
                  replyWindowResponse={replyWindowResponse}
                  setReplyClickResponse={setReplyClickResponse}
                />
              </TextAreaContainer>
              <ChatBox
                responseFromReplyWindow={responseFromReplyWindow}
                type='comment'
              />
            </React.Fragment>
          ) : (
            <ErrorPage
              text={`Login using the extension, and click on Refetch`}></ErrorPage>
          )}

          <CSSTransition
            in={isPopSlideOpen}
            classNames='fade'
            timeout={300}
            unmountOnExit>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <PopSlide />
            </div>
          </CSSTransition>
          <Toast />
        </ChatWindowParent>
      )}
    </Perimeter>
  );
};

export default withUrqlClient(urqlClient)(ChatInterface);