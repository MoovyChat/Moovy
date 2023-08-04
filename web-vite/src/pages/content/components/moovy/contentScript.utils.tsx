import { PlatformConfig } from "../../../../helpers/interfaces";

type NotPresentStrategy = "error" | "ignore";

export function getElementByDataUIA(tag: string): HTMLElement;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent: "error"
): HTMLElement;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent: "ignore"
): HTMLElement | null;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent?: NotPresentStrategy
) {
  const element = document.querySelector(`[data-uia=${tag}]`);
  if (IfNotPresent === "error" && !element) {
    return;
  }
  return element;
}

export const getVideoTitleFromNetflixWatch = () => {
  let video_title = "";
  const completeText: string[] = [];
  let mergedText = "";
  // Check if the data-uia is loaded.
  const videoTitleElement = getElementByDataUIA("video-title");
  if (!videoTitleElement) return;
  videoTitleElement.childNodes.forEach((child) => {
    completeText.push(child.textContent!);
  });
  mergedText = completeText.join(" ");
  if (video_title === "" || video_title === null)
    video_title = mergedText || videoTitleElement.textContent!;
  return video_title;
};

const getVideoTitleFromDisneyPlus = () => {
  const titleElement = document.querySelector(".control-icon-btn.title-btn");

  if (titleElement) {
    const titleDiv = titleElement.querySelector("div:first-child");
    const episodeDiv = titleElement.querySelector("div:last-child");

    const titleText = titleDiv ? titleDiv.textContent.trim() : "";
    const episodeText = episodeDiv ? episodeDiv.textContent.trim() : "";

    // Combine the title and episode information, separated by a space
    return `${titleText} ${episodeText}`;
  }

  // Default case if title element is not found
  return "";
};

export const getVideoTitleFromHuluWatch = (): string => {
  let video_title = "";

  // Find the div containing the title
  const videoTitleElement = document.querySelector(
    ".PlayerMetadata__title .ClampedText span"
  );
  if (videoTitleElement) video_title = videoTitleElement.textContent!;

  // Find the div containing the subtitle
  const videoSubTitleElement = document.querySelector(
    ".PlayerMetadata__subTitle"
  );
  if (videoSubTitleElement) {
    const seasonEpisode = videoSubTitleElement.querySelector(
      ".PlayerMetadata__seasonEpisodeText"
    )?.textContent!;
    const subTitleText = videoSubTitleElement.querySelector(
      ".PlayerMetadata__subTitleText"
    )?.textContent!;
    if (seasonEpisode && subTitleText)
      video_title += ` ${seasonEpisode} ${subTitleText}`;
  }

  return video_title.trim();
};

export const getVideoTitleFromHBOmaxWatch = () => {
  const metadataElement = document.querySelector(
    '[data-testid="content-metadata"]'
  );
  if (!metadataElement) return "";

  const titleElement = metadataElement.querySelector(
    '[data-testid="player-ux-asset-title"]'
  );
  const subtitleContainerElement = metadataElement.querySelector(
    '[class^="SeasonEpisodeSubtitleContainer-Beam-Web-Ent"]'
  );

  const title = titleElement ? titleElement.textContent || "" : "";

  if (subtitleContainerElement) {
    const seasonEpisodeElement = subtitleContainerElement.querySelector(
      '[data-testid="player-ux-season-episode"]'
    );
    const subtitleElement = subtitleContainerElement.querySelector(
      '[data-testid="player-ux-asset-subtitle"]'
    );

    const seasonEpisode = seasonEpisodeElement
      ? seasonEpisodeElement.textContent || ""
      : "";
    const subtitle = subtitleElement ? subtitleElement.textContent || "" : "";

    return `${title} ${seasonEpisode} ${subtitle}`.trim();
  }

  return title;
};

export const getVideoTitleFromWatch = (platform) => {
  if (platform === "disneyplus") {
    return getVideoTitleFromDisneyPlus();
  } else if (platform === "netflix") {
    return getVideoTitleFromNetflixWatch();
  } else if (platform === "hulu") {
    return getVideoTitleFromHuluWatch();
  } else if (platform === "hbomax") {
    return getVideoTitleFromHBOmaxWatch();
  }
  return "";
};

/**
 * This function extracts the Netflix ID from a given Netflix URL.
 * @param {string} url - The `url` parameter is a string representing a Netflix URL that the function
 * will extract the ID from.
 * @returns A Promise that resolves to either a number (the Netflix ID extracted from the input URL) or
 * null if no ID is found.
 */
export const getIdFromNetflixURL = (url: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const regex = /((http|https):\/\/)(www.netflix.com\/watch\/)(\d*)/gm;
    let m;
    let matchedGroup = "";
    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 4) {
          matchedGroup = match;
        }
      });
    }
    try {
      const netflixId = parseInt(matchedGroup);
      if (!isNaN(netflixId)) resolve(String(netflixId));
    } catch (e) {
      resolve(null);
    }
    resolve(null);
  });
};

/**
 * This function extracts the type and ID from a given Aha video URL.
 * @param {string} url - The `url` parameter is a string representing the URL of a video on the Aha
 * video platform.
 * @returns A Promise that resolves to an object with properties `type` and `id`, both of type string,
 * or null if no match is found.
 */
