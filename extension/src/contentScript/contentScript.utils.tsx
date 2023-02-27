import { filterType } from '../Utils/interfaces';
import { getStoredFilterValues } from '../Utils/storage';

type NotPresentStrategy = 'error' | 'ignore';

export function getElementByDataUIA(tag: string): HTMLElement;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent: 'error'
): HTMLElement;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent: 'ignore'
): HTMLElement | null;
export function getElementByDataUIA(
  tag: string,
  IfNotPresent?: NotPresentStrategy
) {
  const element = document.querySelector(`[data-uia=${tag}]`);
  if (IfNotPresent === 'error' && !element) {
    return;
  }
  return element;
}

export const getVideoTitleFromNetflixWatch = () => {
  let video_title = '';
  let completeText: string[] = [];
  let mergedText = '';
  // Check if the data-uia is loaded.
  const videoTitleElement = getElementByDataUIA('video-title');
  if (!videoTitleElement) return;
  videoTitleElement.childNodes.forEach((child) => {
    completeText.push(child.textContent!);
  });
  mergedText = completeText.join(' ');
  if (video_title === '' || video_title === null)
    video_title = mergedText || videoTitleElement.textContent!;
  return video_title;
};

export const getIdFromNetflixURL = (url: string): Promise<number | null> => {
  return new Promise((resolve, reject) => {
    const regex = /((http|https):\/\/)(www.netflix.com\/watch\/)(\d*)/gm;
    let m;
    let matchedGroup = '';
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
      let netflixId = parseInt(matchedGroup);
      if (!isNaN(netflixId)) resolve(netflixId);
    } catch (e) {
      resolve(null);
    }
    resolve(null);
  });
};

export const getDomain = (url: string) => {
  let _url = new URL(url);
  return _url.hostname;
};

export const getVideoElement = (): Promise<
  HTMLCollectionOf<HTMLVideoElement>
> => {
  return new Promise((resolve, reject) => {
    const videoTags = document.getElementsByTagName('video');
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

export const getPlayerViewElement = () => {
  const videoParents = document.getElementsByClassName(
    'watch-video--player-view'
  ) as HTMLCollection;
  if (videoParents[0]) return videoParents[0] as HTMLElement;
  return null;
};
