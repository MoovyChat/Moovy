import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const popupState = {
  isPopupOpened: false,
  selectedElement: '',
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
  },
});

export const { sliceSetIsPopupOpened, sliceSetSelectedElement } =
  PopupSlice.actions;
export default PopupSlice.reducer;
