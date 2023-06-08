import { Socket } from "socket.io";
import { CustomSocket } from "./customSocket";
import { Session, sessions } from "./sessionManager";

export type RoomUser = {
  id: string;
  user: any;
  name?: string;
  socket?: Socket;
  isAdmin: boolean;
  isSharingCamera?: boolean;
};

export type RoomInfo = {
  users: RoomUser[];
  roomName: string;
  roomId: string;
  url: string;
};

const rooms: RoomInfo[] = [];

/**
 * The function adds a user to a room and updates their socket ID and admin status if they already
 * exist in the room.
 * @param {string} roomId - a string representing the unique identifier of the room where the user will
 * be added.
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 * between the server and a client.
 * @param {any} user - The user object represents the user that is being added to the room. It could
 * contain information such as the user's name, ID, and any other relevant details.
 * @param {string} url - The URL of the room that the user is being added to.
 * @param {string} roomName - A string representing the name of the room that the user is being added
 * to.
 * @param {boolean} isAdmin - A boolean value indicating whether the user being added to the room is an
 * admin or not.
 * @returns the updated `existingRoom` object which contains information about the room, including the
 * users in the room and their socket IDs and admin status.
 */
function addUserToRoom(
  roomId: string,
  socket: CustomSocket,
  user: any,
  url: string,
  roomName: string,
  isAdmin: boolean
) {
  socket.join(roomId);
  socket.roomId = roomId;
  socket.user = user;

  let existingRoom = rooms.find((room: RoomInfo) => room.roomId === roomId);

  if (!existingRoom) {
    existingRoom = { users: [], roomName, roomId, url };
    rooms.push(existingRoom);
  }

  // Check if user already exists in the room
  const existingUser = existingRoom.users.find(
    (roomUser: RoomUser) => roomUser.user.id === user.id
  );

  if (existingUser) {
    // If the user already exists, update their socket id and admin status
    existingUser.id = socket.id;
    existingUser.isAdmin = isAdmin;
  } else {
    // If the user doesn't exist in the room, add them
    existingRoom.users.push({ id: socket.id, user, isAdmin });
  }
  return existingRoom;
}

/**
 * This function removes a user from a room and deletes the room if there are no users left.
 * @param {CustomSocket} socket - CustomSocket, which is likely a custom implementation of the Socket
 * interface in a WebSocket library. It probably contains information about the current socket
 * connection, such as the socket ID, the room ID it belongs to, and the user associated with the
 * socket.
 * @returns a boolean value. It returns `true` if the user was successfully removed from the room, and
 * `false` if either the socket does not have a roomId or user property, or if the room could not be
 * found in the rooms array.
 */
function removeUserFromRoom(socket: CustomSocket) {
  let removed = false;

  // We find the session corresponding to the socket
  sessions.forEach((session: Session, sessionId: string) => {
    if (
      session.socket.id === socket.id &&
      session.socket.roomId === socket.roomId
    ) {
      const room = rooms.find(
        (room: RoomInfo) => room.roomId === socket.roomId
      );

      // Filter out the leaving user from the room's users
      session.room.users = session.room.users.filter(
        (roomUser: RoomUser) => roomUser.id !== socket.id
      );

      // Remove the user's session
      sessions.delete(sessionId);

      // If no users are left in the room, we delete all sessions for that room
      if (session.room.users.length === 0) {
        room && rooms.splice(rooms.indexOf(room), 1);
        for (const [otherSessionId, otherSession] of sessions.entries()) {
          if (otherSession.room.roomId === session.room.roomId) {
            sessions.delete(otherSessionId);
          }
        }
      }
      removed = true;
    }
  });

  return removed;
}

/**
 * This TypeScript function returns an array of users in a given room, with their ID, username, camera
 * sharing status, and admin status.
 * @param {string} roomId - a string representing the ID of a chat room.
 * @returns The function `getUsersInRoom` returns an array of `RoomUser` objects. These objects contain
 * information about the users in a specific room, including their `id`, `user` object, whether they
 * are `isSharingCamera`, and whether they are an `isAdmin`. The function first finds the `room` object
 * in the `rooms` array that matches the given `roomId`, and then
 */
function getUsersInRoom(roomId: string): RoomUser[] {
  const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
  const users = room ? room.users : [];
  return users.map(({ id, user, isSharingCamera, isAdmin }) => ({
    id,
    user,
    isSharingCamera,
    isAdmin,
  }));
}

export { addUserToRoom, removeUserFromRoom, getUsersInRoom, rooms };
