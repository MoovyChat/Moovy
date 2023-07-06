import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const settingsState = {
  theme: themes.MIDNIGHT_BLUE,
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    sliceSetTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const { sliceSetTheme } = SettingsSlice.actions;
export default SettingsSlice.reducer;
