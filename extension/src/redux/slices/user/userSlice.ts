import { User } from '../../../Utils/interfaces';
import { createSlice } from '@reduxjs/toolkit';

export const userState: User = {
  id: '',
  name: '',
  email: '',
  nickname: '',
  photoUrl: '',
  comments: [],
  replies: [],
  watchedMovies: [],
  favorites: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    sliceAddUser: (_state, action) => {
      return action.payload;
    },
    sliceAddUserId: (state, action) => {
      state.id = action.payload;
    },
    sliceAddUserName: (state, action) => {
      state.name = action.payload;
    },
    sliceAddUserNickName: (state, action) => {
      state.nickname = action.payload;
    },
    sliceAddUserPhotoURL: (state, action) => {
      state.photoUrl = action.payload;
    },
    sliceAddComments: (state, action) => {
      state.comments = action.payload;
    },
    sliceAddReplies: (state, action) => {
      state.replies = action.payload;
    },
    sliceAddWatched: (state, action) => {
      state.watchedMovies = action.payload;
    },
    sliceResetUser: () => {
      return userState;
    },
  },
});

export const {
  sliceAddUser,
  sliceAddUserId,
  sliceAddUserName,
  sliceAddUserNickName,
  sliceAddUserPhotoURL,
  sliceAddComments,
  sliceAddReplies,
  sliceResetUser,
} = userSlice.actions;
export default userSlice.reducer;
