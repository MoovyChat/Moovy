import { Movie, Users } from '../generated/graphql';

export interface Comment {
  __typename?: 'Comment';
  commentedUserId: string;
  id: string;
  likesCount?: number | null | undefined;
  message: string;
  movieId: string;
  platformId: number;
  repliesCount?: number | null | undefined;
  updatedAt: string;
  createdAt: string;
  isReplyWindowOpen?: boolean;
  page?: number;
  lastPage?: number;
}

export interface Reply {
  __typename?: 'Reply' | undefined;
  id: string;
  likesCount?: number | null | undefined;
  message: string;
  movieId: string;
  commentedUserId: string;
  parentCommentId: string;
  platformId: number;
  repliesCount?: number | null | undefined;
  parentReplyId?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface FeedObject {
  __typename?: 'MiniCommentFormat' | undefined;
  id: string;
  type: string;
  commentedUserId: string;
  createdAt: string;
  updatedAt: string;
}

export interface textMap {
  message: string;
  type: string;
}

export interface VisitedInterface {
  id: string;
  visitTime: number;
  watchTime: number;
}

export interface AvailableRoom {
  roomId: string;
  roomName: string;
  users: { id: string; isAdmin: boolean; user: Users }[];
  movie: Movie;
}
