import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../../helpers/interfaces";

const userState: User = {
  id: "",
  name: "",
  bg: "",
  email: "",
  nickname: "",
  photoUrl: "",
  watchedMovies: [],
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    sliceAddUser: (_state, action) => {
      return action.payload;
    },
    sliceAddUserNickName: (state, action) => {
      state.nickname = action.payload;
    },
    sliceAddWatched: (state, action) => {
      state.watchedMovies = action.payload;
    },
  },
});

export const { sliceAddUser, sliceAddUserNickName } = userSlice.actions;
export default userSlice.reducer;
