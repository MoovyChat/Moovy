import { Socket, Server } from "socket.io";
import { CustomSocket } from "./customSocket";
import {
  CustomRTCSessionDescriptionInit,
  CustomRTCIceCandidate,
} from "./../customWebRTCTypes";
import {
  rooms,
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
} from "./roomsManager";
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
 * Handler for WebRTC Offer
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 * @param {Server} io - io is an instance of the Socket.IO server that allows bidirectional
 * communication between the server and client.
 */
export const handleWebRTCOffer = (socket: CustomSocket, io: Server) => {
  return (offer: CustomRTCSessionDescriptionInit, roomId: string) => {
    // Forward the offer to everyone else in the room.
    socket.to(roomId).emit("webRTC-offer", offer);
  };
};

/**
 * Handler for WebRTC Answer
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 */
export const handleWebRTCAnswer = (socket: CustomSocket) => {
  return (answer: CustomRTCSessionDescriptionInit, targetSocketId: string) => {
    // Send the answer back to the broadcaster
    socket.to(targetSocketId).emit("webRTC-answer", answer);
  };
};

/**
 * Handler for WebRTC ICE Candidate
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 * @param {Server} io - io is an instance of the Socket.IO server that allows bidirectional
 * communication between the server and client.
 */
export const handleWebRTCICECandidate = (socket: CustomSocket, io: Server) => {
  return (iceCandidate: CustomRTCIceCandidate, roomId: string) => {
    // Forward the ICE candidate to everyone else in the room.
    socket.to(roomId).emit("webRTC-ice-candidate", iceCandidate);
  };
};

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
 * This function handles a user joining a room.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the current user.
 * @param {Server} io - io is an instance of the Socket.IO server that allows bidirectional communication.
 */
function handleJoinRoom(socket: CustomSocket, io: Server) {
  return (roomId: string, user: any) => {
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
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
      socket.join(roomId);
      io.to(roomId).emit("message", {
        type: "join",
        user,
        message: `${user.name} joined the room.`,
      });
      io.to(roomId).emit("roomUsers", getUsersInRoom(roomId));
    } else {
      socket.emit("join-room-error", { message: "The room does not exist" });
    }
  };
}

/**
 * This function handles a user leaving a room.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the current user.
 * @param {Server} io - io is an instance of the Socket.IO server that allows bidirectional communication.
 */
function handleLeaveRoom(socket: CustomSocket, io: Server) {
  return () => {
    const { roomId, user } = socket;
    if (roomId && user) {
      removeUserFromRoom(socket.id, roomId);
      socket.leave(roomId);
      io.to(roomId).emit("message", {
        type: "leave",
        user,
        message: `${user.name} left the room.`,
      });
      io.to(roomId).emit("roomUsers", getUsersInRoom(roomId));
    }
  };
}

