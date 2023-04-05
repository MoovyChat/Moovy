import { borderType, filterType } from '../../Utils/interfaces';
import { setStoredBorder, setStoredFilterValues } from '../../Utils/storage';

const samplePhotoUrl =
  'https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1';
export const filters: filterType[] = [
  {
    title: 'default',
    filter: 'none',
    isSelected: true,
    url: samplePhotoUrl,
  },
  {
    title: 'grayscale',
    min: 0,
    max: 2,
    step: 0.05,
    defaultValue: 0,
    sampleFilter: 'grayScale(2)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'contrast',
    min: 0.5,
    max: 2,
    step: 0.07,
    defaultValue: 1,
    sampleFilter: 'contrast(1.75)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'blur',
    min: 0,
    max: 40,
    step: 0.5,
    sampleFilter: 'blur(6px)',
    defaultValue: 0,
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'brightness',
    min: 0.5,
    max: 2,
    step: 0.05,
    defaultValue: 1,
    sampleFilter: 'brightness(1.75)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'invert',
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0,
    sampleFilter: 'invert(1)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'sepia',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
    sampleFilter: 'sepia(60)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'saturate',
    min: 0,
    max: 200,
    step: 1,
    defaultValue: 100,
    sampleFilter: 'saturate(50)',
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: 'hue',
    min: 0,
    max: 1,
    step: 0.01,
    defaultValue: 0,
    sampleFilter: 'hue-rotate(0.5turn)',
    isSelected: false,
    url: samplePhotoUrl,
  },
];

export const borders: borderType[] = [
  {
    title: 'default',
    color: 'none',
  },
  {
    title: 'white',
    color: 'white',
  },
  {
    title: 'red',
    color: 'red',
  },
  {
    title: 'blue',
    color: 'blue',
  },
  {
    title: 'green',
    color: 'green',
  },
  {
    title: 'sky',
    color: '#00efff',
  },
];

// Apply the filters.
export const applyFilter = (
  selectedFilters: filterType[],
  filterValues: any,
  videoElem: HTMLVideoElement | undefined
) => {
  const filterText = selectedFilters
    .map((f) => {
      switch (f.title) {
        case 'grayscale':
        case 'contrast':
        case 'brightness':
        case 'invert':
          return `${f.title}(${filterValues[f.title]})`;
        case 'blur':
          return `${f.title}(${filterValues[f.title]}px)`;
        case 'sepia':
        case 'saturate':
          return `${f.title}(${filterValues[f.title]}%)`;
        case 'hue':
          return `hue-rotate(${filterValues.hue}turn)`;
        default:
          break;
      }
    })
    .join(' ');
  setStoredFilterValues(filterValues);
  if (videoElem) videoElem.style['filter'] = filterText;
};

// Add the border to the video parent.
export const addBorder = (
  canvas: HTMLElement | undefined,
  screenSize: string,
  border: borderType
) => {
  if (!canvas) return;
  setStoredBorder(border);
  if (border.title === 'default') {
    canvas.style.cssText = `
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width:${parseInt(screenSize) + 2}%;
        height:${parseInt(screenSize) + 2}%;
        overflow: hidden;
      `;
  } else {
    canvas.style.cssText += `
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width:${parseInt(screenSize) - 2}%;
        height:${parseInt(screenSize) - 2}%;
        overflow: hidden;
        box-shadow: 0px 0px 25px ${border.color};
      `;
  }
};
