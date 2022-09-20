import { User, loadingInterface } from '../../../Utils/interfaces';

import { createSlice } from '@reduxjs/toolkit';

export const loadingState: loadingInterface = {
  isCommentsLoaded: false,
  isRepliesLoaded: false,
  isEditNameBoxOpen: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: loadingState,
  reducers: {
    sliceCheckCommentsLoaded: (state, action) => {
      return { ...state, isCommentsLoaded: action.payload };
    },
    sliceCheckRepliesLoaded: (state, action) => {
      return { ...state, isRepliesLoaded: action.payload };
    },
    sliceCheckEditBoxOpen: (state, action) => {
      return { ...state, isEditNameBoxOpen: action.payload };
    },
  },
});

export const {
  sliceCheckCommentsLoaded,
  sliceCheckRepliesLoaded,
  sliceCheckEditBoxOpen,
} = loadingSlice.actions;
export default loadingSlice.reducer;
