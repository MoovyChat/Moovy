import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

import {
  EpisodeInfo,
  MovieFullInformation,
  SeasonInfo,
} from "../../generated/graphql";
import { ServerScrape, __prod__ } from "../../helpers/constants";
import { requestTypes } from "../../helpers/enums";
import { User } from "../../helpers/interfaces";
import {
  getStoredUserLoginDetails,
  setStoredFilterValues,
  setStoredUserLoginDetails,
} from "../../helpers/storage";
import { getDomain } from "../content/components/moovy/contentScript.utils";

/**
 * This function sends a message to a specific tab in a Chrome browser and returns a promise that
 * resolves with the response from the tab or rejects with an error message.
 * @param tabId - The ID of the tab to which the message will be sent.
 * @param message - The message parameter is the data that you want to send to the content script
 * running in the specified tab. It can be any JavaScript object or primitive value that can be
 * serialized. The content script can then use this data to perform some action or update its state.
 * @returns The `sendMessage` function is returning a Promise object.
 */
function sendMessage(tabId, message) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, (response) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError.message);
      } else {
        resolve(response);
      }
    });
  });
}

const newTabUrl = __prod__
  ? "https://moovychat.com/google-login"
  : "http://localhost:3000/google-login";
// When the extension in installed.
chrome.runtime.onInstalled.addListener(async () => {
  const user: User = {
    name: "",
    email: "",
    photoUrl: "",
    nickname: "",
    id: "",
    comments: [],
    replies: [],
    joinedAt: "0",
    watchedMovies: [],
    favorites: [],
  };
  const videoFilters = {
    blur: "0",
    contrast: "1",
    brightness: "1",
    grayscale: "0",
    invert: "0",
    sepia: "0",
    saturate: "100",
    hue: "0",
  };
  await setStoredUserLoginDetails(user);
  await setStoredFilterValues(videoFilters);
  // chrome.tabs.create({ url: "https://www.moovychat.com" });
});

/**
 * The function `getMovieInfo` retrieves information about a movie or TV show from various streaming
 * platforms such as Netflix and Aha.
 * @param {string} currentUrl - The `currentUrl` parameter is a string representing the URL of a
 * webpage that contains information about a movie or TV show. The function `getMovieInfo` uses this
 * URL to determine which website the information is from and how to retrieve it.
 * @returns The function `getMovieInfo` returns a `Promise` that resolves to an object of type
 * `MovieFullInformation` which contains information about a movie or TV show, including its type,
 * title, synopsis, artwork, rating, year, runtime, advisories, and seasons. However, if the domain of
 * the URL is not recognized, the function returns `undefined`.
 */
