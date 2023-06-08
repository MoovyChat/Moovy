import { createSlice } from "@reduxjs/toolkit";
import { NameObject } from "../../../../helpers/interfaces";
import { Emoji } from "emojibase";
type textAreaTypes = {
  text: string;
  isTextAreaFocused: boolean;
  isTextAreaClicked: boolean;
  emojiSearchValue: string;
  nameSuggestions: NameObject[];
  wordSuggestions: string[];
  hoveredEmoji: Emoji | null;
};

const textAreaState: textAreaTypes = {
  text: "",
  isTextAreaFocused: false,
  isTextAreaClicked: false,
  nameSuggestions: [],
  wordSuggestions: [],
  emojiSearchValue: "",
  hoveredEmoji: null,
};

const TextAreaSlice = createSlice({
  name: "textArea",
  initialState: textAreaState,
  reducers: {
    sliceSetTextAreaMessage: (state, action) => {
      return { ...state, text: action.payload };
    },
    sliceSetHoveredEmoji: (state, action) => {
      return { ...state, hoveredEmoji: action.payload };
    },
    sliceSetEmojiSearchValue: (state, action) => {
      return { ...state, emojiSearchValue: action.payload };
    },
    sliceSetIsTextAreaFocused: (state, action) => {
      return { ...state, isTextAreaFocused: action.payload };
    },
    sliceSetIsTextAreaClicked: (state, action) => {
      return { ...state, isTextAreaClicked: action.payload };
    },
    sliceSetWordSuggestions: (state, action) => {
      return { ...state, wordSuggestions: action.payload };
    },
    sliceSetNameSuggestions: (state, action) => {
      return { ...state, nameSuggestions: action.payload };
    },
  },
});

export const {
  sliceSetTextAreaMessage,
  sliceSetIsTextAreaFocused,
  sliceSetIsTextAreaClicked,
  sliceSetWordSuggestions,
  sliceSetNameSuggestions,
  sliceSetEmojiSearchValue,
  sliceSetHoveredEmoji,
} = TextAreaSlice.actions;
export default TextAreaSlice.reducer;
