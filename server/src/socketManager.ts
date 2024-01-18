import socketIO from "socket.io";
import { Server } from "http";
import Redis from "ioredis";
import {
  handleGetNests,
  handleGetRoomUsers,
  handlePause,
  handlePlay,
  handleRoomNameChange,
  handleSeekTime,
} from "./handlers";

export const setupSocket = (server: Server, redisClient: Redis) => {
  const io = new socketIO.Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("set-user-id", (userId) => {
      redisClient.set(socket.id, userId);
    });

    socket.on("getRoomUsers", handleGetRoomUsers(socket, io));
    socket.on("roomNameChange", handleRoomNameChange(socket, io));
    socket.on("play", handlePlay(socket, io));
    socket.on("pause", handlePause(socket, io));
    socket.on("seektime", handleSeekTime(socket, io));
    socket.on("getNests", handleGetNests(socket, io));

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      redisClient.del(socket.id);
    });
  });

  return io;
};
