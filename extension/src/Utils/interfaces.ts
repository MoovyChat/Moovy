export interface User {
  id: string;
  name: string;
  email?: string;
  nickname: string;
  photoUrl?: string;
  bg?: string;
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
  pastLoadedCount?: number;
  loadNew?: number;
  runtime?: number | null | undefined;
  thumbs?: string | null | undefined;
  season?: string | null | undefined;
  titleId?: string | null | undefined;
  fetched?: boolean;
}

export interface CommonInfo {
  id?: string;
}
export interface CommentInfo {
  id: string;
  commentedUserId?: string;
  message: string;
  likesCount: any;
  likes: any[];
  repliesCount: number;
  isReplyWindowOpen?: boolean;
  movieId: string;
  page?: number;
  lastPage?: number;
  commentedUserName?: string;
  parentCommentId?: string;
  parentReplyId?: string;
  platformId: number;
  createdAt?: any;
  updatedAt?: any;
  __typename?: any;
}

export interface _users {
  __typename?: 'User' | undefined;
  id: string;
  name: string;
  nickname: string;
  photoUrl: string;
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
  popSlideData: { data: any };
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
  isMovieExists: boolean;
  isMovieLoaded: boolean;
  isMovieInsertionFinished: boolean;
  loadingText: string;
  isNewCommentsLoaded: boolean;
  isNextCommentsLoaded: boolean;
  networkError: boolean;
}

export interface borderType {
  title: string;
  color: string;
}

export interface EpisodeInfo {
  id: number;
  title: string;
  synopsis: string;
  stills: string;
  thumbs: string;
  runtime: number;
}

export interface SeasonInfo {
  title: string;
  year: number;
  episodes: EpisodeInfo[];
}
export interface MovieFullInformation {
  title?: string;
  type?: string;
  artwork?: string;
  boxart?: string;
  storyart?: string;
  rating?: string;
  synopsis?: string;
  advisories?: string[];
  runtime?: number;
  year?: number;
  seasons: SeasonInfo[] | null;
}
