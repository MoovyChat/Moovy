import { Socket, Server } from "socket.io";
import {
  rooms,
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
} from "./roomsManager";
import { CustomSocket } from "./customSocket";
import { createSession, restoreSession } from "./sessionManager";
import { Movie, RoomInfo, RoomUser } from "./interfaces";

/**
 * The function handles playing a video in a room and checks if the user is authorized to do so.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the current
 * user.
 * @param {Server} io - io is an instance of the Socket.IO server that allows bidirectional
 * communication between the server and the client. It is used to emit events to clients connected to a
 * specific room.
 * @returns The function `handlePlay` is returning another function that takes in two arguments:
 * `roomId` (a string) and `user` (an object).
 */
function handlePlay(socket: CustomSocket, io: Server) {
  return (roomId: string, user: any) => {
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (room) {
      const roomUser = room.users.find(
        (roomUser: RoomUser) => roomUser.user.id === user.id
      );

      if (roomUser && roomUser.isAdmin) {
        io.to(roomId).emit("play", {
          user,
        });
        io.to(roomId).emit("message", {
          type: "play",
          user,
        });
      } else {
        socket.emit("play-error", {
          message: "You are not authorized to play the video",
          user,
        });
      }
    } else {
      socket.emit("room-play-error", {
        message: "The room does not exist",
        user,
      });
    }
  };
}

/**
 * This function handles when a user starts sharing their camera in a room and emits an event to notify
 * other users in the room.
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 * between the server and a client.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients in a room.
 * @returns A function that takes in a userId parameter and handles the logic for when a user starts
 * sharing their camera in a room. The function uses the socket and io objects to emit an event to the
 * other users in the room.
 */
function handelSharing(socket: CustomSocket, io: Server) {
  return (userId: string) => {
    const roomId = socket.roomId;
    const usersInARoom = getUsersInRoom(roomId);

    // Fetch the user's data
    const user = usersInARoom.find((userObj) => userObj.user.id === userId);
    if (user) {
      // Set the user's isSharingCamera property to true
      user.isSharingCamera = true;

      // Emit the event to the other users in the room
      socket.broadcast.to(roomId).emit("user started sharing", user);
    }
  };
}

/**
 * The type `SignalData` defines the structure of data that can be sent or received in a WebRTC
 * signaling process, including information about the type of signal, SDP data, and candidate
 * information.
 * @property {"offer" | "answer" | "pranswer"} type - The type of the signal data, which can be
 * "offer", "answer", or "pranswer". This is used in WebRTC to describe the type of session description
 * protocol (SDP) being sent or received.
 * @property {string} sdp - SDP stands for Session Description Protocol. It is a format used to
 * describe multimedia communication sessions for the purposes of session initiation, modification, and
 * termination. In the context of WebRTC, SDP is used to negotiate the parameters of a peer-to-peer
 * connection between two devices. The SDP property in
 * @property candidate - The "candidate" property is a sub-property of the "SignalData" type, which
 * represents a candidate ICE candidate that is used in WebRTC communication. It contains three
 * sub-properties: "candidate", which is a string representing the candidate itself, "sdpMid", which is
 * a string representing the
 */
type SignalData = {
  type?: "offer" | "answer" | "pranswer";
  sdp?: string;
  candidate?: {
    candidate: string;
    sdpMid: string;
    sdpMLineIndex: number;
  };
};

/**
 * The type SendingSignalPayload represents the payload data for sending a signal to a specific user.
 * @property {string} userToSignal - A string representing the user who will receive the signal.
 * @property {string} callerID - callerID is a string property that represents the unique identifier of
 * the user who is making the call and sending the signal.
 * @property {SignalData} signal - The `signal` property is a variable of type `SignalData`. It is
 * likely used to transmit data related to a signaling protocol used in real-time communication
 * applications such as WebRTC. The specific contents of `SignalData` would depend on the
 * implementation of the signaling protocol being used.
 */
type SendingSignalPayload = {
  userToSignal: string;
  callerID: string;
  signal: SignalData;
};

/**
 * The function handles sending a signal to a specific user through a socket connection.
 * @param {CustomSocket} socket - A custom socket object that represents the connection between the
 * client and the server. It allows for real-time communication between the two.
 * @param {Server} io - `io` is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients using their socket IDs. In the given code, it is used to
 * emit the "user joined" event to the client with the ID `userToSignal`.
 * @returns A function that takes in a payload of type `SendingSignalPayload` and emits a "user joined"
 * event to the socket with the ID `userToSignal`, passing along the `signal` and `callerID` data.
 */
