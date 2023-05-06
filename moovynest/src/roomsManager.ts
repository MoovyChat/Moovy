import { Socket } from "socket.io";
import { CustomSocket } from "./customSocket";

interface RoomUser {
  id: string;
  user: any;
  socket?: Socket;
}

export interface SimplifiedRoomUser {
  id: string;
  user: any;
}

const rooms: { [key: string]: RoomUser[] } = {};

function addUserToRoom(roomId: string, socket: CustomSocket, user: any) {
  socket.join(roomId);
  socket.roomId = roomId;
  socket.user = user;

  if (!rooms[roomId]) {
    rooms[roomId] = [];
  }

  const existingUser = rooms[roomId].find(
    (roomUser: RoomUser) => roomUser.id === socket.id
  );
  if (!existingUser) {
    rooms[roomId].push({ id: socket.id, user });
  }
}

function removeUserFromRoom(socket: any) {
  if (socket.roomId && socket.user) {
    rooms[socket.roomId] = rooms[socket.roomId].filter(
      (roomUser: RoomUser) => roomUser.id !== socket.id
    );
    return true;
  }
  return false;
}

function getUsersInRoom(roomId: string): RoomUser[] {
  console.log("getUsersInRoom");
  const users = rooms[roomId] || [];
  return users.map(({ id, user }) => ({ id, user }));
}

export { addUserToRoom, removeUserFromRoom, getUsersInRoom, rooms };
