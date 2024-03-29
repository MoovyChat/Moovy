import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const popupState = {
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
    sliceResetPopup: state => {
      return {
        ...state,
        popupData: {},
        isPopupOpened: false,
        selectedElement: '',
      };
    },
  },
});

export const {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
  sliceSetPopupData,
  sliceResetPopup,
} = PopupSlice.actions;
export default PopupSlice.reducer;
