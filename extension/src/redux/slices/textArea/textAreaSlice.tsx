import { NameObject } from '../../../Utils/interfaces';
import { createSlice } from '@reduxjs/toolkit';

type textAreaTypes = {
  text: string;
  isTextAreaFocused: boolean;
  isTextAreaClicked: boolean;
  nameSuggestions: NameObject[];
  wordSuggestions: string[];
};
export const textAreaState: textAreaTypes = {
  text: '',
  isTextAreaFocused: false,
  isTextAreaClicked: false,
  nameSuggestions: [],
  wordSuggestions: [],
};

const TextAreaSlice = createSlice({
  name: 'textArea',
  initialState: textAreaState,
  reducers: {
    sliceSetTextAreaMessage: (state, action) => {
      return { ...state, text: action.payload };
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
} = TextAreaSlice.actions;
export default TextAreaSlice.reducer;
