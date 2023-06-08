/* This is a server-side code written in TypeScript using the Node.js runtime environment. It imports
necessary modules such as `http`, `express`, `socket.io`, and `cors`. It defines various event
handlers such as `handleJoinRoom`, `handleMessage`, `handleLeaveRoom`, `handleCloseConnections`,
`handleDisconnect`, `handleCreateRoom`, `handleGetNests`, `handlePlay`, `handlePause`,
`handleSeekTime`, `handelSharing`, `handleSendingSignal`, `handleRestoreSession`, and
`handleGetRoomUsers` to handle different socket events. It creates an instance of the `express`
application, sets up CORS middleware, creates an HTTP server using the `http` module, and creates a
`socket.io` server instance using the HTTP server. It listens for socket connections and registers
the event handlers to handle different socket events. Finally, it starts the server and listens on
port 3001. */
import http from "http";
import express from "express";
import socketIO from "socket.io";
import cors from "cors";
import {
  handleJoinRoom,
  handleMessage,
  handleLeaveRoom,
  handleCloseConnections,
  handleDisconnect,
  handleCreateRoom,
  handleGetNests,
  handlePlay,
  handlePause,
  handleSeekTime,
  handelSharing,
  handleSendingSignal,
  handleRestoreSession,
  handleGetRoomUsers,
  handleShowChange,
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
  socket.on("createRoom", handleCreateRoom(socket as CustomSocket, io));
  socket.on("joinRoom", handleJoinRoom(socket as CustomSocket, io));
  socket.on("getRoomUsers", handleGetRoomUsers(socket as CustomSocket, io));
  socket.on("play", handlePlay(socket as CustomSocket, io));
  socket.on("pause", handlePause(socket as CustomSocket, io));
  socket.on("seektime", handleSeekTime(socket as CustomSocket, io));
  socket.on("getNests", handleGetNests(socket as CustomSocket, io));
  socket.on("user started sharing", handelSharing(socket as CustomSocket, io));
  socket.on("sending signal", handleSendingSignal(socket as CustomSocket, io));
  socket.on("restoreSession", handleRestoreSession(socket, io));
  // Listen for 'acknowledge' events
  socket.on("acknowledge", ({ signal, callerID }) => {
    socket.to(callerID).emit("acknowledge", signal);
  });
  socket.on("message", handleMessage(socket, io));
  socket.on("leaveRoom", handleLeaveRoom(socket as CustomSocket, io));
  socket.on("show-change", handleShowChange(socket as CustomSocket, io));
  socket.on(
    "closeConnections",
    handleCloseConnections(socket as CustomSocket, io)
  );
  socket.on("disconnect", handleDisconnect(socket as CustomSocket, io));
});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
