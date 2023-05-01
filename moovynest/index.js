const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Handle incoming messages from the client
  socket.on("message", (data) => {
    console.log("Received message:", data);
    // Broadcast the message to all clients
    io.emit("message", data);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
