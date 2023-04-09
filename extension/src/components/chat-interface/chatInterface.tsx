import './fonts.scss';

import {
  ChatWindowParent,
  DragBar,
  NoUserScreen,
  Perimeter,
  TextAreaContainer,
} from './chatInterface.styles';
import { CommentInfo, User } from '../../Utils/interfaces';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import ChatBox from '../../contentScript/chatBox/chatBox';
import ChatStats from '../../contentScript/chatStats/chatStats';
import ChatTitle from '../chat-title/chatTitle';
import ErrorPage from '../error-page/errorPage';
import LogoLoading from '../logo-loading/logoLoading';
import MessageBox from '../../contentScript/messageBox/messageBox';
import PopSlide from '../pop-slide/popSlide';
import { Profile } from '../../generated/graphql';
import Toast from '../toast/toast';
import ToxicityMessage from '../toxicity-message/toxicityMessage';
import UpdateProfile from '../../contentScript/update-profile/updateProfile';
import { getPlayerViewElement } from '../../contentScript/contentScript.utils';
import { sliceSetChatWindowSize } from '../../redux/slices/settings/settingsSlice';
import { sliceSetIsProfileNeedsToBeUpdated } from '../../redux/slices/misc/miscSlice';
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
  profile: Profile | null | undefined;
  profileFetching: boolean;
};
const ChatInterface: React.FC<props> = ({
  user,
  dragRef,
  widthRef,
  videoWidthRef,
  openChatWindow,
  profile,
  profileFetching,
}) => {
  let commentIcon = document.getElementById('comment-header');
  const { movie, loading, misc, settings } = useAppSelector((state) => state);
  const font = misc.font;
  const { networkError, isMovieLoaded, isMovieInsertionFinished } = loading;
  const { enableBackground } = misc;
  const { isPopSlideOpen } = settings;
  let chatWindowSize = settings.chatWindowSize || '30';
  let thumbs = movie.thumbs!;
  const divRef = useRef<HTMLDivElement | null>(null);
  let videoElem = getPlayerViewElement();
  const isProfileNeedsToBeUpdated = useAppSelector(
    (state) => state.misc.isProfileNeedsToBeUpdated
  );
  let windowTransition = `cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;`;
  const dispatch = useAppDispatch();
  const position = useMousePosition();

  // React:useState hooks.
  const [replyWindowResponse, setReplyClickResponse] = useState<CommentInfo>();
  const [display, setDisplay] = useState<boolean>(true);

  // Set the response to the global text area.
  // const responseFromReplyWindow = (comment: CommentInfo) => {
  //   setReplyClickResponse(comment);
  // };

  useEffect(() => {
    if (!profileFetching) {
      if (profile === null) dispatch(sliceSetIsProfileNeedsToBeUpdated(true));
      else if (profile?.fullname === '') {
        dispatch(sliceSetIsProfileNeedsToBeUpdated(true));
      } else if (profile?.gender === '') {
        dispatch(sliceSetIsProfileNeedsToBeUpdated(true));
      } else dispatch(sliceSetIsProfileNeedsToBeUpdated(false));
    }
  }, [profile, profileFetching]);

  const responseFromReplyWindow = useCallback((comment: CommentInfo) => {
    setReplyClickResponse(comment);
  }, []);

  // Animations on initial button click.
  useEffect(() => {
    if (!divRef || !commentIcon || !videoElem) return;
    if (openChatWindow) {
      commentIcon!.style.cssText = `
        right: ${chatWindowSize}%;
        transition: all 1s ${windowTransition};
      `;
      divRef.current!.style.cssText = `
        max-width: ${chatWindowSize || 30}%;
      `;
      videoElem.style.cssText = `
        max-width: ${100 - parseInt(chatWindowSize) || 70}% !important;
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
  }, [openChatWindow, divRef?.current, commentIcon, videoElem]);

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

  // Animation detection

  useEffect(() => {
    setDisplay((prevDisplay) => {
      if (!openChatWindow) return false;
      return true;
    });
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
      font={font}
      enableBackground={enableBackground.toString()}
      ref={divRef}>
      <DragBar className='drag-bar' ref={dragRef}></DragBar>
      {!isMovieLoaded || !isMovieInsertionFinished || networkError ? (
        <LogoLoading />
      ) : !user ? (
        <ErrorPage
          text={`Login using the extension, and click on Refetch`}></ErrorPage>
      ) : profileFetching ? (
        <LogoLoading />
      ) : isProfileNeedsToBeUpdated ? (
        <UpdateProfile />
      ) : (
        <ChatWindowParent
          className='chat-interface'
          onClick={(e) => e.stopPropagation()}
          windowOpened={display}>
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
            <ToxicityMessage />
            <ChatBox
              responseFromReplyWindow={responseFromReplyWindow}
              type='comment'
            />
          </React.Fragment>
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

export default withUrqlClient(urqlClient)(React.memo(ChatInterface));
