import {
  type EpisodeInfo,
  type MovieFullInformation,
  type SeasonInfo,
} from '../generated/graphql';
import {
  getDomain
} from '../contentScript/contentScript.utils';
import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../Utils/storage';

import { type User } from '../Utils/interfaces';
import { requestTypes } from '../Utils/enums';
import { __prod__ } from '../constants';

const newTabUrl = __prod__?'https://moovychat.com/google-login':'http://localhost:3000/google-login';
// When the extension in installed.
chrome.runtime.onInstalled.addListener(async () => {
  const user: User = {
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
  await setStoredUserLoginDetails(user);
  chrome.tabs.create({ url: 'https://www.moovychat.com' });
});

const getMovieInfo = (movieId: number) => {
  const netflixApi = (window as any).netflix;
  // Let videoState = netflixApi.appContext?.getPlayerApp().getState();
  const api = netflixApi?.appContext?.getState()?.playerApp?.getAPI();
  const videoMetaData = api?.getVideoMetadataByVideoId(movieId);
  const videoAdvisories = api?.getAdvisoriesByVideoId(movieId);
  const _advisoriesData = videoAdvisories ? videoAdvisories[0]?.data : null;
  const _advisories = _advisoriesData ? _advisoriesData?.advisories : [];
  const metaData = videoMetaData?._metadata?.video;
  const mainYear = metaData?.year;
  const mainRunTime = metaData?.runtime;
  const mainTitleType: string = metaData?.type;
  const mainTitle: string = metaData?.title;
  const artwork: string = metaData?.artwork[0]?.url;
  const boxart: string = metaData?.boxart[0]?.url;
  const storyart: string = metaData?.storyart[0]?.url;
  const rating: string = metaData?.rating;
  const synopsis: string = metaData?.synopsis;
  const _seasons: any[] = videoMetaData?._seasons;
  let _finalSeasonValue: SeasonInfo[] = [];
  if (_seasons) {
    _finalSeasonValue = _seasons.map((s) => {
      const _seasonInfo = s?._season;
      const title = _seasonInfo?.title;
      const year = _seasonInfo?.year;
      const { _episodes } = s;
      const episodeReturnvalue = _episodes.map((e: any) => {
        const episodeInfo: EpisodeInfo = {
          id: e?._video?.id,
          title: e?._video?.title,
          thumbs: e?._video?.thumbs[0]?.url,
          stills: e?._video?.stills[0]?.url,
          runtime: e?._video?.runtime,
          synopsis: e?._video?.synopsis,
        };
        return episodeInfo;
      });
      const seasonInfo: SeasonInfo = {
        year,
        title,
        episodes: episodeReturnvalue,
      };
      return seasonInfo;
    });
  }

  const finalResult: MovieFullInformation = {
    type: mainTitleType,
    title: mainTitle,
    synopsis,
    storyart,
    rating,
    boxart,
    artwork,
    year: mainYear,
    runtime: mainRunTime,
    advisories: _advisories,
    seasons: _finalSeasonValue,
  };
  return finalResult;
};

const timeSkipForNetflix = (time: string) => {
  // Conversion of time to milliseconds
  if (time !== '') {
    const timeArray = time.split(':');
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

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const timeInMS = totalSeconds * 1000;

    const netflixApi = (window as any).netflix;
    const videoPlayer =
      netflixApi?.appContext?.state.playerApp.getAPI().videoPlayer;
    if (videoPlayer) {
      const player = videoPlayer.getVideoPlayerBySessionId(
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

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === 'SEEK_VIDEO') {
    const tabId = sender.tab?.id;
    if (tabId)
      chrome.scripting.executeScript({
        target: { tabId, allFrames: true },
        func: timeSkipForNetflix,
        args: [msg.time],
        world: 'MAIN',
      });
    sendResponse({ tab: sender.tab?.id });
  } else if (msg.type === 'OPEN_LINK') {
    chrome.tabs.create({ url: msg.url });
  }

  return true;
});

// https://developer.chrome.com/docs/extensions/mv3/messaging/#external-webpage
// Communication with the external websites.
chrome.runtime.onMessageExternal.addListener(
  (message, _sender, _sendResponse) => {
    if (message.type === 'EXTENSION_LOG_IN') {
      const { user } = message;
      setStoredUserLoginDetails(user);
      _sendResponse({ loggedIn: true });
    }

    return true;
  }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_DOMAIN') {
    const domains = {
      MOOVYCHAT: 'www.moovychat.com',
      NETFLIX: 'www.netflix.com',
      LOCALHOST: 'localhost',
      DISNEY: 'www.disneyplus.com',
      AMAZON: 'www.amazon.com',
      AHA: 'www.aha.video',
    };
    // Do something with the message here
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { url } = tabs[0];
      // Do something with the URL here
      if (url) {
        const domain = getDomain(url);
        switch (domain) {
          case domains.MOOVYCHAT:
          case domains.LOCALHOST:
            sendResponse({ domain: 'MOOVYCHAT' });
            break;
          case domains.NETFLIX:
            sendResponse({ domain: 'NETFLIX' });
            break;
          case domains.AMAZON:
            sendResponse({ domain: 'AMAZON' });
            break;
          case domains.DISNEY:
            sendResponse({ domain: 'DISNEY' });
            break;
          case domains.AHA:
            sendResponse({ domain: 'AHA' });
            break;
          default:
            sendResponse({ domain: 'OTHER' });
        }
      }
    });
  }
});

