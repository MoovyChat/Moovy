import { createSlice } from "@reduxjs/toolkit";
import {
  filterType,
  videoFilterSettings,
} from "../../../../helpers/interfaces";

type toxicProps = {
  identity_attack: number;
  insult: number;
  obscene: number;
  severe_toxicity: number;
  threat: number;
  toxicity: number;
};

type props = {
  theme: string;
  enableBackground: boolean;
  openFilterSection: boolean;
  openBorderSection: boolean;
  accentColor: string;
  subTitleColor: string;
  autoSkip: boolean;
  autoNextEpisode: boolean;
  intervalIds: NodeJS.Timeout[];
  isProfileNeedsToBeUpdated: boolean;
  font: string;
  toxicScores: toxicProps;
  flagged: boolean;
  isReportActive: string;
  presetFilter: filterType | null;
  filterValues: videoFilterSettings;
  selectedFilters: filterType[];
};

const miscState: props = {
  theme: "light",
  enableBackground: true,
  accentColor: "#ff005d",
  subTitleColor: "#ffffff",
  autoSkip: false,
  autoNextEpisode: false,
  openFilterSection: false,
  openBorderSection: false,
  intervalIds: [] as NodeJS.Timeout[],
  isProfileNeedsToBeUpdated: false,
  isReportActive: "",
  font: "",
  flagged: false,
  presetFilter: null,
  toxicScores: {
    toxicity: 0,
    threat: 0,
    severe_toxicity: 0,
    obscene: 0,
    insult: 0,
    identity_attack: 0,
  },
  filterValues: {
    blur: "0",
    contrast: "1",
    brightness: "1",
    grayscale: "0",
    invert: "0",
    sepia: "0",
    saturate: "100",
    hue: "0",
  },
  selectedFilters: [],
};

const miscSlice = createSlice({
  name: "settings",
  initialState: miscState,
  reducers: {
    sliceSetTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    sliceSetIsReportActive: (state, action) => {
      return { ...state, isReportActive: action.payload };
    },
    sliceSetOpenFilterSection: (state, action) => {
      return { ...state, openFilterSection: action.payload };
    },
    sliceSetOpenBorderSection: (state, action) => {
      return { ...state, openBorderSection: action.payload };
    },
    sliceSetToxicValues: (state, action) => {
      return { ...state, toxicScores: action.payload };
    },
    sliceSetPresetFilter: (state, action: { payload: filterType }) => {
      return { ...state, presetFilter: action.payload };
    },
    sliceSetAutoSkip: (state, action) => {
      return { ...state, autoSkip: action.payload };
    },
    sliceSetFlagged: (state, action) => {
      return { ...state, flagged: action.payload };
    },
    sliceSetAutoNextEpisode: (state, action) => {
      return { ...state, autoNextEpisode: action.payload };
    },
    sliceSetEnableBackground: (state, action) => {
      return { ...state, enableBackground: action.payload };
    },
    sliceSetAccentColor: (state, action) => {
      return { ...state, accentColor: action.payload };
    },
    sliceResetMisc: () => {
      return miscState;
    },
    sliceSetFont: (state, action) => {
      return { ...state, font: action.payload };
    },
    sliceSetIsProfileNeedsToBeUpdated: (state, action) => {
      return { ...state, isProfileNeedsToBeUpdated: action.payload };
    },
    sliceSetIntervalIds: (state, action) => {
      return { ...state, intervalIds: [...state.intervalIds, action.payload] };
    },
    sliceSetFilterValues: (state, action: { payload: videoFilterSettings }) => {
      return { ...state, filterValues: action.payload };
    },
    sliceSetSelectedFilters: (state, action: { payload: filterType[] }) => {
      return { ...state, selectedFilters: action.payload };
    },
  },
});

export const {
  sliceSetTheme,
  sliceSetFont,
  sliceSetAutoNextEpisode,
  sliceSetOpenFilterSection,
  sliceSetAutoSkip,
  sliceSetOpenBorderSection,
  sliceSetEnableBackground,
  sliceSetAccentColor,
  sliceResetMisc,
  sliceSetIntervalIds,
  sliceSetIsProfileNeedsToBeUpdated,
  sliceSetToxicValues,
  sliceSetPresetFilter,
  sliceSetFlagged,
  sliceSetIsReportActive,
  sliceSetFilterValues,
  sliceSetSelectedFilters,
} = miscSlice.actions;
export default miscSlice.reducer;
