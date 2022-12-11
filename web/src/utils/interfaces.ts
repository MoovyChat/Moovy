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

export interface Profile {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
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

export interface Notifications {
  __typename?: 'Notifications' | undefined;
  id: string;
  userId: string;
  message: string;
  fromUser: string;
  fromUserPhotoUrl: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
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
