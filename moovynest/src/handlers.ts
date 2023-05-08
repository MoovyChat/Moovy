import { Socket, Server } from "socket.io";
import {
  rooms,
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
  RoomInfo,
} from "./roomsManager";
import { CustomSocket } from "./customSocket";

function handleCreateRoom(socket: CustomSocket, io: Server) {
  return (roomId: string, roomName: string, user: any) => {
    console.log("handleCreateRoom");
    socket.join(roomId);
    socket.roomId = roomId;
    socket.user = user;
    addUserToRoom(roomId, socket, user, roomName);

    io.to(roomId).emit("message", {
      type: "join",
      user,
      message: `${user.name} created room ${roomId}`,
    });
    io.to(roomId).emit("roomUsers", getUsersInRoom(roomId));

    const roomsList = rooms.map((room) => ({
      roomName: room.roomName,
      roomId: room.roomId,
    }));
    io.emit("nestsList", roomsList);

    console.log(`User ${user.id} created room ${roomId}`);
  };
}

function handleJoinRoom(socket: CustomSocket, io: Server) {
  return (roomId: string, roomName: string, user: any) => {
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
      addUserToRoom(roomId, socket, user, roomName);
    }
    const usersInRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("roomUsers", usersInRoom);
    io.to(roomId).emit("message", {
      type: "join",
      user,
      message: `${socket.id} joined room ${roomId}`,
    });
    const usersWithCameraOn = usersInRoom.filter((roomUser) => {
      return roomUser.isConnectedToCall === true;
    });
    io.to(roomId).emit("usersWithCamera", usersWithCameraOn);
  };
}

function handleJoinCall(socket: CustomSocket, io: Server) {
  return (roomId: string) => {
    console.log("handleJoinCall", roomId);

    const room = rooms.find((room: RoomInfo) => room.roomId === roomId);

    if (!room) {
      return;
    }

    const usersInRoom = room.users;

    const currentUser = usersInRoom.find(
      (roomUser) => roomUser.id === socket.id
    );

    if (currentUser) {
      currentUser.isConnectedToCall = true;
    } else {
      usersInRoom.push({
        id: socket.id,
        user: socket.user,
        socket: socket,
        isConnectedToCall: true,
      });
    }

    const usersWithCameraOn = usersInRoom.filter((roomUser) => {
      return roomUser.isConnectedToCall === true;
    });
    io.to(roomId).emit("usersWithCamera", usersWithCameraOn);
  };
}

function handleSendingSignal(socket: CustomSocket, io: Server) {
  return (payload: any) => {
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

function handleCurrentCallUsers(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleCurrentCallUsers");
    const roomId = socket.roomId;
    const usersInThisRoom = getUsersInRoom(roomId);
    const usersWithCameraOn = usersInThisRoom.filter((roomUser) => {
      return roomUser.isConnectedToCall === true;
    });
    io.to(roomId).emit("usersWithCamera", usersWithCameraOn);
  };
}

function handleGetNests(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleGetNests");
    const roomsList = rooms.map((room) => ({
      roomName: room.roomName,
      roomId: room.roomId,
    }));
    io.emit("nestsList", roomsList);
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
      io.to(socket.roomId).emit("userLeft");
      socket.leave(socket.roomId);
    }
  };
}

function handleSignal(socket: Socket, io: Server) {
  return (data: any) => {
    console.log("handleSignal", data);
    const { type, roomId, message } = data;
    io.to(roomId).emit("signal", { type, from: socket.id, message });
  };
}

function handleCloseConnections(socket: CustomSocket, io: Server) {
  return () => {
    console.log("handleCloseConnections");
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
  handleCreateRoom,
  handleSignal,
  handleCloseConnections,
  handleDisconnect,
  handleGetNests,
  handleJoinCall,
  handleReturningSignal,
  handleSendingSignal,
  handleCurrentCallUsers,
};
