// socketHandlers.js

const {
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
} = require("./roomsManager");

function handleStartVideoCommunication(socket, getUsersInRoom) {
  return (roomId, data) => {
    const usersInRoom = getUsersInRoom(roomId);
    usersInRoom.forEach((user) => {
      if (user.id !== socket.id) {
        io.to(user.id).emit("startVideoCommunication", {
          from: socket.id,
          roomId,
          message: data.message,
        });
      }
    });
  };
}
function handleJoinRoom(socket, io) {
  return (roomId, user) => {
    console.log(roomId, user);
    const existingUser = getUsersInRoom(roomId).find(
      (roomUser) => roomUser.user.id === user.id
    );
    if (existingUser) {
      // Update the existing user's socket object
      existingUser.id = socket.id;
      existingUser.socket = socket;
      socket.join(roomId);
      socket.roomId = roomId;
      socket.user = user;
    } else {
      // Add the user to the room
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

function handleMessage(_socket, io) {
  return ({ roomId, data }) => {
    io.to(roomId).emit("message", data);
  };
}

function handleLeaveRoom(socket, io) {
  return () => {
    if (removeUserFromRoom(socket)) {
      io.to(socket.roomId).emit("roomUsers", getUsersInRoom(socket.roomId));
      console.log("HandleLeaveRoom");
      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.user.name} left room ${socket.roomId}`,
      });

      socket.leave(socket.roomId); // remove the socket from the room
    }
  };
}

function handleSignal(socket) {
  return (data) => {
    const { type, roomId, message } = data;
    socket.to(roomId).emit("signal", { type, from: socket.id, message });
  };
}

function handleCloseConnections(socket, io) {
  return () => {
    if (socket.roomId && getUsersInRoom(socket.roomId).length > 1) {
      console.log("handleCloseConnections");
      getUsersInRoom(socket.roomId).forEach((roomUser) => {
        io.sockets.sockets.get(roomUser.id).disconnect();
      });

      delete rooms[socket.roomId];
    }
  };
}

function handleDisconnect(socket, io) {
  return () => {
    if (removeUserFromRoom(socket)) {
      console.log("handleDisconnect");
      io.to(socket.roomId).emit("roomUsers", getUsersInRoom(socket.roomId));

      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.id} left room ${socket.roomId}`,
      });
    }
  };
}

module.exports = {
  handleJoinRoom,
  handleStartVideoCommunication,
  handleMessage,
  handleLeaveRoom,
  handleSignal,
  handleCloseConnections,
  handleDisconnect,
};
