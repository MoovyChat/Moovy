import { Socket } from "socket.io";
import { CustomSocket } from "./customSocket";

export interface Movie {
  id: string;
  name: string;
  platformId?: number;
  totalCommentsCountOfMovie?: number;
  commentsLoadedCount?: number;
  totalRepliesCountOfMovie?: number;
  newlyLoadedCommentTimeStamp?: string;
  lastPage?: number;
  currentPage?: number;
  likesCount?: number;
  commentCount?: number;
  viewsCount?: number;
  createdAt?: any;
  favCount?: number;
  updatedAt?: any;
  fetchingComments?: boolean;
  initialLoadedTimeStamp?: string;
  parentTitleName?: string;
  pastLoadedCount?: number;
  loadNew?: number;
  runtime?: number | null | undefined;
  thumbs?: string | null | undefined;
  season?: string | null | undefined;
  titleId?: string | null | undefined;
  fetched?: boolean;
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
