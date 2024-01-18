import { Socket, Server } from "socket.io";
import { Room } from "./entities/Room";
import { Users } from "./entities/Users";
import { RoomType } from "./resolvers/rooms/roomTypes";

export const handleGetRoomUsers =
  (_socket: Socket, io: Server) => async (roomId: string) => {
    const room = await Room.findOne({
      where: { id: roomId },
      relations: ["users"],
    });
    const usersInRoom = room ? room.users : [];
    io.to(roomId).emit("roomUsers", usersInRoom);
  };

export const handleRoomNameChange = (socket: Socket, io: Server) => {
  return async (roomData: {
    roomId: string;
    data: { value: string; message: string };
  }) => {
    // Fetch the room from the database
    const room = await Room.findOne({
      where: { id: roomData.roomId },
    });

    if (!room) {
      // Emit an error if the room does not exist
      socket.emit("change-room-name-error", {
        message: "The room does not exist",
      });
      return;
    }

    // Update the room name in the database
    room.name = roomData.data.value;
    await Room.save(room);

    // Notify all users in the room about the room name change
    io.to(roomData.roomId).emit("room-name-changed", {
      message: roomData.data.message,
    });

    // Emit a success message to the client who changed the room name
    socket.emit("change-room-name-success", {
      message: "Successfully changed the room name",
      newRoomName: room.name,
    });
  };
};

export const handlePlay = (socket: Socket, io: Server) => {
  return async (roomId: string, user: any) => {
    // Fetch the room from the database
    const room = await Room.findOne({
      where: { id: roomId },
      relations: ["admins", "users"],
    });

    if (room) {
      const roomUser = room.users.find((u: Users) => u.id === user.id);
      const isAdmin = room.admins.some((admin: Users) => admin.id === user.id);

      if (roomUser && isAdmin) {
        io.to(roomId).emit("play", {
          user,
        });
        io.to(roomId).emit("message", {
          type: "play",
          user,
        });
      } else {
        socket.emit("play-error", {
          message: "You are not authorized to play the video",
          user,
        });
      }
    } else {
      socket.emit("room-play-error", {
        message: "The room does not exist",
        user,
      });
    }
  };
};

export const handlePause =
  (socket: Socket, io: Server) => async (roomId: string, user: any) => {
    // Fetch the room from the database
    const room = await Room.findOne({
      where: { id: roomId },
      relations: ["admins", "users"],
    });

    if (room) {
      const isAdmin = room.admins.some((admin) => admin.id === user.id);

      if (isAdmin) {
        io.to(roomId).emit("pause", {
          user,
        });
        io.to(roomId).emit("message", {
          type: "pause",
          user,
        });
      } else {
        socket.emit("pause-error", {
          message: "You are not authorized to pause the video",
          user,
        });
      }
    } else {
      socket.emit("room-pause-error", {
        message: "The room does not exist",
        user,
      });
    }
  };

export const handleSeekTime =
  (socket: Socket, io: Server) =>
  async (seekTime: string, roomId: string, user: any) => {
    const room = await Room.findOne({
      where: { id: roomId },
      relations: ["admins", "users"],
    });

    if (room) {
      const isAdmin = room.admins.some((admin) => admin.id === user.id);

      if (isAdmin) {
        io.to(roomId).emit("seekTime", {
          user,
          seekTime,
        });
        io.to(roomId).emit("message", {
          type: "seekTime",
          user,
          seekTime,
        });
      } else {
        socket.emit("seekTime-error", {
          message: "You are not authorized to seek the time",
        });
      }
    } else {
      socket.emit("room-seekTime-error", {
        message: "The room does not exist",
      });
    }
  };

export const handleGetNests = (_socket: Socket, io: Server) => async () => {
  const publicRooms = await Room.find({
    where: { roomType: RoomType.PUBLIC },
    relations: ["users"],
  });

  const publicRoomsList = publicRooms.map((room) => ({
    roomName: room.name,
    roomId: room.id,
    users: room.users,
    movie: room.show,
  }));

  io.emit("nestsList", publicRoomsList);
};
