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
};

export type Comment = {
  __typename?: 'Comment';
  commentedUserId: Scalars['String'];
  commentedUserName: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieId: Scalars['String'];
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
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
  likes: Array<User>;
  likesCount: Scalars['Int'];
  page: Scalars['Int'];
};

export type CommentOrReply = {
  __typename?: 'CommentOrReply';
  comment?: Maybe<Comment>;
  reply?: Maybe<Reply>;
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
  user: User;
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

export type Follow = {
  __typename?: 'Follow';
  createdAt: Scalars['String'];
  followingId: Scalars['String'];
  follows?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['String']>;
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
  followers?: Maybe<Array<User>>;
  id: Scalars['String'];
};

export type FollowingObject = {
  __typename?: 'FollowingObject';
  following?: Maybe<Array<User>>;
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
  user: User;
};

export type FullUserObject = {
  __typename?: 'FullUserObject';
  favTitles?: Maybe<Array<FavMovieObject>>;
  likedTitles?: Maybe<Array<LikedMovieObject>>;
  totalComments?: Maybe<Scalars['Int']>;
  totalLikes?: Maybe<Scalars['Int']>;
  totalWatched?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
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
  firstname: Scalars['String'];
  gender: Scalars['String'];
  lastname: Scalars['String'];
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
  likes?: Maybe<Array<User>>;
  likesCount: Scalars['Int'];
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
  addMovieIdToTheUserWatchList: Scalars['Boolean'];
  amIFollowingThisUser?: Maybe<Scalars['Boolean']>;
  createPlatform?: Maybe<Platform>;
  createUser?: Maybe<User>;
  deleteComment?: Maybe<Comment>;
  deleteReply?: Maybe<Reply>;
  deleteUser: Scalars['Boolean'];
  fetchNewComments: Array<Comment>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getFollowers?: Maybe<GetFollowers>;
  getFollowings?: Maybe<GetFollowings>;
  getTitleInfo?: Maybe<Title>;
  getTopThreeUserNames?: Maybe<Array<NicKNameFormat>>;
  getUserByNickName?: Maybe<User>;
  getUserFollowStats?: Maybe<UserFollowStats>;
  getUserMut?: Maybe<User>;
  insertBulkMovie?: Maybe<Scalars['Boolean']>;
  insertComment?: Maybe<Comment>;
  insertMovie?: Maybe<Movie>;
  insertReply?: Maybe<Reply>;
  insertTitle?: Maybe<Scalars['Boolean']>;
  insertVisited?: Maybe<Visited>;
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  setCommentLike?: Maybe<CommentsStatsObject>;
  setReplyLike?: Maybe<ReplyStatsObject>;
  toggleFollow?: Maybe<Follow>;
  updateMovieTitle?: Maybe<Scalars['Boolean']>;
  updateMovieViewCount?: Maybe<Scalars['Int']>;
  updateUserBg: NickNameResponse;
  updateUserMovieStats?: Maybe<LikeAndFav>;
  updateUserNickName: NickNameResponse;
  updateUserProfilePhoto: NickNameResponse;
  upsertProfile?: Maybe<Profile>;
};


export type MutationAddMovieIdToTheUserWatchListArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationAmIFollowingThisUserArgs = {
  fid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationCreatePlatformArgs = {
  options: PlatformInput;
};


export type MutationCreateUserArgs = {
  options: UserInput;
};


export type MutationDeleteCommentArgs = {
  cid: Scalars['String'];
  mid: Scalars['String'];
};


export type MutationDeleteReplyArgs = {
  rid: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  uid: Scalars['String'];
};


export type MutationFetchNewCommentsArgs = {
  mid: Scalars['String'];
  time: Scalars['String'];
};


export type MutationGetCommentsOfTheMovieArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};


export type MutationGetFollowersArgs = {
  uid: Scalars['String'];
};


export type MutationGetFollowingsArgs = {
  uid: Scalars['String'];
};


export type MutationGetTitleInfoArgs = {
  id: Scalars['String'];
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


export type MutationInsertBulkMovieArgs = {
  options: Array<MovieInput>;
};


export type MutationInsertCommentArgs = {
  options: CommentInput;
};


export type MutationInsertMovieArgs = {
  options: MovieInput;
};


export type MutationInsertReplyArgs = {
  options: ReplyInput;
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


export type MutationLoginArgs = {
  uid: Scalars['String'];
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


export type MutationUpsertProfileArgs = {
  options: InputArgs;
};

export type NicKNameFormat = {
  __typename?: 'NicKNameFormat';
  name: Scalars['String'];
};

export type NickNameResponse = {
  __typename?: 'NickNameResponse';
  errors?: Maybe<Array<ErrorField>>;
  user?: Maybe<User>;
};

export type NotificationObject = {
  __typename?: 'NotificationObject';
  follow?: Maybe<Array<FollowNotifications>>;
  like?: Maybe<Array<LikeNotifications>>;
};

export type PaginatedMovieComments = {
  __typename?: 'PaginatedMovieComments';
  comments: Array<Comment>;
  hasMoreComments: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  movie: Movie;
  pastLoadedCount: Scalars['Int'];
  totalCommentCount: Scalars['Int'];
};

export type PaginatedMovies = {
  __typename?: 'PaginatedMovies';
  hasMoreTitles?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  lastPage?: Maybe<Scalars['Int']>;
  movieCount?: Maybe<Scalars['Int']>;
  movies?: Maybe<Array<Movie>>;
  page?: Maybe<Scalars['Int']>;
};

export type PaginatedTitles = {
  __typename?: 'PaginatedTitles';
  hasMoreTitles: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  page: Scalars['Int'];
  titles: Array<Title>;
  totalTitleCount: Scalars['Int'];
};

export type PaginatedUserComments = {
  __typename?: 'PaginatedUserComments';
  comments: Array<Comment>;
  hasMoreComments: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  pastCount?: Maybe<Scalars['Int']>;
  totalCommentCount?: Maybe<Scalars['Int']>;
  user: User;
};

export type PaginatedUserReplies = {
  __typename?: 'PaginatedUserReplies';
  comments: Array<Reply>;
  hasMoreComments: Scalars['Boolean'];
  lastPage: Scalars['Int'];
  pastCount?: Maybe<Scalars['Int']>;
  totalCommentCount?: Maybe<Scalars['Int']>;
  user: User;
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
  firstname: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Comment>;
  getAllCommentsMadeByUser?: Maybe<Array<Comment>>;
  getAllMovies: Array<Movie>;
  getAllNotifications: Array<FollowNotifications>;
  getAllPlatforms: Array<Platform>;
  getAllReplies: Array<Reply>;
  getAllVisited: Array<Visited>;
  getComment: Comment;
  getCommentLikes: CommentLikesObject;
  getCommentOrReply?: Maybe<CommentOrReply>;
  getCommentedUser?: Maybe<User>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getCommentsOfTheUser?: Maybe<PaginatedUserComments>;
  getFullUserProfile?: Maybe<FullMiniUser>;
  getIsUserLikedComment?: Maybe<IsUserLikedObject>;
  getIsUserLikedReply?: Maybe<Scalars['Boolean']>;
  getMovie?: Maybe<Movie>;
  getMovieById: Platform;
  getMovieFavoriteCount?: Maybe<Scalars['Int']>;
  getMovieLikes?: Maybe<LikesObject>;
  getMovieLikesAndCommentsCount?: Maybe<LikesAndComment>;
  getMoviesByTitleId?: Maybe<PaginatedMovies>;
  getOnlyUserMovieStats?: Maybe<MovieStats>;
  getPaginatedMovies?: Maybe<PaginatedTitles>;
  getPaginatedShows?: Maybe<PaginatedTitles>;
  getPaginatedTitles?: Maybe<PaginatedTitles>;
  getRepliedUser?: Maybe<User>;
  getRepliesOfComment: RepliesObject;
  getRepliesOfReply: RepliesObject;
  getRepliesOfTheUser?: Maybe<PaginatedUserReplies>;
  getReply?: Maybe<Reply>;
  getReplyLikes: ReplyLikesObject;
  getSearchResults?: Maybe<SearchObject>;
  getTitle?: Maybe<Title>;
  getUser?: Maybe<User>;
  getUserByUserName?: Maybe<User>;
  getUserMovieStatus?: Maybe<FullUserMovieStats>;
  getUserNotifications?: Maybe<NotificationObject>;
  getUserProfile?: Maybe<Profile>;
  getUserStatistics?: Maybe<FullUserObject>;
  hello: Scalars['String'];
  isFollowingUser?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  users: Array<User>;
};


export type QueryGetAllCommentsMadeByUserArgs = {
  uid: Scalars['String'];
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


export type QueryGetCommentedUserArgs = {
  cid: Scalars['String'];
};


export type QueryGetCommentsOfTheMovieArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};


export type QueryGetCommentsOfTheUserArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
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


export type QueryGetMovieArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieByIdArgs = {
  id: Scalars['String'];
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
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  tid: Scalars['String'];
};


export type QueryGetOnlyUserMovieStatsArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetPaginatedMoviesArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPaginatedShowsArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPaginatedTitlesArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGetRepliedUserArgs = {
  rid: Scalars['String'];
};


export type QueryGetRepliesOfCommentArgs = {
  cid: Scalars['String'];
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetRepliesOfReplyArgs = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  rid: Scalars['String'];
};


export type QueryGetRepliesOfTheUserArgs = {
  ASC?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
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


export type QueryGetTitleArgs = {
  id: Scalars['String'];
};


export type QueryGetUserArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserByUserNameArgs = {
  nickname: Scalars['String'];
};


export type QueryGetUserMovieStatusArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetUserNotificationsArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserProfileArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserStatisticsArgs = {
  uid: Scalars['String'];
};


export type QueryIsFollowingUserArgs = {
  fid: Scalars['String'];
  uid: Scalars['String'];
};

export type RepliesObject = {
  __typename?: 'RepliesObject';
  lastPage: Scalars['Int'];
  replies: Array<Reply>;
  repliesCount: Scalars['Int'];
};

export type Reply = {
  __typename?: 'Reply';
  commentedUserId: Scalars['String'];
  commentedUserName?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentRepliedUser?: Maybe<Scalars['String']>;
  parentReplyId?: Maybe<Scalars['String']>;
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type ReplyInput = {
  commentedUserId: Scalars['String'];
  commentedUserName: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentRepliedUser: Scalars['String'];
  parentReplyId: Scalars['String'];
  platformId: Scalars['Int'];
  repliesCount: Scalars['Int'];
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
  user: User;
};

export type SearchObject = {
  __typename?: 'SearchObject';
  movies?: Maybe<Array<Title>>;
  titles?: Maybe<Array<Title>>;
  users?: Maybe<Array<User>>;
};

export type Subscription = {
  __typename?: 'Subscription';
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

export type TitleOptions = {
  advisories: Array<Scalars['String']>;
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

export type User = {
  __typename?: 'User';
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
  watchedMovies?: Maybe<Array<Scalars['String']>>;
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
  user?: Maybe<User>;
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

export type GetFollowers = {
  __typename?: 'getFollowers';
  followers?: Maybe<Array<User>>;
  user?: Maybe<User>;
};

export type GetFollowings = {
  __typename?: 'getFollowings';
  followings?: Maybe<Array<User>>;
  user?: Maybe<User>;
};

export type ReplyLikesObject = {
  __typename?: 'replyLikesObject';
  lastPage: Scalars['Int'];
  likes: Array<User>;
  likesCount: Scalars['Int'];
  page: Scalars['Int'];
};

export type DeleteCommentMutationVariables = Exact<{
  mid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string } | null };

export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;


export type InsertCommentMutation = { __typename?: 'Mutation', insertComment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string } | null };

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  cid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetCommentLikeMutation = { __typename?: 'Mutation', setCommentLike?: { __typename?: 'CommentsStatsObject', user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, likeStatus: { __typename?: 'CommentStats', id: number, like?: boolean | null, movieId: string, commentId: string, userId: string } } | null };

export type GetCommentQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string } };

export type GetCommentLikesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentLikesQuery = { __typename?: 'Query', getCommentLikes: { __typename?: 'CommentLikesObject', likesCount: number, page: number, likes: Array<{ __typename?: 'User', id: string, name: string, nickname: string, photoUrl: string, followerCount?: number | null, followingCount?: number | null }> } };

export type GetCommentOrReplyQueryVariables = Exact<{
  type: Scalars['String'];
  id: Scalars['String'];
}>;


export type GetCommentOrReplyQuery = { __typename?: 'Query', getCommentOrReply?: { __typename?: 'CommentOrReply', comment?: { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string } | null, reply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null } | null };

export type GetIsUserLikedCommentQueryVariables = Exact<{
  uid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type GetIsUserLikedCommentQuery = { __typename?: 'Query', getIsUserLikedComment?: { __typename: 'IsUserLikedObject', id: string, isLiked?: boolean | null } | null };

export type FullTitleFragment = { __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null };

export type FollowNotificationFragment = { __typename: 'FollowNotifications', id: string, toUserId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null };

export type FullCommentFragment = { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string };

export type FullMovieFragment = { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null };

export type FullReplyFragment = { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string };

export type FullUserFragment = { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null };

export type LikeNotificationFragment = { __typename: 'LikeNotifications', id: string, toUserId: string, commentId?: string | null, replyId?: string | null, fromUser: string, message: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null };

export type ShortMovieFragment = { __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, year?: number | null, runtime?: number | null, viewsCount: number, platformId: number, titleId: string, parentTitleName?: string | null };

export type ShortTitleFragment = { __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null };

export type ShortUserFragment = { __typename?: 'User', id: string, name: string, photoUrl: string, nickname: string };

export type GetTitleInfoMutationVariables = Exact<{
  getTitleInfoId: Scalars['String'];
}>;


export type GetTitleInfoMutation = { __typename?: 'Mutation', getTitleInfo?: { __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, year?: number | null } | null };

export type UpdateUserMovieStatsMutationVariables = Exact<{
  options: UserMovieOptions;
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserMovieStatsMutation = { __typename?: 'Mutation', updateUserMovieStats?: { __typename?: 'LikeAndFav', like?: boolean | null, favorite?: boolean | null } | null };

export type GetCommentsOfTheMovieQQueryVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieQQuery = { __typename?: 'Query', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', lastPage: number, totalCommentCount: number, pastLoadedCount: number, hasMoreComments: boolean, movie: { __typename?: 'Movie', id: string, name: string }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null } | null };

export type GetMoviesByTitleIdQueryVariables = Exact<{
  limit: Scalars['Int'];
  tid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetMoviesByTitleIdQuery = { __typename?: 'Query', getMoviesByTitleId?: { __typename?: 'PaginatedMovies', hasMoreTitles?: boolean | null, id: string, lastPage?: number | null, page?: number | null, movieCount?: number | null, movies?: Array<{ __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null }> | null } | null };

export type GetPaginatedMoviesQueryVariables = Exact<{
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  asc?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPaginatedMoviesQuery = { __typename?: 'Query', getPaginatedMovies?: { __typename?: 'PaginatedTitles', hasMoreTitles: boolean, page: number, lastPage: number, totalTitleCount: number, titles: Array<{ __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null }> } | null };

export type GetPaginatedShowsQueryVariables = Exact<{
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  asc?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPaginatedShowsQuery = { __typename?: 'Query', getPaginatedShows?: { __typename?: 'PaginatedTitles', hasMoreTitles: boolean, page: number, lastPage: number, totalTitleCount: number, titles: Array<{ __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null }> } | null };

export type GetPaginatedTitlesQueryVariables = Exact<{
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  asc?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
}>;


export type GetPaginatedTitlesQuery = { __typename?: 'Query', getPaginatedTitles?: { __typename?: 'PaginatedTitles', hasMoreTitles: boolean, page: number, lastPage: number, totalTitleCount: number, titles: Array<{ __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null }> } | null };

export type GetTitleQueryVariables = Exact<{
  getTitleId: Scalars['String'];
}>;


export type GetTitleQuery = { __typename?: 'Query', getTitle?: { __typename?: 'Title', title?: string | null, synopsis?: string | null, storyart?: string | null, runtime?: number | null, rating?: string | null, id: string, createdAt: string, boxart?: string | null, artwork?: string | null, advisories?: Array<string> | null, type?: string | null, year?: number | null } | null };

export type GetOnlyUserMovieStatsQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetOnlyUserMovieStatsQuery = { __typename?: 'Query', getOnlyUserMovieStats?: { __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, movieId?: string | null, userId?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null } | null };

export type GetUserNotificationsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserNotificationsQuery = { __typename?: 'Query', getUserNotifications?: { __typename?: 'NotificationObject', follow?: Array<{ __typename: 'FollowNotifications', id: string, toUserId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null, like?: Array<{ __typename: 'LikeNotifications', id: string, toUserId: string, commentId?: string | null, replyId?: string | null, fromUser: string, message: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null };

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


export type SetReplyLikeMutation = { __typename?: 'Mutation', setReplyLike?: { __typename?: 'ReplyStatsObject', user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, likeStatus: { __typename?: 'ReplyStats', id: number, movieId: string, replyId: string, like?: boolean | null, updatedAt: string, userId: string, createdAt: string } } | null };

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetRepliedUserQuery = { __typename?: 'Query', getRepliedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetRepliesOfCommentQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepliesOfCommentQuery = { __typename?: 'Query', getRepliesOfComment: { __typename: 'RepliesObject', repliesCount: number, lastPage: number, replies: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } };

export type GetRepliesOfReplyQueryVariables = Exact<{
  limit: Scalars['Int'];
  rid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepliesOfReplyQuery = { __typename?: 'Query', getRepliesOfReply: { __typename?: 'RepliesObject', lastPage: number, repliesCount: number, replies: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } };

export type GetReplyQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetReplyQuery = { __typename?: 'Query', getReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type GetReplyLikesQueryVariables = Exact<{
  limit: Scalars['Int'];
  rid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetReplyLikesQuery = { __typename?: 'Query', getReplyLikes: { __typename?: 'replyLikesObject', page: number, likesCount: number, likes: Array<{ __typename?: 'User', id: string, name: string, nickname: string, photoUrl: string, followerCount?: number | null, followingCount?: number | null }> } };

export type GetSearchResultsQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetSearchResultsQuery = { __typename?: 'Query', getSearchResults?: { __typename?: 'SearchObject', movies?: Array<{ __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null }> | null, titles?: Array<{ __typename?: 'Title', id: string, artwork?: string | null, boxart?: string | null, storyart?: string | null, title?: string | null, type?: string | null, runtime?: number | null, year?: number | null }> | null, users?: Array<{ __typename?: 'User', id: string, name: string, photoUrl: string, nickname: string }> | null } | null };

export type GetFollowersMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetFollowersMutation = { __typename?: 'Mutation', getFollowers?: { __typename?: 'getFollowers', user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null, followers?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type GetFollowingsMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetFollowingsMutation = { __typename?: 'Mutation', getFollowings?: { __typename?: 'getFollowings', followings?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } | null };

export type GetUserMutMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMutMutation = { __typename?: 'Mutation', getUserMut?: { __typename?: 'User', id: string, name: string, photoUrl: string, nickname: string } | null };

export type LoginMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', error?: string | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UpdateUserBgMutationVariables = Exact<{
  url: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserBgMutation = { __typename?: 'Mutation', updateUserBg: { __typename?: 'NickNameResponse', user?: { __typename?: 'User', bg?: string | null, deletedAt?: string | null, email: string, followerCount?: number | null, id: string, followingCount?: number | null, joinedAt?: string | null, name: string, nickname: string, updatedAt?: string | null, photoUrl: string, watchedMovies?: Array<string> | null } | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type SaveProfilePictureMutationVariables = Exact<{
  url: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SaveProfilePictureMutation = { __typename?: 'Mutation', updateUserProfilePhoto: { __typename?: 'NickNameResponse', errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } };

export type ToggleFollowMutationVariables = Exact<{
  follow: Scalars['Boolean'];
  followingId: Scalars['String'];
  uid: Scalars['String'];
}>;


export type ToggleFollowMutation = { __typename?: 'Mutation', toggleFollow?: { __typename?: 'Follow', userId: string, followingId: string, follows?: boolean | null, createdAt: string, updatedAt?: string | null } | null };

export type UpdateProfileMutationVariables = Exact<{
  options: InputArgs;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', upsertProfile?: { __typename?: 'Profile', bio?: string | null, userId: string, updatedAt: string, lastname: string, gender?: string | null, firstname: string, dob?: string | null, createdAt: string, deletedAt?: string | null } | null };

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentedUserQuery = { __typename?: 'Query', getCommentedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserMiniProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMiniProfileQuery = { __typename?: 'Query', getFullUserProfile?: { __typename?: 'FullMiniUser', id: string, followers?: { __typename?: 'FollowerObject', followerCount: number, id: string, followers?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, following?: { __typename?: 'FollowingObject', followingCount: number, id: string, following?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, history?: { __typename?: 'HistoryObject', historyCount: number, id: string, history?: Array<{ __typename?: 'Visited', history: Array<string>, deletedAt?: string | null, createdAt: string, movieId: string, updatedAt: string, userId: string, visitCount?: number | null }> | null, recentMovies?: Array<{ __typename?: 'Movie', id: string, name: string, synopsis?: string | null, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, platformId: number, titleId: string, parentTitleName?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null, profile?: { __typename?: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, firstname: string, gender?: string | null, lastname: string, updatedAt: string, userId: string } | null, likes?: { __typename?: 'LikesMObject', likesCount: number, id: string, likes?: Array<{ __typename?: 'Movie', id: string, likesCount: number, name: string, parentTitleName?: string | null, platformId: number, runtime?: number | null, season?: string | null, stills?: string | null, synopsis?: string | null, thumbs?: string | null, viewsCount: number, year?: number | null, updatedAt: string, titleId: string, commentCount: number, createdAt: string, deletedAt?: string | null, favCount: number }> | null } | null, favorites?: { __typename?: 'FavoriteObject', favCount: number, id: string, favorites?: Array<{ __typename?: 'Movie', id: string, name: string, synopsis?: string | null, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, platformId: number, titleId: string, parentTitleName?: string | null, createdAt: string, updatedAt: string, deletedAt?: string | null }> | null } | null } | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserByNickNameQueryVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type GetUserByNickNameQuery = { __typename?: 'Query', getUserByUserName?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename?: 'Profile', bio?: string | null, createdAt: string, deletedAt?: string | null, dob?: string | null, firstname: string, gender?: string | null, lastname: string, updatedAt: string, userId: string } | null };

export type IsFollowingUserQueryVariables = Exact<{
  fid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type IsFollowingUserQuery = { __typename?: 'Query', isFollowingUser?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetCommentsOfTheUserQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  asc?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheUserQuery = { __typename?: 'Query', getCommentsOfTheUser?: { __typename?: 'PaginatedUserComments', totalCommentCount?: number | null, pastCount?: number | null, hasMoreComments: boolean, lastPage: number, user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetRepliesOfTheUserQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  asc?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetRepliesOfTheUserQuery = { __typename?: 'Query', getRepliesOfTheUser?: { __typename?: 'PaginatedUserReplies', totalCommentCount?: number | null, pastCount?: number | null, hasMoreComments: boolean, lastPage: number, user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, comments: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName?: string | null, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

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
    fragment FullUser on User {
  __typename
  id
  email
  name
  nickname
  photoUrl
  bg
  watchedMovies
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
    fragment ShortUser on User {
  id
  name
  photoUrl
  nickname
}
    `;
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
export const GetTitleInfoDocument = gql`
    mutation getTitleInfo($getTitleInfoId: String!) {
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

export function useGetTitleInfoMutation() {
  return Urql.useMutation<GetTitleInfoMutation, GetTitleInfoMutationVariables>(GetTitleInfoDocument);
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
export const GetCommentsOfTheMovieQDocument = gql`
    query getCommentsOfTheMovieQ($limit: Int!, $mid: String!, $page: Int, $time: String) {
  getCommentsOfTheMovie(limit: $limit, mid: $mid, page: $page, time: $time) {
    movie {
      id
      name
    }
    lastPage
    totalCommentCount
    pastLoadedCount
    hasMoreComments
    comments {
      ...FullComment
    }
  }
}
    ${FullCommentFragmentDoc}`;

export function useGetCommentsOfTheMovieQQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheMovieQQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheMovieQQuery, GetCommentsOfTheMovieQQueryVariables>({ query: GetCommentsOfTheMovieQDocument, ...options });
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
    query GetMoviesByTitleId($limit: Int!, $tid: String!, $page: Int) {
  getMoviesByTitleId(limit: $limit, tid: $tid, page: $page) {
    hasMoreTitles
    id
    lastPage
    page
    movieCount
    movies {
      ...FullMovie
    }
  }
}
    ${FullMovieFragmentDoc}`;

export function useGetMoviesByTitleIdQuery(options: Omit<Urql.UseQueryArgs<GetMoviesByTitleIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMoviesByTitleIdQuery, GetMoviesByTitleIdQueryVariables>({ query: GetMoviesByTitleIdDocument, ...options });
};
export const GetPaginatedMoviesDocument = gql`
    query getPaginatedMovies($limit: Int!, $page: Int, $asc: Boolean) {
  getPaginatedMovies(limit: $limit, page: $page, ASC: $asc) {
    hasMoreTitles
    page
    lastPage
    totalTitleCount
    titles {
      ...FullTitle
    }
  }
}
    ${FullTitleFragmentDoc}`;

export function useGetPaginatedMoviesQuery(options: Omit<Urql.UseQueryArgs<GetPaginatedMoviesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPaginatedMoviesQuery, GetPaginatedMoviesQueryVariables>({ query: GetPaginatedMoviesDocument, ...options });
};
export const GetPaginatedShowsDocument = gql`
    query getPaginatedShows($limit: Int!, $page: Int, $asc: Boolean) {
  getPaginatedShows(limit: $limit, page: $page, ASC: $asc) {
    hasMoreTitles
    page
    lastPage
    totalTitleCount
    titles {
      ...FullTitle
    }
  }
}
    ${FullTitleFragmentDoc}`;

export function useGetPaginatedShowsQuery(options: Omit<Urql.UseQueryArgs<GetPaginatedShowsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPaginatedShowsQuery, GetPaginatedShowsQueryVariables>({ query: GetPaginatedShowsDocument, ...options });
};
export const GetPaginatedTitlesDocument = gql`
    query getPaginatedTitles($limit: Int!, $page: Int, $asc: Boolean, $type: String) {
  getPaginatedTitles(limit: $limit, page: $page, ASC: $asc, type: $type) {
    hasMoreTitles
    page
    lastPage
    totalTitleCount
    titles {
      ...FullTitle
    }
  }
}
    ${FullTitleFragmentDoc}`;

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
export const GetUserNotificationsDocument = gql`
    query GetUserNotifications($uid: String!) {
  getUserNotifications(uid: $uid) {
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
export const GetRepliesOfCommentDocument = gql`
    query getRepliesOfComment($limit: Int!, $cid: String!, $page: Int) {
  getRepliesOfComment(limit: $limit, cid: $cid, page: $page) {
    __typename
    repliesCount
    lastPage
    replies {
      ...FullReply
    }
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetRepliesOfCommentQuery(options: Omit<Urql.UseQueryArgs<GetRepliesOfCommentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliesOfCommentQuery, GetRepliesOfCommentQueryVariables>({ query: GetRepliesOfCommentDocument, ...options });
};
export const GetRepliesOfReplyDocument = gql`
    query GetRepliesOfReply($limit: Int!, $rid: String!, $page: Int) {
  getRepliesOfReply(limit: $limit, rid: $rid, page: $page) {
    lastPage
    replies {
      ...FullReply
    }
    repliesCount
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
  }
}
    ${ShortTitleFragmentDoc}
${ShortUserFragmentDoc}`;

export function useGetSearchResultsQuery(options: Omit<Urql.UseQueryArgs<GetSearchResultsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>({ query: GetSearchResultsDocument, ...options });
};
export const GetFollowersDocument = gql`
    mutation GetFollowers($uid: String!) {
  getFollowers(uid: $uid) {
    user {
      ...FullUser
    }
    followers {
      ...FullUser
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useGetFollowersMutation() {
  return Urql.useMutation<GetFollowersMutation, GetFollowersMutationVariables>(GetFollowersDocument);
};
export const GetFollowingsDocument = gql`
    mutation GetFollowings($uid: String!) {
  getFollowings(uid: $uid) {
    followings {
      ...FullUser
    }
    user {
      ...FullUser
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useGetFollowingsMutation() {
  return Urql.useMutation<GetFollowingsMutation, GetFollowingsMutationVariables>(GetFollowingsDocument);
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
      watchedMovies
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
    bio
    userId
    updatedAt
    lastname
    gender
    firstname
    dob
    createdAt
    deletedAt
  }
}
    `;

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
      bio
      createdAt
      deletedAt
      dob
      firstname
      gender
      lastname
      updatedAt
      userId
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
    ${FullUserFragmentDoc}`;

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
export const GetUserProfileDocument = gql`
    query getUserProfile($uid: String!) {
  getUserProfile(uid: $uid) {
    bio
    createdAt
    deletedAt
    dob
    firstname
    gender
    lastname
    updatedAt
    userId
  }
}
    `;

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
    query getCommentsOfTheUser($limit: Int!, $uid: String!, $asc: Boolean, $page: Int, $time: String) {
  getCommentsOfTheUser(
    limit: $limit
    uid: $uid
    ASC: $asc
    page: $page
    time: $time
  ) {
    user {
      ...FullUser
    }
    totalCommentCount
    pastCount
    comments {
      ...FullComment
    }
    hasMoreComments
    lastPage
  }
}
    ${FullUserFragmentDoc}
${FullCommentFragmentDoc}`;

export function useGetCommentsOfTheUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheUserQuery, GetCommentsOfTheUserQueryVariables>({ query: GetCommentsOfTheUserDocument, ...options });
};
export const GetRepliesOfTheUserDocument = gql`
    query getRepliesOfTheUser($limit: Int!, $uid: String!, $asc: Boolean, $page: Int, $time: String) {
  getRepliesOfTheUser(
    limit: $limit
    uid: $uid
    ASC: $asc
    page: $page
    time: $time
  ) {
    user {
      ...FullUser
    }
    totalCommentCount
    pastCount
    comments {
      ...FullReply
    }
    hasMoreComments
    lastPage
  }
}
    ${FullUserFragmentDoc}
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