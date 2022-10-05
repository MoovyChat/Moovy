import {
  ChatTitle,
  ChatWindowParent,
  DragBar,
  Perimeter,
  TextAreaContainer,
} from './chatInterface.styles';
import { CommentInfo, User } from '../../Utils/interfaces';
import { MdStar, MdStarOutline } from 'react-icons/md';
import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetMovieFavCountQuery,
  useUpdateUserMovieStatusMutation,
} from '../../generated/graphql';

import { CSSTransition } from 'react-transition-group';
import ChatBox from '../../contentScript/chatBox/chatBox';
import ChatStats from '../../contentScript/chatStats/chatStats';
import MessageBox from '../../contentScript/messageBox/messageBox';
import PopSlide from '../popSlide/popSlide';
import { colorLog } from '../../Utils/utilities';
import { getPlayerViewElement } from '../../contentScript/contentScript.utils';
import { sliceSetSmoothWidth } from '../../redux/slices/settings/settingsSlice';

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
  // Redux: App selectors.
  const isEditNameBoxOpen = useAppSelector(
    (state) => state.loading.isEditNameBoxOpen
  );
  const movie = useAppSelector((state) => state.movie);
  const isPopSlideOpen = useAppSelector(
    (state) => state.settings.isPopSlideOpen
  );
  // GraphQL: Custom Hooks.
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const [{ error, fetching, data }, _query] = useGetMovieFavCountQuery({
    variables: {
      mid: movie.mid,
    },
  });

  // Redux: App dispatch.
  const dispatch = useAppDispatch();

  // React:useState hooks.
  const [delayed, setDelayed] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(false);
  const [replyWindowResponse, setReplyClickResponse] = useState<CommentInfo>();
  const [viewStyles, setViewStyles] = useState<boolean>(false);
  const [favCount, SetFavCount] = useState<number>(0);
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
      const { favorite } = data?.updateUserMovieStats!;
      if (favorite) setFav(favorite);
    });
  }, []);

  // Get Movie Fav count.
  useEffect(() => {
    if (error) {
      colorLog(error);
      return;
    }
    if (!fetching && data) {
      SetFavCount(data.getMovieFavoriteCount ? data.getMovieFavoriteCount : 0);
    }
  }, [fetching]);

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
      let animationRate = chatWinSize * 0.09;

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

      // Update the callback key
      if (callbackKeyRef.current !== null)
        callbackKeyRef.current = requestAnimationFrame(update);
    };

    // Start the animation loop
    update();
  }, [openChatWindow, chatWindowSize]);

  useEffect(() => {
    colorLog('chatInterface.tsx');
  }, []);

  return (
    <Perimeter ref={divRef}>
      <DragBar className='drag-bar' ref={dragRef}></DragBar>
      <ChatWindowParent
        className='chat-interface'
        openChatWindow={openChatWindow!}
        onClick={(e) => e.stopPropagation()}
        width={chatWindowSize}>
        <React.Fragment>
          <ChatTitle className='chat-title'>
            <div className='logo'></div>
            <div className='title'>
              <div className='set'>{movie.name}</div>
            </div>
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
              <div className='fav-count'>
                <div className='box'>{favCount}</div>
              </div>
              {!fav ? (
                <MdStarOutline className='star' size={20} />
              ) : (
                <MdStar className='star' size={20} color='gold' />
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
          <PopSlide />
        </CSSTransition>
      </ChatWindowParent>
    </Perimeter>
  );
};

export default ChatInterface;
