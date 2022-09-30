import { SettingsInterface } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const textAreaState = {
  text: '',
  isTextAreaFocused: false,
  isTextAreaClicked: false,
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
  },
});

export const {
  sliceSetTextAreaMessage,
  sliceSetIsTextAreaFocused,
  sliceSetIsTextAreaClicked,
} = TextAreaSlice.actions;
export default TextAreaSlice.reducer;
