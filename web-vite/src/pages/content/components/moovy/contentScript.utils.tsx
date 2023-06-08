import { sliceSetPlatform } from "../../../redux/slices/movie/movieSlice";
import { store } from "../../../redux/store";

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

export const getDomain = (url: string) => {
  const _url = new URL(url);
  return _url.hostname;
};

export const getVideoPlatform = (url: string): "netflix" | "aha" | null => {
  if (url.includes("netflix.com")) {
    return "netflix";
  }
  if (url.includes("aha.video")) {
    return "aha";
  }
  return null;
};

export const getMovieIdFromURL = async (
  url: string
): Promise<string | null> => {
  const platform = getVideoPlatform(url);
  if (platform === "netflix") {
    return getIdFromNetflixURL(url);
  }
  if (platform === "aha") {
    const info = await getInfoFromAhaURL(url);
    // convert info.id from string to number before returning
    return info ? info.id : null;
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

// const setVideoFilters = () => {
//   getVideoElement().then((element) => {
//     const videoElem = element[0];
//     getStoredFilterValues().then((filters) => {
//       console.log(filters);
//       let filtersD = filters as any;
//       let filterText = filtersD
//         .map((f: filterType) => {
//           switch (f.title) {
//             case 'grayscale':
//             case 'contrast':
//             case 'brightness':
//             case 'invert':
//               return `${f.title}(${filtersD[f.title]})`;
//             case 'blur':
//               return `${f.title}(${filtersD[f.title]}px)`;
//             case 'sepia':
//             case 'saturate':
//               return `${f.title}(${filtersD[f.title]}%)`;
//             case 'hue':
//               return `hue-rotate(${filtersD.hue}turn)`;
//             default:
//               break;
//           }
//         })
//         .join(' ');
//       if (videoElem) videoElem.style['filter'] = filterText;
//     });
//   });
// };

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
  }

  return null;
};
