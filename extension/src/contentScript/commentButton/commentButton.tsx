import 'cqfill';

import {
  Provider,
  createClient,
  defaultExchanges,
  fetchExchange,
  subscriptionExchange,
} from 'urql';
import React, { useEffect, useState } from 'react';
import { Provider as ReduxProvider, batch } from 'react-redux';
import { darkTheme, lightTheme } from '../../theme/theme';
import {
  getPlayerViewElement,
  getVideoTitleFromNetflixWatch,
} from '../contentScript.utils';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChatWindow from '../createChatWindow/chatWindow';
import { CommentHeader } from './commentButton.styles';
import { GlobalStyles } from '../../theme/globalStyles';
import { GoCommentDiscussion } from 'react-icons/go';
import { MdChevronRight } from 'react-icons/md';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { colorLog } from '../../Utils/utilities';
import { createRoot } from 'react-dom/client';
import { createClient as createWSClient } from 'graphql-ws';
import { getStoredCheckedStatus } from '../../Utils/storage';
import { persistedFetchExchange } from '@urql/exchange-persisted-fetch';
import { retryExchange } from '@urql/exchange-retry';
import { sliceAddMovieName } from '../../redux/slices/movie/movieSlice';
import { sliceSetIsOpenChatWindow } from '../../redux/slices/settings/settingsSlice';
import { store } from '../../redux/store';
import { useUpdateMovieTitleMutation } from '../../generated/graphql';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});
const Loader = (chatElement: HTMLDivElement) => {
  const playerElement = getPlayerViewElement();
  const client = createClient({
    url: 'http://localhost:4000/graphql',
    exchanges: [
      ...defaultExchanges,
      subscriptionExchange({
        forwardSubscription: (operation) => ({
          subscribe: (sink) => ({
            unsubscribe: wsClient.subscribe(operation, sink),
          }),
        }),
      }),
      persistedFetchExchange({
        preferGetForPersistedQueries: true,
      }),
      retryExchange({
        retryIf: (error) => {
          return !!(error.graphQLErrors.length > 0 || error.networkError);
        },
      }),
      fetchExchange,
    ],
    requestPolicy: 'cache-and-network',
  });
  const existingChatWindow = document.getElementsByClassName('chat-interface');
  if (playerElement !== null && !existingChatWindow[0]) {
    colorLog('Creating new chat window');
    playerElement.appendChild(chatElement);
    createRoot(chatElement).render(
      <Provider value={client}>
        <ReduxProvider store={store}>
          <ChatWindow />
        </ReduxProvider>
      </Provider>
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

const CommentButton = () => {
  // Redux: App selectors.
  // Settings > openChatWindow, smoothWidth, chatWindowSize
  // User > uid, name
  const movieId = useAppSelector((state) => state.movie.mid);
  const movieName = useAppSelector((state) => state.movie.name);
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );
  const smoothWidth = useAppSelector((state) => state.settings.smoothWidth);
  const chatWindowSize = useAppSelector(
    (state) => state.settings.chatWindowSize
  );
  const currentPage = useAppSelector((state) => state.movie.currentPage);
  const lastPage = useAppSelector((state) => state.movie.lastPage);

  // GraphQL: updateMovie and movieComments hooks.
  const [updateMovieStatus, updateMovieTitle] = useUpdateMovieTitleMutation();

  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState React hook.
  // isVisible is used to toggle chat icon visibility.
  const [isVisible, setIsVisible] = useState<boolean>(true);

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

  useEffect(() => {
    // Adding the Interval to grab the video title from DOM
    let interval = setInterval(() => {
      let title = getVideoTitleFromNetflixWatch();
      if (title) {
        // Update movie name in the database only if the name is not available.
        if (!movieName && !updateMovieStatus.fetching) {
          updateMovieTitle({ mid: movieId, name: title }).then((res: any) => {
            dispatch(sliceAddMovieName({ movieId, title }));
            clearInterval(interval);
          });
        }
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, movieId, movieName, updateMovieStatus]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setTimeout(() => {
          let nComments = document.getElementById('NComments');
          if (nComments === null) {
            createChatWindow(chatWindowSize);
            dispatch(sliceSetIsOpenChatWindow(true));
          } else dispatch(sliceSetIsOpenChatWindow(!openChatWindow));
        }, 100);
      }}>
      {isVisible ? (
        <CommentHeader
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentButton;
