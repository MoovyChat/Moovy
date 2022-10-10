import { ReactElement } from 'react';

export interface User {
  uid: string;
  name: string;
  email?: string;
  nickname: string;
  photoUrl?: string;
  comments?: CommentInfo[]; //Remove
  replies?: CommentInfo[]; //Remove
  joinedAt?: string;
  updatedAt?: string;
  followerCount?: number | null | undefined;
  followingCount?: number | null | undefined;
  watchedMovies?: string[] | null | undefined;
  favorites?: string[];
  __typename?: 'User' | undefined;
}

export interface timeMessage {
  time: string;
  message: string;
  madeBy: string;
  timeStamp: number;
}

interface timeMsgObj {
  [key: string]: timeMessage[];
}
export interface Movie {
  mid: string;
  name: string;
  platformId?: number;
  likes: string[];
  totalCommentsCountOfMovie: number;
  commentsLoadedCount: number;
  totalRepliesCountOfMovie: number;
  newlyLoadedCommentTimeStamp?: string;
  lastPage?: number;
  currentPage?: number;
  likesCount: number;
  createdAt?: any;
  favCount?: number;
  updatedAt?: any;
  fetchingComments?: boolean;
  initialLoadedTimeStamp?: string;
  pastLoadedCount?: number;
  loadNew?: number;
}

export interface CommentInfo {
  cid?: string;
  commentedUserId?: string;
  message?: string;
  likesCount?: any;
  likes?: [];
  replies?: any[];
  repliesCount?: number;
  movieId?: string;
  platformId?: number;
  createdAt?: any;
  updatedAt?: any;
  __typename?: any;
}

export interface ReplyInfo {
  rid?: string;
  repliedUserUid: string;
  parentCommentCid: string;
  parentReplyRid?: string;
  movieMid: string;
  platformId: number;
  message: string;
  likesCount: number;
  likes?: [];
  replies?: any[];
  createdAt?: any;
  updatedAt?: any;
  __typename?: any;
}
export interface filterType {
  title: string;
  filter?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  url?: string;
  sampleFilter?: string;
  isSelected?: boolean;
}

export interface videoFilterSettings {
  grayscale?: string;
  contrast?: string;
  blur?: string;
  brightness?: string;
  invert?: string;
  sepia?: string;
  saturate?: string;
  hue?: string;
  none?: string;
}

export interface SettingsInterface {
  chatWindowSize: string;
  videoParentSize: string;
  videoSize: string;
  openChatWindow: boolean;
  smoothWidth: number;
  isPopSlideOpen: boolean;
  popSlideContentType: string;
  popSlideUserId: string;
  popSlideLikes: any[];
  theme: string;
}

export interface videoBorderSettings {
  color?: string;
}

export interface globalUIStyles {
  backgroundColor?: string;
  textColor?: string;
}

export interface textMap {
  message: string;
  type: string;
}

export interface loadingInterface {
  isCommentsLoaded: boolean;
  isRepliesLoaded: boolean;
  isEditNameBoxOpen: boolean;
}

export interface borderType {
  title: string;
  color: string;
}
