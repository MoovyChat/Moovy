import { getStoredFilterValues, getStoredVideoFilters } from '../Utils/storage';

import { filterType } from '../Utils/interfaces';

type NotPresentStrategy = 'error' | 'ignore';

function getElementByDataUIA(tag: string): HTMLElement;
function getElementByDataUIA(tag: string, IfNotPresent: 'error'): HTMLElement;
function getElementByDataUIA(
  tag: string,
  IfNotPresent: 'ignore'
): HTMLElement | null;
function getElementByDataUIA(tag: string, IfNotPresent?: NotPresentStrategy) {
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

export const getIdFromNetflixURL = (url: string): string => {
  let urlPath = url.split('?')[0];
  console.log(
    '%c[qchat]',
    'color: #00d9ff',
    'Retrieved movie id',
    urlPath.split('watch/')[1]
  );
  return urlPath.split('watch/')[1];
};

export const getDomain = (url: string) => {
  let result = '';
  let domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im;
  let match: RegExpMatchArray | null;
  if ((match = url.match(domainRegex))) {
    result = match[1];
    if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
      result = match[1];
    }
  }
  return result;
};

export const removeNodeFromDomById = (nodeId: string) => {
  if (!nodeId) return;
  let node = document.getElementById(nodeId) as Node;
  let nodeParent = node?.parentNode;
  nodeParent?.removeChild(node);
};

export const getVideoElement = (): Promise<
  HTMLCollectionOf<HTMLVideoElement>
> => {
  return new Promise((resolve, reject) => {
    const videoTags = document.getElementsByTagName('video');
    resolve(videoTags);
  });
};

export const setVideoFilters = () => {
  getVideoElement().then((element) => {
    const videoElem = element[0];
    getStoredFilterValues().then((filters) => {
      console.log(filters);
      let filtersD = filters as any;
      let filterText = filtersD
        .map((f: filterType) => {
          switch (f.title) {
            case 'grayscale':
            case 'contrast':
            case 'brightness':
            case 'invert':
              return `${f.title}(${filtersD[f.title]})`;
            case 'blur':
              return `${f.title}(${filtersD[f.title]}px)`;
            case 'sepia':
            case 'saturate':
              return `${f.title}(${filtersD[f.title]}%)`;
            case 'hue':
              return `hue-rotate(${filtersD.hue}turn)`;
            default:
              break;
          }
        })
        .join(' ');
      if (videoElem) videoElem.style['filter'] = filterText;
    });
  });
};

export const getPlayerViewElement = () => {
  const videoParents = document.getElementsByClassName(
    'watch-video--player-view'
  ) as HTMLCollection;
  if (videoParents[0]) return videoParents[0] as HTMLElement;
  return null;
};
