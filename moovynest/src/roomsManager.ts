import { Socket } from "socket.io";
import { CustomSocket } from "./customSocket";

interface RoomUser {
  id: string;
  user: any;
  name?: string;
  socket?: Socket;
  isConnectedToCall?: boolean;
}

export interface RoomInfo {
  users: RoomUser[];
  roomName: string;
  roomId: string;
}

const rooms: RoomInfo[] = [];

function addUserToRoom(
  roomId: string,
  socket: CustomSocket,
  user: any,
  roomName: string
) {
  socket.join(roomId);
  socket.roomId = roomId;
  socket.user = user;

  let existingRoom = rooms.find((room: RoomInfo) => room.roomId === roomId);

  if (!existingRoom) {
    existingRoom = { users: [], roomName, roomId };
    rooms.push(existingRoom);
  }

  const existingUser = existingRoom.users.find(
    (roomUser: RoomUser) => roomUser.id === socket.id
  );
  if (!existingUser) {
    existingRoom.users.push({ id: socket.id, user });
  }
}

function removeUserFromRoom(socket: any) {
  if (socket.roomId && socket.user) {
    const room = rooms.find((room: RoomInfo) => room.roomId === socket.roomId);

    if (room) {
      room.users = room.users.filter(
        (roomUser: RoomUser) => roomUser.id !== socket.id
      );

      // Remove the room if no users are left
      if (room.users.length === 0) {
        rooms.splice(rooms.indexOf(room), 1);
      }

      return true;
    }
  }
  return false;
}

function getUsersInRoom(roomId: string): RoomUser[] {
  console.log("getUsersInRoom");
  const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
  const users = room ? room.users : [];
  return users.map(({ id, user, isConnectedToCall }) => ({
    id,
    user,
    isConnectedToCall,
  }));
}

export { addUserToRoom, removeUserFromRoom, getUsersInRoom, rooms };
