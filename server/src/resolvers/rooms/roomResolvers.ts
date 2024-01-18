import { Resolver, Mutation, Arg, Ctx, Query } from "type-graphql";
import { Room } from "../../entities/Room";
import { CreateRoomInput, JoinRoomInput, RoomType } from "./roomTypes";
import { MyContext } from "../../types";
import { Users } from "../../entities/Users";

@Resolver()
export class RoomResolver {
  @Query(() => [Room])
  async rooms(): Promise<Room[]> {
    return Room.find({ relations: ["users", "admins"] });
  }

  @Mutation(() => Room, { nullable: true })
  async createRoom(
    @Arg("data") inputData: CreateRoomInput,
    @Ctx() { io }: MyContext
  ): Promise<Room | null> {
    // Check if the room already exists in the database
    const existingRoom = await Room.findOne({
      where: { id: inputData.roomId },
    });

    if (existingRoom) {
      throw new Error("The room already exists");
    }

    // Fetch the user
    const user = await Users.findOne({ where: { id: inputData.userId } });
    if (!user) {
      throw new Error("User not found");
    }

    // Create a new room
    let newRoom = Room.create({
      id: inputData.roomId,
      name: inputData.roomName,
      show: inputData.movie,
      roomType: inputData.isPublic ? RoomType.PUBLIC : RoomType.PRIVATE,
      users: [user], // Associate the room with the user
    });

    await Room.save(newRoom);

    // Notify other users or perform real-time functionalities with Socket.io
    io.to(inputData.roomId).emit("message", {
      type: "join",
      user: user, // Send the user object
      message: `${user.name} created room ${inputData.roomId}`,
    });

    // Update all users with the new list of rooms
    const allRooms = await Room.find(); // Fetch all rooms from the database
    const roomsList = allRooms.map((room) => ({
      roomName: room.name,
      roomId: room.id,
      movie: room.show,
      users: room.users,
    }));
    io.emit("nestsList", roomsList);

    // Notify other users or perform real-time functionalities with Socket.io
    io.to(inputData.roomId).emit("message", {
      type: "join",
      user: user, // Send the user object
      message: `${user.name} created room ${inputData.roomId}`,
    });

    return newRoom;
  }

  @Mutation(() => Room, { nullable: true })
  async joinRoom(
    @Arg("data") inputData: JoinRoomInput,
    @Ctx() { io }: MyContext
  ): Promise<Room | null> {
    // Fetch the room
    const room = await Room.findOne({
      where: { id: inputData.roomId },
      relations: ["users"],
    });

    if (!room) {
      throw new Error("Room not found");
    }

    // Fetch the user
    const user = await Users.findOne({ where: { id: inputData.userId } });
    if (!user) {
      throw new Error("User not found");
    }

    // Check if the user is already in the room
    const isUserInRoom = room.users.some((u) => u.id === user.id);
    if (isUserInRoom) {
      throw new Error("User is already in the room");
    }

    // Add the user to the room
    room.users.push(user);

    await Room.save(room);

    // Notify other users in the room via Socket.io
    io.to(inputData.roomId).emit("message", {
      type: "join",
      user: user, // Send the user object
      message: `${user.name} joined room ${inputData.roomId}`,
    });

    return room;
  }
}
