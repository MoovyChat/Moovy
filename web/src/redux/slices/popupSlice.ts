import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const popupState = {
  isPopupOpened: false,
  selectedElement: '',
  popupData: {},
};

const PopupSlice = createSlice({
  name: 'popup',
  initialState: popupState,
  reducers: {
    sliceSetIsPopupOpened: (state, action: { payload: boolean }) => {
      return { ...state, isPopupOpened: action.payload };
    },
    sliceSetSelectedElement: (state, action: { payload: string }) => {
      return {
        ...state,
        selectedElement: action.payload,
      };
    },
    sliceSetPopupData: (state, action) => {
      return { ...state, popupData: action.payload };
    },
  },
});

export const {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
  sliceSetPopupData,
} = PopupSlice.actions;
export default PopupSlice.reducer;
