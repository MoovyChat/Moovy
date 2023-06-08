import _ from "lodash";
import { Users } from "./../../../../generated/graphql";
import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

export interface incomingMessageInterface {
  id?: string;
  user: Users;
  type: string;
  message: string;
  seekTime?: string;
}

export type RoomUser = {
  id: string;
  user: Users;
  isAdmin: boolean;
  isSharingCamera?: boolean;
};

interface SocketStateInterface {
  roomId: string;
  roomName: string;
  isPublic: boolean;
  joinedRoom: boolean;
  /* `joinedUsers` is an array of `Users` objects representing the users who have joined the chat room.
  The `sliceSetJoinedUsers` reducer updates this array by taking in a payload of new users and
  adding them to the existing array while removing any duplicates based on their `id` property. */
  joinedUsers: RoomUser[];
  incomingMessages: incomingMessageInterface[];
  userTyping: string;
  accessCamera: boolean;
  roomUsers: any[];
  isConnected: boolean;
  isNestAdmin: boolean;
}

const socketState: SocketStateInterface = {
  roomId: "",
  roomName: "",
  isPublic: false,
  joinedRoom: false,
  joinedUsers: [],
  incomingMessages: [],
  userTyping: "",
  accessCamera: false,
  roomUsers: [],
  isConnected: false,
  isNestAdmin: false,
};

const socketSlice = createSlice({
  name: "toast",
  initialState: socketState,
  reducers: {
    sliceSetRoomId: (state, action) => {
      return { ...state, roomId: action.payload };
    },
    sliceSetIsNestAdmin: (state, action) => {
      return { ...state, isNestAdmin: action.payload };
    },
    sliceSetRoomName: (state, action) => {
      return { ...state, roomName: action.payload };
    },
    sliceSetSocketConnectionStatus: (state, action) => {
      return { ...state, isConnected: action.payload };
    },
    sliceSetJoinedRoom: (state, action) => {
      return { ...state, joinedRoom: action.payload };
    },
    sliceSetIsRoomPublic: (state, action) => {
      return { ...state, isPublic: action.payload };
    },
    sliceSetJoinedUsers: (state, action) => {
      const newUsers = action.payload as RoomUser[];
      const uniqueUsers = _.uniqBy(newUsers, "id");
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

      if (newMessage.id) {
        const uniqueMessages = _.uniqWith(
          [...existingMessages, newMessage],
          (msgA, msgB) => msgA.id && msgB.id && msgA.id === msgB.id
        );
        return { ...state, incomingMessages: uniqueMessages };
      } else {
        return {
          ...state,
          incomingMessages: [...existingMessages, newMessage],
        };
      }
    },

    sliceSetResetIncomingMessages: (state) => {
      return { ...state, incomingMessages: [] };
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
  sliceSetSocketConnectionStatus,
  sliceSetResetIncomingMessages,
  sliceSetUserTyping,
  sliceSetIsNestAdmin,
} = socketSlice.actions;
export default socketSlice.reducer;