function handleSendingSignal(socket: CustomSocket, io: Server) {
  return (payload: SendingSignalPayload) => {
    const { userToSignal, callerID, signal } = payload;
    io.to(userToSignal).emit("user joined", { signal, callerID });
  };
}

/**
 * The function handles pausing a video in a room and checks if the user is authorized to do so.
 * @param {CustomSocket} socket - A custom socket object that represents a connection between the
 * server and a client.
 * @param {Server} io - The `io` parameter is an instance of the Socket.IO server. It is used to emit
 * events to all clients connected to a specific room.
 * @returns The function `handlePause` is returning another function that takes in two arguments:
 * `roomId` (string) and `user` (any).
 */
function handlePause(socket: CustomSocket, io: Server) {
  return (roomId: string, user: any) => {
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (room) {
      const roomUser = room.users.find(
        (roomUser: RoomUser) => roomUser.user.id === user.id
      );

      if (roomUser && roomUser.isAdmin) {
        io.to(roomId).emit("pause", {
          user,
        });
        io.to(roomId).emit("message", {
          type: "pause",
          user,
        });
      } else {
        socket.emit("pause-error", {
          message: "You are not authorized to pause the video",
          user,
        });
      }
    } else {
      socket.emit("room-pause-error", {
        message: "The room does not exist",
        user,
      });
    }
  };
}

/**
 * This function handles seeking time in a room and checks if the user is authorized to do so.
 * @param {CustomSocket} socket - A custom socket object that represents a connection between the
 * server and a client.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific rooms.
 * @returns A function that takes in a socket and an io object as arguments and returns another
 * function that takes in a seekTime string, a roomId string, and a user object as arguments.
 */
function handleSeekTime(socket: CustomSocket, io: Server) {
  return (seekTime: string, roomId: string, user: any) => {
    // Check if the user is an admin
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      const roomUser = room.users.find(
        (roomUser: RoomUser) => roomUser.user.id === user.id
      );
      // If the user is found and is an admin
      if (roomUser && roomUser.isAdmin) {
        io.to(roomId).emit("seekTime", {
          user,
          seekTime,
        });
        io.to(roomId).emit("message", {
          type: "seekTime",
          user,
          seekTime,
        });
      } else {
        // Emit an error if the user is not an admin
        socket.emit("seekTime-error", {
          message: "You are not authorized to seek the time",
        });
      }
    } else {
      // Emit an error if the room is not found
      socket.emit("room-seekTime-error", {
        message: "The room does not exist",
      });
    }
  };
}

/**
 * This function handles getting the users in a specific room and emits the list of users to all
 * clients in the room.
 * @param {CustomSocket} socket - CustomSocket is likely a custom implementation of the Socket
 * interface provided by the Socket.IO library. It represents a client's connection to the server.
 * @param {Server} io - `io` is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients in a particular room. In this function, it is used to emit
 * the "roomUsers" event to all clients in the specified room with the list of users in that
 * @returns A function that takes in a socket and an io object as arguments and returns another
 * function that takes in a roomId as an argument. This returned function emits a "roomUsers" event to
 * all sockets in the specified room with the list of users in the room and returns the list of users
 * in the room.
 */
function handleGetRoomUsers(socket: CustomSocket, io: Server) {
  return (roomId: string) => {
    const usersInRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("roomUsers", usersInRoom);
    return usersInRoom;
  };
}

/**
 * This function handles the creation of a new room and emits success or error messages accordingly.
 * @param {CustomSocket} socket - A custom socket object representing the client's connection to the
 * server.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients in a room.
 * @returns The function `handleCreateRoom` is returning another function that takes in a `data` object
 * as its argument. data is a object of {roomId, roomName, user, url, isPublic, movie }
 */
function handleCreateRoom(socket: CustomSocket, io: Server) {
  return (data: {
    roomID: string;
    roomName: string;
    user: any;
    url: string;
    isPublic: boolean;
    movie: Movie;
  }) => {
    const { roomID, roomName, user, url, isPublic, movie } = data;
    // Check if the room already exists
    const existingRoom = rooms.find((room: RoomInfo) => room.roomId === roomID);

    if (!existingRoom) {
      let room = addUserToRoom(
        roomID,
        socket,
        user,
        url,
        roomName,
        true,
        movie,
        isPublic
      );
      io.to(roomID).emit("message", {
        type: "join",
        user,
        message: `${user.name} created room ${roomID}`,
      });

      const roomsList = rooms.map((room) => {
        return {
          roomName: room.roomName,
          roomId: room.roomId,
          isPublic,
          movie: room.movie,
        };
      });
      io.emit("nestsList", roomsList);

      // Create a session for this user
      const sessionId = createSession(socket, user, room);
      socket.emit("sessionCreated", { sessionId });

      // Emit a success message when the room is successfully created
      socket.emit("create-room-success", {
        message: "Successfully created the room",
        roomName,
        roomId: roomID,
        usersInRoom: getUsersInRoom(roomID),
        url,
      });
    } else {
      // Emit an error if the room already exists
      socket.emit("create-room-error", { message: "The room already exists" });
    }
  };
}

