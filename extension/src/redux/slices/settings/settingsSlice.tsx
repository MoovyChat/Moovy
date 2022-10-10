import { SettingsInterface } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const settingsState: SettingsInterface = {
  chatWindowSize: '30',
  videoParentSize: '70',
  videoSize: '70',
  openChatWindow: false,
  smoothWidth: 0,
  isPopSlideOpen: false,
  popSlideContentType: '',
  popSlideUserId: '',
  popSlideLikes: [],
  theme: 'light',
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    sliceSetChatWindowSize: (state, action) => {
      return { ...state, chatWindowSize: action.payload + '' };
    },
    sliceSetVideoSize: (state, action) => {
      return { ...state, videoSize: action.payload };
    },
    sliceSetVideoParentSize: (state, action) => {
      return { ...state, videoParentSize: action.payload };
    },
    sliceSetIsOpenChatWindow: (state, action) => {
      return { ...state, openChatWindow: action.payload };
    },
    sliceSetSmoothWidth: (state, action) => {
      return { ...state, smoothWidth: action.payload };
    },
    sliceSetPopSlide: (state, action) => {
      return { ...state, isPopSlideOpen: action.payload };
    },
    slicePopSlideContentType: (state, action) => {
      return { ...state, popSlideContentType: action.payload };
    },
    sliceSetPopSlideUserId: (state, action) => {
      return { ...state, popSlideUserId: action.payload };
    },
    sliceSetPopSlideLikes: (state, action) => {
      return { ...state, popSlideLikes: action.payload };
    },
    sliceSetTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    sliceResetSettings: () => {
      return settingsState;
    },
  },
});

export const {
  sliceSetChatWindowSize,
  sliceSetVideoSize,
  sliceSetVideoParentSize,
  sliceSetIsOpenChatWindow,
  sliceSetSmoothWidth,
  sliceResetSettings,
  sliceSetPopSlide,
  slicePopSlideContentType,
  sliceSetPopSlideUserId,
  sliceSetPopSlideLikes,
  sliceSetTheme,
} = SettingsSlice.actions;
export default SettingsSlice.reducer;
