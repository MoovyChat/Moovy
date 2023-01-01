import {
  EpisodeInfo,
  MovieFullInformation,
  SeasonInfo,
  User,
} from '../Utils/interfaces';
import { durations, resolutions } from '../optionsPage/utils';
import {
  getDomain,
  getIdFromNetflixURL,
} from '../contentScript/contentScript.utils';
import {
  getStoredIsRecording,
  getStoredResolution,
  getStoredVideoDuration,
  getStoredVideoFormat,
  setStoredBlobURL,
  setStoredIsRecording,
} from '../optionsPage/storage';
import {
  getStoredUserLoginDetails,
  setStoredUserLoginDetails,
} from '../Utils/storage';

import { domains } from '../constants';
import { wait } from '../contentScript/videoStyles/mediaRecorder';

let options = {
  audio: true,
  video: true,
  audioConstraints: {
    mandatory: {
      chromeMediaSource: 'tab',
      echoCancellation: true,
    },
  },
  videoConstraints: {
    mandatory: {
      chromeMediaSource: 'tab',
      maxWidth: 1920,
      maxHeight: 1200,
      minFrameRate: 30,
      minAspectRatio: 1.77,
    },
  },
};

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
          console.log('INJECTED');
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

var getMovieInfo = (movieId: string) => {
  let netflixApi = (window as any).netflix;
  // let videoState = netflixApi.appContext?.getPlayerApp().getState();
  let api = netflixApi?.appContext?.getState()?.playerApp?.getAPI();
  let videoMetaData = api?.getVideoMetadataByVideoId(movieId);
  let videoAdvisories = api?.getAdvisoriesByVideoId(movieId);
  let _advisoriesData = videoAdvisories ? videoAdvisories[0]?.data : null;
  let _advisories = _advisoriesData ? _advisoriesData?.advisories : [];
  let metaData = videoMetaData?._metadata?.video;
  let mainYear = metaData.year;
  let mainRunTime = metaData.runtime;
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

    let netflixApi = (window as any).netflix;
    console.log(window);
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
        func: timeSkipForNetflix,
        args: [msg.time],
        world: 'MAIN',
      },
      (e) => {
        console.log('injected seek script', e);
      }
    );

    sendResponse({ tab: sender.tab?.id! });
  } else if (msg.type === 'RECORD_TAB') {
    let tabId = msg.tabId;
    let streamId = msg.streamId;
    let isRecording = msg.isRecording;
    getStoredVideoFormat().then((format) => {
      getStoredResolution().then((resolution) => {
        getStoredVideoDuration().then((d) => {
          // Send the streamId to the tab
          let { height, width } = resolutions[resolution];
          let duration = durations[d];
          chrome.tabs.sendMessage(tabId, {
            type: 'RECORD',
            streamId,
            height,
            width,
            duration,
            format,
            isRecording,
          });

          let timeCount = duration;
          let interval = setInterval(() => {
            timeCount--;
            getStoredIsRecording().then((res) => {
              if (!res) {
                chrome.action.setBadgeText({ text: '' });
                timeCount = 0;
                clearInterval(interval);
              } else {
                if (timeCount <= 0) {
                  chrome.action.setBadgeText({ text: '' });
                  clearInterval(interval);
                } else {
                  chrome.action.setBadgeBackgroundColor({
                    color: '#FE0000',
                  });
                  chrome.action.setBadgeText({ text: timeCount + '' });
                }
              }
            });
          }, 1000);
        });
      });
    });
  } else if (msg.type === 'RECORD_COMPLETE') {
    const blobUrl = msg.data as string[];
    setStoredBlobURL(blobUrl);
    chrome.tabs.create({ url: '/options.html' });
    chrome.action.setBadgeText({ text: '' });
    setStoredIsRecording(false);
  }

  return true;
});

// When the extension in installed.
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
  console.log('ON INSTALLED');
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
        // injectScriptsOnReload();
        console.log('ON ACTIVATED');
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
    // injectScriptsOnReload();
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
  chrome.action.setBadgeText({ text: '' });
});
// chrome.tabs.onUpdated.addListener(updateListener);
chrome.tabs.onUpdated.addListener((_a, changeInfo, tab) => {
  injectScriptsOnReload();
  let domain = getDomain(changeInfo.url!);
  // read changeInfo data and do something with it (like read the url)
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    let activeTab = tabs[0];
    if (domain === domains.NETFLIX) {
      let movieId = getIdFromNetflixURL(changeInfo.url!);
      chrome.tabs.sendMessage(
        activeTab.id!,
        { type: 'RESET_MOVIE_ID', movieId },
        (res) => {
          console.log(res);
        }
      );
    }
  });
});
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
    return true;
  } else if (request.type === 'MOVIE_INFO') {
    if (sender.tab) {
      const tabId = sender.tab?.id!;
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId, allFrames: true },
          func: getMovieInfo,
          args: [request.movieId],
          world: 'MAIN',
        },
        (e) => {
          let result = e[0].result;
          sendResponse({ result });
        }
      );
    }
    return true;
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