// Condition is for when user is already loggedIn.
// Sends the user log details whenever user refreshes the page or
// copy paste the netflix watch link.
chrome.tabs.onCreated.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
});
// Listeners
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'REQUEST_MOVIE_INFO') {
    if (sender.tab) {
      const tabId = sender.tab?.id;
      if (request.movieId === '') {
        return;
      }

      if (tabId)
        chrome.scripting.executeScript(
          {
            target: { tabId, allFrames: true },
            func: getMovieInfo,
            args: [parseInt(request.movieId)],
            world: 'MAIN',
          },
          (e) => {
            const { result } = e[0];
            sendResponse({ result });
          }
        );
    }

    return true;
  }

  if (request.type === 'CHANGE_MOVIE_ID') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, {
          type: 'SET_MOVIE_ID',
          movieId: request.movieId,
        });
      }
    });
  } else if (request.type === 'GOOGLE_LOGIN_IN_BCK') {
    // Use the chrome.windows.create method to open a new Chrome window
    chrome.system.display.getInfo((displays) => {
      let screenWidth = 0;
      let screenHeight = 0;
      displays.forEach((display) => {
        screenWidth += display.bounds.width;
        screenHeight += display.bounds.height;
      });
      const windowWidth = 360;
      const windowHeight = 640;
      const top = Math.max(0, (screenHeight - windowHeight) / 2);
      const left = Math.max(0, (screenWidth - windowWidth) / 2);

      chrome.windows.create({
        url: newTabUrl,
        type: 'popup',
        focused: true,
        width: windowWidth,
        height: windowHeight,
        top,
        left,
      });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // From content script
  if (sender.tab) {
    switch (request.type) {
      case requestTypes.REFETCH_USER:
      case 'GET_USER':
        getStoredUserLoginDetails().then((res) => {
          sendResponse(res);
        });
        break;
    }
  }
});

chrome.tabs.onUpdated.addListener((_tabId, changeInfo) => {
  // Check if the URL of the tab has changed
  if (changeInfo.url) {
    // Do something with the new URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (!activeTab) {
        return;
      }

      if (activeTab.id === undefined) {
        return;
      }

      chrome.tabs.sendMessage(activeTab.id, {
        type: 'NEW_URL',
        url: changeInfo.url,
      });
    });
  }
});
