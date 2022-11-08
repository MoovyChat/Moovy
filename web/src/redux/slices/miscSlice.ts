import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../constants';

export const miscState = {
  isNavBarOpen: false,
};

const MiscSlice = createSlice({
  name: 'misc',
  initialState: miscState,
  reducers: {
    sliceSetNavBar: (state, action: { payload: boolean }) => {
      return { ...state, isNavBarOpen: action.payload };
    },
  },
});

export const { sliceSetNavBar } = MiscSlice.actions;
export default MiscSlice.reducer;
