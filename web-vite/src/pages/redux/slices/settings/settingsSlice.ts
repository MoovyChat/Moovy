import { createSlice } from "@reduxjs/toolkit";
import { SettingsInterface } from "../../../../helpers/interfaces";

const settingsState: SettingsInterface = {
  chatWindowSize: "30",
  videoParentSize: "70", //Remove
  videoSize: "70",
  openChatWindow: false,
  smoothWidth: 0,
  isPopSlideOpen: false,
  popSlideContentType: "",
  popSlideUserId: "",
  popSlideData: { data: null },
  chatMode: "global",
};

type ChatMode = "global" | "nest";

interface SetChatModeAction {
  type: string;
  payload: ChatMode;
}

const SettingsSlice = createSlice({
  name: "settings",
  initialState: settingsState,
  reducers: {
    sliceSetChatWindowSize: (state, action) => {
      return { ...state, chatWindowSize: action.payload + "" };
    },
    sliceSetChatMode: (state, action: SetChatModeAction) => {
      return { ...state, chatMode: action.payload };
    },
    sliceSetVideoSize: (state, action) => {
      return { ...state, videoSize: action.payload };
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
    sliceSetPopSlideData: (
      state,
      action: { payload: { data: any }; type: string }
    ) => {
      return { ...state, popSlideData: action.payload };
    },
    sliceResetPopUp: (state) => {
      return {
        ...state,
        isPopSlideOpen: false,
        popSlideContentType: "",
        popSlideUserId: "",
        popSlideData: { data: null },
      };
    },
    sliceResetSettings: () => {
      return settingsState;
    },
  },
});

export const {
  sliceSetChatWindowSize,
  sliceSetChatMode,
  sliceSetVideoSize,
  sliceSetIsOpenChatWindow,
  sliceSetSmoothWidth,
  sliceResetSettings,
  sliceSetPopSlide,
  slicePopSlideContentType,
  sliceResetPopUp,
  sliceSetPopSlideData,
  sliceSetPopSlideUserId,
} = SettingsSlice.actions;
export default SettingsSlice.reducer;
