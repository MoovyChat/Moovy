import { Provider, createClient } from 'urql';
import {
  getIdFromNetflixURL,
  removeNodeFromDomById,
  setVideoFilters,
} from './contentScript.utils';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Start from './start';
import { colorLog } from '../Utils/utilities';
import { createRoot } from 'react-dom/client';
import { getStoredUserLoginDetails } from '../Utils/storage';
import { store } from '../redux/store';

const client = createClient({ url: 'http://localhost:4000/graphql' });
export const initiateContentScript = async () => {
  colorLog('Initiating content script');
  var reactApp = document.createElement('div');
  reactApp.id = 'chatIcon';

  document.body.appendChild(reactApp);
  document.body.style.setProperty('margin', '0');
  const boot = createRoot(reactApp);
  let movieId = getIdFromNetflixURL(window.location.href!);
  const userDetails = await getStoredUserLoginDetails();
  if (!userDetails) {
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
          );
        </ReduxProvider>
      </Provider>
    );
  }
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
