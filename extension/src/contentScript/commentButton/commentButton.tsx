import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useCallback, useEffect, useState } from 'react';

import ChatWindow from '../createChatWindow/chatWindow';
import { CommentHeader } from './commentButton.styles';
import { GoCommentDiscussion } from 'react-icons/go';
import { MdChevronRight } from 'react-icons/md';
import { Provider as ReduxProvider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { getPlayerViewElement } from '../contentScript.utils';
import { getStoredCheckedStatus } from '../../Utils/storage';
import { sliceSetIsOpenChatWindow } from '../../redux/slices/settings/settingsSlice';
import { store } from '../../redux/store';
import { urqlClient } from '../../Utils/urqlClient';
import { useInsertMovie } from '../hooks/useInsertMovie';
import { withUrqlClient } from 'next-urql';

const Loader = (chatElement: HTMLDivElement) => {
  const playerElement = getPlayerViewElement();
  const existingChatWindow = document.getElementsByClassName('chat-interface');
  if (playerElement !== null && !existingChatWindow[0]) {
    playerElement.appendChild(chatElement);
    createRoot(chatElement).render(
      <ReduxProvider store={store}>
        <ChatWindow />
      </ReduxProvider>
    );
  }
};

export const createChatWindow = (_chatWindowSize: string) => {
  let chatElement = document.createElement('div');
  let chatElementId = 'NComments';
  chatElement.id = chatElementId;
  chatElement.className = chatElementId;
  chatElement.style.cssText = `
      background-color: transparent !important;
    `;
  Loader(chatElement);
};

type props = {};
const CommentButton: React.FC<props> = ({}) => {
  // Redux: App selectors.
  // Settings > openChatWindow, smoothWidth, chatWindowSize
  // User > uid, name
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );

  const smoothWidth = useAppSelector((state) => state.settings.smoothWidth);
  const chatWindowSize = useAppSelector(
    (state) => state.settings.chatWindowSize
  );
  const movieId = useAppSelector((state) => state.movie.id);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState React hook.
  // isVisible is used to toggle chat icon visibility.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useInsertMovie(movieId);

  // Logs user view history.
  // useEffect(() => {
  //   let sessionId = v4();
  //   let visitInterval = setInterval(() => {
  //     if (movieId && userId)
  //       insertVisited({
  //         uid: userId,
  //         mid: movieId,
  //         insertVisitedId: sessionId,
  //         time: 5,
  //       }).then((res) => {
  //         const { data, error } = res;
  //         if (error) {
  //           clearInterval(visitInterval);
  //           console.log(error);
  //         }
  //         if (data) {
  //           const _data = data.insertVisited;
  //         }
  //       });
  //     else clearInterval(visitInterval);
  //   }, 300000);
  //   () => clearInterval(visitInterval);
  // }, [userId, movieId]);

  useEffect(() => {
    // Listen for the activation of comment icon when user is logged in for the
    // first time when playing the video. TOGGLE COMMENT ICON
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (!sender.tab && request.checked === true) {
        getStoredCheckedStatus().then((res) => {
          setIsVisible(res);
        });
        sendResponse({ data: `Comment status changed` });
        return true;
      }
    });
    // Checking for isCommentIconEnabled without the listener.
    getStoredCheckedStatus().then((res) => {
      setIsVisible(res);
    });
    return () => {};
  }, [setIsVisible]);

  if (!movieId) return <GoCommentDiscussion size={40} />;
  if (!isVisible) return <></>;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setTimeout(() => {
          let nComments = document.getElementById('NComments');
          if (nComments === null) {
            dispatch(sliceSetIsOpenChatWindow(true));
            createChatWindow(chatWindowSize);
          } else dispatch(sliceSetIsOpenChatWindow(!openChatWindow));
        }, 100);
      }}>
      <CommentHeader
        isVisible={true}
        id='comment-header'
        className='comment-header'
        chatWindowSize={smoothWidth + ''}
        openChatWindow={openChatWindow}>
        {openChatWindow ? (
          <MdChevronRight size={40} />
        ) : (
          <GoCommentDiscussion size={40} />
        )}
      </CommentHeader>
    </div>
  );
};

export default withUrqlClient(urqlClient)(CommentButton);
