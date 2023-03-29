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
  },
});

export const { sliceSetTextAreaMessage, sliceSetIsTextAreaFocused } =
  TextAreaSlice.actions;
export default TextAreaSlice.reducer;
