import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../Utils/storage';

import { User } from '../Utils/interfaces';
import { getIdFromNetflixURL } from '../contentScript/contentScript.utils';

chrome.runtime.onInstalled.addListener(async () => {
  for (const cs of chrome.runtime?.getManifest()!.content_scripts!) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        files: ['index.js', 'netflix.js'],
      });
    }
  }
});

var test = (time: string) => {
  // Conversion of time to milliseconds
  if (time !== '') {
    let timeArray = time.split(':');
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (timeArray.length === 3) {
      hours = parseInt(timeArray[0]);
      minutes = parseInt(timeArray[1]);
      seconds = parseInt(timeArray[2]);
    } else if (timeArray.length === 2) {
      minutes = parseInt(timeArray[0]);
      seconds = parseInt(timeArray[1]);
    }
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let timeInMS = totalSeconds * 1000;

    let netflixApi = window.netflix;
    let videoPlayer =
      netflixApi?.appContext?.state.playerApp.getAPI().videoPlayer;
    if (videoPlayer) {
      let player = videoPlayer.getVideoPlayerBySessionId(
        videoPlayer.getAllPlayerSessionIds()[0]
      );
      if (player) {
        player.seek(timeInMS);
      } else {
        console.log('ERR: Unable to seek video player');
      }
    } else {
      console.log('ERR: Unable to get video player');
    }
  }
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'SEEK_VIDEO') {
    console.log('Seeking Video');
    const tabId = sender.tab?.id!;

    chrome.scripting.executeScript(
      {
        target: { tabId: tabId, allFrames: true },
        func: test,
        args: [msg.time],
        world: 'MAIN',
      },
      (e) => {
        console.log('injected seek script', e);
      }
    );

    sendResponse({ tab: sender.tab?.id! });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  let user: User = {
    name: '',
    email: '',
    photoUrl: '',
    nickname: '',
    id: '',
    comments: [],
    replies: [],
    joinedAt: '0',
    watchedMovies: [],
    favorites: [],
  };
  setStoredUserLoginDetails(user);
});

// Listen to the url change and 'strictly' for update the icons and popup page.
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, async (tab) => {
    if (tab.url?.match('https://www.netflix.com/watch/*')) {
      // Change Icon when the url is visited.

      chrome.action.setIcon({
        path: {
          '16': 'qc_16.png',
          '48': 'qc_48.png',
          '128': 'qc_128.png',
        },
      });
      // Changing the pop up html
      chrome.action.setPopup({ popup: 'popup.html' });
    } else {
      // Change icon when url is not visited.
      chrome.action.setIcon({
        path: {
          '16': 'qc_16.png',
          '48': 'qc_48.png',
          '128': 'qc_128.png',
        },
      });
      // Change the pop up html
      chrome.action.setPopup({ popup: 'offsite.html' });
    }
  });
});

let updateListener = function listener(
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) {
  console.log('CHANGED -> ', changeInfo.url);

  // read changeInfo data and do something with it (like read the url)
  if (changeInfo.url) {
    if (
      changeInfo.url.match(
        'https://www.netflix.com/watch/*' ||
          'http://www.netflix.com/watch/*' ||
          'https://www.netflix.com' ||
          'http://www.netflix.com'
      )
    ) {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);
        console.log(tabs[0].id);
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(
          activeTab.id!,
          { type: 'REFRESH_SCRIPT', msg: 'Hi from background script' },
          (res) => {
            console.log(res);
          }
        );
      });
      chrome.action.setIcon({
        path: {
          '16': 'qc_16.png',
          '48': 'qc_48.png',
          '128': 'qc_128.png',
        },
      });
      // Changing the pop up html
      chrome.action.setPopup({ popup: 'popup.html' });
    } else {
      // Change icon when url is not visited.
      chrome.action.setIcon({
        path: {
          '16': 'qc_16.png',
          '48': 'qc_48.png',
          '128': 'qc_128.png',
        },
      });
      // Change the pop up html
      chrome.action.setPopup({ popup: 'offsite.html' });
    }
  }
};

// Condition is for when user is already loggedIn.
// Sends the user log details whenever user refreshes the page or
// copy paste the netflix watch link.
chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.onUpdated.addListener(updateListener);
});
chrome.tabs.onUpdated.addListener(updateListener);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'NEED_ID') {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        const id = getIdFromNetflixURL(url!);
        setTimeout(function () {
          sendResponse({ id: id });
        }, 1);
      }
    );
  }
  return true;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // From content script
  if (sender.tab && request.type === 'GET_USER') {
    getStoredUserLoginDetails().then((res) => {
      sendResponse(res);
    });
  } else {
    if (sender.tab && request.type === 'test') {
      sendResponse('TEST OK!');
    }
  }
});