/**
 * This function handles pausing a video in a room and checks if the user is authorized to do so.
 * @param {CustomSocket} socket - A custom socket object that represents a connection between the server and a client.
 * @param {Server} io - The `io` parameter is an instance of the Socket.IO server. It is used to emit events to all clients connected to a specific room.
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
 * This function handles sending a smiley in a room.
 * @param {CustomSocket} socket - CustomSocket object that represents the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleSmiley(socket: CustomSocket, io: Server) {
  return ({ roomId, data }: { roomId: string; data: any }) => {
    io.to(roomId).emit("receiveSmiley", data);
  };
}

/**
 * This function handles seeking time in a room.
 * @param {CustomSocket} socket - A custom socket object that represents the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleSeekTime(socket: CustomSocket, io: Server) {
  return (seekTime: string, roomId: string, user: any) => {
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      const roomUser = room.users.find(
        (roomUser: RoomUser) => roomUser.user.id === user.id
      );
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
        socket.emit("seekTime-error", {
          message: "You are not authorized to seek the time",
        });
      }
    } else {
      socket.emit("room-seekTime-error", {
        message: "The room does not exist",
      });
    }
  };
}

/**
 * This function handles sending a message in a room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleMessage(socket: CustomSocket, io: Server) {
  return ({ roomId, data }: { roomId: string; data: any }) => {
    io.to(roomId).emit("message", data);
  };
}

/**
 * This function handles creating a new room.
 * @param {CustomSocket} socket - CustomSocket object representing the socket connection of the user.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleCreateRoom(socket: CustomSocket, io: Server) {
  return (data: {
    roomId: string;
    roomName: string;
    user: any;
    url: string;
    isPublic: boolean;
    movie: Movie;
  }) => {
    const { roomId, roomName, user, url, isPublic, movie } = data;
    const existingRoom = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (!existingRoom) {
      addUserToRoom(roomId, socket, user, url, roomName, true, movie, isPublic);
      io.to(roomId).emit("message", {
        type: "join",
        user,
        message: `${user.name} created room ${roomId}`,
      });
      io.emit("nestsList", rooms);
      socket.emit("create-room-success", {
        message: "Successfully created the room",
      });
    } else {
      socket.emit("create-room-error", { message: "The room already exists" });
    }
  };
}

/**
 * This function handles closing all connections for a given room.
 * @param {CustomSocket} socket - CustomSocket object that represents a client's connection to the server.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleCloseConnections(socket: CustomSocket, io: Server) {
  return () => {
    const { roomId } = socket;
    if (roomId && getUsersInRoom(roomId).length > 1) {
      getUsersInRoom(roomId).forEach((roomUser: any) => {
        io.sockets.sockets.get(roomUser.id)?.disconnect();
      });
      const roomIndex = rooms.findIndex(
        (room: RoomInfo) => room.roomId === roomId
      );
      if (roomIndex !== -1) {
        rooms.splice(roomIndex, 1);
      }
    }
  };
}

/**
 * This function handles disconnection of a socket and notifies the room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
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

/**
 * This function handles toggling the room type between public and private.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleToggleRoomType(socket: CustomSocket, io: Server) {
  return (data: { isPublic: boolean; roomId: string }) => {
    const { isPublic, roomId } = data;
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      room.isPublic = isPublic;
      io.to(roomId).emit("room-type-changed", {
        isPublic,
        message: `Room type changed to ${isPublic}`,
      });
      socket.emit("toggle-room-type-success", {
        message: "Room type changed successfully",
        isPublic,
      });
    } else {
      socket.emit("toggle-room-type-error", {
        message: "The room does not exist",
      });
    }
  };
}

/**
 * This function handles kicking a user out of a room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleKickUser(socket: CustomSocket, io: Server) {
  return (data: { kickedUser: any; roomId: string }) => {
    const { kickedUser, roomId } = data;
    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);
    if (room) {
      const kickedUserIndex = room.users.findIndex(
        (u: RoomUser) => u.user.id === kickedUser.id
      );
      if (kickedUserIndex !== -1) {
        const kickedUserObj = room.users[kickedUserIndex];
        removeUserFromRoom(kickedUserObj.id, roomId);
        io.to(roomId).emit("roomUsers", getUsersInRoom(roomId));
        io.to(roomId).emit("message", {
          type: "kick",
          user: kickedUser,
          message: `${kickedUser.name} has been kicked from the room`,
        });
        io.to(roomId).emit("userLeft", kickedUser);
        socket.emit("kick-user-success", {
          message: `${kickedUser.name} has been kicked from the room`,
          kickedUser,
        });
      } else {
        socket.emit("kick-user-error", {
          message: "The user to be kicked does not exist in the room",
        });
      }
    } else {
      socket.emit("room-kick-user-error", {
        message: "The room does not exist",
      });
    }
  };
}

/**
 * This function handles syncing all users with the admin's current time.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleSyncAllUsers(socket: CustomSocket, io: Server) {
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

/**
 * This function handles syncing with the admin user.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleSyncWithAdmin(socket: CustomSocket, io: Server) {
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

/**
 * This function handles sending the current time to the users.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
function handleSendCurrentTime(socket: CustomSocket, io: Server) {
  return (data: {
    joinedUser: RoomUser;
    currentTime: number;
    roomId: string;
  }) => {
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
 * This function handles getting the list of all nests/rooms.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
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
 * This function handles sending a signal to a specific user through a socket connection.
 * @param {CustomSocket} socket - A custom socket object that represents the connection between the
 * client and the server.
 * @param {Server} io - `io` is an instance of the Socket.IO server. It is used to emit events to all
 * connected clients or to specific clients using their socket IDs.
 */
function handleSendingSignal(socket: CustomSocket, io: Server) {
  return (payload: {
    userToSignal: string;
    callerID: string;
    signal: CustomRTCSessionDescriptionInit;
  }) => {
    const { userToSignal, callerID, signal } = payload;
    io.to(userToSignal).emit("user joined", { signal, callerID });
  };
}

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
const handleRestoreSession = (socket: Socket, io: Server) => {
  return (sessionId: string) => {
    restoreSession(socket, sessionId, io);
  };
};

/**
 * This function handles changing the name of a room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
const handleRoomNameChange = (socket: CustomSocket, io: Server) => {
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

/**
 * This function handles changing the show/movie being watched in the room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
const handleShowChange = (socket: CustomSocket, io: Server) => {
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
 * This function handles initiating a broadcast in the room.
 * @param {CustomSocket} socket - CustomSocket object representing the connection.
 * @param {Server} io - The Socket.IO server instance.
 */
const handleInitiateBroadcast = (socket: CustomSocket, io: Server) => {
  return (roomId: string) => {
    // Signal to everyone in the room that the broadcast is about to start
    socket.to(roomId).emit("broadcast-initiated");
  };
};

export {
  handlePlay,
  handelSharing,
  handleGetRoomUsers,
  handleJoinRoom,
  handleLeaveRoom,
  handlePause,
  handleSmiley,
  handleSeekTime,
  handleMessage,
  handleCreateRoom,
  handleCloseConnections,
  handleDisconnect,
  handleToggleRoomType,
  handleKickUser,
  handleSyncAllUsers,
  handleSyncWithAdmin,
  handleGetNests,
  handleSendingSignal,
  handleSendCurrentTime,
  handleRestoreSession,
  handleRoomNameChange,
  handleShowChange,
  handleInitiateBroadcast,
};
