import { SettingsInterface } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { iconsEnum } from '../../../Utils/enums';

export const toastState = {
  visible: false,
  message: 'Default',
  icon: '',
};

const ToastSlice = createSlice({
  name: 'toast',
  initialState: toastState,
  reducers: {
    sliceSetToastVisible: (state, action) => {
      return { ...state, visible: action.payload };
    },
    sliceSetToastBody: (state, action) => {
      const { icon, message } = action.payload;
      return { ...state, icon, message };
    },
  },
});

export const { sliceSetToastVisible, sliceSetToastBody } = ToastSlice.actions;
export default ToastSlice.reducer;
