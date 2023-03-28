import {
  EpisodeInfo,
  MovieFullInformation,
  SeasonInfo,
  User,
} from '../Utils/interfaces';
import {
  getDomain,
  getIdFromNetflixURL,
} from '../contentScript/contentScript.utils';
import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../Utils/storage';

import { requestTypes } from '../Utils/enums';

export {};

const newTabUrl = 'http://localhost:3000/google-login';
// When the extension in installed.
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

var getMovieInfo = (movieId: number) => {
  let netflixApi = (window as any).netflix;
  // let videoState = netflixApi.appContext?.getPlayerApp().getState();
  let api = netflixApi?.appContext?.getState()?.playerApp?.getAPI();
  let videoMetaData = api?.getVideoMetadataByVideoId(movieId);
  let videoAdvisories = api?.getAdvisoriesByVideoId(movieId);
  let _advisoriesData = videoAdvisories ? videoAdvisories[0]?.data : null;
  let _advisories = _advisoriesData ? _advisoriesData?.advisories : [];
  let metaData = videoMetaData?._metadata?.video;
  let mainYear = metaData?.year;
  let mainRunTime = metaData?.runtime;
  let mainTitleType: string = metaData?.type;
  let mainTitle: string = metaData?.title;
  let artwork: string = metaData?.artwork[0]?.url;
  let boxart: string = metaData?.boxart[0]?.url;
  let storyart: string = metaData?.storyart[0]?.url;
  let rating: string = metaData?.rating;
  let synopsis: string = metaData?.synopsis;
  let _seasons: any[] = videoMetaData?._seasons;
  let _finalSeasonValue: SeasonInfo[] | null = [];
  if (_seasons) {
    _finalSeasonValue = _seasons.map((s) => {
      let _seasonInfo = s?._season;
      let title = _seasonInfo?.title;
      let year = _seasonInfo?.year;
      let _episodes: any[] = s._episodes;
      let episodeReturnvalue = _episodes.map((e) => {
        let episodeInfo: EpisodeInfo = {
          id: e?._video?.id,
          title: e?._video?.title,
          thumbs: e?._video?.thumbs[0]?.url,
          stills: e?._video?.stills[0]?.url,
          runtime: e?._video?.runtime,
          synopsis: e?._video?.synopsis,
        };
        return episodeInfo;
      });
      let seasonInfo: SeasonInfo = {
        year,
        title,
        episodes: episodeReturnvalue,
      };
      return seasonInfo;
    });
  }
  let finalResult: MovieFullInformation = {
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
var timeSkipForNetflix = (time: string) => {
  // Conversion of time to milliseconds
  if (time !== '') {
    let timeArray = time.split(':');
    let hours = 0,
      minutes = 0,
      seconds = 0;
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

    let netflixApi = (window as any).netflix;
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
    const tabId = sender.tab?.id!;
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId, allFrames: true },
        func: timeSkipForNetflix,
        args: [msg.time],
        world: 'MAIN',
      },
      (e) => {}
    );

    sendResponse({ tab: sender.tab?.id! });
  } else if (msg.type === 'OPEN_LINK') {
    chrome.tabs.create({ url: msg.url });
  }

  return true;
});

// Communication with the external websites.
chrome.runtime.onMessageExternal.addListener(
  (message, _sender, _sendResponse) => {
    if (message.type === 'EXTENSION_LOG_IN') {
      const user = message.user;
      setStoredUserLoginDetails(user);
      _sendResponse({ loggedIn: true });
    }
    return true;
  }
);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
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
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = tabs[0].url;
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
  if (request.type === 'NEED_ID') {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      async (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        const id = await getIdFromNetflixURL(url!);
        if (!id) return;
        setTimeout(function () {
          sendResponse({ id: id });
        }, 1);
      }
    );
    return true;
  } else if (request.type === 'REQUEST_MOVIE_INFO') {
    if (sender.tab) {
      const tabId = sender.tab?.id!;
      if (request.movieId === '') return;
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId, allFrames: true },
          func: getMovieInfo,
          args: [parseInt(request.movieId)],
          world: 'MAIN',
        },
        (e) => {
          let result = e[0].result;
          sendResponse({ result });
        }
      );
    }
    return true;
  } else if (request.type === 'CHANGE_MOVIE_ID') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      if (!activeTab) return;
      chrome.tabs.sendMessage(activeTab.id!, {
        type: 'SET_MOVIE_ID',
        movieId: request.movieId,
      });
    });
  } else if (request.type === 'GOOGLE_LOGIN_IN_BCK') {
    // Use the chrome.windows.create method to open a new Chrome window
    chrome.system.display.getInfo(function (displays) {
      var screenWidth = 0;
      var screenHeight = 0;
      displays.forEach(function (display) {
        screenWidth += display.bounds.width;
        screenHeight += display.bounds.height;
      });
      var windowWidth = 360;
      var windowHeight = 640;
      var top = Math.max(0, (screenHeight - windowHeight) / 2);
      var left = Math.max(0, (screenWidth - windowWidth) / 2);

      chrome.windows.create({
        url: newTabUrl,
        type: 'popup',
        focused: true,
        width: windowWidth,
        height: windowHeight,
        top: top,
        left: left,
      });
    });
  }
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
      case requestTypes.REFETCH_USER:
        getStoredUserLoginDetails().then((res) => {
          sendResponse(res);
        });
        break;
    }
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // check if the URL of the tab has changed
  if (changeInfo.url) {
    // do something with the new URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      if (!activeTab) return;
      if (activeTab.id === undefined) return;
      chrome.tabs.sendMessage(activeTab.id, {
        type: 'NEW_URL',
        url: changeInfo.url,
      });
    });
  }
});
