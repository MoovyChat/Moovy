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
    sliceSetEnableBackground: (state, action) => {
      return { ...state, enableBackground: action.payload };
    },
    sliceSetKnobColor: (state, action) => {
      return { ...state, knobColor: action.payload };
    },
    sliceResetSettings: () => {
      return miscState;
    },
  },
});

export const { sliceSetTheme, sliceSetEnableBackground, sliceSetKnobColor } =
  miscSlice.actions;
export default miscSlice.reducer;
