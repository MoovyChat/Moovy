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

  // Handle incoming messages from the client
  socket.on("message", ({ roomId, data }) => {
    console.log("Received message:", data);
    // Broadcast the message to all clients in the same room, including the sender
    io.to(roomId).emit("message", data);
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
