import {
  ChatTitle,
  ChatWindowParent,
  DragBar,
  SettingsScreen,
  TextAreaContainer,
} from './chatInterface.styles';
import { CommentInfo, User, globalUIStyles } from '../../Utils/interfaces';
import { MdStar, MdStarOutline } from 'react-icons/md';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChatBox from '../../contentScript/chatBox/chatBox';
import ChatStats from '../../contentScript/chatStats/chatStats';
import EditUserName from '../editUserName/editUserName';
import Loading from '../loading/loading';
import MessageBox from '../../contentScript/messageBox/messageBox';
import VideoStyles from '../../contentScript/videoStyles/videoStyles';
import { colorLog } from '../../Utils/utilities';
import { getPlayerViewElement } from '../../contentScript/contentScript.utils';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { sliceCheckEditBoxOpen } from '../../redux/slices/loading/loadingSlice';
import { sliceSetSmoothWidth } from '../../redux/slices/settings/settingsSlice';
import { useUpdateUserMovieStatusMutation } from '../../generated/graphql';

type props = {
  user: User;
  divRef?: React.MutableRefObject<HTMLDivElement | null>;
  dragRef?: React.MutableRefObject<HTMLDivElement | null>;
  widthRef: React.MutableRefObject<number>;
  videoWidthRef: React.MutableRefObject<number>;
  chatWindowSize: string;
  openChatWindow: boolean;
};
const ChatInterface: React.FC<props> = ({
  user,
  divRef,
  dragRef,
  widthRef,
  videoWidthRef,
  chatWindowSize,
  openChatWindow,
}) => {
  // GraphQL: Custom Hooks.
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();

  // Redux: App selectors.
  const isEditNameBoxOpen = useAppSelector(
    (state) => state.loading.isEditNameBoxOpen
  );
  const movie = useAppSelector((state) => state.movie);

  // Redux: App dispatch.
  const dispatch = useAppDispatch();

  // React:useState hooks.
  const [delayed, setDelayed] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(false);
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const [replyWindowResponse, setReplyClickResponse] = useState<CommentInfo>();
  const [viewStyles, setViewStyles] = useState<boolean>(false);

  // React: useRef hook.
  const callbackKeyRef = useRef<any>();

  // Update Movie Favorite on the initial load.
  useEffect(() => {
    updateUserLikeFavorite({
      uid: user?.uid!,
      mid: movie.mid,
      options: {},
    }).then((response) => {
      const { data, error } = response;
      if (error) colorLog(error);
      colorLog(data);
      const { favorite } = data?.updateUserMovieStats!;
      if (favorite) setFav(favorite);
    });
  }, []);

  // Get global styles.
  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  // Set the response to the global text area.
  const responseFromReplyWindow = (comment: CommentInfo) => {
    setReplyClickResponse(comment);
  };

  // This code is run every time the component is rendered.
  useEffect(() => {
    cancelAnimationFrame(callbackKeyRef.current);
    callbackKeyRef.current = -1;

    const update = () => {
      let chatWinSize = parseInt(chatWindowSize);
      let animationRate = chatWinSize * 0.1;

      if (openChatWindow) {
        widthRef.current += animationRate;
        if (widthRef.current > chatWinSize) widthRef.current = chatWinSize;
        videoWidthRef.current -= animationRate;
        if (videoWidthRef.current < 100 - chatWinSize)
          videoWidthRef.current = 100 - chatWinSize;
      } else {
        widthRef.current -= animationRate;
        if (widthRef.current < 0) widthRef.current = 0;
        videoWidthRef.current += animationRate;
        if (videoWidthRef.current > 100) videoWidthRef.current = 100;
      }
      dispatch(sliceSetSmoothWidth(widthRef.current));

      if (!openChatWindow && videoWidthRef.current > 99.5) {
        console.log('Window closed');
        videoWidthRef.current = 100;
        callbackKeyRef.current = null;
        cancelAnimationFrame(callbackKeyRef.current);
      } else if (
        openChatWindow &&
        widthRef.current + 0.5 > parseInt(chatWindowSize)
      ) {
        widthRef.current = parseInt(chatWindowSize);
        console.log('Window opened');
        callbackKeyRef.current = null;
        cancelAnimationFrame(callbackKeyRef.current);
      }

      let videoPlayerElement = getPlayerViewElement();
      // Update the div in the DOM
      if (divRef?.current && videoPlayerElement) {
        divRef.current.style.width = `${widthRef.current}%`;
        videoPlayerElement.style!.width = `${videoWidthRef.current}%`;
      }
      if (dragRef && divRef) {
        dragRef.current!.style.left = `${
          divRef?.current?.getBoundingClientRect().left! - 4
        }px`;
      }

      // Update the callback key
      if (callbackKeyRef.current !== null)
        callbackKeyRef.current = requestAnimationFrame(update);
    };

    // Start the animation loop
    update();
  }, [openChatWindow, chatWindowSize]);

  // Chat window content will be disappeared when chatWindow is toggled.
  useLayoutEffect(() => {
    if (openChatWindow) {
      setTimeout(() => {
        setDelayed(true);
      }, 900);
    } else {
      setDelayed(false);
    }
  }, [openChatWindow]);

  return (
    <React.Fragment>
      <DragBar className='drag-bar' ref={dragRef}></DragBar>
      <ChatWindowParent
        className='chat-interface'
        ref={divRef}
        openChatWindow={openChatWindow!}
        styles={globalStyles!}
        onClick={(e) => e.stopPropagation()}
        width={chatWindowSize}>
        {isEditNameBoxOpen && (
          <React.Fragment>
            {' '}
            <div
              className='overlay'
              onClick={(e) => {
                e.stopPropagation();
                dispatch(sliceCheckEditBoxOpen(false));
              }}></div>
            <EditUserName></EditUserName>
          </React.Fragment>
        )}
        {delayed ? (
          <React.Fragment>
            <ChatTitle className='chat-title'>
              <div className='title'>{movie.name}</div>
              <div
                className='icon'
                onClick={(e) => {
                  e.stopPropagation();
                  updateUserLikeFavorite({
                    uid: user.uid,
                    mid: movie.mid,
                    options: {
                      favorite: !fav,
                    },
                  }).then((response) => {
                    const { data, error } = response;
                    if (error) colorLog(error);
                    const { favorite } = data?.updateUserMovieStats!;
                    colorLog(favorite);
                    setFav(favorite!);
                  });
                }}>
                {!fav ? (
                  <MdStarOutline size={20} />
                ) : (
                  <MdStar size={20} color='gold' />
                )}
              </div>
            </ChatTitle>
            <ChatStats setViewStyles={setViewStyles} viewStyles={viewStyles} />
            <TextAreaContainer
              className='text-area-container'
              onClick={(e) => e.stopPropagation()}>
              <MessageBox
                replyWindowResponse={replyWindowResponse}
                setReplyClickResponse={setReplyClickResponse}
              />
            </TextAreaContainer>
            <div className='chat-box-container'>
              <ChatBox
                responseFromReplyWindow={responseFromReplyWindow}
                type='comment'
              />
            </div>
            {viewStyles ? (
              <SettingsScreen className='settings-screen'>
                <VideoStyles setViewStyles={setViewStyles} />
              </SettingsScreen>
            ) : (
              <React.Fragment></React.Fragment>
            )}{' '}
          </React.Fragment>
        ) : (
          <Loading />
        )}
      </ChatWindowParent>
    </React.Fragment>
  );
};

export default ChatInterface;
