import { createSlice } from '@reduxjs/toolkit';

export const textAreaState = {
  text: '',
  isTextAreaFocused: false,
  isTextAreaClicked: false,
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
  },
});

export const {
  sliceSetTextAreaMessage,
  sliceSetIsTextAreaFocused,
  sliceSetIsTextAreaClicked,
  sliceSetWordSuggestions,
} = TextAreaSlice.actions;
export default TextAreaSlice.reducer;
