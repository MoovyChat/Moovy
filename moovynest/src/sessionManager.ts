import { Server, Socket } from "socket.io";
import { CustomSocket } from "./customSocket";
import {
  RoomInfo,
  RoomUser,
  addUserToRoom,
  getUsersInRoom,
} from "./roomsManager";

export type Session = {
  socket: CustomSocket;
  user: any;
  room: RoomInfo;
};

export const sessions: Map<string, Session> = new Map();

/**
 * The function generates a unique session ID using random numbers and returns it as a string.
 * @returns A string value that is a concatenation of two random strings generated using the
 * `Math.random()` method and converted to base-36 using the `toString()` method. The resulting string
 * has a length of 28 characters. This function is used to generate a unique session ID.
 */
function generateUniqueSessionId(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

/**
 * This function creates a session with a unique ID, a socket, a user, and a room.
 * @param {CustomSocket} socket - CustomSocket is a custom object that represents a socket connection
 * between a client and a server. It likely contains information such as the socket ID, the client's IP
 * address, and methods for sending and receiving data.
 * @param {any} user - The `user` parameter is an object that represents the user who is creating the
 * session. It could contain information such as the user's name, ID, email, or any other relevant
 * details.
 * @param {RoomInfo} room - RoomInfo is a custom type that likely contains information about a chat
 * room, such as the room name, room ID, and possibly other metadata. It is passed as a parameter to
 * the createSession function along with a socket object and user object to create a new session for a
 * user in a specific chat
 * @returns a string, which is the generated unique session ID.
 */
export function createSession(
  socket: CustomSocket,
  user: any,
  room: RoomInfo
): string {
  const sessionId = generateUniqueSessionId();
  sessions.set(sessionId, { socket, user, room });
  return sessionId;
}

/**
 * The function retrieves a session object based on a given session ID.
 * @param {string} sessionId - sessionId is a string parameter that represents the unique identifier of
 * a session. It is used as an input to the getSession function to retrieve the corresponding session
 * object from a Map data structure called "sessions".
 * @returns The function `getSession` returns a `Session` object if it exists in the `sessions` map
 * with the given `sessionId`. If the `sessionId` is not found in the map, it returns `undefined`.
 */
function getSession(sessionId: string): Session | undefined {
  return sessions.get(sessionId);
}

/**
 * The function checks if there is at least one user in a room who is an admin.
 * @param {RoomUser[]} users - An array of objects representing users in a room. Each object has
 * properties such as name, id, and isAdmin (a boolean indicating whether the user is an administrator
 * or not).
 * @returns The function `checkIfAdminExists` is returning a boolean value. It returns `true` if at
 * least one user in the `users` array has the `isAdmin` property set to `true`, and `false` otherwise.
 */
const checkIfAdminExists = (users: RoomUser[]): boolean => {
  return users.some((user) => user.isAdmin === true);
};

/**
 * The function updates a user's session with a new socket and notifies the room's users of the user's
 * rejoining.
 * @param {string} sessionId - A string representing the unique identifier of a session.
 * @param {Socket} newSocket - The new socket that needs to be updated in the session.
 * @param {Server} io - `io` is an instance of the Socket.IO server that allows bidirectional
 * communication between the server and the client. It is used to emit events to all connected clients
 * or to specific clients in a room.
 */
function updateSession(sessionId: string, newSocket: Socket, io: Server): void {
  const session = getSession(sessionId);
  if (session) {
    let isAdmin = false;
    let newUpdatedSocket = newSocket;
    const userInSession = session.socket.user;
    (newUpdatedSocket as CustomSocket).user = userInSession;
    (newUpdatedSocket as CustomSocket).roomId = session.socket.roomId;
    session.socket = newUpdatedSocket as any;

    session.socket.join(session.room.roomId); // Join the socket to its room
    const usersInARoom = session.room.users;
    const adminExists = checkIfAdminExists(usersInARoom);
    if (!adminExists) {
      isAdmin = true;
    }
    addUserToRoom(
      session.room.roomId,
      session.socket,
      session.user,
      session.room.url,
      session.room.roomName,
      isAdmin
    );
    // Now notify the room's users
    // const usersInRoom = getUsersInRoom(session.roomId);
    // session.socket.broadcast
    //   .to(session.roomId)
    //   .emit("user rejoined", session.user);
    io.to(session.room.roomId).emit("message", {
      type: "join",
      user: session.user,
      message: `${session.user.nickname} joined room ${session.room.roomId}`,
    });
    const usersInRoom = getUsersInRoom(session.room.roomId);
    io.to(session.room.roomId).emit("roomUsers", usersInRoom);
    newSocket.emit("rejoin", { room: session.room, user: session.user });
    // session.socket.to(session.roomId).emit("roomUsers", usersInRoom);
  }
}

/**
 * The function restores a session by updating it with a socket and server information.
 * @param {Socket} socket - The `socket` parameter is an instance of a Socket.IO socket. It represents
 * the connection between the client and the server and allows for real-time communication between
 * them.
 * @param {string} sessionId - The sessionId parameter is a string that represents the unique
 * identifier of a session that needs to be restored.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to a specific client. It is also used to manage namespaces and rooms.
 */
export function restoreSession(socket: Socket, sessionId: string, io: Server) {
  updateSession(sessionId, socket, io);
}
