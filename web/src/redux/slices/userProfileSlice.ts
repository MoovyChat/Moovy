import { Profile } from '../../generated/graphql';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const userProfileState: Profile = {
  fullname: '',
  dob: '',
  gender: '',
  bio: '',
  createdAt: '',
  updatedAt: '',
  userId: '',
  deletedAt: '',
};

const UserProfileSlice = createSlice({
  name: 'user',
  initialState: userProfileState,
  reducers: {
    sliceSetProfile: (state, action: { payload: Profile; type: string }) => {
      return action.payload;
    },
    sliceUpdateProfileField: (
      state,
      action: { payload: { key: string; value: string }; type: string },
    ) => {
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    },
  },
});

export const { sliceSetProfile, sliceUpdateProfileField } =
  UserProfileSlice.actions;
export default UserProfileSlice.reducer;
