import http from "http";
import express from "express";
import socketIO from "socket.io";
import cors from "cors";
import {
  handleJoinRoom,
  handleMessage,
  handleLeaveRoom,
  handleSignal,
  handleCloseConnections,
  handleDisconnect,
  handleJoinCall,
  handleSendingSignal,
  handleReturningSignal,
  handleCurrentCallUsers,
} from "./handlers";
import { CustomSocket } from "./customSocket";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new socketIO.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("joinRoom", handleJoinRoom(socket as CustomSocket, io));

  socket.on("joinCall", handleJoinCall(socket as CustomSocket, io));
  socket.on("sending signal", handleSendingSignal(socket as CustomSocket, io));
  socket.on(
    "returning signal",
    handleReturningSignal(socket as CustomSocket, io)
  );

  socket.on(
    "currentCallUsers",
    handleCurrentCallUsers(socket as CustomSocket, io)
  );
  socket.on("message", handleMessage(socket, io));
  socket.on("leaveRoom", handleLeaveRoom(socket as CustomSocket, io));
  socket.on("signal", handleSignal(socket, io));
  socket.on(
    "closeConnections",
    handleCloseConnections(socket as CustomSocket, io)
  );
  socket.on("disconnect", handleDisconnect(socket as CustomSocket, io));
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
