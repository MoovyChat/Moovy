import { SettingsInterface } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const miscState = {
  theme: 'light',
  enableBackground: true,
  knobColor: '',
};

const miscSlice = createSlice({
  name: 'settings',
  initialState: miscState,
  reducers: {
    sliceSetTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
    sliceSetEnableBackground: (
      state,
      action: { payload: boolean; type: string }
    ) => {
      return { ...state, enableBackground: action.payload };
    },
    sliceSetKnobColor: (state, action) => {
      return { ...state, knobColor: action.payload };
    },
    sliceResetMisc: () => {
      return miscState;
    },
  },
});

export const {
  sliceSetTheme,
  sliceSetEnableBackground,
  sliceSetKnobColor,
  sliceResetMisc,
} = miscSlice.actions;
export default miscSlice.reducer;
