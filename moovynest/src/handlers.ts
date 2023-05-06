import { Socket, Server } from "socket.io";
import {
  rooms,
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
} from "./roomsManager";
import { CustomSocket } from "./customSocket";

function handleJoinRoom(socket: CustomSocket, io: Server) {
  return (roomId: string, user: any) => {
    console.log("handleJoinRoom");
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
      addUserToRoom(roomId, socket, user);
      io.to(roomId).emit("message", {
        type: "join",
        user,
        message: `${socket.id} joined room ${roomId}`,
      });
    }
    io.to(roomId).emit("roomUsers", getUsersInRoom(roomId));
  };
}

function handleJoinCall(
  socket: CustomSocket,
  users: { [key: string]: string[] },
  socketToRoom: { [key: string]: string }
) {
  return (roomID: string) => {
    console.log("handleJoinCall");
    // Users[roomId] stores the socket Id
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit("room full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);
    socket.emit("all users", usersInThisRoom);
  };
}

function handleSendingSignal(socket: CustomSocket, io: Server) {
  return (payload: any) => {
    console.log("handleSendingSignal");
    io.to(payload.userToSignal).emit("user joined", {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  };
}

function handleReturningSignal(socket: CustomSocket, io: Server) {
  return (payload: any) => {
    console.log("handleReturningSignal");
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  };
}

function handleMessage(socket: Socket, io: Server) {
  console.log("handleMessage");
  return ({ roomId, data }: { roomId: string; data: any }) => {
    io.to(roomId).emit("message", data);
  };
}

function handleLeaveRoom(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleLeaveRoom");
    if (removeUserFromRoom(socket)) {
      io.to(socket.roomId).emit("roomUsers", getUsersInRoom(socket.roomId));
      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.user.name} left room ${socket.roomId}`,
      });

      socket.leave(socket.roomId);
    }
  };
}

function handleSignal(socket: Socket) {
  return (data: any) => {
    console.log("handleSignal");
    const { type, roomId, message } = data;
    socket.to(roomId).emit("signal", { type, from: socket.id, message });
  };
}

function handleCloseConnections(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleCloseConnections");
    if (socket.roomId && getUsersInRoom(socket.roomId).length > 1) {
      getUsersInRoom(socket.roomId).forEach((roomUser) => {
        io.sockets.sockets.get(roomUser.id)?.disconnect();
      });

      delete rooms[socket.roomId];
    }
  };
}

function handleDisconnect(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleDisconnect");
    if (removeUserFromRoom(socket)) {
      io.to(socket.roomId).emit("roomUsers", getUsersInRoom(socket.roomId));

      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.id} left room ${socket.roomId}`,
      });
    }
  };
}

export {
  handleJoinRoom,
  handleMessage,
  handleLeaveRoom,
  handleSignal,
  handleCloseConnections,
  handleDisconnect,
  handleJoinCall,
  handleReturningSignal,
  handleSendingSignal,
};
