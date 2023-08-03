import { createSlice } from "@reduxjs/toolkit";
import { AvailableRoom } from "../../../helpers/interfaces";

interface NestStateInterface {
  type: string;
  visible: boolean;
  nests: AvailableRoom[];
  isGifOpen: boolean;
  isFullScreen: boolean;
}

const nestState: NestStateInterface = {
  type: "",
  visible: false,
  nests: [],
  isGifOpen: false,
  isFullScreen: false,
};

const nestSlice = createSlice({
  name: "manipulation",
  initialState: nestState,
  reducers: {
    sliceSetNestType: (state, action) => {
      return { ...state, type: action.payload };
    },
    sliceSetNests: (state, action) => {
      return { ...state, nests: action.payload };
    },
    sliceSetNestVisibility: (state, action) => {
      return { ...state, visible: action.payload };
    },
    sliceSetIsGifOpen: (state, action) => {
      return { ...state, isGifOpen: action.payload };
    },
    sliceSetNestFullScreen: (state, action) => {
      return { ...state, isFullScreen: action.payload };
    },
  },
});

export const {
  sliceSetNestType,
  sliceSetNestVisibility,
  sliceSetNests,
  sliceSetIsGifOpen,
  sliceSetNestFullScreen,
} = nestSlice.actions;
export default nestSlice.reducer;
