import _ from "lodash";
import { Users } from "./../../../../generated/graphql";
import { createSlice } from "@reduxjs/toolkit";

interface incomingMessageInterface {
  id?: string;
  user: Users;
  type: string;
  message: string;
}

interface SocketStateInterface {
  roomId: string;
  roomName: string;
  isPublic: boolean;
  joinedRoom: boolean;
  joinedUsers: Users[];
  incomingMessages: incomingMessageInterface[];
  userTyping: string;
  accessCamera: boolean;
  roomUsers: any[];
}

const socketState: SocketStateInterface = {
  roomId: "test",
  roomName: "test",
  isPublic: true,
  joinedRoom: false,
  joinedUsers: [],
  incomingMessages: [],
  userTyping: "",
  accessCamera: false,
  roomUsers: [],
};

const socketSlice = createSlice({
  name: "toast",
  initialState: socketState,
  reducers: {
    sliceSetRoomId: (state, action) => {
      return { ...state, roomId: action.payload };
    },
    sliceSetRoomName: (state, action) => {
      return { ...state, roomName: action.payload };
    },
    sliceSetJoinedRoom: (state, action) => {
      return { ...state, joinedRoom: action.payload };
    },
    sliceSetIsRoomPublic: (state, action) => {
      return { ...state, isPublic: action.payload };
    },
    sliceSetJoinedUsers: (state, action) => {
      const newUser = action.payload;
      const existingUsers = state.joinedUsers;
      const uniqueUsers = _.uniqWith([...existingUsers, newUser], _.isEqual);
      return { ...state, joinedUsers: uniqueUsers };
    },
    sliceSetUserTyping: (state, action) => {
      return { ...state, userTyping: action.payload };
    },
    sliceSetAccessCamera: (state, action) => {
      return { ...state, accessCamera: action.payload };
    },
    sliceSetIncomingMessages: (state, action) => {
      const newMessage = action.payload;
      const existingMessages = state.incomingMessages;
      const uniqueMessages = _.uniqWith(
        [...existingMessages, newMessage],
        (msgA, msgB) => msgA.id === msgB.id
      );
      return { ...state, incomingMessages: uniqueMessages };
    },
  },
});

export const {
  sliceSetRoomId,
  sliceSetRoomName,
  sliceSetJoinedRoom,
  sliceSetAccessCamera,
  sliceSetIsRoomPublic,
  sliceSetJoinedUsers,
  sliceSetIncomingMessages,
  sliceSetUserTyping,
} = socketSlice.actions;
export default socketSlice.reducer;
