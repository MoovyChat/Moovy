import {
  getDomain,
  getIdFromNetflixURL,
} from '../contentScript/contentScript.utils';
import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../Utils/storage';

import { User } from '../Utils/interfaces';
import { domains } from '../constants';

const setCookieForWebPage = async () => {
  // const user = await getStoredUserLoginDetails();
  // if (!user) return;
  // const userId = user.id;
  // chrome.cookies.set(
  //   {
  //     name: 'userId',
  //     url: 'http://localhost:3000/',
  //     value: userId,
  //   },
  //   (cookie) => {
  //     console.log(JSON.stringify(cookie));
  //     console.log(chrome.extension.lastError);
  //     console.log(chrome.runtime.lastError);
  //   }
  // );
};

const injectScriptsOnReload = async () => {
  for (const cs of chrome.runtime?.getManifest()!.content_scripts!) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      const url = tab.url!;
      const _url = getDomain(url);
      switch (_url) {
        case domains.NETFLIX:
          chrome.scripting.executeScript({
            target: { tabId: tab.id! },
            files: ['netflix.js'],
          });
          break;
        case domains.LOCALHOST:
          chrome.scripting.executeScript({
            target: { tabId: tab.id! },
            files: ['qchat.js'],
          });
          break;
      }
    }
  }
};

chrome.runtime.onInstalled.addListener(async () => {
  injectScriptsOnReload();
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
  setCookieForWebPage();
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
    const url = await tab.url!;
    const domain = getDomain(url);
    switch (domain) {
      case domains.LOCALHOST:
      case domains.NETFLIX:
        // Change Icon when the url is visited.
        injectScriptsOnReload();
        chrome.action.setIcon({
          path: {
            '16': 'qc_16.png',
            '48': 'qc_48.png',
            '128': 'qc_128.png',
          },
        });
        // Changing the pop up html
        chrome.action.setPopup({ popup: 'popup.html' });
        break;
      default:
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
        break;
    }
  });
});

let updateListener = function listener(
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) {
  console.log('CHANGED -> ', changeInfo);
  if (
    (changeInfo.status === 'complete' &&
      getDomain(tab.url!) === domains.LOCALHOST) ||
    domains.NETFLIX
  ) {
    injectScriptsOnReload();
  }
  let domain = getDomain(changeInfo.url!);
  // read changeInfo data and do something with it (like read the url)
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let activeTab = tabs[0];
    switch (domain) {
      case domains.LOCALHOST:
      case domains.NETFLIX:
        chrome.tabs.sendMessage(
          activeTab.id!,
          { type: 'REFRESH_SCRIPT', msg: 'Hi from background script' },
          (res) => {
            console.log(res);
          }
        );
        chrome.action.setIcon({
          path: {
            '16': 'qc_16.png',
            '48': 'qc_48.png',
            '128': 'qc_128.png',
          },
        });
        // Changing the pop up html
        chrome.action.setPopup({ popup: 'popup.html' });
        break;
      default:
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
};

// Condition is for when user is already loggedIn.
// Sends the user log details whenever user refreshes the page or
// copy paste the netflix watch link.
chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.onUpdated.addListener(updateListener);
});
chrome.tabs.onUpdated.addListener(updateListener);

// Listeners
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
        if (id === '') return;
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
  if (sender.tab) {
    switch (request.type) {
      case 'GET_USER':
        getStoredUserLoginDetails().then((res) => {
          sendResponse(res);
        });
        break;
      case 'test':
        sendResponse('TEST OK!');
        break;
      case 'DELETE_COOKIE':
        if (sender.tab && request.type === 'DELETE_COOKIE') {
          chrome.cookies.getAll({}, function (cookies) {
            console.log('@getCookies. Cookies found ' + cookies.length);
            cookies.forEach(function (cookie) {
              console.log('[COOKIE] => ' + JSON.stringify(cookie));
            });
          });
        }
        break;
    }
  }
});
