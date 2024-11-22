"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = exports.getUsersInRoom = exports.removeUserFromRoom = exports.addUserToRoom = void 0;
const sessionManager_1 = require("./sessionManager");
const rooms = [];
exports.rooms = rooms;
/**
 * The function adds a user to a room and updates their socket ID and admin status if they already
 * exist in the room.
 * @param {string} roomId - a string representing the unique identifier of the room where the user will
 * be added.
 * @param {CustomSocket} socket - CustomSocket - a custom socket object that represents a connection
 * between the server and a client.
 * @param {any} user - The user object represents the user that is being added to the room. It could
 * contain information such as the user's name, ID, and any other relevant details.
 * @param {string} url - The URL of the room that the user is being added to.
 * @param {string} roomName - A string representing the name of the room that the user is being added
 * to.
 * @param {boolean} isAdmin - A boolean value indicating whether the user being added to the room is an
 * admin or not.
 * @returns the updated `existingRoom` object which contains information about the room, including the
 * users in the room and their socket IDs and admin status.
 */
function addUserToRoom(roomId, socket, user, url, roomName, isAdmin, movie, isPublic) {
    socket.join(roomId);
    socket.roomId = roomId;
    socket.user = user;
    let existingRoom = rooms.find((room) => room.roomId === roomId);
    if (!existingRoom) {
        existingRoom = { users: [], roomName, roomId, url, movie, isPublic };
        rooms.push(existingRoom);
    }
    // Check if user already exists in the room
    const existingUser = existingRoom.users.find((roomUser) => roomUser.user.id === user.id);
    if (existingUser) {
        // If the user already exists, update their socket id and admin status
        existingUser.id = socket.id;
        existingUser.isAdmin = isAdmin;
    }
    else {
        // If the user doesn't exist in the room, add them
        existingRoom.users.push({ id: socket.id, user, isAdmin });
    }
    return existingRoom;
}
exports.addUserToRoom = addUserToRoom;
/**
 * This function removes a user from a room and deletes the room if there are no users left.
 * @param {CustomSocket} socket - CustomSocket, which is likely a custom implementation of the Socket
 * interface in a WebSocket library. It probably contains information about the current socket
 * connection, such as the socket ID, the room ID it belongs to, and the user associated with the
 * socket.
 * @returns a boolean value. It returns `true` if the user was successfully removed from the room, and
 * `false` if either the socket does not have a roomId or user property, or if the room could not be
 * found in the rooms array.
 */
function removeUserFromRoom(socketId, roomId) {
    let removed = false;
    // We find the session corresponding to the socket
    sessionManager_1.sessions.forEach((session, sessionId) => {
        if (session.socket.id === socketId && session.socket.roomId === roomId) {
            const room = rooms.find((room) => room.roomId === roomId);
            // Filter out the leaving user from the room's users
            session.room.users = session.room.users.filter((roomUser) => roomUser.id !== socketId);
            // Remove the user's session
            sessionManager_1.sessions.delete(sessionId);
            // If no users are left in the room, we delete all sessions for that room
            if (session.room.users.length === 0) {
                room && rooms.splice(rooms.indexOf(room), 1);
                for (const [otherSessionId, otherSession] of sessionManager_1.sessions.entries()) {
                    if (otherSession.room.roomId === session.room.roomId) {
                        sessionManager_1.sessions.delete(otherSessionId);
                    }
                }
            }
            removed = true;
        }
    });
    return removed;
}
exports.removeUserFromRoom = removeUserFromRoom;
/**
 * This TypeScript function returns an array of users in a given room, with their ID, username, camera
 * sharing status, and admin status.
 * @param {string} roomId - a string representing the ID of a chat room.
 * @returns The function `getUsersInRoom` returns an array of `RoomUser` objects. These objects contain
 * information about the users in a specific room, including their `id`, `user` object, whether they
 * are `isSharingCamera`, and whether they are an `isAdmin`. The function first finds the `room` object
 * in the `rooms` array that matches the given `roomId`, and then
 */
function getUsersInRoom(roomId) {
    const room = rooms.find((room) => room.roomId === roomId);
    const users = room ? room.users : [];
    return users.map(({ id, user, isSharingCamera, isAdmin }) => ({
        id,
        user,
        isSharingCamera,
        isAdmin,
    }));
}
exports.getUsersInRoom = getUsersInRoom;