export const getInfoFromAhaURL = (
  url: string
): Promise<{ type: string; id: string } | null> => {
  return new Promise((resolve, reject) => {
    const regex =
      /((http|https):\/\/)(www.aha.video\/player\/)([^\/]+)\/(.*)/gm;
    let m;
    let matchedType = "";
    let matchedId = "";
    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 4) {
          matchedType = match;
        }
        if (groupIndex === 5) {
          matchedId = match;
        }
      });
    }

    if (matchedType && matchedId) {
      resolve({ type: matchedType, id: matchedId });
    } else {
      resolve(null);
    }
  });
};

/**
 * This function extracts the DisneyPlus ID from a given DisneyPlus URL.
 * @param {string} url - The `url` parameter is a string representing a DisneyPlus URL that the function
 * will extract the ID from.
 * @returns A Promise that resolves to either a string (the DisneyPlus ID extracted from the input URL) or
 * null if no ID is found.
 */
export const getIdFromDisneyPlusURL = (url: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const regex = /((http|https):\/\/)(www.disneyplus.com\/video\/)(.*)/gm;
    let m;
    let matchedId = "";
    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 4) {
          matchedId = match;
        }
      });
    }

    if (matchedId) {
      resolve(matchedId);
    } else {
      resolve(null);
    }
  });
};

/**
 * This function extracts the Hulu ID from a given Hulu URL.
 * @param {string} url - The `url` parameter is a string representing a Hulu URL that the function
 * will extract the ID from.
 * @returns A Promise that resolves to either a string (the Hulu ID extracted from the input URL) or
 * null if no ID is found.
 */
export const getIdFromHuluURL = (url: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const regex = /((http|https):\/\/)(www.hulu.com\/watch\/)(.*)/gm;
    let m;
    let matchedId = "";
    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 4) {
          matchedId = match;
        }
      });
    }

    if (matchedId) {
      resolve(matchedId);
    } else {
      resolve(null);
    }
  });
};

/**
 * This function extracts the HBO Max ID from a given HBO Max URL.
 * @param {string} url - The `url` parameter is a string representing an HBO Max URL that the function
 * will extract the ID from.
 * @returns A Promise that resolves to either a string (the HBO Max ID extracted from the input URL) or
 * null if no ID is found.
 */
export const getIdFromHBOURL = (url: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const regex = /((http|https):\/\/)(play\.max\.com\/video\/watch\/)(.*)/gm;
    let m;
    let matchedId = "";
    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 4) {
          matchedId = match;
        }
      });
    }

    if (matchedId) {
      resolve(matchedId);
    } else {
      resolve(null);
    }
  });
};

export const getDomain = (url: string) => {
  const _url = new URL(url);
  return _url.hostname;
};

export const getVideoPlatform = (
  url: string
): "netflix" | "aha" | "disneyplus" | "hulu" | "hbomax" | null => {
  if (url.includes("netflix.com")) {
    return "netflix";
  }
  if (url.includes("aha.video")) {
    return "aha";
  }
  if (url.includes("disneyplus.com")) {
    return "disneyplus";
  }
  if (url.includes("hulu.com")) {
    return "hulu";
  }
  if (url.includes("play.max.com")) {
    return "hbomax";
  }
  return null;
};

const platforms: PlatformConfig[] = [
  {
    domain: "netflix.com",
    getIdFromURL: getIdFromNetflixURL,
  },
  {
    domain: "aha.video",
    getIdFromURL: getInfoFromAhaURL,
  },
  {
    domain: "disneyplus.com",
    getIdFromURL: getIdFromDisneyPlusURL,
  },
  {
    domain: "hulu.com",
    getIdFromURL: getIdFromHuluURL,
  },
  {
    domain: "play.max.com",
    getIdFromURL: getIdFromHBOURL,
  },
  // More platforms can be added here...
];

export const getMovieIdFromURL = async (
  url: string
): Promise<string | null> => {
  for (const platform of platforms) {
    if (url.includes(platform.domain)) {
      return await platform.getIdFromURL(url);
    }
  }
  return null;
};

export const getVideoElement = (): Promise<
  HTMLCollectionOf<HTMLVideoElement>
> => {
  return new Promise((resolve, reject) => {
    const videoTags = document.getElementsByTagName("video");
    resolve(videoTags);
  });
};

export const getPlayerViewElement = (): HTMLElement | null => {
  const url = window.location.href;
  const platform = getVideoPlatform(url);

  if (platform === "netflix") {
    const videoParents = document.getElementsByClassName(
      "watch-video--player-view"
    ) as HTMLCollection;
    if (videoParents[0]) return videoParents[0] as HTMLElement;
  } else if (platform === "aha") {
    const appPlayerElem = document.querySelector("app-player");
    if (appPlayerElem && appPlayerElem.firstElementChild) {
      return appPlayerElem.firstElementChild as HTMLElement;
    }
  } else if (platform === "disneyplus") {
    const disneyElem = document.getElementById("hudson-wrapper");
    if (disneyElem) {
      return disneyElem as HTMLElement;
    }
  } else if (platform === "hulu") {
    const huluElem = document.querySelector(".Player__container");

    if (huluElem) {
      return huluElem as HTMLElement;
    }
  } else if (platform === "hbomax") {
    const hbomaxElem = document.querySelector(
      "[class*='StyledPlayerShrinkTransitionContainer']"
    );

    if (hbomaxElem) {
      return hbomaxElem as HTMLElement;
    }
  }

  return null;
};
