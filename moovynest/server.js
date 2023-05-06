// server.js
const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Allow any origin or specify allowed origins, e.g., ["https://www.netflix.com"]
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const users = {};

const socketToRoom = {};

const {
  handleJoinRoom,
  handleMessage,
  handleLeaveRoom,
  handleSignal,
  handleCloseConnections,
  handleDisconnect,
} = require("./handlers");

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("joinRoom", handleJoinRoom(socket, io));

  socket.on("joinCall", (roomID) => {
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
  });

  socket.on("sending signal", (payload) => {
    io.to(payload.userToSignal).emit("user joined", {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  socket.on("returning signal", (payload) => {
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on("message", handleMessage(socket, io));
  socket.on("leaveRoom", handleLeaveRoom(socket, io));
  socket.on("signal", handleSignal(socket));
  socket.on("closeConnections", handleCloseConnections(socket, io));
  socket.on("disconnect", handleDisconnect(socket, io));
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
