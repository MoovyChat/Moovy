export interface User {
  uid: string;
  name: string;
  email: string;
  nickname: string;
  photoUrl?: string;
  comments?: CommentInfo[]; //Remove
  replies?: CommentInfo[]; //Remove
  joinedAt?: string;
  updatedAt?: string;
  watched?: string[];
  favorites?: string[];
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
  updatedAt?: any;
  fetchingComments?: boolean;
  initialLoadedTimeStamp?: string;
  pastLoadedCount?: number;
  loadNew?: number;
}

export interface CommentInfo {
  cid?: string;
  rid?: string;
  parentComment?: string;
  parent?: string;
  commentedUserId?: string;
  message?: string;
  likesCount?: any;
  likes?: [];
  replies?: any[];
  movieId?: string;
  platformId?: number;
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
