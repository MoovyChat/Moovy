import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type AdminNotifications = {
  __typename?: 'AdminNotifications';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type AdminUser = {
  __typename?: 'AdminUser';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  commentedUserId: Scalars['String'];
  commentedUserName: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  flagged?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieId: Scalars['String'];
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  toxicityScore?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type CommentInput = {
  commentedUserId: Scalars['String'];
  commentedUserName: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  platformId: Scalars['Int'];
};

export type CommentLikesObject = {
  __typename?: 'CommentLikesObject';
  lastPage: Scalars['Int'];
  likes: Array<Users>;
  likesCount: Scalars['Int'];
  page: Scalars['Int'];
};

export type CommentOrReply = {
  __typename?: 'CommentOrReply';
  comment?: Maybe<Comment>;
  reply?: Maybe<Reply>;
};

export type CommentReport = {
  __typename?: 'CommentReport';
  commentId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  report: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  usersId: Scalars['String'];
};

export type CommentStats = {
  __typename?: 'CommentStats';
  commentId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  like?: Maybe<Scalars['Boolean']>;
  movieId: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type CommentsStatsObject = {
  __typename?: 'CommentsStatsObject';
  likeStatus: CommentStats;
  user: Users;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  read: Scalars['Boolean'];
  subject: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type EpisodeInfo = {
  id: Scalars['String'];
  runtime?: InputMaybe<Scalars['Int']>;
  stills?: InputMaybe<Scalars['String']>;
  synopsis?: InputMaybe<Scalars['String']>;
  thumbs?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FavMovieObject = {
  __typename?: 'FavMovieObject';
  favorite: Scalars['Boolean'];
  movieId: Scalars['String'];
  movieName: Scalars['String'];
  userId: Scalars['String'];
};

export type FavoriteObject = {
  __typename?: 'FavoriteObject';
  favCount: Scalars['Float'];
  favorites?: Maybe<Array<Movie>>;
  id: Scalars['String'];
};

export type FeedConnection = {
  __typename?: 'FeedConnection';
  edges: Array<FeedEdge>;
  nodes: Array<FeedItem>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FeedEdge = {
  __typename?: 'FeedEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<FeedItem>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  commentedUserId: Scalars['String'];
  compositeKey: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Follow = {
  __typename?: 'Follow';
  blocked?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['String'];
  followingId: Scalars['String'];
  follows?: Maybe<Scalars['Boolean']>;
  reported?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type FollowNotifications = {
  __typename?: 'FollowNotifications';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  fromUser: Scalars['String'];
  fromUserPhotoUrl: Scalars['String'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  toUserId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FollowerObject = {
  __typename?: 'FollowerObject';
  followerCount: Scalars['Float'];
  followers?: Maybe<Array<Users>>;
  id: Scalars['String'];
};

export type FollowingObject = {
  __typename?: 'FollowingObject';
  following?: Maybe<Array<Users>>;
  followingCount: Scalars['Float'];
  id: Scalars['String'];
};

export type FullMiniUser = {
  __typename?: 'FullMiniUser';
  favorites?: Maybe<FavoriteObject>;
  followers?: Maybe<FollowerObject>;
  following?: Maybe<FollowingObject>;
  history?: Maybe<HistoryObject>;
  id: Scalars['String'];
  likes?: Maybe<LikesMObject>;
  profile?: Maybe<Profile>;
};

export type FullUserMovieStats = {
  __typename?: 'FullUserMovieStats';
  movie: Movie;
  movieStats?: Maybe<MovieStats>;
  user: Users;
};

export type FullUserObject = {
  __typename?: 'FullUserObject';
  favTitles?: Maybe<Array<FavMovieObject>>;
  likedTitles?: Maybe<Array<LikedMovieObject>>;
  totalComments?: Maybe<Scalars['Int']>;
  totalLikes?: Maybe<Scalars['Int']>;
  totalWatched?: Maybe<Scalars['Int']>;
  user?: Maybe<Users>;
};

export type HistoryObject = {
  __typename?: 'HistoryObject';
  history?: Maybe<Array<Visited>>;
  historyCount: Scalars['Float'];
  id: Scalars['String'];
  recentMovies?: Maybe<Array<Movie>>;
};

export type InputArgs = {
  bio: Scalars['String'];
  dob: Scalars['String'];
  fullname: Scalars['String'];
  gender: Scalars['String'];
  nickname: Scalars['String'];
  uid: Scalars['String'];
};

export type IsUserLikedObject = {
  __typename?: 'IsUserLikedObject';
  id: Scalars['String'];
  isLiked?: Maybe<Scalars['Boolean']>;
};

export type LikeAndFav = {
  __typename?: 'LikeAndFav';
  favorite?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Boolean']>;
};

export type LikeNotifications = {
  __typename?: 'LikeNotifications';
  commentId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  fromUser: Scalars['String'];
  fromUserPhotoUrl: Scalars['String'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  replyId?: Maybe<Scalars['String']>;
  toUserId: Scalars['String'];
  toUserNickName: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type LikedMovieObject = {
  __typename?: 'LikedMovieObject';
  like: Scalars['Boolean'];
  movieId: Scalars['String'];
  movieName: Scalars['String'];
  userId: Scalars['String'];
};

export type LikesAndComment = {
  __typename?: 'LikesAndComment';
  commentsCount: Scalars['Int'];
  likesCount: Scalars['Int'];
};

export type LikesAndFavObj = {
  __typename?: 'LikesAndFavObj';
  userFavoriteCount?: Maybe<Scalars['Int']>;
  userLikesCount?: Maybe<Scalars['Int']>;
};

export type LikesMObject = {
  __typename?: 'LikesMObject';
  id: Scalars['String'];
  likes?: Maybe<Array<Movie>>;
  likesCount: Scalars['Float'];
};

export type LikesObject = {
  __typename?: 'LikesObject';
  id: Scalars['String'];
  likes?: Maybe<Array<Users>>;
  likesCount: Scalars['Int'];
};

export type LinkPreview = {
  __typename?: 'LinkPreview';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isVideo?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  videoSrc?: Maybe<Scalars['String']>;
  videoType?: Maybe<Scalars['String']>;
};

export type Movie = {
  __typename?: 'Movie';
  commentCount: Scalars['Int'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  favCount: Scalars['Int'];
  id: Scalars['String'];
  likesCount: Scalars['Int'];
  name: Scalars['String'];
  parentTitleName?: Maybe<Scalars['String']>;
  platformId: Scalars['Int'];
  runtime?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['String']>;
  stills?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
  thumbs?: Maybe<Scalars['String']>;
  titleId: Scalars['String'];
  updatedAt: Scalars['String'];
  viewsCount: Scalars['Int'];
  year?: Maybe<Scalars['Int']>;
};

export type MovieCommentObject = {
  __typename?: 'MovieCommentObject';
  comments: Array<Comment>;
  hasMoreComments: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  totalCommentCount: Scalars['Int'];
};

export type MovieCommentsConnection = {
  __typename?: 'MovieCommentsConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges: Array<MovieEdge>;
  nodes: Array<Movie>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Movie>;
};

export type MovieFullInformation = {
  advisories?: InputMaybe<Array<Scalars['String']>>;
  artwork?: InputMaybe<Scalars['String']>;
  boxart?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  platformId?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['String']>;
  runtime?: InputMaybe<Scalars['Int']>;
  seasons?: InputMaybe<Array<SeasonInfo>>;
  storyart?: InputMaybe<Scalars['String']>;
  synopsis?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type MovieInput = {
  id: Scalars['String'];
  likesCount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  parentTitleName: Scalars['String'];
  platformId?: InputMaybe<Scalars['Int']>;
  runtime?: InputMaybe<Scalars['Int']>;
  season: Scalars['String'];
  stills: Scalars['String'];
  synopsis: Scalars['String'];
  thumbs: Scalars['String'];
  titleId?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type MovieStats = {
  __typename?: 'MovieStats';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  favorite?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Boolean']>;
  movieId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  amIFollowingThisUser?: Maybe<Scalars['Boolean']>;
  clearNotifications?: Maybe<Scalars['Boolean']>;
  createCharge?: Maybe<Scalars['String']>;
  createMessage: Contact;
  createPlatform?: Maybe<Platform>;
  createUser?: Maybe<Users>;
  decryptData?: Maybe<Scalars['String']>;
  deleteComment?: Maybe<Comment>;
  deleteMessages: Scalars['Boolean'];
  deleteReply?: Maybe<Reply>;
  deleteUser: Scalars['Boolean'];
  executeSql: Scalars['Boolean'];
  fetchNewComments: Array<Comment>;
  getTopThreeUserNames?: Maybe<Array<NicKNameFormat>>;
  getUserByNickName?: Maybe<Users>;
  getUserFollowStats?: Maybe<UserFollowStats>;
  getUserMut?: Maybe<Users>;
  insertAdminNotification: AdminNotifications;
  insertComment?: Maybe<Comment>;
  insertMovie?: Maybe<Movie>;
  insertMovieInformation?: Maybe<Movie>;
  insertReply?: Maybe<Reply>;
  insertRow: Scalars['Boolean'];
  insertTitle?: Maybe<Scalars['Boolean']>;
  insertVisited?: Maybe<Visited>;
  isUserNameExists?: Maybe<Scalars['Boolean']>;
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  markMessageAsRead: Contact;
  markSelectedMessagesAsRead: Array<Contact>;
  readNotification?: Maybe<NotificationObj>;
  reportComment?: Maybe<CommentReport>;
  reportReply?: Maybe<ReplyReport>;
  setAdmin: AdminUser;
  setCommentLike?: Maybe<CommentsStatsObject>;
  setReplyLike?: Maybe<ReplyStatsObject>;
  toggleFollow?: Maybe<Follow>;
  updateMovieTitle?: Maybe<Scalars['Boolean']>;
  updateMovieViewCount?: Maybe<Scalars['Int']>;
  updateUserBg: NickNameResponse;
  updateUserMovieStats?: Maybe<LikeAndFav>;
  updateUserNickName: NickNameResponse;
  updateUserProfilePhoto: NickNameResponse;
  updateVersionNumber?: Maybe<Scalars['String']>;
  upsertProfile?: Maybe<Profile>;
};


export type MutationAmIFollowingThisUserArgs = {
  fid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationClearNotificationsArgs = {
  uid: Scalars['String'];
};


export type MutationCreateChargeArgs = {
  userId: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationCreatePlatformArgs = {
  options: PlatformInput;
};


export type MutationCreateUserArgs = {
  options: UserInput;
};


export type MutationDecryptDataArgs = {
  data: Scalars['String'];
  iv: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  cid: Scalars['String'];
  mid: Scalars['String'];
};


export type MutationDeleteMessagesArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationDeleteReplyArgs = {
  rid: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  uid: Scalars['String'];
};


export type MutationExecuteSqlArgs = {
  params?: InputMaybe<Array<Scalars['String']>>;
  sql: Scalars['String'];
};


export type MutationFetchNewCommentsArgs = {
  mid: Scalars['String'];
  time: Scalars['String'];
};


export type MutationGetTopThreeUserNamesArgs = {
  search: Scalars['String'];
};


export type MutationGetUserByNickNameArgs = {
  nickname: Scalars['String'];
};


export type MutationGetUserFollowStatsArgs = {
  uid: Scalars['String'];
};


export type MutationGetUserMutArgs = {
  uid: Scalars['String'];
};


export type MutationInsertAdminNotificationArgs = {
  message: Scalars['String'];
};


export type MutationInsertCommentArgs = {
  options: CommentInput;
};


export type MutationInsertMovieArgs = {
  options: MovieInput;
};


export type MutationInsertMovieInformationArgs = {
  mid: Scalars['String'];
  options: MovieFullInformation;
};


export type MutationInsertReplyArgs = {
  options: ReplyInput;
};


export type MutationInsertRowArgs = {
  params?: InputMaybe<Array<Scalars['String']>>;
  sql: Scalars['String'];
};


export type MutationInsertTitleArgs = {
  options: TitleOptions;
};


export type MutationInsertVisitedArgs = {
  id: Scalars['String'];
  mid: Scalars['String'];
  time: Scalars['Float'];
  uid: Scalars['String'];
};


export type MutationIsUserNameExistsArgs = {
  text: Scalars['String'];
};


export type MutationLoginArgs = {
  uid: Scalars['String'];
};


export type MutationMarkMessageAsReadArgs = {
  id: Scalars['String'];
};


export type MutationMarkSelectedMessagesAsReadArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationReadNotificationArgs = {
  id: Scalars['Float'];
  type: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationReportCommentArgs = {
  cid: Scalars['String'];
  report: Scalars['Boolean'];
  uid: Scalars['String'];
};


export type MutationReportReplyArgs = {
  report: Scalars['Boolean'];
  rid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationSetAdminArgs = {
  role: Role;
  userId: Scalars['String'];
};


export type MutationSetCommentLikeArgs = {
  cid: Scalars['String'];
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationSetReplyLikeArgs = {
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  rid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationToggleFollowArgs = {
  follow: Scalars['Boolean'];
  followingId: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationUpdateMovieTitleArgs = {
  mid: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateMovieViewCountArgs = {
  mid: Scalars['String'];
};


export type MutationUpdateUserBgArgs = {
  uid: Scalars['String'];
  url: Scalars['String'];
};


export type MutationUpdateUserMovieStatsArgs = {
  mid: Scalars['String'];
  options: UserMovieOptions;
  uid: Scalars['String'];
};


export type MutationUpdateUserNickNameArgs = {
  nickname?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};


export type MutationUpdateUserProfilePhotoArgs = {
  uid: Scalars['String'];
  url: Scalars['String'];
};


export type MutationUpdateVersionNumberArgs = {
  newVersion: Scalars['String'];
};


export type MutationUpsertProfileArgs = {
  options: InputArgs;
};

export type NicKNameFormat = {
  __typename?: 'NicKNameFormat';
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
};

export type NickNameResponse = {
  __typename?: 'NickNameResponse';
  errors?: Maybe<Array<ErrorField>>;
  user?: Maybe<Users>;
};

export type NotificationObj = {
  __typename?: 'NotificationObj';
  follow?: Maybe<Array<FollowNotifications>>;
  like?: Maybe<Array<LikeNotifications>>;
};

export type NotificationObject = {
  __typename?: 'NotificationObject';
  follow?: Maybe<Array<FollowNotifications>>;
  like?: Maybe<Array<LikeNotifications>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export type PaginatedMovieComments = {
  __typename?: 'PaginatedMovieComments';
  comments: Array<Comment>;
  hasMoreComments: Scalars['Boolean'];
  id: Scalars['String'];
  lastPage: Scalars['Int'];
  movie: Movie;
  pastLoadedCount: Scalars['Int'];
  totalCommentCount: Scalars['Int'];
};

export type PaginatedMovieStats = {
  __typename?: 'PaginatedMovieStats';
  lastPage: Scalars['Int'];
  movieStats: Array<MovieStats>;
  page: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type Platform = {
  __typename?: 'Platform';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type PlatformInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAdminUsers: Array<AdminUser>;
  getAdminsAndModerators: Array<AdminUser>;
  getAllComments: Array<Comment>;
  getAllCommentsMadeByUser?: Maybe<Array<Comment>>;
  getAllMessages: Array<Contact>;
  getAllMovies: Array<Movie>;
  getAllNotifications: Array<FollowNotifications>;
  getAllPlatforms: Array<Platform>;
  getAllReplies: Array<Reply>;
  getAllVisited: Array<Visited>;
  getComment: Comment;
  getCommentLikes: CommentLikesObject;
  getCommentOrReply?: Maybe<CommentOrReply>;
  getCommentReplies: ReplyConnection;
  getCommentedUser?: Maybe<Users>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getCommentsOfTheMovieConnection: MovieCommentsConnection;
  getCommentsOfTheUser: UserCommentsConnection;
  getFavTitles?: Maybe<PaginatedMovieStats>;
  getFeed: FeedConnection;
  getFeedWithLikes: FeedConnection;
  getFollowers?: Maybe<GetFollowers>;
  getFollowings?: Maybe<GetFollowings>;
  getFullUserProfile?: Maybe<FullMiniUser>;
  getIsUserLikedComment?: Maybe<IsUserLikedObject>;
  getIsUserLikedReply?: Maybe<IsUserLikedObject>;
  getLatestAdminNotification: AdminNotifications;
  getLikedTitles?: Maybe<PaginatedMovieStats>;
  getLinkPreview?: Maybe<LinkPreview>;
  getMovie?: Maybe<Movie>;
  getMovieById: Platform;
  getMovieComments: MovieCommentObject;
  getMovieFavoriteCount?: Maybe<Scalars['Int']>;
  getMovieLikes?: Maybe<LikesObject>;
  getMovieLikesAndCommentsCount?: Maybe<LikesAndComment>;
  getMoviesByTitleId: MovieConnection;
  getOnlyUserMovieStats?: Maybe<MovieStats>;
  getPaginatedTitles?: Maybe<TitleConnection>;
  getRepliedUser?: Maybe<Users>;
  getRepliesOfComment: RepliesObject;
  getRepliesOfReply: ReplyConnection;
  getRepliesOfTheUser: ReplyConnection;
  getReply?: Maybe<Reply>;
  getReplyLikes: ReplyLikesObject;
  getSearchResults?: Maybe<SearchObject>;
  getTableData: TableData;
  getTitle?: Maybe<Title>;
  getTitleInfo?: Maybe<Title>;
  getTrendingTitles?: Maybe<TrendingOutput>;
  getUnreadMessages: Array<Contact>;
  getUser?: Maybe<Users>;
  getUserByUserName?: Maybe<Users>;
  getUserFullName?: Maybe<Scalars['String']>;
  getUserMovieStatus?: Maybe<FullUserMovieStats>;
  getUserNotifications?: Maybe<NotificationObject>;
  getUserProfile?: Maybe<Profile>;
  getUserStatistics?: Maybe<FullUserObject>;
  getUserViewHistory?: Maybe<VisitedObject>;
  getVersionNumber: Scalars['String'];
  getVisited?: Maybe<Visited>;
  hello: Scalars['String'];
  isFollowingUser?: Maybe<Scalars['Boolean']>;
  isReported: Scalars['Boolean'];
  me?: Maybe<Users>;
  searchEpisodes?: Maybe<SearchMovieObject>;
  searchMovies?: Maybe<SearchTitleObject>;
  searchPeople?: Maybe<SearchPeopleObject>;
  searchTitles?: Maybe<SearchTitleObject>;
  users: Array<Users>;
};


export type QueryGetAllCommentsMadeByUserArgs = {
  uid: Scalars['String'];
};


export type QueryGetAllMessagesArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  read?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCommentArgs = {
  cid: Scalars['String'];
};


export type QueryGetCommentLikesArgs = {
  cid: Scalars['String'];
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetCommentOrReplyArgs = {
  id: Scalars['String'];
  type: Scalars['String'];
};


export type QueryGetCommentRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  cid: Scalars['String'];
  first: Scalars['Int'];
};


export type QueryGetCommentedUserArgs = {
  cid: Scalars['String'];
};


export type QueryGetCommentsOfTheMovieArgs = {
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};


export type QueryGetCommentsOfTheMovieConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  mid: Scalars['String'];
};


export type QueryGetCommentsOfTheUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  uid: Scalars['String'];
};


export type QueryGetFavTitlesArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  uid: Scalars['String'];
};


export type QueryGetFeedArgs = {
  after: Scalars['String'];
  first: Scalars['Int'];
  uid: Scalars['String'];
};


export type QueryGetFeedWithLikesArgs = {
  after: Scalars['String'];
  first: Scalars['Int'];
  uid: Scalars['String'];
};


export type QueryGetFollowersArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  uid: Scalars['String'];
};


export type QueryGetFollowingsArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  uid: Scalars['String'];
};


export type QueryGetFullUserProfileArgs = {
  uid: Scalars['String'];
};


export type QueryGetIsUserLikedCommentArgs = {
  cid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetIsUserLikedReplyArgs = {
  rid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetLikedTitlesArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  uid: Scalars['String'];
};


export type QueryGetLinkPreviewArgs = {
  url: Scalars['String'];
};


export type QueryGetMovieArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetMovieCommentsArgs = {
  id: Scalars['String'];
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetMovieFavoriteCountArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieLikesArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieLikesAndCommentsCountArgs = {
  mid: Scalars['String'];
};


export type QueryGetMoviesByTitleIdArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  tid: Scalars['String'];
};


export type QueryGetOnlyUserMovieStatsArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetPaginatedTitlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  type: Scalars['String'];
};


export type QueryGetRepliedUserArgs = {
  rid: Scalars['String'];
};


export type QueryGetRepliesOfCommentArgs = {
  cid: Scalars['String'];
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryGetRepliesOfReplyArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  rid: Scalars['String'];
};


export type QueryGetRepliesOfTheUserArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  uid: Scalars['String'];
};


export type QueryGetReplyArgs = {
  rid: Scalars['String'];
};


export type QueryGetReplyLikesArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  rid: Scalars['String'];
};


export type QueryGetSearchResultsArgs = {
  search: Scalars['String'];
};


export type QueryGetTableDataArgs = {
  page?: InputMaybe<Scalars['Int']>;
  tableName: Scalars['String'];
};


export type QueryGetTitleArgs = {
  id: Scalars['String'];
};


export type QueryGetTitleInfoArgs = {
  id: Scalars['String'];
};


export type QueryGetTrendingTitlesArgs = {
  limit: Scalars['Int'];
};


export type QueryGetUnreadMessagesArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserByUserNameArgs = {
  nickname: Scalars['String'];
};


export type QueryGetUserFullNameArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserMovieStatusArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetUserNotificationsArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  uid: Scalars['String'];
};


export type QueryGetUserProfileArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserStatisticsArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserViewHistoryArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  uid: Scalars['String'];
};


export type QueryGetVisitedArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryIsFollowingUserArgs = {
  fid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryIsReportedArgs = {
  id: Scalars['String'];
  isComment: Scalars['Boolean'];
  uid: Scalars['String'];
};


export type QuerySearchEpisodesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  search: Scalars['String'];
};


export type QuerySearchMoviesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  search: Scalars['String'];
};


export type QuerySearchPeopleArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  search: Scalars['String'];
};


export type QuerySearchTitlesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  search: Scalars['String'];
};

export type RepliesObject = {
  __typename?: 'RepliesObject';
  hasMore: Scalars['Boolean'];
  replies: Array<Reply>;
  repliesCount: Scalars['Int'];
};

export type Reply = {
  __typename?: 'Reply';
  commentedUserId: Scalars['String'];
  commentedUserName?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  flagged: Scalars['Boolean'];
  id: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentRepliedUser?: Maybe<Scalars['String']>;
  parentReplyId?: Maybe<Scalars['String']>;
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  toxicityScore: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ReplyConnection = {
  __typename?: 'ReplyConnection';
  edges: Array<ReplyEdge>;
  nodes: Array<Reply>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReplyEdge = {
  __typename?: 'ReplyEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Reply>;
};

export type ReplyInput = {
  commentedUserId: Scalars['String'];
  commentedUserName: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentRepliedUser?: InputMaybe<Scalars['String']>;
  parentReplyId: Scalars['String'];
  platformId: Scalars['Int'];
  repliesCount: Scalars['Int'];
};

export type ReplyReport = {
  __typename?: 'ReplyReport';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  replyId: Scalars['String'];
  report: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  usersId: Scalars['String'];
};

export type ReplyStats = {
  __typename?: 'ReplyStats';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  like?: Maybe<Scalars['Boolean']>;
  movieId: Scalars['String'];
  replyId: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type ReplyStatsObject = {
  __typename?: 'ReplyStatsObject';
  likeStatus: ReplyStats;
  user: Users;
};

/** The basic roles of admin users */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type SearchMovieObject = {
  __typename?: 'SearchMovieObject';
  lastPage?: Maybe<Scalars['Int']>;
  movies?: Maybe<Array<Movie>>;
  page?: Maybe<Scalars['Int']>;
};

export type SearchObject = {
  __typename?: 'SearchObject';
  episodes?: Maybe<Array<Movie>>;
  movies?: Maybe<Array<Title>>;
  titles?: Maybe<Array<Title>>;
  users?: Maybe<Array<Users>>;
};

export type SearchPeopleObject = {
  __typename?: 'SearchPeopleObject';
  lastPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  people?: Maybe<Array<Users>>;
};

export type SearchTitleObject = {
  __typename?: 'SearchTitleObject';
  lastPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  titles?: Maybe<Array<Title>>;
};

export type SeasonInfo = {
  episodes?: InputMaybe<Array<EpisodeInfo>>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  adminNotifications: AdminNotifications;
  commentLikesUpdate: CommentLikesObject;
  likesAndCommentCount: LikesAndComment;
  movieCommentsUpdate: Scalars['Int'];
  movieStatusUpdate: LikesAndFavObj;
  replyLikesUpdate: ReplyLikesObject;
};


export type SubscriptionCommentLikesUpdateArgs = {
  cid: Scalars['String'];
};


export type SubscriptionReplyLikesUpdateArgs = {
  rid: Scalars['String'];
};

export type TableData = {
  __typename?: 'TableData';
  columnNames: Array<Scalars['String']>;
  data: Scalars['JSON'];
  totalRows: Scalars['Int'];
};

export type Title = {
  __typename?: 'Title';
  advisories?: Maybe<Array<Scalars['String']>>;
  artwork?: Maybe<Scalars['String']>;
  boxart?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  storyart?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

export type TitleConnection = {
  __typename?: 'TitleConnection';
  edges: Array<TitleEdge>;
  nodes: Array<Title>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleEdge = {
  __typename?: 'TitleEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Title>;
};

export type TitleOptions = {
  advisories?: InputMaybe<Array<Scalars['String']>>;
  artwork: Scalars['String'];
  boxart: Scalars['String'];
  id: Scalars['String'];
  rating: Scalars['String'];
  runtime?: InputMaybe<Scalars['Int']>;
  storyart: Scalars['String'];
  synopsis: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  year?: InputMaybe<Scalars['Int']>;
};

export type TrendingObject = {
  __typename?: 'TrendingObject';
  id: Scalars['String'];
  title: Scalars['String'];
  viewsCount: Scalars['Int'];
};

export type TrendingOutput = {
  __typename?: 'TrendingOutput';
  movies: Array<TrendingObject>;
  shows: Array<TrendingObject>;
};

export type UserCommentsConnection = {
  __typename?: 'UserCommentsConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFollowStats = {
  __typename?: 'UserFollowStats';
  followerCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  photoUrl: Scalars['String'];
};

export type UserMovieOptions = {
  favorite?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['Boolean']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
};

export type Users = {
  __typename?: 'Users';
  bg?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  followerCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  joinedAt?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname: Scalars['String'];
  photoUrl: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Visited = {
  __typename?: 'Visited';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  history: Array<Scalars['String']>;
  movieId: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
  visitCount?: Maybe<Scalars['Int']>;
};

export type VisitedObject = {
  __typename?: 'VisitedObject';
  count: Scalars['Int'];
  lastPage: Scalars['Int'];
  page: Scalars['Int'];
  visited?: Maybe<Array<Visited>>;
};

export type GetFollowers = {
  __typename?: 'getFollowers';
  count: Scalars['Int'];
  followers?: Maybe<Array<Users>>;
  lastPage: Scalars['Int'];
  page: Scalars['Int'];
  user?: Maybe<Users>;
};

export type GetFollowings = {
  __typename?: 'getFollowings';
  count: Scalars['Int'];
  followings?: Maybe<Array<Users>>;
  lastPage: Scalars['Int'];
  page: Scalars['Int'];
  user?: Maybe<Users>;
};

export type ReplyLikesObject = {
  __typename?: 'replyLikesObject';
  lastPage: Scalars['Int'];
  likes: Array<Users>;
  likesCount: Scalars['Int'];
  page: Scalars['Int'];
};

export type ExecuteSqlMutationVariables = Exact<{
  sql: Scalars['String'];
  params?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ExecuteSqlMutation = { __typename?: 'Mutation', executeSql: boolean };

export type GetAdminsAndModeratorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminsAndModeratorsQuery = { __typename?: 'Query', getAdminsAndModerators: Array<{ __typename?: 'AdminUser', userId: string, role?: Role | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> };

export type GetTableDataQueryVariables = Exact<{
  tableName: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetTableDataQuery = { __typename?: 'Query', getTableData: { __typename?: 'TableData', columnNames: Array<string>, data: any, totalRows: number } };

export type InsertRowMutationVariables = Exact<{
  sql: Scalars['String'];
  params?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type InsertRowMutation = { __typename?: 'Mutation', insertRow: boolean };

export type SetAdminMutationVariables = Exact<{
  role: Role;
  userId: Scalars['String'];
}>;


export type SetAdminMutation = { __typename?: 'Mutation', setAdmin: { __typename?: 'AdminUser', userId: string, role?: Role | null, createdAt: string, updatedAt: string, deletedAt?: string | null } };

export type DeleteCommentMutationVariables = Exact<{
  mid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt?: string | null, updatedAt?: string | null } | null };

export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;


export type InsertCommentMutation = { __typename?: 'Mutation', insertComment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt?: string | null, updatedAt?: string | null } | null };

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  cid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetCommentLikeMutation = { __typename?: 'Mutation', setCommentLike?: { __typename?: 'CommentsStatsObject', user: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, likeStatus: { __typename?: 'CommentStats', id: number, like?: boolean | null, movieId: string, commentId: string, userId: string } } | null };

export type GetCommentQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt?: string | null, updatedAt?: string | null } };

export type GetCommentLikesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentLikesQuery = { __typename?: 'Query', getCommentLikes: { __typename?: 'CommentLikesObject', likesCount: number, page: number, lastPage: number, likes: Array<{ __typename?: 'Users', id: string, name: string, nickname: string, photoUrl: string, followerCount?: number | null, followingCount?: number | null }> } };

export type GetCommentOrReplyQueryVariables = Exact<{
  type: Scalars['String'];
  id: Scalars['String'];
}>;


export type GetCommentOrReplyQuery = { __typename?: 'Query', getCommentOrReply?: { __typename?: 'CommentOrReply', comment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt?: string | null, updatedAt?: string | null } | null, reply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null } | null };

export type GetIsUserLikedCommentQueryVariables = Exact<{
  uid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type GetIsUserLikedCommentQuery = { __typename?: 'Query', getIsUserLikedComment?: { __typename: 'IsUserLikedObject', id: string, isLiked?: boolean | null } | null };

export type CreateMessageMutationVariables = Exact<{
  message: Scalars['String'];
  subject: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Contact', id: string, name: string, email: string, subject: string, message: string, read: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null } };

export type DeleteMessagesMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteMessagesMutation = { __typename?: 'Mutation', deleteMessages: boolean };

export type GetAllMessagesQueryVariables = Exact<{
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  read?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetAllMessagesQuery = { __typename?: 'Query', getAllMessages: Array<{ __typename?: 'Contact', id: string, name: string, email: string, message: string, read: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null, subject: string }> };

export type MarkMessageAsReadMutationVariables = Exact<{
  markMessageAsReadId: Scalars['String'];
}>;


export type MarkMessageAsReadMutation = { __typename?: 'Mutation', markMessageAsRead: { __typename?: 'Contact', id: string, name: string, email: string, message: string, read: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null } };

export type MarkSelectedMessagesAsReadMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type MarkSelectedMessagesAsReadMutation = { __typename?: 'Mutation', markSelectedMessagesAsRead: Array<{ __typename?: 'Contact', id: string, name: string, email: string, message: string, read: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> };

export type FullTitleFragment = { __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null };

export type FollowNotificationFragment = { __typename: 'FollowNotifications', id: string, toUserId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null };

export type FullCommentFragment = { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt?: string | null, updatedAt?: string | null };

export type FullMovieFragment = { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null };

export type FullProfileFragment = { __typename: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, fullname?: string | null, gender?: string | null, updatedAt: string, userId: string };

export type FullReplyFragment = { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string };

export type FullUserFragment = { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null };

export type LikeNotificationFragment = { __typename: 'LikeNotifications', id: string, toUserId: string, commentId?: string | null, replyId?: string | null, fromUser: string, message: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null };

export type ShortMovieFragment = { __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, year?: number | null, runtime?: number | null, viewsCount: number, platformId: number, titleId: string, season?: string | null, parentTitleName?: string | null };

export type ShortTitleFragment = { __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null };

export type ShortUserFragment = { __typename?: 'Users', id: string, name: string, photoUrl: string, nickname: string };

export type GetTitleInfoQueryVariables = Exact<{
  getTitleInfoId: Scalars['String'];
}>;


export type GetTitleInfoQuery = { __typename?: 'Query', getTitleInfo?: { __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, year?: number | null } | null };

export type UpdateUserMovieStatsMutationVariables = Exact<{
  options: UserMovieOptions;
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserMovieStatsMutation = { __typename?: 'Mutation', updateUserMovieStats?: { __typename?: 'LikeAndFav', like?: boolean | null, favorite?: boolean | null } | null };

export type GetCommentsOfTheMovieQueryVariables = Exact<{
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieQuery = { __typename?: 'Query', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', id: string, hasMoreComments: boolean, totalCommentCount: number, lastPage: number, pastLoadedCount: number, movie: { __typename?: 'Movie', id: string, name: string, parentTitleName?: string | null }, comments: Array<{ __typename?: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, movieId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, toxicityScore?: number | null, flagged?: boolean | null, type?: string | null, createdAt?: string | null, updatedAt?: string | null, deletedAt?: string | null }> } | null };

export type GetFavTitlesQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetFavTitlesQuery = { __typename?: 'Query', getFavTitles?: { __typename?: 'PaginatedMovieStats', lastPage: number, page: number, totalCount: number, movieStats: Array<{ __typename?: 'MovieStats', favorite?: boolean | null, movieId?: string | null, userId?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null, like?: boolean | null }> } | null };

export type GetLikedTitlesQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetLikedTitlesQuery = { __typename?: 'Query', getLikedTitles?: { __typename?: 'PaginatedMovieStats', totalCount: number, lastPage: number, page: number, movieStats: Array<{ __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, movieId?: string | null, userId?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> } | null };

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null } | null };

export type GetMoviesByTitleIdQueryVariables = Exact<{
  first: Scalars['Int'];
  tid: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetMoviesByTitleIdQuery = { __typename?: 'Query', getMoviesByTitleId: { __typename?: 'MovieConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null }>, edges: Array<{ __typename?: 'MovieEdge', cursor?: string | null, node?: { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null } | null }> } };

export type GetPaginatedTitlesQueryVariables = Exact<{
  first: Scalars['Int'];
  type: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetPaginatedTitlesQuery = { __typename?: 'Query', getPaginatedTitles?: { __typename?: 'TitleConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null, rating?: string | null, advisories?: Array<string> | null, createdAt: string, updatedAt: string, deletedAt?: string | null }>, edges: Array<{ __typename?: 'TitleEdge', cursor?: string | null, node?: { __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null, rating?: string | null, advisories?: Array<string> | null, createdAt: string, updatedAt: string, deletedAt?: string | null } | null }> } | null };

export type GetTitleQueryVariables = Exact<{
  getTitleId: Scalars['String'];
}>;


export type GetTitleQuery = { __typename?: 'Query', getTitle?: { __typename?: 'Title', title?: string | null, synopsis?: string | null, storyart?: string | null, runtime?: number | null, rating?: string | null, id: string, createdAt: string, boxart?: string | null, artwork?: string | null, advisories?: Array<string> | null, type?: string | null, year?: number | null } | null };

export type GetTrendingTitlesQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type GetTrendingTitlesQuery = { __typename?: 'Query', getTrendingTitles?: { __typename?: 'TrendingOutput', movies: Array<{ __typename?: 'TrendingObject', id: string, title: string, viewsCount: number }>, shows: Array<{ __typename?: 'TrendingObject', id: string, title: string, viewsCount: number }> } | null };

export type GetOnlyUserMovieStatsQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetOnlyUserMovieStatsQuery = { __typename?: 'Query', getOnlyUserMovieStats?: { __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, movieId?: string | null, userId?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null } | null };

export type ClearNotificationsMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type ClearNotificationsMutation = { __typename?: 'Mutation', clearNotifications?: boolean | null };

export type ReadNotificationMutationVariables = Exact<{
  type: Scalars['String'];
  id: Scalars['Float'];
  uid: Scalars['String'];
}>;


export type ReadNotificationMutation = { __typename?: 'Mutation', readNotification?: { __typename?: 'NotificationObj', follow?: Array<{ __typename?: 'FollowNotifications', id: string, toUserId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null, like?: Array<{ __typename?: 'LikeNotifications', id: string, toUserId: string, toUserNickName: string, commentId?: string | null, replyId?: string | null, fromUser: string, message: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null };

export type GetUserNotificationsQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserNotificationsQuery = { __typename?: 'Query', getUserNotifications?: { __typename?: 'NotificationObject', follow?: Array<{ __typename: 'FollowNotifications', id: string, toUserId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null, like?: Array<{ __typename: 'LikeNotifications', id: string, toUserId: string, commentId?: string | null, replyId?: string | null, fromUser: string, message: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null };

export type GetLinkPreviewQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetLinkPreviewQuery = { __typename?: 'Query', getLinkPreview?: { __typename?: 'LinkPreview', description?: string | null, image?: string | null, title?: string | null, isVideo?: boolean | null, videoSrc?: string | null, videoType?: string | null } | null };

export type GetUserViewHistoryQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  uid: Scalars['String'];
}>;


export type GetUserViewHistoryQuery = { __typename?: 'Query', getUserViewHistory?: { __typename?: 'VisitedObject', count: number, lastPage: number, page: number, visited?: Array<{ __typename?: 'Visited', userId: string, movieId: string, visitCount?: number | null, history: Array<string>, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null };

export type GetVisitedQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetVisitedQuery = { __typename?: 'Query', getVisited?: { __typename?: 'Visited', userId: string, movieId: string, visitCount?: number | null, history: Array<string>, createdAt: string, updatedAt: string, deletedAt?: string | null } | null };

export type DeleteReplyMutationVariables = Exact<{
  rid: Scalars['String'];
}>;


export type DeleteReplyMutation = { __typename?: 'Mutation', deleteReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type InsertReplyMutationVariables = Exact<{
  options: ReplyInput;
}>;


export type InsertReplyMutation = { __typename?: 'Mutation', insertReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type SetReplyLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  rid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetReplyLikeMutation = { __typename?: 'Mutation', setReplyLike?: { __typename?: 'ReplyStatsObject', user: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, likeStatus: { __typename?: 'ReplyStats', id: number, movieId: string, replyId: string, like?: boolean | null, updatedAt: string, userId: string, createdAt: string } } | null };

export type GetIsUserLikedReplyQueryVariables = Exact<{
  uid: Scalars['String'];
  rid: Scalars['String'];
}>;


export type GetIsUserLikedReplyQuery = { __typename?: 'Query', getIsUserLikedReply?: { __typename?: 'IsUserLikedObject', id: string, isLiked?: boolean | null } | null };

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetRepliedUserQuery = { __typename?: 'Query', getRepliedUser?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetCommentRepliesQueryVariables = Exact<{
  cid: Scalars['String'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentRepliesQuery = { __typename?: 'Query', getCommentReplies: { __typename?: 'ReplyConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }>, edges: Array<{ __typename?: 'ReplyEdge', node?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null }> } };

export type GetRepliesOfReplyQueryVariables = Exact<{
  first: Scalars['Int'];
  rid: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetRepliesOfReplyQuery = { __typename?: 'Query', getRepliesOfReply: { __typename?: 'ReplyConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }>, edges: Array<{ __typename?: 'ReplyEdge', cursor?: string | null, node?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null }> } };

export type GetReplyQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetReplyQuery = { __typename?: 'Query', getReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type GetReplyLikesQueryVariables = Exact<{
  limit: Scalars['Int'];
  rid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetReplyLikesQuery = { __typename?: 'Query', getReplyLikes: { __typename?: 'replyLikesObject', page: number, likesCount: number, lastPage: number, likes: Array<{ __typename?: 'Users', id: string, name: string, nickname: string, photoUrl: string, followerCount?: number | null, followingCount?: number | null }> } };

export type GetSearchResultsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetSearchResultsQuery = { __typename?: 'Query', getSearchResults?: { __typename?: 'SearchObject', movies?: Array<{ __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null }> | null, titles?: Array<{ __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null }> | null, users?: Array<{ __typename?: 'Users', id: string, name: string, photoUrl: string, nickname: string }> | null, episodes?: Array<{ __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, year?: number | null, runtime?: number | null, viewsCount: number, platformId: number, titleId: string, season?: string | null, parentTitleName?: string | null }> | null } | null };

export type SearchPeopleQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  search: Scalars['String'];
}>;


export type SearchPeopleQuery = { __typename?: 'Query', searchPeople?: { __typename?: 'SearchPeopleObject', page?: number | null, lastPage?: number | null, people?: Array<{ __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type SearchEpisodesQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  search: Scalars['String'];
}>;


export type SearchEpisodesQuery = { __typename?: 'Query', searchEpisodes?: { __typename?: 'SearchMovieObject', lastPage?: number | null, page?: number | null, movies?: Array<{ __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null }> | null } | null };

export type SearchMoviesQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  search: Scalars['String'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies?: { __typename?: 'SearchTitleObject', page?: number | null, lastPage?: number | null, titles?: Array<{ __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null }> | null } | null };

export type SearchTitlesQueryVariables = Exact<{
  page: Scalars['Float'];
  limit: Scalars['Float'];
  search: Scalars['String'];
}>;


export type SearchTitlesQuery = { __typename?: 'Query', searchTitles?: { __typename?: 'SearchTitleObject', page?: number | null, lastPage?: number | null, titles?: Array<{ __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null }> | null } | null };

export type DecryptDataMutationVariables = Exact<{
  data: Scalars['String'];
  iv: Scalars['String'];
}>;


export type DecryptDataMutation = { __typename?: 'Mutation', decryptData?: string | null };

export type CreateChargeMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type CreateChargeMutation = { __typename?: 'Mutation', createCharge?: string | null };

export type CreateUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'Users', id: string, email: string, nickname: string, name: string, photoUrl: string, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserMutMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMutMutation = { __typename?: 'Mutation', getUserMut?: { __typename?: 'Users', id: string, name: string, photoUrl: string, nickname: string } | null };

export type IsUserNameExistsMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type IsUserNameExistsMutation = { __typename?: 'Mutation', isUserNameExists?: boolean | null };

export type LoginMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', error?: string | null, user?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UpdateUserBgMutationVariables = Exact<{
  url: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserBgMutation = { __typename?: 'Mutation', updateUserBg: { __typename?: 'NickNameResponse', user?: { __typename?: 'Users', bg?: string | null, deletedAt?: string | null, email: string, followerCount?: number | null, id: string, followingCount?: number | null, joinedAt?: string | null, name: string, nickname: string, updatedAt?: string | null, photoUrl: string } | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type SaveProfilePictureMutationVariables = Exact<{
  url: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SaveProfilePictureMutation = { __typename?: 'Mutation', updateUserProfilePhoto: { __typename?: 'NickNameResponse', errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null, user?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } };

export type ToggleFollowMutationVariables = Exact<{
  follow: Scalars['Boolean'];
  followingId: Scalars['String'];
  uid: Scalars['String'];
}>;


export type ToggleFollowMutation = { __typename?: 'Mutation', toggleFollow?: { __typename?: 'Follow', userId: string, followingId: string, follows?: boolean | null, createdAt: string, updatedAt: string } | null };

export type UpdateProfileMutationVariables = Exact<{
  options: InputArgs;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', upsertProfile?: { __typename: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, fullname?: string | null, gender?: string | null, updatedAt: string, userId: string } | null };

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentedUserQuery = { __typename?: 'Query', getCommentedUser?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetFeedQueryVariables = Exact<{
  after: Scalars['String'];
  first: Scalars['Int'];
  uid: Scalars['String'];
}>;


export type GetFeedQuery = { __typename?: 'Query', getFeed: { __typename?: 'FeedConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'FeedItem', id: string, type: string, commentedUserId: string, compositeKey: string, createdAt: string, updatedAt: string }>, edges: Array<{ __typename?: 'FeedEdge', cursor?: string | null, node?: { __typename?: 'FeedItem', id: string } | null }> } };

export type GetFollowersQueryVariables = Exact<{
  limit: Scalars['Float'];
  page: Scalars['Float'];
  uid: Scalars['String'];
}>;


export type GetFollowersQuery = { __typename?: 'Query', getFollowers?: { __typename?: 'getFollowers', count: number, page: number, lastPage: number, user?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null, followers?: Array<{ __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type GetFollowingsQueryVariables = Exact<{
  limit: Scalars['Float'];
  page: Scalars['Float'];
  uid: Scalars['String'];
}>;


export type GetFollowingsQuery = { __typename?: 'Query', getFollowings?: { __typename?: 'getFollowings', count: number, page: number, lastPage: number, user?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null, followings?: Array<{ __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type GetUserMiniProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMiniProfileQuery = { __typename?: 'Query', getFullUserProfile?: { __typename?: 'FullMiniUser', id: string, followers?: { __typename?: 'FollowerObject', followerCount: number, id: string, followers?: Array<{ __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, following?: { __typename?: 'FollowingObject', followingCount: number, id: string, following?: Array<{ __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, history?: { __typename?: 'HistoryObject', historyCount: number, id: string, history?: Array<{ __typename?: 'Visited', history: Array<string>, deletedAt?: string | null, createdAt: string, movieId: string, updatedAt: string, userId: string, visitCount?: number | null }> | null, recentMovies?: Array<{ __typename?: 'Movie', id: string, name: string, synopsis?: string | null, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, platformId: number, titleId: string, parentTitleName?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null, profile?: { __typename: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, fullname?: string | null, gender?: string | null, updatedAt: string, userId: string } | null, likes?: { __typename?: 'LikesMObject', likesCount: number, id: string, likes?: Array<{ __typename?: 'Movie', id: string, likesCount: number, name: string, parentTitleName?: string | null, platformId: number, runtime?: number | null, season?: string | null, stills?: string | null, synopsis?: string | null, thumbs?: string | null, viewsCount: number, year?: number | null, updatedAt: string, titleId: string, commentCount: number, createdAt: string, deletedAt?: string | null, favCount: number }> | null } | null, favorites?: { __typename?: 'FavoriteObject', favCount: number, id: string, favorites?: Array<{ __typename?: 'Movie', id: string, name: string, synopsis?: string | null, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, platformId: number, titleId: string, parentTitleName?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null } | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserByNickNameQueryVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type GetUserByNickNameQuery = { __typename?: 'Query', getUserByUserName?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserFullNameQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserFullNameQuery = { __typename?: 'Query', getUserFullName?: string | null };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, fullname?: string | null, gender?: string | null, updatedAt: string, userId: string } | null };

export type IsFollowingUserQueryVariables = Exact<{
  fid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type IsFollowingUserQuery = { __typename?: 'Query', isFollowingUser?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename: 'Users', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetCommentsOfTheUserQueryVariables = Exact<{
  first: Scalars['Int'];
  uid: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheUserQuery = { __typename?: 'Query', getCommentsOfTheUser: { __typename?: 'UserCommentsConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename?: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, movieId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, toxicityScore?: number | null, flagged?: boolean | null, type?: string | null, createdAt?: string | null, updatedAt?: string | null, deletedAt?: string | null }>, edges: Array<{ __typename?: 'CommentEdge', cursor?: string | null, node?: { __typename?: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, movieId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, toxicityScore?: number | null, flagged?: boolean | null, type?: string | null, createdAt?: string | null, updatedAt?: string | null, deletedAt?: string | null } | null }> } };

export type GetRepliesOfTheUserQueryVariables = Exact<{
  first: Scalars['Int'];
  uid: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetRepliesOfTheUserQuery = { __typename?: 'Query', getRepliesOfTheUser: { __typename?: 'ReplyConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean }, nodes: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }>, edges: Array<{ __typename?: 'ReplyEdge', cursor?: string | null, node?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', id: string }> };

export const FullTitleFragmentDoc = gql`
    fragment FullTitle on Title {
  advisories
  artwork
  boxart
  createdAt
  deletedAt
  id
  rating
  runtime
  storyart
  synopsis
  title
  type
  updatedAt
  year
}
    `;
export const FollowNotificationFragmentDoc = gql`
    fragment FollowNotification on FollowNotifications {
  __typename
  id
  toUserId
  message
  fromUser
  fromUserPhotoUrl
  isRead
  createdAt
  updatedAt
  deletedAt
}
    `;
export const FullCommentFragmentDoc = gql`
    fragment FullComment on Comment {
  __typename
  id
  commentedUserId
  commentedUserName
  message
  likesCount
  repliesCount
  movieId
  platformId
  createdAt
  updatedAt
}
    `;
export const FullMovieFragmentDoc = gql`
    fragment FullMovie on Movie {
  __typename
  id
  name
  runtime
  platformId
  createdAt
  updatedAt
  thumbs
  season
  likesCount
  commentCount
  viewsCount
  favCount
  titleId
  parentTitleName
  stills
  synopsis
  year
}
    `;
export const FullProfileFragmentDoc = gql`
    fragment FullProfile on Profile {
  __typename
  bio
  createdAt
  deletedAt
  dob
  fullname
  gender
  updatedAt
  userId
}
    `;
export const FullReplyFragmentDoc = gql`
    fragment FullReply on Reply {
  __typename
  id
  message
  movieId
  parentCommentId
  commentedUserName
  parentRepliedUser
  parentReplyId
  commentedUserId
  likesCount
  repliesCount
  platformId
  createdAt
  updatedAt
}
    `;
export const FullUserFragmentDoc = gql`
    fragment FullUser on Users {
  __typename
  id
  email
  name
  nickname
  photoUrl
  bg
  followerCount
  followingCount
  joinedAt
  updatedAt
}
    `;
export const LikeNotificationFragmentDoc = gql`
    fragment LikeNotification on LikeNotifications {
  __typename
  id
  toUserId
  commentId
  replyId
  fromUser
  message
  fromUserPhotoUrl
  isRead
  createdAt
  updatedAt
  deletedAt
}
    `;
export const ShortMovieFragmentDoc = gql`
    fragment ShortMovie on Movie {
  id
  name
  stills
  thumbs
  year
  runtime
  viewsCount
  platformId
  titleId
  season
  parentTitleName
}
    `;
export const ShortTitleFragmentDoc = gql`
    fragment ShortTitle on Title {
  id
  artwork
  boxart
  storyart
  title
  type
  runtime
  year
}
    `;
export const ShortUserFragmentDoc = gql`
    fragment ShortUser on Users {
  id
  name
  photoUrl
  nickname
}
    `;
export const ExecuteSqlDocument = gql`
    mutation ExecuteSql($sql: String!, $params: [String!]) {
  executeSql(sql: $sql, params: $params)
}
    `;

export function useExecuteSqlMutation() {
  return Urql.useMutation<ExecuteSqlMutation, ExecuteSqlMutationVariables>(ExecuteSqlDocument);
};
export const GetAdminsAndModeratorsDocument = gql`
    query GetAdminsAndModerators {
  getAdminsAndModerators {
    userId
    role
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useGetAdminsAndModeratorsQuery(options?: Omit<Urql.UseQueryArgs<GetAdminsAndModeratorsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAdminsAndModeratorsQuery, GetAdminsAndModeratorsQueryVariables>({ query: GetAdminsAndModeratorsDocument, ...options });
};
export const GetTableDataDocument = gql`
    query GetTableData($tableName: String!, $page: Int) {
  getTableData(tableName: $tableName, page: $page) {
    columnNames
    data
    totalRows
  }
}
    `;

export function useGetTableDataQuery(options: Omit<Urql.UseQueryArgs<GetTableDataQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTableDataQuery, GetTableDataQueryVariables>({ query: GetTableDataDocument, ...options });
};
export const InsertRowDocument = gql`
    mutation InsertRow($sql: String!, $params: [String!]) {
  insertRow(sql: $sql, params: $params)
}
    `;

export function useInsertRowMutation() {
  return Urql.useMutation<InsertRowMutation, InsertRowMutationVariables>(InsertRowDocument);
};
export const SetAdminDocument = gql`
    mutation SetAdmin($role: Role!, $userId: String!) {
  setAdmin(role: $role, userId: $userId) {
    userId
    role
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useSetAdminMutation() {
  return Urql.useMutation<SetAdminMutation, SetAdminMutationVariables>(SetAdminDocument);
};
export const DeleteCommentDocument = gql`
    mutation DeleteComment($mid: String!, $cid: String!) {
  deleteComment(mid: $mid, cid: $cid) {
    ...FullComment
  }
}
    ${FullCommentFragmentDoc}`;

export function useDeleteCommentMutation() {
  return Urql.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument);
};
export const InsertCommentDocument = gql`
    mutation insertComment($options: CommentInput!) {
  insertComment(options: $options) {
    ...FullComment
  }
}
    ${FullCommentFragmentDoc}`;

export function useInsertCommentMutation() {
  return Urql.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument);
};
export const SetCommentLikeDocument = gql`
    mutation setCommentLike($like: Boolean!, $mid: String!, $cid: String!, $uid: String!) {
  setCommentLike(like: $like, mid: $mid, cid: $cid, uid: $uid) {
    user {
      ...FullUser
    }
    likeStatus {
      id
      like
      movieId
      commentId
      userId
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useSetCommentLikeMutation() {
  return Urql.useMutation<SetCommentLikeMutation, SetCommentLikeMutationVariables>(SetCommentLikeDocument);
};
export const GetCommentDocument = gql`
    query getComment($cid: String!) {
  getComment(cid: $cid) {
    ...FullComment
  }
}
    ${FullCommentFragmentDoc}`;

export function useGetCommentQuery(options: Omit<Urql.UseQueryArgs<GetCommentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentQuery, GetCommentQueryVariables>({ query: GetCommentDocument, ...options });
};
export const GetCommentLikesDocument = gql`
    query GetCommentLikes($limit: Int!, $cid: String!, $page: Int) {
  getCommentLikes(limit: $limit, cid: $cid, page: $page) {
    likes {
      id
      name
      nickname
      photoUrl
      followerCount
      followingCount
    }
    likesCount
    page
    lastPage
  }
}
    `;

export function useGetCommentLikesQuery(options: Omit<Urql.UseQueryArgs<GetCommentLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentLikesQuery, GetCommentLikesQueryVariables>({ query: GetCommentLikesDocument, ...options });
};
export const GetCommentOrReplyDocument = gql`
    query GetCommentOrReply($type: String!, $id: String!) {
  getCommentOrReply(type: $type, id: $id) {
    comment {
      ...FullComment
    }
    reply {
      ...FullReply
    }
  }
}
    ${FullCommentFragmentDoc}
${FullReplyFragmentDoc}`;

export function useGetCommentOrReplyQuery(options: Omit<Urql.UseQueryArgs<GetCommentOrReplyQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentOrReplyQuery, GetCommentOrReplyQueryVariables>({ query: GetCommentOrReplyDocument, ...options });
};
export const GetIsUserLikedCommentDocument = gql`
    query getIsUserLikedComment($uid: String!, $cid: String!) {
  getIsUserLikedComment(uid: $uid, cid: $cid) {
    __typename
    id
    isLiked
  }
}
    `;

export function useGetIsUserLikedCommentQuery(options: Omit<Urql.UseQueryArgs<GetIsUserLikedCommentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetIsUserLikedCommentQuery, GetIsUserLikedCommentQueryVariables>({ query: GetIsUserLikedCommentDocument, ...options });
};
export const CreateMessageDocument = gql`
    mutation CreateMessage($message: String!, $subject: String!, $email: String!, $name: String!) {
  createMessage(message: $message, subject: $subject, email: $email, name: $name) {
    id
    name
    email
    subject
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useCreateMessageMutation() {
  return Urql.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument);
};
export const DeleteMessagesDocument = gql`
    mutation DeleteMessages($ids: [String!]!) {
  deleteMessages(ids: $ids)
}
    `;

export function useDeleteMessagesMutation() {
  return Urql.useMutation<DeleteMessagesMutation, DeleteMessagesMutationVariables>(DeleteMessagesDocument);
};
export const GetAllMessagesDocument = gql`
    query GetAllMessages($limit: Int!, $page: Int, $read: Boolean) {
  getAllMessages(limit: $limit, page: $page, read: $read) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
    subject
  }
}
    `;

export function useGetAllMessagesQuery(options: Omit<Urql.UseQueryArgs<GetAllMessagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllMessagesQuery, GetAllMessagesQueryVariables>({ query: GetAllMessagesDocument, ...options });
};
export const MarkMessageAsReadDocument = gql`
    mutation MarkMessageAsRead($markMessageAsReadId: String!) {
  markMessageAsRead(id: $markMessageAsReadId) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useMarkMessageAsReadMutation() {
  return Urql.useMutation<MarkMessageAsReadMutation, MarkMessageAsReadMutationVariables>(MarkMessageAsReadDocument);
};
export const MarkSelectedMessagesAsReadDocument = gql`
    mutation MarkSelectedMessagesAsRead($ids: [String!]!) {
  markSelectedMessagesAsRead(ids: $ids) {
    id
    name
    email
    message
    read
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useMarkSelectedMessagesAsReadMutation() {
  return Urql.useMutation<MarkSelectedMessagesAsReadMutation, MarkSelectedMessagesAsReadMutationVariables>(MarkSelectedMessagesAsReadDocument);
};
export const GetTitleInfoDocument = gql`
    query getTitleInfo($getTitleInfoId: String!) {
  getTitleInfo(id: $getTitleInfoId) {
    advisories
    artwork
    boxart
    createdAt
    id
    rating
    runtime
    storyart
    synopsis
    title
    type
    year
  }
}
    `;

export function useGetTitleInfoQuery(options: Omit<Urql.UseQueryArgs<GetTitleInfoQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTitleInfoQuery, GetTitleInfoQueryVariables>({ query: GetTitleInfoDocument, ...options });
};
export const UpdateUserMovieStatsDocument = gql`
    mutation UpdateUserMovieStats($options: UserMovieOptions!, $mid: String!, $uid: String!) {
  updateUserMovieStats(options: $options, mid: $mid, uid: $uid) {
    like
    favorite
  }
}
    `;

export function useUpdateUserMovieStatsMutation() {
  return Urql.useMutation<UpdateUserMovieStatsMutation, UpdateUserMovieStatsMutationVariables>(UpdateUserMovieStatsDocument);
};
export const GetCommentsOfTheMovieDocument = gql`
    query GetCommentsOfTheMovie($mid: String!, $page: Int, $time: String) {
  getCommentsOfTheMovie(mid: $mid, page: $page, time: $time) {
    id
    movie {
      id
      name
      parentTitleName
    }
    hasMoreComments
    totalCommentCount
    comments {
      id
      commentedUserId
      commentedUserName
      message
      movieId
      likesCount
      repliesCount
      platformId
      toxicityScore
      flagged
      type
      createdAt
      updatedAt
      deletedAt
    }
    lastPage
    pastLoadedCount
  }
}
    `;

export function useGetCommentsOfTheMovieQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheMovieQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheMovieQuery, GetCommentsOfTheMovieQueryVariables>({ query: GetCommentsOfTheMovieDocument, ...options });
};
export const GetFavTitlesDocument = gql`
    query GetFavTitles($limit: Int!, $uid: String!, $page: Int) {
  getFavTitles(limit: $limit, uid: $uid, page: $page) {
    lastPage
    movieStats {
      favorite
      movieId
      userId
      createdAt
      updatedAt
      deletedAt
      like
    }
    page
    totalCount
  }
}
    `;

export function useGetFavTitlesQuery(options: Omit<Urql.UseQueryArgs<GetFavTitlesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFavTitlesQuery, GetFavTitlesQueryVariables>({ query: GetFavTitlesDocument, ...options });
};
export const GetLikedTitlesDocument = gql`
    query GetLikedTitles($limit: Int!, $uid: String!, $page: Int) {
  getLikedTitles(limit: $limit, uid: $uid, page: $page) {
    movieStats {
      like
      favorite
      movieId
      userId
      createdAt
      updatedAt
      deletedAt
    }
    totalCount
    lastPage
    page
  }
}
    `;

export function useGetLikedTitlesQuery(options: Omit<Urql.UseQueryArgs<GetLikedTitlesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLikedTitlesQuery, GetLikedTitlesQueryVariables>({ query: GetLikedTitlesDocument, ...options });
};
export const GetMovieDocument = gql`
    query getMovie($mid: String!) {
  getMovie(mid: $mid) {
    ...FullMovie
  }
}
    ${FullMovieFragmentDoc}`;

export function useGetMovieQuery(options: Omit<Urql.UseQueryArgs<GetMovieQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMovieQuery, GetMovieQueryVariables>({ query: GetMovieDocument, ...options });
};
export const GetMoviesByTitleIdDocument = gql`
    query GetMoviesByTitleId($first: Int!, $tid: String!, $after: String) {
  getMoviesByTitleId(first: $first, tid: $tid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullMovie
    }
    edges {
      cursor
      node {
        ...FullMovie
      }
    }
  }
}
    ${FullMovieFragmentDoc}`;

export function useGetMoviesByTitleIdQuery(options: Omit<Urql.UseQueryArgs<GetMoviesByTitleIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMoviesByTitleIdQuery, GetMoviesByTitleIdQueryVariables>({ query: GetMoviesByTitleIdDocument, ...options });
};
export const GetPaginatedTitlesDocument = gql`
    query GetPaginatedTitles($first: Int!, $type: String!, $after: String) {
  getPaginatedTitles(first: $first, type: $type, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      artwork
      boxart
      storyart
      synopsis
      title
      type
      runtime
      year
      rating
      advisories
      createdAt
      updatedAt
      deletedAt
    }
    edges {
      node {
        id
        artwork
        boxart
        storyart
        synopsis
        title
        type
        runtime
        year
        rating
        advisories
        createdAt
        updatedAt
        deletedAt
      }
      cursor
    }
  }
}
    `;

export function useGetPaginatedTitlesQuery(options: Omit<Urql.UseQueryArgs<GetPaginatedTitlesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPaginatedTitlesQuery, GetPaginatedTitlesQueryVariables>({ query: GetPaginatedTitlesDocument, ...options });
};
export const GetTitleDocument = gql`
    query getTitle($getTitleId: String!) {
  getTitle(id: $getTitleId) {
    title
    synopsis
    storyart
    runtime
    rating
    id
    createdAt
    boxart
    artwork
    advisories
    type
    year
  }
}
    `;

export function useGetTitleQuery(options: Omit<Urql.UseQueryArgs<GetTitleQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTitleQuery, GetTitleQueryVariables>({ query: GetTitleDocument, ...options });
};
export const GetTrendingTitlesDocument = gql`
    query GetTrendingTitles($limit: Int!) {
  getTrendingTitles(limit: $limit) {
    movies {
      id
      title
      viewsCount
    }
    shows {
      id
      title
      viewsCount
    }
  }
}
    `;

export function useGetTrendingTitlesQuery(options: Omit<Urql.UseQueryArgs<GetTrendingTitlesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTrendingTitlesQuery, GetTrendingTitlesQueryVariables>({ query: GetTrendingTitlesDocument, ...options });
};
export const GetOnlyUserMovieStatsDocument = gql`
    query GetOnlyUserMovieStats($mid: String!, $uid: String!) {
  getOnlyUserMovieStats(mid: $mid, uid: $uid) {
    like
    favorite
    movieId
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useGetOnlyUserMovieStatsQuery(options: Omit<Urql.UseQueryArgs<GetOnlyUserMovieStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOnlyUserMovieStatsQuery, GetOnlyUserMovieStatsQueryVariables>({ query: GetOnlyUserMovieStatsDocument, ...options });
};
export const ClearNotificationsDocument = gql`
    mutation ClearNotifications($uid: String!) {
  clearNotifications(uid: $uid)
}
    `;

export function useClearNotificationsMutation() {
  return Urql.useMutation<ClearNotificationsMutation, ClearNotificationsMutationVariables>(ClearNotificationsDocument);
};
export const ReadNotificationDocument = gql`
    mutation ReadNotification($type: String!, $id: Float!, $uid: String!) {
  readNotification(type: $type, id: $id, uid: $uid) {
    follow {
      id
      toUserId
      message
      fromUser
      fromUserPhotoUrl
      isRead
      createdAt
      updatedAt
      deletedAt
    }
    like {
      id
      toUserId
      toUserNickName
      commentId
      replyId
      fromUser
      message
      fromUserPhotoUrl
      isRead
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

export function useReadNotificationMutation() {
  return Urql.useMutation<ReadNotificationMutation, ReadNotificationMutationVariables>(ReadNotificationDocument);
};
export const GetUserNotificationsDocument = gql`
    query GetUserNotifications($limit: Int!, $uid: String!, $page: Int) {
  getUserNotifications(limit: $limit, uid: $uid, page: $page) {
    follow {
      ...FollowNotification
    }
    like {
      ...LikeNotification
    }
  }
}
    ${FollowNotificationFragmentDoc}
${LikeNotificationFragmentDoc}`;

export function useGetUserNotificationsQuery(options: Omit<Urql.UseQueryArgs<GetUserNotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserNotificationsQuery, GetUserNotificationsQueryVariables>({ query: GetUserNotificationsDocument, ...options });
};
export const GetLinkPreviewDocument = gql`
    query GetLinkPreview($url: String!) {
  getLinkPreview(url: $url) {
    description
    image
    title
    isVideo
    videoSrc
    videoType
  }
}
    `;

export function useGetLinkPreviewQuery(options: Omit<Urql.UseQueryArgs<GetLinkPreviewQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLinkPreviewQuery, GetLinkPreviewQueryVariables>({ query: GetLinkPreviewDocument, ...options });
};
export const GetUserViewHistoryDocument = gql`
    query GetUserViewHistory($page: Float!, $limit: Float!, $uid: String!) {
  getUserViewHistory(page: $page, limit: $limit, uid: $uid) {
    count
    lastPage
    page
    visited {
      userId
      movieId
      visitCount
      history
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

export function useGetUserViewHistoryQuery(options: Omit<Urql.UseQueryArgs<GetUserViewHistoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserViewHistoryQuery, GetUserViewHistoryQueryVariables>({ query: GetUserViewHistoryDocument, ...options });
};
export const GetVisitedDocument = gql`
    query GetVisited($mid: String!, $uid: String!) {
  getVisited(mid: $mid, uid: $uid) {
    userId
    movieId
    visitCount
    history
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

export function useGetVisitedQuery(options: Omit<Urql.UseQueryArgs<GetVisitedQueryVariables>, 'query'>) {
  return Urql.useQuery<GetVisitedQuery, GetVisitedQueryVariables>({ query: GetVisitedDocument, ...options });
};
export const DeleteReplyDocument = gql`
    mutation DeleteReply($rid: String!) {
  deleteReply(rid: $rid) {
    ...FullReply
  }
}
    ${FullReplyFragmentDoc}`;

export function useDeleteReplyMutation() {
  return Urql.useMutation<DeleteReplyMutation, DeleteReplyMutationVariables>(DeleteReplyDocument);
};
export const InsertReplyDocument = gql`
    mutation insertReply($options: ReplyInput!) {
  insertReply(options: $options) {
    ...FullReply
  }
}
    ${FullReplyFragmentDoc}`;

export function useInsertReplyMutation() {
  return Urql.useMutation<InsertReplyMutation, InsertReplyMutationVariables>(InsertReplyDocument);
};
export const SetReplyLikeDocument = gql`
    mutation SetReplyLike($like: Boolean!, $mid: String!, $rid: String!, $uid: String!) {
  setReplyLike(like: $like, mid: $mid, rid: $rid, uid: $uid) {
    user {
      ...FullUser
    }
    likeStatus {
      id
      movieId
      replyId
      like
      updatedAt
      userId
      createdAt
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useSetReplyLikeMutation() {
  return Urql.useMutation<SetReplyLikeMutation, SetReplyLikeMutationVariables>(SetReplyLikeDocument);
};
export const GetIsUserLikedReplyDocument = gql`
    query GetIsUserLikedReply($uid: String!, $rid: String!) {
  getIsUserLikedReply(uid: $uid, rid: $rid) {
    id
    isLiked
  }
}
    `;

export function useGetIsUserLikedReplyQuery(options: Omit<Urql.UseQueryArgs<GetIsUserLikedReplyQueryVariables>, 'query'>) {
  return Urql.useQuery<GetIsUserLikedReplyQuery, GetIsUserLikedReplyQueryVariables>({ query: GetIsUserLikedReplyDocument, ...options });
};
export const GetRepliedUserDocument = gql`
    query getRepliedUser($rid: String!) {
  getRepliedUser(rid: $rid) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetRepliedUserQuery(options: Omit<Urql.UseQueryArgs<GetRepliedUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliedUserQuery, GetRepliedUserQueryVariables>({ query: GetRepliedUserDocument, ...options });
};
export const GetCommentRepliesDocument = gql`
    query GetCommentReplies($cid: String!, $first: Int!, $after: String) {
  getCommentReplies(cid: $cid, first: $first, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      node {
        ...FullReply
      }
    }
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetCommentRepliesQuery(options: Omit<Urql.UseQueryArgs<GetCommentRepliesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentRepliesQuery, GetCommentRepliesQueryVariables>({ query: GetCommentRepliesDocument, ...options });
};
export const GetRepliesOfReplyDocument = gql`
    query GetRepliesOfReply($first: Int!, $rid: String!, $after: String) {
  getRepliesOfReply(first: $first, rid: $rid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      cursor
      node {
        ...FullReply
      }
    }
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetRepliesOfReplyQuery(options: Omit<Urql.UseQueryArgs<GetRepliesOfReplyQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliesOfReplyQuery, GetRepliesOfReplyQueryVariables>({ query: GetRepliesOfReplyDocument, ...options });
};
export const GetReplyDocument = gql`
    query getReply($rid: String!) {
  getReply(rid: $rid) {
    ...FullReply
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetReplyQuery(options: Omit<Urql.UseQueryArgs<GetReplyQueryVariables>, 'query'>) {
  return Urql.useQuery<GetReplyQuery, GetReplyQueryVariables>({ query: GetReplyDocument, ...options });
};
export const GetReplyLikesDocument = gql`
    query GetReplyLikes($limit: Int!, $rid: String!, $page: Int) {
  getReplyLikes(limit: $limit, rid: $rid, page: $page) {
    page
    likesCount
    lastPage
    likes {
      id
      name
      nickname
      photoUrl
      followerCount
      followingCount
    }
  }
}
    `;

export function useGetReplyLikesQuery(options: Omit<Urql.UseQueryArgs<GetReplyLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetReplyLikesQuery, GetReplyLikesQueryVariables>({ query: GetReplyLikesDocument, ...options });
};
export const GetSearchResultsDocument = gql`
    query GetSearchResults($search: String!) {
  getSearchResults(search: $search) {
    movies {
      ...ShortTitle
    }
    titles {
      ...ShortTitle
    }
    users {
      ...ShortUser
    }
    episodes {
      ...ShortMovie
    }
  }
}
    ${ShortTitleFragmentDoc}
${ShortUserFragmentDoc}
${ShortMovieFragmentDoc}`;

export function useGetSearchResultsQuery(options: Omit<Urql.UseQueryArgs<GetSearchResultsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>({ query: GetSearchResultsDocument, ...options });
};
export const SearchPeopleDocument = gql`
    query SearchPeople($page: Float!, $limit: Float!, $search: String!) {
  searchPeople(page: $page, limit: $limit, search: $search) {
    people {
      ...FullUser
    }
    page
    lastPage
  }
}
    ${FullUserFragmentDoc}`;

export function useSearchPeopleQuery(options: Omit<Urql.UseQueryArgs<SearchPeopleQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchPeopleQuery, SearchPeopleQueryVariables>({ query: SearchPeopleDocument, ...options });
};
export const SearchEpisodesDocument = gql`
    query SearchEpisodes($page: Float!, $limit: Float!, $search: String!) {
  searchEpisodes(page: $page, limit: $limit, search: $search) {
    lastPage
    page
    movies {
      ...FullMovie
    }
  }
}
    ${FullMovieFragmentDoc}`;

export function useSearchEpisodesQuery(options: Omit<Urql.UseQueryArgs<SearchEpisodesQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchEpisodesQuery, SearchEpisodesQueryVariables>({ query: SearchEpisodesDocument, ...options });
};
export const SearchMoviesDocument = gql`
    query SearchMovies($page: Float!, $limit: Float!, $search: String!) {
  searchMovies(page: $page, limit: $limit, search: $search) {
    page
    lastPage
    titles {
      ...FullTitle
    }
  }
}
    ${FullTitleFragmentDoc}`;

export function useSearchMoviesQuery(options: Omit<Urql.UseQueryArgs<SearchMoviesQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>({ query: SearchMoviesDocument, ...options });
};
export const SearchTitlesDocument = gql`
    query SearchTitles($page: Float!, $limit: Float!, $search: String!) {
  searchTitles(page: $page, limit: $limit, search: $search) {
    titles {
      ...FullTitle
    }
    page
    lastPage
  }
}
    ${FullTitleFragmentDoc}`;

export function useSearchTitlesQuery(options: Omit<Urql.UseQueryArgs<SearchTitlesQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchTitlesQuery, SearchTitlesQueryVariables>({ query: SearchTitlesDocument, ...options });
};
export const DecryptDataDocument = gql`
    mutation DecryptData($data: String!, $iv: String!) {
  decryptData(data: $data, iv: $iv)
}
    `;

export function useDecryptDataMutation() {
  return Urql.useMutation<DecryptDataMutation, DecryptDataMutationVariables>(DecryptDataDocument);
};
export const CreateChargeDocument = gql`
    mutation createCharge($userId: String!) {
  createCharge(userId: $userId)
}
    `;

export function useCreateChargeMutation() {
  return Urql.useMutation<CreateChargeMutation, CreateChargeMutationVariables>(CreateChargeDocument);
};
export const CreateUserDocument = gql`
    mutation CreateUser($options: UserInput!) {
  createUser(options: $options) {
    id
    email
    nickname
    name
    photoUrl
    joinedAt
    joinedAt
    updatedAt
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const GetUserMutDocument = gql`
    mutation GetUserMut($uid: String!) {
  getUserMut(uid: $uid) {
    id
    name
    photoUrl
    nickname
  }
}
    `;

export function useGetUserMutMutation() {
  return Urql.useMutation<GetUserMutMutation, GetUserMutMutationVariables>(GetUserMutDocument);
};
export const IsUserNameExistsDocument = gql`
    mutation IsUserNameExists($text: String!) {
  isUserNameExists(text: $text)
}
    `;

export function useIsUserNameExistsMutation() {
  return Urql.useMutation<IsUserNameExistsMutation, IsUserNameExistsMutationVariables>(IsUserNameExistsDocument);
};
export const LoginDocument = gql`
    mutation login($uid: String!) {
  login(uid: $uid) {
    user {
      ...FullUser
    }
    error
  }
}
    ${FullUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const UpdateUserBgDocument = gql`
    mutation updateUserBg($url: String!, $uid: String!) {
  updateUserBg(url: $url, uid: $uid) {
    user {
      bg
      deletedAt
      email
      followerCount
      id
      followingCount
      joinedAt
      name
      nickname
      updatedAt
      photoUrl
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useUpdateUserBgMutation() {
  return Urql.useMutation<UpdateUserBgMutation, UpdateUserBgMutationVariables>(UpdateUserBgDocument);
};
export const SaveProfilePictureDocument = gql`
    mutation saveProfilePicture($url: String!, $uid: String!) {
  updateUserProfilePhoto(url: $url, uid: $uid) {
    errors {
      field
      message
    }
    user {
      ...FullUser
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useSaveProfilePictureMutation() {
  return Urql.useMutation<SaveProfilePictureMutation, SaveProfilePictureMutationVariables>(SaveProfilePictureDocument);
};
export const ToggleFollowDocument = gql`
    mutation ToggleFollow($follow: Boolean!, $followingId: String!, $uid: String!) {
  toggleFollow(follow: $follow, followingId: $followingId, uid: $uid) {
    userId
    followingId
    follows
    createdAt
    updatedAt
  }
}
    `;

export function useToggleFollowMutation() {
  return Urql.useMutation<ToggleFollowMutation, ToggleFollowMutationVariables>(ToggleFollowDocument);
};
export const UpdateProfileDocument = gql`
    mutation updateProfile($options: InputArgs!) {
  upsertProfile(options: $options) {
    ...FullProfile
  }
}
    ${FullProfileFragmentDoc}`;

export function useUpdateProfileMutation() {
  return Urql.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument);
};
export const GetCommentedUserDocument = gql`
    query getCommentedUser($cid: String!) {
  getCommentedUser(cid: $cid) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetCommentedUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentedUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentedUserQuery, GetCommentedUserQueryVariables>({ query: GetCommentedUserDocument, ...options });
};
export const GetFeedDocument = gql`
    query GetFeed($after: String!, $first: Int!, $uid: String!) {
  getFeed(after: $after, first: $first, uid: $uid) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      type
      commentedUserId
      compositeKey
      createdAt
      updatedAt
    }
    edges {
      node {
        id
      }
      cursor
    }
  }
}
    `;

export function useGetFeedQuery(options: Omit<Urql.UseQueryArgs<GetFeedQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFeedQuery, GetFeedQueryVariables>({ query: GetFeedDocument, ...options });
};
export const GetFollowersDocument = gql`
    query GetFollowers($limit: Float!, $page: Float!, $uid: String!) {
  getFollowers(limit: $limit, page: $page, uid: $uid) {
    user {
      ...FullUser
    }
    followers {
      ...FullUser
    }
    count
    page
    lastPage
  }
}
    ${FullUserFragmentDoc}`;

export function useGetFollowersQuery(options: Omit<Urql.UseQueryArgs<GetFollowersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFollowersQuery, GetFollowersQueryVariables>({ query: GetFollowersDocument, ...options });
};
export const GetFollowingsDocument = gql`
    query GetFollowings($limit: Float!, $page: Float!, $uid: String!) {
  getFollowings(limit: $limit, page: $page, uid: $uid) {
    user {
      ...FullUser
    }
    followings {
      ...FullUser
    }
    count
    page
    lastPage
  }
}
    ${FullUserFragmentDoc}`;

export function useGetFollowingsQuery(options: Omit<Urql.UseQueryArgs<GetFollowingsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFollowingsQuery, GetFollowingsQueryVariables>({ query: GetFollowingsDocument, ...options });
};
export const GetUserMiniProfileDocument = gql`
    query getUserMiniProfile($uid: String!) {
  getFullUserProfile(uid: $uid) {
    id
    followers {
      followerCount
      followers {
        ...FullUser
      }
      id
    }
    following {
      followingCount
      following {
        ...FullUser
      }
      id
    }
    history {
      history {
        history
        deletedAt
        createdAt
        movieId
        updatedAt
        userId
        visitCount
      }
      historyCount
      recentMovies {
        id
        name
        synopsis
        stills
        thumbs
        season
        year
        runtime
        likesCount
        commentCount
        viewsCount
        favCount
        platformId
        titleId
        parentTitleName
        createdAt
        updatedAt
        deletedAt
      }
      id
    }
    profile {
      ...FullProfile
    }
    likes {
      likesCount
      likes {
        id
        likesCount
        name
        parentTitleName
        platformId
        runtime
        season
        stills
        synopsis
        thumbs
        viewsCount
        year
        updatedAt
        titleId
        commentCount
        createdAt
        deletedAt
        favCount
      }
      id
    }
    favorites {
      favCount
      favorites {
        id
        name
        synopsis
        stills
        thumbs
        season
        year
        runtime
        likesCount
        commentCount
        viewsCount
        favCount
        platformId
        titleId
        parentTitleName
        createdAt
        updatedAt
        deletedAt
      }
      id
    }
  }
}
    ${FullUserFragmentDoc}
${FullProfileFragmentDoc}`;

export function useGetUserMiniProfileQuery(options: Omit<Urql.UseQueryArgs<GetUserMiniProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserMiniProfileQuery, GetUserMiniProfileQueryVariables>({ query: GetUserMiniProfileDocument, ...options });
};
export const GetUserDocument = gql`
    query getUser($uid: String!) {
  getUser(uid: $uid) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const GetUserByNickNameDocument = gql`
    query getUserByNickName($nickname: String!) {
  getUserByUserName(nickname: $nickname) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserByNickNameQuery(options: Omit<Urql.UseQueryArgs<GetUserByNickNameQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserByNickNameQuery, GetUserByNickNameQueryVariables>({ query: GetUserByNickNameDocument, ...options });
};
export const GetUserFullNameDocument = gql`
    query getUserFullName($uid: String!) {
  getUserFullName(uid: $uid)
}
    `;

export function useGetUserFullNameQuery(options: Omit<Urql.UseQueryArgs<GetUserFullNameQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserFullNameQuery, GetUserFullNameQueryVariables>({ query: GetUserFullNameDocument, ...options });
};
export const GetUserProfileDocument = gql`
    query GetUserProfile($uid: String!) {
  getUserProfile(uid: $uid) {
    ...FullProfile
  }
}
    ${FullProfileFragmentDoc}`;

export function useGetUserProfileQuery(options: Omit<Urql.UseQueryArgs<GetUserProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>({ query: GetUserProfileDocument, ...options });
};
export const IsFollowingUserDocument = gql`
    query isFollowingUser($fid: String!, $uid: String!) {
  isFollowingUser(fid: $fid, uid: $uid)
}
    `;

export function useIsFollowingUserQuery(options: Omit<Urql.UseQueryArgs<IsFollowingUserQueryVariables>, 'query'>) {
  return Urql.useQuery<IsFollowingUserQuery, IsFollowingUserQueryVariables>({ query: IsFollowingUserDocument, ...options });
};
export const MeDocument = gql`
    query me {
  me {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const GetCommentsOfTheUserDocument = gql`
    query GetCommentsOfTheUser($first: Int!, $uid: String!, $after: String) {
  getCommentsOfTheUser(first: $first, uid: $uid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      id
      commentedUserId
      commentedUserName
      message
      movieId
      likesCount
      repliesCount
      platformId
      toxicityScore
      flagged
      type
      createdAt
      updatedAt
      deletedAt
    }
    edges {
      node {
        id
        commentedUserId
        commentedUserName
        message
        movieId
        likesCount
        repliesCount
        platformId
        toxicityScore
        flagged
        type
        createdAt
        updatedAt
        deletedAt
      }
      cursor
    }
  }
}
    `;

export function useGetCommentsOfTheUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheUserQuery, GetCommentsOfTheUserQueryVariables>({ query: GetCommentsOfTheUserDocument, ...options });
};
export const GetRepliesOfTheUserDocument = gql`
    query GetRepliesOfTheUser($first: Int!, $uid: String!, $after: String) {
  getRepliesOfTheUser(first: $first, uid: $uid, after: $after) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ...FullReply
    }
    edges {
      cursor
      node {
        ...FullReply
      }
    }
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetRepliesOfTheUserQuery(options: Omit<Urql.UseQueryArgs<GetRepliesOfTheUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliesOfTheUserQuery, GetRepliesOfTheUserQueryVariables>({ query: GetRepliesOfTheUserDocument, ...options });
};
export const UsersDocument = gql`
    query users {
  users {
    id
  }
}
    `;

export function useUsersQuery(options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>) {
  return Urql.useQuery<UsersQuery, UsersQueryVariables>({ query: UsersDocument, ...options });
};