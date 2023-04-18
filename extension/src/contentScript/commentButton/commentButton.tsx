/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  getIdFromNetflixURL,
  getPlayerViewElement,
} from '../contentScript.utils';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';

import ChatWindow from '../createChatWindow/chatWindow';
import { CommentHeader } from './commentButton.styles';
import { EXT_URL } from '../../constants';
import { GoCommentDiscussion } from 'react-icons/go';
import { Provider as ReduxProvider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { sliceSetIntervalIds } from '../../redux/slices/misc/miscSlice';
import { sliceSetIsOpenChatWindow } from '../../redux/slices/settings/settingsSlice';
import { store } from '../../redux/store';
import { urqlClient } from '../../Utils/urqlClient';
import { useInsertMovie } from '../hooks/useInsertMovie';
import { useInsertVisitedMutation } from '../../generated/graphql';
import { v4 } from 'uuid';
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

const createChatWindow = () => {
  const chatElement = document.createElement('div');
  const chatElementId = 'NComments';
  chatElement.id = chatElementId;
  chatElement.className = chatElementId;
  chatElement.style.cssText = `
      background-color: transparent !important;
    `;
  Loader(chatElement);
};

type props = {
  visible: boolean;
};
const CommentButton: React.FC<props> = ({ visible }) => {
  // Redux: App selectors.
  // Settings > openChatWindow, smoothWidth, chatWindowSize
  // User > uid, name
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const oldIntervalIds = useAppSelector((state) => state.misc.intervalIds);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [intervalIds, setIntervalIds] = useState<Array<NodeJS.Timeout>>([]);
  const user = useAppSelector((state) => state.user);
  const [, insertVisited] = useInsertVisitedMutation();
  const smoothWidth = useAppSelector((state) => state.settings.smoothWidth);
  const movieId = useAppSelector((state) => state.movie.id);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();
  useEffect(() => {
    oldIntervalIds.forEach((interval) => clearInterval(interval));
  }, []);
  // React: useState React hook.
  // isVisible is used to toggle chat icon visibility.

  useInsertMovie(movieId);
  // Logs user view history.
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalIds.forEach((id) => clearInterval(id));
      setIntervalIds([]);
    }
    intervalIds.forEach((id) => clearInterval(id));
    setIntervalIds([]);
    if (!user) return;
    const sessionId = v4();
    const visitInterval = setInterval(async () => {
      const url = window.location.href;
      const netflixId = await getIdFromNetflixURL(url);
      chrome.runtime.onMessage.addListener((request, sender) => {
        if (!sender.tab && request.type === 'SET_MOVIE_ID') {
          clearInterval(visitInterval);
          intervalId && clearInterval(intervalId);
          intervalIds.forEach((id) => clearInterval(id));
          setIntervalIds([]);
        }
      });
      if (netflixId === null) {
        clearInterval(visitInterval);
        intervalId && clearInterval(intervalId);
        intervalIds.forEach((id) => clearInterval(id));
        setIntervalIds([]);
      }
      if (movieId && user.id && netflixId)
        insertVisited({
          uid: user.id,
          mid: netflixId + '',
          insertVisitedId: sessionId,
          time: 5,
        }).then((res) => {
          const { error } = res;
          if (error) {
            clearInterval(visitInterval);
          }
        });
      else clearInterval(visitInterval);
    }, 300000);
    setIntervalIds((prevIds) => [...prevIds, visitInterval]);
    setIntervalId(visitInterval);
    dispatch(sliceSetIntervalIds(visitInterval));
    () => {
      intervalId && clearInterval(intervalId);
      clearInterval(visitInterval);
    };
  }, [user?.id, movieId]);

  if (!movieId) return <GoCommentDiscussion size={40} />;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setTimeout(() => {
          const nComments = document.getElementById('NComments');
          if (nComments === null) {
            dispatch(sliceSetIsOpenChatWindow(true));
            createChatWindow();
          } else dispatch(sliceSetIsOpenChatWindow(!openChatWindow));
        }, 100);
      }}
    >
      <CommentHeader
        accentColor={accentColor}
        isVisible={visible}
        id="comment-header"
        className="comment-header"
        chatWindowSize={smoothWidth + ''}
        openChatWindow={openChatWindow}
      >
        {openChatWindow ? (
          <div className="logo">
            <img
              src={`${EXT_URL}/moovy/moovyIcon.webp`}
              alt="logo"
              width="25"
              height="25"
            />
          </div>
        ) : (
          <GoCommentDiscussion size={40} fill={accentColor} />
        )}
      </CommentHeader>
    </div>
  );
};

export default withUrqlClient(urqlClient)(CommentButton);
