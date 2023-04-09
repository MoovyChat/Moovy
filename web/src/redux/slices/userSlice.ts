import { Users } from '../../generated/graphql';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const userState: Users = {
  id: '',
  name: '',
  email: '',
  nickname: '',
  photoUrl: '',
  bg: '',
  followerCount: 0,
  followingCount: 0,
  watchedMovies: [],
  joinedAt: '',
  updatedAt: '',
  deletedAt: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    sliceSetUser: (state, action: { payload: Users; type: string }) => {
      return action.payload;
    },
    sliceSetUserNickName: (
      state,
      action: { payload: string; type: string },
    ) => {
      return { ...state, nickname: action.payload };
    },
    sliceResetUser: () => {
      return userState;
    },
  },
});

export const { sliceSetUser, sliceSetUserNickName, sliceResetUser } =
  UserSlice.actions;
export default UserSlice.reducer;