/**
 * This function handles the process of a user joining a room in a chat application, including checking
 * if the room exists, adding the user to the room, creating a session for the user, and emitting
 * appropriate messages to the room.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the user
 * who is joining the room.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific rooms.
 * @returns A function that takes in a socket and an io object as arguments and returns another
 * function that takes in a roomId and a user object as arguments. This returned function checks if the
 * room exists and adds the user to the room if it does. It also emits various events to the room and
 * the socket. Finally, it returns a success message if the room is successfully joined or an error
 * message if the room
 */
function handleJoinRoom(socket: CustomSocket, io: Server) {
  return (roomId: string, user: any) => {
    // Check if the room exists
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      const existingUser = getUsersInRoom(roomId).find(
        (roomUser) => roomUser.user.id === user.id
      );
      if (existingUser) {
        existingUser.id = socket.id;
        existingUser.socket = socket;
        socket.join(roomId);
        socket.roomId = roomId;
        socket.user = user;
      } else {
        addUserToRoom(
          roomId,
          socket,
          user,
          room.url,
          room.roomName,
          false,
          room.movie,
          room.isPublic
        );
      }
      const usersInRoom = getUsersInRoom(roomId);
      io.to(roomId).emit("roomUsers", usersInRoom);
      io.to(roomId).emit("message", {
        type: "join",
        user,
        message: `${user.nickname} joined room ${roomId}`,
      });
      io.to(roomId).emit("roomName", { room, user }); // Emit room name

      const usersWithCameraOn = usersInRoom.filter((roomUser) => {
        return roomUser.isSharingCamera === true;
      });
      io.to(roomId).emit("usersWithCamera", usersWithCameraOn);

      // Create a session for this user
      const sessionId = createSession(socket, user, room);
      socket.emit("sessionCreated", { sessionId });

      // Emit a success message when the room is successfully joined
      socket.emit("join-room-success", {
        message: "Successfully joined the room",
        room,
        user,
      });

      const adminUser = room.users.find((user) => user.isAdmin);

      if (adminUser) {
        io.to(roomId).emit("get-current-time", {
          adminUser: adminUser.user,
          joinedUser: user,
        });
      }
    } else {
      // Emit an error if the room is not present
      socket.emit("join-room-error", {
        message: "The room does not exist",
        user,
      });
    }
  };
}

function handleSyncWithAdmin(socket: Socket, io: Server) {
  return (data: { roomId: string; requestingUser: any }) => {
    const { roomId, requestingUser } = data;
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      const adminUser = room.users.find((user) => user.isAdmin);

      if (adminUser) {
        io.to(roomId).emit("get-current-time", {
          adminUser: adminUser.user,
          joinedUser: requestingUser,
        });
      }
    }
  };
}

function handleSyncAllUsers(socket: Socket, io: Server) {
  return (data: { roomId: string; adminUser: any; currentTime: number }) => {
    const { roomId, adminUser, currentTime } = data;
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      if (adminUser) {
        io.to(roomId).emit("sync-non-admin-current-time", {
          currentTime,
          adminUser,
        });
      }
    }
  };
}

function handleMessage(socket: Socket, io: Server) {
  return ({ roomId, data }: { roomId: string; data: any }) => {
    const room: RoomInfo | undefined = rooms.find(
      (room: RoomInfo) => room.roomId === roomId
    );
    const user = room?.users.find((u: RoomUser) => u?.socket?.id === socket.id);
    // if (!user) {
    //   // The user is not part of this room.
    //   return;
    // }
    io.to(roomId).emit("message", data);
  };
}

function handleSmiley(socket: CustomSocket, io: Server) {
  return ({ roomId, data }: { roomId: string; data: any }) => {
    io.to(roomId).emit("receiveSmiley", data);
  };
}

