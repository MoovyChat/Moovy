import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const settingsState = {
  theme: themes.LIGHT,
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    sliceSetTheme: (state) => {
      return {
        ...state,
        theme: state.theme === themes.LIGHT ? themes.DARK : themes.LIGHT,
      };
    },
  },
});

export const { sliceSetTheme } = SettingsSlice.actions;
export default SettingsSlice.reducer;
