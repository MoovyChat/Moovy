import { Users } from "./../../../../generated/graphql";
import { createSlice } from "@reduxjs/toolkit";

interface incomingMessageInterface {
  user: Users;
  type: string;
  message: string;
}

interface SocketStateInterface {
  roomId: string;
  joinedUsers: Users[];
  incomingMessages: incomingMessageInterface[];
  userTyping: string;
}

const socketState: SocketStateInterface = {
  roomId: "test",
  joinedUsers: [],
  incomingMessages: [],
  userTyping: "",
};

const socketSlice = createSlice({
  name: "toast",
  initialState: socketState,
  reducers: {
    sliceSetRoomId: (state, action) => {
      return { ...state, roomId: action.payload };
    },
    sliceSetJoinedUsers: (state, action) => {
      return { ...state, joinedUsers: [...state.joinedUsers, action.payload] };
    },
    sliceSetUserTyping: (state, action) => {
      return { ...state, userTyping: action.payload };
    },
    sliceSetIncomingMessages: (state, action) => {
      return {
        ...state,
        incomingMessages: [...state.incomingMessages, action.payload],
      };
    },
  },
});

export const {
  sliceSetRoomId,
  sliceSetJoinedUsers,
  sliceSetIncomingMessages,
  sliceSetUserTyping,
} = socketSlice.actions;
export default socketSlice.reducer;
