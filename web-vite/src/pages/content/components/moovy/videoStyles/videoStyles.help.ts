import { defaultVideoValues } from "../../../../../helpers/defaultValues";
import {
  filterType,
  borderType,
  videoFilterSettings,
} from "../../../../../helpers/interfaces";
import {
  setStoredFilterValues,
  setStoredBorder,
} from "../../../../../helpers/storage";

const samplePhotoUrl =
  "https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/qc.png?alt=media&token=f1b435bb-446b-4ea9-8c3c-9084a35397e1";
export const filters: filterType[] = [
  {
    title: "default",
    filter: "none",
    isSelected: true,
    url: samplePhotoUrl,
  },
  {
    title: "grayscale",
    min: 0,
    max: 2,
    step: 0.05,
    defaultValue: 0,
    sampleFilter: "grayScale(2)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "contrast",
    min: 0.5,
    max: 2,
    step: 0.07,
    defaultValue: 1,
    sampleFilter: "contrast(1.75)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "blur",
    min: 0,
    max: 40,
    step: 0.5,
    sampleFilter: "blur(6px)",
    defaultValue: 0,
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "brightness",
    min: 0.5,
    max: 2,
    step: 0.05,
    defaultValue: 1,
    sampleFilter: "brightness(1.75)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "invert",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0,
    sampleFilter: "invert(1)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "sepia",
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
    sampleFilter: "sepia(60)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "saturate",
    min: 0,
    max: 200,
    step: 1,
    defaultValue: 100,
    sampleFilter: "saturate(50)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "hue",
    min: 0,
    max: 360,
    step: 1,
    defaultValue: 0,
    sampleFilter: "hue-rotate(180deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
];

export const borders: borderType[] = [
  {
    title: "default",
    color: "none",
  },
  {
    title: "white",
    color: "white",
  },
  {
    title: "red",
    color: "red",
  },
  {
    title: "blue",
    color: "blue",
  },
  {
    title: "green",
    color: "green",
  },
  {
    title: "sky",
    color: "#00efff",
  },
];

// Apply the filters.
export const applyFilter = (
  filterValues: videoFilterSettings,
  videoElem: HTMLVideoElement | undefined
) => {
  const filterText = Object.keys(defaultVideoValues)
    .map((key) => {
      const currentValue = filterValues[key] ?? defaultVideoValues[key];
      if (currentValue !== defaultVideoValues[key]) {
        switch (key) {
          case "grayscale":
          case "contrast":
          case "brightness":
          case "invert":
            return `${key}(${currentValue})`;
          case "blur":
            return `${key}(${currentValue}px)`;
          case "sepia":
          case "saturate":
            return `${key}(${currentValue}%)`;
          case "hue":
            return `hue-rotate(${currentValue}deg)`;
          default:
            break;
        }
      }
    })
    .filter((value) => value !== undefined)
    .join(" ");

  if (Object.keys(filterValues).length === 0) {
    setStoredFilterValues(defaultVideoValues);
  } else {
    setStoredFilterValues(filterValues);
  }

  if (videoElem) videoElem.style["filter"] = filterText;
};

// Add the border to the video parent.
export const addBorder = (
  canvas: HTMLElement | undefined,
  screenSize: string,
  border: borderType
) => {
  if (!canvas) return;
  setStoredBorder(border);
  if (border.title === "default") {
    canvas.style.cssText = `
        margin: auto;
        width:${parseInt(screenSize) + 2}%;
        height:${parseInt(screenSize) + 2}%;
        overflow: hidden;
      `;
  } else {
    canvas.style.cssText += `
        margin: auto;
        width:${parseInt(screenSize) - 2}%;
        height:${parseInt(screenSize) - 2}%;
        overflow: hidden;
        box-shadow: 0px 0px 40px ${border.color};
      `;
  }
};

export const presetFilters: filterType[] = [
  {
    title: "None",
    sampleFilter: "",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "1977",
    sampleFilter: "sepia(50%) hue-rotate(-30deg) saturate(140%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Ashby",
    sampleFilter: "sepia(50%) contrast(120%) saturate(180%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Brooklyn",
    sampleFilter: "sepia(25%) contrast(125%) brightness(125%) hue-rotate(5deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Crema",
    sampleFilter:
      "sepia(50%) contrast(125%) brightness(115%) saturate(90%) hue-rotate(358deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "EarlyBird",
    sampleFilter:
      "sepia(25%) contrast(125%) brightness(115%) saturate(90%) hue-rotate(355deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Amaro",
    sampleFilter: "sepia(35%) contrast(110%) brightness(120%) saturate(130%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Nashville",
    sampleFilter:
      "sepia(25%) contrast(150%) brightness(90%) hue-rotate(345deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Juno",
    sampleFilter: "sepia(35%) contrast(115%) brightness(115%) saturate(180%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Clarendon",
    sampleFilter: "contrast(150%) brightness(150%) saturate(150%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Gingham",
    sampleFilter: "brightness(150%) saturate(150%) sepia(20%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Lark",
    sampleFilter:
      "brightness(120%) saturate(90%) contrast(90%) hue-rotate(10deg)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Moon",
    sampleFilter: "brightness(150%) saturate(80%) contrast(90%) sepia(20%);",
    isSelected: false,
    url: samplePhotoUrl,
  },
  {
    title: "Reyes",
    sampleFilter: "brightness(150%) saturate(100%) contrast(100%) sepia(20%)",
    isSelected: false,
    url: samplePhotoUrl,
  },
  // {
  //   title: "Moon I",
  //   sampleFilter: "brightness(140%) contrast(95%) saturate(0%) sepia(35%)",
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Perpetua',
  //   sampleFilter: 'brightness(125%) saturate(110%) contrast(110%)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Slumber',
  //   sampleFilter: 'brightness(80%) contrast(80%) sepia(20%) hue-rotate(180deg)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Toaster',
  //   sampleFilter:
  //     'brightness(95%) contrast(150%) sepia(25%) hue-rotate(-15deg)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'X-Pro II',
  //   sampleFilter:
  //     'brightness(175%) contrast(125%) saturate(130%) sepia(45%) hue-rotate(-5deg)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Lo-Fi',
  //   sampleFilter: 'contrast(150%) saturate(110%)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Aden',
  //   sampleFilter: 'brightness(115%) saturate(140%) sepia(20%)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Hudson',
  //   sampleFilter:
  //     'brightness(120%) contrast(120%) saturate(105%) sepia(25%) hue-rotate(-15deg)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Valencia',
  //   sampleFilter: 'brightness(110%) contrast(110%) sepia(25%)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Willow',
  //   sampleFilter: 'brightness(120%) contrast(85%) saturate(5%) sepia(20%)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
  // {
  //   title: 'Sierra',
  //   sampleFilter:
  //     'brightness(90%) contrast(150%) sepia(25%) hue-rotate(-15deg)',
  //   isSelected: false,
  //   url: samplePhotoUrl,
  // },
];