function handleToggleRoomType(socket: Socket, io: Server) {
  return (data: { isPublic: boolean; roomId: string }) => {
    const { isPublic, roomId } = data;

    // Find the room
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (room) {
      // Update the room's public status
      room.isPublic = isPublic;

      // Emit an event to all clients in the room about the room type change
      io.to(roomId).emit("room-type-changed", {
        isPublic,
        message: `Room type changed to ${isPublic}`,
      });

      // Emit a success message to the client who triggered the room type change
      socket.emit("toggle-room-type-success", {
        message: "Room type changed successfully",
        isPublic,
      });
    } else {
      // Emit an error if the room is not found
      socket.emit("toggle-room-type-error", {
        message: "The room does not exist",
      });
    }
  };
}

function handleSendCurrentTime(socket: Socket, io: Server) {
  return (data: { joinedUser: RoomUser; currentTime: number; roomId: any }) => {
    const joinedUser = data.joinedUser;
    const roomId = data.roomId;

    if (joinedUser) {
      io.to(roomId).emit("admin-current-time", {
        currentTime: data.currentTime,
        joinedUser,
      });
    }
  };
}

/**
 * The function handles getting a list of nests/rooms and emits it to all connected sockets.
 * @param {CustomSocket} socket - CustomSocket is likely a custom implementation of the Socket class
 * from the Socket.io library. It represents a connection between the server and a client.
 * @param {Server} io - `io` is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients in a room. In this function, it is used to emit a
 * "nestsList" event to all connected clients, sending them a list of available rooms.
 * @returns A function is being returned. The function takes no arguments and when called, it retrieves
 * a list of rooms and emits an event "nestsList" to all connected sockets with the list of rooms.
 */

function handleGetNests(socket: CustomSocket, io: Server) {
  return () => {
    const publicRoomsList = rooms
      .filter((room) => room.isPublic)
      .map((room) => ({
        roomName: room.roomName,
        roomId: room.roomId,
        users: room.users,
        movie: room.movie,
      }));

    io.emit("nestsList", publicRoomsList);
  };
}

/**
 * The function handles a user leaving a chat room by removing them from the room, updating the users
 * in the room, and notifying the remaining users.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the user
 * who triggered the "leave room" event.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific rooms. In this function, it is used to emit events to the clients
 * in a specific room when a user leaves the room.
 * @returns The function `handleLeaveRoom` is returning an arrow function that takes no arguments.
 */
function handleLeaveRoom(socket: CustomSocket, io: Server) {
  return () => {
    const { roomId, user } = socket;

    if (roomId && user) {
      // Remove the user from the room
      removeUserFromRoom(socket.id, socket.roomId);

      // Update the users in the room and notify the remaining users
      const usersInRoom = getUsersInRoom(roomId);
      io.to(roomId).emit("roomUsers", usersInRoom);
      io.to(roomId).emit("message", {
        type: "leave",
        user,
        message: `${user.nickname} left room ${roomId}`,
      });
      io.to(socket.roomId).emit("userLeft", user);
      // Leave the room
      socket.leave(roomId);

      // Remove roomId and user from the socket
      socket.roomId = "";
      socket.user = null;
    } else {
      // Emit an error if the user is not in a room
      socket.emit("leave-room-error", {
        message: "You are not in a room",
        user,
      });
    }
  };
}

function handleKickUser(socket: CustomSocket, io: Server) {
  return (data: { kickedUser: any; roomId: string }) => {
    const { kickedUser, roomId } = data;

    // Find the room
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      // Find the kicked user in the room
      const kickedUserIndex = room.users.findIndex(
        (u: RoomUser) => u.user.id === kickedUser.id
      );

      if (kickedUserIndex !== -1) {
        const kickedUserObj = room.users[kickedUserIndex];

        // Remove the user from the room
        removeUserFromRoom(kickedUserObj.id, roomId);

        // Update the users in the room and notify the remaining users
        const usersInRoom = getUsersInRoom(roomId);
        io.to(roomId).emit("roomUsers", usersInRoom);
        io.to(roomId).emit("message", {
          type: "kick",
          user: kickedUser,
          message: `${kickedUser.name} has been kicked from the room`,
        });
        io.to(roomId).emit("userLeft", kickedUser);

        // Emit a success message to the client who initiated the kick
        socket.emit("kick-user-success", {
          message: `${kickedUser.name} has been kicked from the room`,
          kickedUser,
        });
      } else {
        // Emit an error if the kicked user is not found in the room
        socket.emit("kick-user-error", {
          message: "The user to be kicked does not exist in the room",
        });
      }
    } else {
      // Emit an error if the room is not found
      socket.emit("room-kick-user-error", {
        message: "The room does not exist",
      });
    }
  };
}

