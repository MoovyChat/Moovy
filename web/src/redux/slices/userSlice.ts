import { User } from '../../utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const userState: User = {
  id: '',
  name: '',
  email: '',
  nickname: '',
  photoUrl: '',
  followerCount: 0,
  followingCount: 0,
  watchedMovies: [],
  joinedAt: '',
  updatedAt: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    sliceSetUser: (state, action: { payload: User; type: string }) => {
      return action.payload;
    },
  },
});

export const { sliceSetUser } = UserSlice.actions;
export default UserSlice.reducer;
