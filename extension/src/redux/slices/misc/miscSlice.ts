import { createSlice } from '@reduxjs/toolkit';

export const miscState = {
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
    sliceSetEnableBackground: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, enableBackground: action.payload };
    },
    sliceSetAccentColor: (state, action) => {
      return { ...state, accentColor: action.payload };
    },
    sliceSetSubTitleColor: (state, action) => {
      return { ...state, subTitleColor: action.payload };
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
  sliceSetSubTitleColor,
  sliceSetAccentColor,
  sliceResetMisc,
  sliceSetIntervalIds,
} = miscSlice.actions;
export default miscSlice.reducer;
