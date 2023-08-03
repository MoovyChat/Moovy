import { createSlice } from '@reduxjs/toolkit';

export const miscState = {
  isNavBarOpen: false,
  emojiSearchValue: '',
  dominantColor: '',
  isProfileExists: false,
  isUserAdmin: false,
  emojiGroupActive: {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
  },
};

const MiscSlice = createSlice({
  name: 'misc',
  initialState: miscState,
  reducers: {
    sliceSetNavBar: (state, action: { payload: boolean }) => {
      return { ...state, isNavBarOpen: action.payload };
    },
    sliceSetIsUserAdmin: (state, action) => {
      return { ...state, isUserAdmin: action.payload };
    },
    sliceSetIsProfileExists: (state, action) => {
      return { ...state, isProfileExists: action.payload };
    },
    sliceSetEmojiSearchValue: (state, action) => {
      return { ...state, emojiSearchValue: action.payload };
    },
    sliceSetEmojiGroupActive: (
      state,
      action: { payload: { key: number; value: boolean }; type: string },
    ) => {
      const { key, value } = action.payload;
      return {
        ...state,
        emojiGroupActive: { ...state.emojiGroupActive, [key]: value },
      };
    },
  },
});

export const {
  sliceSetNavBar,
  sliceSetIsProfileExists,
  sliceSetEmojiSearchValue,
  sliceSetEmojiGroupActive,
  sliceSetIsUserAdmin,
} = MiscSlice.actions;
export default MiscSlice.reducer;
