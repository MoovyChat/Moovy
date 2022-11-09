import { borderType, filterType } from '../../Utils/interfaces';
import { setStoredBorder, setStoredFilterValues } from '../../Utils/storage';

// Apply the filters.
export const applyFilter = (
  selectedFilters: filterType[],
  filterValues: any,
  videoElem: HTMLVideoElement | undefined
) => {
  console.log({ selectedFilters, filterValues, videoElem });
  let filterText = selectedFilters
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
