import {
  getDomain,
  getIdFromNetflixURL,
  getVideoElement,
} from './contentScript.utils';
import {
  getStoredPauseStatus,
  getStoredUserLoginDetails,
  getStoredVolumeStatus,
  setStoredPauseStatus,
  setStoredVolumeStatus,
} from '../Utils/storage';
import { initiateContentScript, removeAllNodes } from './contentScript';

import { User } from '../Utils/interfaces';
import { colorLog } from '../Utils/utilities';
import { domains } from '../constants';

function main() {
  let lastUrl = window.location.href;
  let observer = new MutationObserver(() => {
    const url = window.location.href;
    // colorLog(url, lastUrl);
    if (url !== lastUrl) {
      // URL IS CHANGED
      colorLog('FETCHED NEW URL');
      observer.disconnect();
      // THIS IS WORKING FOR INSIDE NETFLIX URL CHANGE/SWITCHING TO NEXT EPISODE
      getUserRemoveNodeInitiateContentScript();
      lastUrl = url;
    }
  });
  observer.observe(document, { subtree: true, childList: true });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!sender.tab && request.type === 'refresh') {
      // Netflix related stuff.
      getUserRemoveNodeInitiateContentScript();
      sendResponse({
        data: 'Request fulfilled',
      });
    }
    return true;
  });

  // Netflix related stuff.
  const loadOnReload = () => {
    const performanceEntryList = performance.getEntriesByType(
      'navigation'
    ) as PerformanceEntryList;
    const performanceNavigationTiming =
      performanceEntryList[0] as PerformanceNavigationTiming;
    const type = performanceNavigationTiming.type;
    // User logged in and reloaded the page.
    if (type === 'reload') {
      //(TODO:) Pass a variable to let the content script to no need to re-load the info.

      // Check if the user is logged in. Run the script only if the user is logged in.
      let currentURL = window.location.href;
      let domain = getDomain(currentURL);
      domain === domains.NETFLIX &&
        getStoredUserLoginDetails().then((res) => {
          if (res.id) {
            if (
              document.readyState.toString() === 'ready' ||
              document.readyState.toString() === 'complete'
            ) {
              getUserRemoveNodeInitiateContentScript();
            } else {
              document.onreadystatechange = function () {
                if (
                  document.readyState.toString() === 'ready' ||
                  document.readyState.toString() === 'complete'
                ) {
                  getUserRemoveNodeInitiateContentScript();
                }
              };
            }
          }
        });
    }
  };

  loadOnReload();

  // (Netflix) Check when the user clicks on login from 'loginComponent'
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!sender.tab && request.type === 'videoPlay') {
      getVideoElement().then((res) => {
        const videoElem = res[0];
        getStoredPauseStatus().then((res) => {
          if (res) videoElem.pause();
          else videoElem.play();
        });
      });
    } else if (!sender.tab && request.type === 'videoVolume') {
      getVideoElement().then((res) => {
        const videoElem = res[0];
        getStoredVolumeStatus().then((res) => {
          if (res) videoElem.volume = 0;
          else videoElem.volume = 1;
        });
      });
    } else if (!sender.tab && request.type === 'pip') {
      getVideoElement().then((res) => {
        const videoElem = res[0];

        videoElem.requestPictureInPicture();
      });
    } else if (!sender.tab && request.user) {
      const { id } = request.user as User;
      if (id) getUserRemoveNodeInitiateContentScript();
      sendResponse({
        data: 'Request fulfilled',
      });
      return true;
    } else if (!sender.tab && request.type === 'logout') {
      removeAllNodes();
      sendResponse({
        data: 'Nodes removed',
      });
    } else if (!sender.tab && request.type === 'REFRESH_SCRIPT') {
      // RESTART SCRIPT WHEN THE NEW URL IS AVAILABLE.
      colorLog('REFRESHING SCRIPTS');
      getUserRemoveNodeInitiateContentScript();
    }
  });

  type NotPresentStrategy = 'error' | 'ignore';

  function getElementByDataUIA(tag: string): HTMLElement;
  function getElementByDataUIA(tag: string, IfNotPresent: 'error'): HTMLElement;
  function getElementByDataUIA(
    tag: string,
    IfNotPresent: 'ignore'
  ): HTMLElement | null;
  function getElementByDataUIA(tag: string, IfNotPresent?: NotPresentStrategy) {
    const element = document.querySelector(`[data-uia=${tag}]`);
    if (IfNotPresent === 'error' && !element)
      throw new Error('No Element Found');
    return element;
  }

  const getUserRemoveNodeInitiateContentScript = () => {
    let url = window.location.href;
    const netflixId = getIdFromNetflixURL(url);
    if (!netflixId) return;
    const domain = getDomain(url);
    domain === domains.NETFLIX &&
      getStoredUserLoginDetails().then((res) => {
        // If user exists no need to re-render the page
        if (res.id) {
          // Removing the previously rendered chatIcon node on every URL Change.
          removeAllNodes();

          // if the user do not exist, then wait until user login to listen
          // request.
          if (document.readyState !== 'complete') {
            setTimeout(getUserRemoveNodeInitiateContentScript, 1000);
          }
          // Set the store to default state.
          if (netflixId) {
            setStoredVolumeStatus(true);
            setStoredPauseStatus(false);
            initiateContentScript();
            colorLog('LOG:CONTENT SCRIPT INITIATED');
          }
          // Reset the netflix video player.
          let watchVideo = getElementByDataUIA('watch-video');
          const watchVideoPlayerView = getElementByDataUIA(
            'watch-video-player-view-minimized'
          );
          watchVideo.style.cssText = `
          max-width: 100%; !important;
      `;
          watchVideoPlayerView.style.cssText = `
          max-width: 100%; !important;
      `;
        }
      });
  };
}

main();