/**
 * The function handleCloseConnections handles closing connections for a socket and removes the room if
 * there are no other users in it.
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a client's
 * connection to the server.
 * @param {Server} io - The `io` parameter is an instance of the `Server` class from the `socket.io`
 * library. It represents the server-side socket.io instance that is used to manage socket connections
 * and emit events to connected clients.
 * @returns A function that takes no arguments and handles closing connections for a given socket and
 * server.
 */
function handleCloseConnections(socket: CustomSocket, io: Server) {
  return () => {
    if (socket.roomId && getUsersInRoom(socket.roomId).length > 1) {
      getUsersInRoom(socket.roomId).forEach((roomUser: any) => {
        io.sockets.sockets.get(roomUser.id)?.disconnect();
      });

      const roomIndex = rooms.findIndex(
        (room: RoomInfo) => room.roomId === socket.roomId
      );
      if (roomIndex !== -1) {
        rooms.splice(roomIndex, 1);
      }
    }
  };
}

/**
 * The function handles disconnection of a socket and removes the user from the room while emitting
 * messages to the remaining users in the room.
 * @param {CustomSocket} socket - CustomSocket is likely a custom implementation of the Socket
 * interface provided by the Socket.IO library. It represents a client's connection to the server and
 * contains information about the client, such as its unique ID and the room it is currently in.
 * @param {Server} io - The `io` parameter is an instance of the Socket.IO server. It is used to emit
 * events to all connected clients or to specific rooms.
 * @returns A function that handles disconnection events for a socket and updates the users and
 * messages in the room accordingly.
 */
function handleDisconnect(socket: CustomSocket, io: Server) {
  return () => {
    if (removeUserFromRoom(socket.id, socket.roomId)) {
      io.to(socket.roomId).emit("roomUsers", getUsersInRoom(socket.roomId));

      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.id} left room ${socket.roomId}`,
      });
    }
  };
}

export const handleRoomNameChange = (socket: CustomSocket, io: Server) => {
  return (roomData: {
    roomId: string;
    data: { value: string; message: string };
  }) => {
    // Find the room
    const room = rooms.find(
      (room: RoomInfo) => room.roomId === roomData.roomId
    );

    if (!room) {
      // Emit an error if the room does not exist
      socket.emit("change-room-name-error", {
        message: "The room does not exist",
      });
      return;
    }
    // Update the room name
    room.roomName = roomData.data.value;

    // Notify all users in the room about the room name change
    io.to(roomData.roomId).emit("room-name-changed", {
      message: roomData.data.message,
    });

    // Emit a success message to the client who changed the room name
    socket.emit("change-room-name-success", {
      message: "Successfully changed the room name",
      newRoomName: room.roomName,
    });
  };
};

export const handleShowChange = (socket: CustomSocket, io: Server) => {
  return (url: any, roomId: string, movie: Movie) => {
    // Find the room where the movie is being watched
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (!room) {
      // Emit an error if the room does not exist
      socket.emit("change-show-error", { message: "The room does not exist" });
      return;
    }

    // Update the movie URL in the room
    room.url = url;

    // Notify all users in the room about the movie change
    io.to(roomId).emit("movie-changed", {
      newUrl: url,
      movie,
    });

    // Emit a success message to the client who changed the movie
    socket.emit("change-show-success", {
      message: "Successfully changed the show URL",
      newUrl: url,
    });
  };
};

/**
 * This function handles restoring a session for a given socket and server using a provided session ID.
 * @param {Socket} socket - The `socket` parameter is an instance of a Socket.IO socket, which
 * represents a connection between a client and the server. It allows for real-time bidirectional
 * communication between the client and server.
 * @param {Server} io - io is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to a specific client. In this code snippet, it is passed as a parameter to the
 * handleRestoreSession function to be used in the restoreSession function.
 * @returns A function that takes a `sessionId` parameter and calls the `restoreSession` function with
 * the `socket`, `sessionId`, and `io` parameters.
 */
export const handleRestoreSession = (socket: Socket, io: Server) => {
  return (sessionId: string) => {
    restoreSession(socket, sessionId, io);
  };
};

export {
  handleJoinRoom,
  handlePlay,
  handlePause,
  handleSmiley,
  handleSeekTime,
  handleMessage,
  handleLeaveRoom,
  handleCreateRoom,
  handleCloseConnections,
  handleDisconnect,
  handleGetNests,
  handelSharing,
  handleSendingSignal,
  handleGetRoomUsers,
  handleSendCurrentTime,
  handleToggleRoomType,
  handleKickUser,
  handleSyncWithAdmin,
  handleSyncAllUsers,
};
