import { Provider, createClient } from 'urql';
import {
  getDomain,
  getElementByDataUIA,
  getIdFromNetflixURL,
  removeNodeFromDomById,
  setVideoFilters,
} from './contentScript.utils';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Start from './start';
import { colorLog } from '../Utils/utilities';
import { createRoot } from 'react-dom/client';
import { domains } from '../constants';
import { getStoredUserLoginDetails } from '../Utils/storage';
import { store } from '../redux/store';

const client = createClient({ url: 'http://localhost:4000/graphql' });
export const initiateContentScript = async () => {
  colorLog('Initiating content script');
  const url = window.location.href!;
  const CHAT_ICON = 'chatIcon';
  var reactApp = document.createElement('div');
  reactApp.id = CHAT_ICON;
  let movieId = getIdFromNetflixURL(url);
  if (movieId === '') return;
  const domain = getDomain(url);
  if (domain !== domains.NETFLIX) return;
  // Attach the chat icon when the video is loaded.
  let interval = setInterval(async () => {
    let elem = getElementByDataUIA('watch-video');
    if (elem) {
      const elemChildNodes = elem.childNodes;
      elemChildNodes.forEach((node) => {
        const nodeElem = node as HTMLDivElement;
        if (nodeElem.id === CHAT_ICON) {
          elem.removeChild(nodeElem);
        }
      });
      elem.appendChild(reactApp);
      document.body.style.setProperty('margin', '0');

      const boot = createRoot(reactApp);

      const userDetails = await getStoredUserLoginDetails();
      console.log('Checking content script');
      if (userDetails.id === '') {
        colorLog('user not found! terminating the app');
        return;
      }
      if (movieId === '') {
        colorLog('ERR: FAILED TO GET THE VIDEO ID');
        boot.render(<React.Fragment></React.Fragment>);
      } else {
        colorLog('Content script Initiated, chat Icon added');
        boot.render(
          <Provider value={client}>
            <ReduxProvider store={store}>
              <Start video_id={movieId} userDetails={userDetails} />
            </ReduxProvider>
          </Provider>
        );
      }
      clearInterval(interval);
    }
  }, 500);
};

export const removeAllNodes = () => {
  try {
    removeNodeFromDomById('chatIcon');

    let windowNodes = document.getElementsByClassName('NComments');
    while (windowNodes.length > 0) {
      windowNodes[0]?.parentNode!.removeChild(windowNodes[0]);
      colorLog('Log: Chat window removed');
    }

    const videoParents = document.getElementsByClassName(
      'watch-video--player-view'
    ) as HTMLCollection;
    const element = videoParents[0] as HTMLElement;
    element.style.width = '100%';
    colorLog('Log: Video element width is restored');
  } catch (e) {
    colorLog('No video element found');
  }
};
