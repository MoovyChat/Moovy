import { Socket } from "socket.io";
import { CustomSocket } from "./customSocket";

export interface Movie {
  id: string;
  name: string;
  platformId?: number;
  parentTitleName?: string;
  thumbs?: string | null | undefined;
}

export type RoomUser = {
  id: string;
  user: any;
  name?: string;
  socket?: Socket;
  isAdmin: boolean;
  isSharingCamera?: boolean;
};

export type RoomInfo = {
  users: RoomUser[];
  roomName: string;
  roomId: string;
  url: string;
  movie: Movie;
  isPublic: boolean;
};

export type Session = {
  socket: CustomSocket;
  user: any;
  room: RoomInfo;
};
