"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const cors_1 = __importDefault(require("cors"));
const handlers_1 = require("./handlers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});
io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);
    socket.on("createRoom", (0, handlers_1.handleCreateRoom)(socket, io));
    socket.on("joinRoom", (0, handlers_1.handleJoinRoom)(socket, io));
    socket.on("getRoomUsers", (0, handlers_1.handleGetRoomUsers)(socket, io));
    socket.on("roomNameChange", (0, handlers_1.handleRoomNameChange)(socket, io));
    socket.on("play", (0, handlers_1.handlePlay)(socket, io));
    socket.on("pause", (0, handlers_1.handlePause)(socket, io));
    socket.on("seektime", (0, handlers_1.handleSeekTime)(socket, io));
    socket.on("getNests", (0, handlers_1.handleGetNests)(socket, io));
    socket.on("user started sharing", (0, handlers_1.handelSharing)(socket, io));
    socket.on("sending signal", (0, handlers_1.handleSendingSignal)(socket, io));
    socket.on("restoreSession", (0, handlers_1.handleRestoreSession)(socket, io));
    socket.on("toggle-room-type", (0, handlers_1.handleToggleRoomType)(socket, io));
    socket.on("kick-user", (0, handlers_1.handleKickUser)(socket, io));
    socket.on("sync-with-admin", (0, handlers_1.handleSyncWithAdmin)(socket, io));
    socket.on("sync-all-users", (0, handlers_1.handleSyncAllUsers)(socket, io));
    socket.on("smiley", (0, handlers_1.handleSmiley)(socket, io));
    // Listen for 'acknowledge' events
    socket.on("acknowledge", ({ signal, callerID }) => {
        socket.to(callerID).emit("acknowledge", signal);
    });
    socket.on("current-time", (0, handlers_1.handleSendCurrentTime)(socket, io));
    socket.on("message", (0, handlers_1.handleMessage)(socket, io));
    socket.on("leaveRoom", (0, handlers_1.handleLeaveRoom)(socket, io));
    socket.on("show-change", (0, handlers_1.handleShowChange)(socket, io));
    socket.on("initiate-broadcast", (0, handlers_1.handleInitiateBroadcast)(socket, io));
    socket.on("webRTC-offer", (0, handlers_1.handleWebRTCOffer)(socket, io));
    socket.on("webRTC-answer", (0, handlers_1.handleWebRTCAnswer)(socket));
    socket.on("webRTC-ice-candidate", (0, handlers_1.handleWebRTCICECandidate)(socket, io));
    socket.on("closeConnections", (0, handlers_1.handleCloseConnections)(socket, io));
    socket.on("disconnect", (0, handlers_1.handleDisconnect)(socket, io));
});
server.listen(5000, () => {
    console.log("Server listening on port 5000");
});
