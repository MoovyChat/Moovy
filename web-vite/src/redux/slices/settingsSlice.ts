import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const settingsState = {
  theme: themes.DARK,
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    sliceSetTheme: (state, action: { payload: boolean }) => {
      return {
        ...state,
        theme: action.payload ? themes.DARK : themes.LIGHT,
      };
    },
  },
});

export const { sliceSetTheme } = SettingsSlice.actions;
export default SettingsSlice.reducer;
