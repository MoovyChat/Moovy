import { createSlice } from "@reduxjs/toolkit";
import { loadingInterface } from "../../../../helpers/interfaces";

const loadingState: loadingInterface = {
  isCommentsLoaded: false,
  isRepliesLoaded: false,
  isEditNameBoxOpen: false,
  isMovieExists: false,
  isMovieLoaded: false,
  isMovieInsertionFinished: false,
  loadingText: "",
  isNextCommentsLoaded: false,
  isNewCommentsLoaded: false,
  networkError: false,
  networkMessage: "",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: loadingState,
  reducers: {
    sliceCheckCommentsLoaded: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isCommentsLoaded: action.payload };
    },
    sliceSetNetworkError: (state, action) => {
      return { ...state, networkError: action.payload };
    },
    sliceCheckNewCommentsLoaded: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isNewCommentsLoaded: action.payload };
    },
    sliceCheckNextCommentsLoaded: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isNextCommentsLoaded: action.payload };
    },
    sliceCheckRepliesLoaded: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isRepliesLoaded: action.payload };
    },
    sliceCheckEditBoxOpen: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isEditNameBoxOpen: action.payload };
    },
    sliceSetIsMovieExists: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isMovieExists: action.payload };
    },
    sliceSetLoadingText: (state, action: { payload: string; type: string }) => {
      return { ...state, loadingText: action.payload };
    },
    sliceSetIsMovieLoaded: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isMovieLoaded: action.payload };
    },
    sliceSetIsMovieInsertionFinished: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, isMovieInsertionFinished: action.payload };
    },
    sliceSetNetworkErrorMessage: (state, action) => {
      return { ...state, networkMessage: action.payload };
    },
    sliceValidateMovieLoading: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return {
        ...state,
        isMovieExists: action.payload,
        isMovieLoaded: action.payload,
        isMovieInsertionFinished: action.payload,
      };
    },
  },
});

export const {
  sliceCheckCommentsLoaded,
  sliceSetNetworkErrorMessage,
  sliceCheckRepliesLoaded,
  sliceCheckEditBoxOpen,
  sliceSetLoadingText,
  sliceSetIsMovieExists,
  sliceSetIsMovieLoaded,
  sliceSetNetworkError,
  sliceSetIsMovieInsertionFinished,
  sliceValidateMovieLoading,
  sliceCheckNewCommentsLoaded,
  sliceCheckNextCommentsLoaded,
} = loadingSlice.actions;
export default loadingSlice.reducer;
