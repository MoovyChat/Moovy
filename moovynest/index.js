const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Allow any origin or specify allowed origins, e.g., ["https://www.netflix.com"]
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Handle joining a room
  socket.on("joinRoom", (roomId, user) => {
    socket.join(roomId);
    socket.roomId = roomId;
    socket.user = user;

    // Add the user to the list of users in the room
    if (!rooms[roomId]) {
      rooms[roomId] = [];
    }
    rooms[roomId].push({ id: socket.id, user });

    // Emit the updated list of users to the clients in the room
    io.to(roomId).emit("roomUsers", rooms[roomId]);

    io.to(roomId).emit("message", {
      type: "join",
      user,
      message: `${socket.id} joined room ${roomId}`,
    });
  });

  socket.on("startVideoCommunication", (roomId) => {
    socket.broadcast.to(roomId).emit("startVideoCommunication");
  });

  // Handle incoming messages from the client
  socket.on("message", ({ roomId, data }) => {
    console.log("Received message:", data);
    // Broadcast the message to all clients in the same room, including the sender
    io.to(roomId).emit("message", data);
  });

  socket.on("leaveRoom", () => {
    if (socket.roomId && socket.user) {
      // Remove the user from the list of users in the room
      rooms[socket.roomId] = rooms[socket.roomId].filter(
        (roomUser) => roomUser.id !== socket.id
      );

      // Emit the updated list of users to the clients in the room
      io.to(socket.roomId).emit("roomUsers", rooms[socket.roomId]);

      // Notify other users in the room that the user has left
      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.id} left room ${socket.roomId}`,
      });

      // Remove the user's room and user information from the socket
      delete socket.roomId;
      delete socket.user;
    }
  });

  // Handle WebRTC signaling
  socket.on("signal", (data) => {
    const { type, roomId, message } = data;
    socket.to(roomId).emit("signal", { type, from: socket.id, message });
  });

  socket.on("closeConnections", () => {
    if (socket.roomId && rooms[socket.roomId]) {
      // Iterate through the list of users in the room and disconnect their sockets
      rooms[socket.roomId].forEach((roomUser) => {
        io.sockets.sockets.get(roomUser.id).disconnect();
      });

      // Remove the room from the list of rooms
      delete rooms[socket.roomId];
    }
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    if (socket.roomId && socket.user) {
      // Remove the user from the list of users in the room
      rooms[socket.roomId] = rooms[socket.roomId].filter(
        (roomUser) => roomUser.id !== socket.id
      );

      // Emit the updated list of users to the clients in the room
      io.to(socket.roomId).emit("roomUsers", rooms[socket.roomId]);

      io.to(socket.roomId).emit("message", {
        type: "leave",
        user: socket.user,
        message: `${socket.id} left room ${socket.roomId}`,
      });
    }
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