const getMovieInfo = async (currentUrl: string) => {
  const parsedUrl = new URL(currentUrl);
  const domain = parsedUrl.hostname;
  const domains = {
    MOOVYCHAT: "www.moovychat.com",
    NETFLIX: "www.netflix.com",
    LOCALHOST: "localhost",
    DISNEY: "www.disneyplus.com",
    HULU: "www.hulu.com",
    AMAZON: "www.amazon.com",
    AHA: "www.aha.video",
  };

  /**
   * The function retrieves information about a Netflix movie based on its ID.
   * @param {number} movieId - The ID of the Netflix movie for which we want to retrieve information.
   * @returns The function `getNetflixMovieInfo` returns an object of type `MovieFullInformation` which
   * contains information about a Netflix movie or TV show, including its type, title, synopsis, artwork,
   * rating, year, runtime, advisories, and seasons.
   */
  const getNetflixMovieInfo = (movieId: number) => {
    try {
      const netflixApi = (window as any).netflix;
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
              id: String(e?._video?.id),
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
        id:
          mainTitleType !== "movie" && _finalSeasonValue
            ? _finalSeasonValue[0]?.episodes[0]?.id
            : String(movieId),
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
        platformId: 1,
      };

      return { data: finalResult, error: null };
    } catch (error) {
      console.error(
        `An error occurred while getting Netflix movie info: ${error}`
      );
      return { data: null, error: error.message };
    }
  };

  /**
   * The function fetches movie information from Aha's website by sending a cleaned URL to a local server
   * and returns the data as a JSON object.
   * @param {string} url - The URL of the Aha video player page that you want to scrape information from.
   */
  const getAhaInfo = async (
    url: string
  ): Promise<{ data: MovieFullInformation | null; error: string | null }> => {
    const cleanedUrl = url.replace("/player", ""); // remove 'player' from the URL
    let errorMessage = null;
    let data: MovieFullInformation | null = null;

    try {
      const response = await fetch(ServerScrape, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: cleanedUrl }), // send the cleaned URL to your server
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data = (await response.json()) as MovieFullInformation;
    } catch (error) {
      console.error(`Failed to get data from Aha: ${error}`);
      errorMessage = `Failed to get data from Aha: ${error}`;
    }

    return { data, error: errorMessage };
  };
  console.log({ domain });
  switch (domain) {
    case domains.NETFLIX:
      const idMatch = currentUrl.match(/\/(watch|title)\/(\d+)/);
      const id = idMatch ? idMatch[2] : null;
      if (id) {
        const { data: netflixInfo, error } = getNetflixMovieInfo(parseInt(id));
        if (error) {
          console.error(
            `Error occurred while getting Netflix movie info: ${error}`
          );
          return { data: null, error };
        }
        return { data: netflixInfo, error: null };
      } else break;
    case domains.AHA:
      const { data: ahaInfo, error: ahaError } = await getAhaInfo(currentUrl);
      if (ahaError) {
        console.error(
          `Error occurred while getting Aha movie info: ${ahaError}`
        );
        return { data: null, error: ahaError };
      }
      return { data: ahaInfo, error: null };
    case domains.DISNEY:
    case domains.HULU:
      return { data: null, error: null };
    default:
      return { data: null, error: "Domain not supported" };
  }
};

/**
 * This function seeks to a specific time in a Netflix video player or HTML5 video element based on the
 * input time in milliseconds or formatted as "hh:mm:ss".
 * @param {string} time - The `time` parameter is a string representing the time to which the video
 * player should be seeked. It can be in the format of either "hh:mm:ss" or a decimal number
 * representing the number of seconds.
 * @returns Nothing is being returned explicitly in the code. The function ends with a series of
 * conditional statements and actions that may or may not be executed depending on the input and the
 * availability of certain objects and elements.
 */
const timeSkipForPlatform = (time: string) => {
  // Conversion of time to milliseconds
  let timeInMS = 0;
  if (time !== "") {
    if (time.includes(":")) {
      const timeArray = time.split(":");
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
      timeInMS = totalSeconds * 1000;
    } else {
      timeInMS = parseFloat(time) * 1000;
    }

    const netflixApi = (window as any).netflix;
    const videoPlayer =
      netflixApi?.appContext?.state.playerApp.getAPI().videoPlayer;
    if (videoPlayer) {
      const player = videoPlayer.getVideoPlayerBySessionId(
        videoPlayer.getAllPlayerSessionIds()[0]
      );
      if (player) {
        player.seek(timeInMS);
        return;
      } else {
        console.log("ERR: Unable to seek Netflix video player");
      }
    } else {
      console.log("ERR: Unable to get Netflix video player");
    }

    // Fallback to seek using HTML5 video element if Netflix player doesn't exist
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.currentTime = timeInMS / 1000; // HTML5 video currentTime is in seconds
    } else {
      console.log("ERR: Unable to find video element on page");
    }
  }
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === "SEEK_VIDEO") {
    const tabId = sender.tab?.id;
    if (tabId)
      chrome.scripting.executeScript({
        target: { tabId, allFrames: true },
        func: timeSkipForPlatform,
        args: [msg.time],
        world: "MAIN",
      });
    sendResponse({ tab: sender.tab?.id });
  } else if (msg.type === "OPEN_LINK") {
    // Extract domain from url
    const urlDomain = new URL(msg.url).hostname;

    // Get all tabs
    chrome.tabs.query({}, (tabs) => {
      // Find tab with same domain and exact URL
      const sameUrlTab = tabs.find((tab) => tab.url === msg.url);
      const sameDomainTab = tabs.find(
        (tab) => new URL(tab.url).hostname === urlDomain
      );

      // If exact URL found, switch to that tab.
      // If not, but same domain found, update the tab.
      // If none found, create new tab
      if (sameUrlTab) {
        chrome.tabs.update(sameUrlTab.id, { active: true });
      } else if (sameDomainTab) {
        chrome.tabs.update(sameDomainTab.id, { url: msg.url, active: true });
      } else {
        chrome.tabs.create({ url: msg.url, active: true });
      }
    });
  }
  return true;
});

