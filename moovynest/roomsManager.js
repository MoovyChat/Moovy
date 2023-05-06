// roomsManager.js

const rooms = {};

function addUserToRoom(roomId, socket, user) {
  socket.join(roomId);
  socket.roomId = roomId;
  socket.user = user;

  if (!rooms[roomId]) {
    rooms[roomId] = [];
  }

  // Check if the user is already in the room
  const existingUser = rooms[roomId].find(
    (roomUser) => roomUser.id === socket.id
  );
  if (!existingUser) {
    rooms[roomId].push({ id: socket.id, user });
  }
}

function removeUserFromRoom(socket) {
  if (socket.roomId && socket.user) {
    rooms[socket.roomId] = rooms[socket.roomId].filter(
      (roomUser) => roomUser.id !== socket.id
    );
    return true;
  }
  return false;
}

function getUsersInRoom(roomId) {
  const users = rooms[roomId] || [];
  return users.map(({ id, user }) => ({ id, user }));
}

module.exports = {
  addUserToRoom,
  removeUserFromRoom,
  getUsersInRoom,
};
