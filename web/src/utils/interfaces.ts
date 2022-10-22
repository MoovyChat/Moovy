export interface User {
  id: string;
  name: string;
  email: string;
  nickname: string;
  photoUrl: string;
  watchedMovies?: string[] | null | undefined;
  followingCount?: number | null | undefined;
  followerCount?: number | null | undefined;
  joinedAt?: string;
  updatedAt?: string;
  __typename?: 'User' | undefined;
}

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
}

export interface Movie {
  __typename?: 'Movie' | undefined;
  commentCount: number;
  createdAt: string;
  favCount: number;
  id: string;
  likesCount: number;
  name: string;
  platformId: number;
  updatedAt: string;
  viewsCount: number;
}

export interface textMap {
  message: string;
  type: string;
}

export interface timeMessage {
  time: string;
  message: string;
  madeBy: string;
  timeStamp: number;
}