// https://developer.chrome.com/docs/extensions/mv3/messaging/#external-webpage
// Communication with the external websites.
chrome.runtime.onMessageExternal.addListener(
  (message, _sender, _sendResponse) => {
    if (message.type === "EXTENSION_LOG_IN") {
      const { user } = message;
      setStoredUserLoginDetails(user);
      _sendResponse({ loggedIn: true });
    }

    // Check if the received message is the one we expect ('checkExtension')
    if (message.message === "checkExtension") {
      // Send a response back to the sender indicating that the extension is installed and enabled
      _sendResponse({ message: "extensionInstalled" });
    }

    // Return true to keep the message channel open for asynchronous responses (if needed)
    return true;
  }
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const domains = {
    MOOVYCHAT: "www.moovychat.com",
    NETFLIX: "www.netflix.com",
    LOCALHOST: "localhost",
    DISNEY: "www.disneyplus.com",
    HULU: "www.hulu.com",
    AMAZON: "www.amazon.com",
    AHA: "www.aha.video",
  };
  if (message.type === "GET_DOMAIN") {
    // Do something with the message here
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { url } = tabs[0];
      // Do something with the URL here
      if (url) {
        const domain = getDomain(url);
        switch (domain) {
          case domains.MOOVYCHAT:
          case domains.LOCALHOST:
            sendResponse({ domain: "MOOVYCHAT" });
            break;
          case domains.NETFLIX:
            sendResponse({ domain: "NETFLIX" });
            break;
          case domains.AMAZON:
            sendResponse({ domain: "AMAZON" });
            break;
          case domains.DISNEY:
            sendResponse({ domain: "DISNEY" });
            break;
          case domains.HULU:
            sendResponse({ domain: "HULU" });
            break;
          case domains.AHA:
            sendResponse({ domain: "AHA" });
            break;
          default:
            sendResponse({ domain: "OTHER" });
        }
      }
    });
  }
});

// Condition is for when user is already loggedIn.
// Sends the user log details whenever user refreshes the page or
// copy paste the netflix watch link.
chrome.tabs.onCreated.addListener(() => {
  chrome.action.setBadgeText({ text: "" });
});
// Listeners
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "REQUEST_MOVIE_INFO") {
    if (sender.tab) {
      const tabId = sender.tab?.id;
      if (request.movieId === "") {
        return;
      }

      if (tabId)
        chrome.scripting.executeScript(
          {
            target: { tabId, allFrames: true },
            func: getMovieInfo,
            args: [request.currentUrl],
            world: "MAIN",
          },
          (e) => {
            const { result } = e[0];
            sendResponse({ result });
          }
        );
    }

    return true;
  }

  if (request.type === "CHANGE_MOVIE_ID") {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        try {
          const response = await sendMessage(activeTab.id, {
            type: "SET_MOVIE_ID",
            movieId: request.movieId,
          });
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    });
  } else if (request.type === "GOOGLE_LOGIN_IN_BCK") {
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
        type: "popup",
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
      case "GET_USER":
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
        type: "NEW_URL",
        url: changeInfo.url,
      });
    });
  }
});
