import { createSlice } from '@reduxjs/toolkit';

type props = {
  theme: string;
  enableBackground: boolean;
  accentColor: string;
  subTitleColor: string;
  autoSkip: boolean;
  autoNextEpisode: boolean;
  intervalIds: NodeJS.Timeout[];
};

const miscState: props = {
  theme: 'light',
  enableBackground: true,
  accentColor: '#ff005d',
  subTitleColor: '#ffffff',
  autoSkip: false,
  autoNextEpisode: false,
  intervalIds: [] as NodeJS.Timeout[],
};

const miscSlice = createSlice({
  name: 'settings',
  initialState: miscState,
  reducers: {
    sliceSetTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    sliceSetAutoSkip: (state, action) => {
      return { ...state, autoSkip: action.payload };
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
    sliceSetIntervalIds: (state, action) => {
      return { ...state, intervalIds: [...state.intervalIds, action.payload] };
    },
  },
});

export const {
  sliceSetTheme,
  sliceSetAutoNextEpisode,
  sliceSetAutoSkip,
  sliceSetEnableBackground,
  sliceSetAccentColor,
  sliceResetMisc,
  sliceSetIntervalIds,
} = miscSlice.actions;
export default miscSlice.reducer;
