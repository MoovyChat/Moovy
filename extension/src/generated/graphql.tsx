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
  likes: Array<User>;
  likesCount: Scalars['Int'];
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

export type Notifications = {
  __typename?: 'Notifications';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  fromUser: Scalars['String'];
  fromUserPhotoUrl: Scalars['String'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  message: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
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
  id: Scalars['Float'];
  lastPage: Scalars['Int'];
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
  getAllNotifications: Array<Notifications>;
  getAllPlatforms: Array<Platform>;
  getAllReplies: Array<Reply>;
  getAllVisited: Array<Visited>;
  getComment: Comment;
  getCommentLikes?: Maybe<CommentLikesObject>;
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
  getReplyLikes?: Maybe<ReplyLikesObject>;
  getSearchResults?: Maybe<SearchObject>;
  getTitle?: Maybe<Title>;
  getUser?: Maybe<User>;
  getUserByUserName?: Maybe<User>;
  getUserMovieStatus?: Maybe<FullUserMovieStats>;
  getUserNotifications: Array<Notifications>;
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
};


export type QueryGetCommentOrReplyArgs = {
  id: Scalars['String'];
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
  commentedUserName: Scalars['String'];
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
  likes: Array<User>;
  likesCount: Scalars['Int'];
};

export type DeleteCommentMutationVariables = Exact<{
  cid: Scalars['String'];
  mid: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename?: 'Comment', id: string, message: string, commentedUserId: string, movieId: string, createdAt: string, deletedAt?: string | null } | null };

export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;


export type InsertCommentMutation = { __typename?: 'Mutation', insertComment?: { __typename?: 'Comment', id: string, commentedUserId: string, createdAt: string, likesCount?: number | null, repliesCount?: number | null, message: string, movieId: string, platformId: number, updatedAt: string } | null };

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  cid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetCommentLikeMutation = { __typename?: 'Mutation', setCommentLike?: { __typename?: 'CommentsStatsObject', user: { __typename?: 'User', id: string, name: string, nickname: string, followerCount?: number | null, followingCount?: number | null, photoUrl: string }, likeStatus: { __typename?: 'CommentStats', id: number, like?: boolean | null, movieId: string, commentId: string, userId: string } } | null };

export type GetCommentLikesQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentLikesQuery = { __typename?: 'Query', getCommentLikes?: { __typename?: 'CommentLikesObject', likesCount: number, likes: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> } | null };

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentedUserQuery = { __typename?: 'Query', getCommentedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type CommentLikesSubscriptionVariables = Exact<{
  cid: Scalars['String'];
}>;


export type CommentLikesSubscription = { __typename?: 'Subscription', commentLikesUpdate: { __typename?: 'CommentLikesObject', likesCount: number, likes: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> } };

export type MovieCommentsUpdateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MovieCommentsUpdateSubscription = { __typename?: 'Subscription', movieCommentsUpdate: number };

export type ToggleFollowMutationVariables = Exact<{
  follow: Scalars['Boolean'];
  followingId: Scalars['String'];
  uid: Scalars['String'];
}>;


export type ToggleFollowMutation = { __typename?: 'Mutation', toggleFollow?: { __typename?: 'Follow', createdAt: string, updatedAt?: string | null, userId: string, followingId: string, follows?: boolean | null } | null };

export type AmIFollowingThisUserMutationVariables = Exact<{
  fid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type AmIFollowingThisUserMutation = { __typename?: 'Mutation', amIFollowingThisUser?: boolean | null };

export type GetFollowersMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetFollowersMutation = { __typename?: 'Mutation', getFollowers?: { __typename?: 'getFollowers', user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null, followers?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type GetUserFollowStatsMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserFollowStatsMutation = { __typename?: 'Mutation', getUserFollowStats?: { __typename?: 'UserFollowStats', followerCount?: number | null, followingCount?: number | null } | null };

export type FullCommentFragment = { __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string };

export type FullMovieFragment = { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null };

export type FullTitleFragment = { __typename?: 'Title', advisories?: Array<string> | null, artwork?: string | null, boxart?: string | null, createdAt: string, deletedAt?: string | null, id: string, rating?: string | null, runtime?: number | null, storyart?: string | null, synopsis?: string | null, title?: string | null, type?: string | null, updatedAt: string, year?: number | null };

export type FullUserFragment = { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null };

export type FullMovieStatsFragment = { __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, userId?: string | null, movieId?: string | null, updatedAt: string, createdAt: string };

export type FullReplyFragment = { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName: string, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string };

export type InsertMovieInfoMutationVariables = Exact<{
  options: TitleOptions;
}>;


export type InsertMovieInfoMutation = { __typename?: 'Mutation', insertTitle?: boolean | null };

export type FetchNewCommentsMutationVariables = Exact<{
  time: Scalars['String'];
  mid: Scalars['String'];
}>;


export type FetchNewCommentsMutation = { __typename?: 'Mutation', fetchNewComments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> };

export type GetCommentsOfTheMovieMutationVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieMutation = { __typename?: 'Mutation', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', lastPage: number, totalCommentCount: number, pastLoadedCount: number, movie: { __typename?: 'Movie', id: string, name: string }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type InsertMovieMutationVariables = Exact<{
  options: MovieInput;
}>;


export type InsertMovieMutation = { __typename?: 'Mutation', insertMovie?: { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null } | null };

export type UpdateMovieTitleMutationVariables = Exact<{
  name: Scalars['String'];
  mid: Scalars['String'];
}>;


export type UpdateMovieTitleMutation = { __typename?: 'Mutation', updateMovieTitle?: boolean | null };

export type GetMovieLikesAndCommentsCountQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieLikesAndCommentsCountQuery = { __typename?: 'Query', getMovieLikesAndCommentsCount?: { __typename?: 'LikesAndComment', likesCount: number, commentsCount: number } | null };

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie?: { __typename: 'Movie', id: string, name: string, runtime?: number | null, platformId: number, createdAt: string, updatedAt: string, thumbs?: string | null, season?: string | null, likesCount: number, commentCount: number, viewsCount: number, favCount: number, titleId: string, parentTitleName?: string | null, stills?: string | null, synopsis?: string | null, year?: number | null } | null };

export type GetMovieFavCountQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieFavCountQuery = { __typename?: 'Query', getMovieFavoriteCount?: number | null };

export type GetMovieLikesQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieLikesQuery = { __typename?: 'Query', getMovieLikes?: { __typename?: 'LikesObject', likesCount: number, likes?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null };

export type MovieStatusUpdateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MovieStatusUpdateSubscription = { __typename?: 'Subscription', movieStatusUpdate: { __typename?: 'LikesAndFavObj', userLikesCount?: number | null, userFavoriteCount?: number | null } };

export type DeleteReplyMutationVariables = Exact<{
  rid: Scalars['String'];
}>;


export type DeleteReplyMutation = { __typename?: 'Mutation', deleteReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName: string, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type InsertReplyMutationVariables = Exact<{
  options: ReplyInput;
}>;


export type InsertReplyMutation = { __typename?: 'Mutation', insertReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName: string, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type SetReplyLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  rid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetReplyLikeMutation = { __typename?: 'Mutation', setReplyLike?: { __typename?: 'ReplyStatsObject', user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, likeStatus: { __typename?: 'ReplyStats', id: number, movieId: string, replyId: string, like?: boolean | null, updatedAt: string, userId: string, createdAt: string } } | null };

export type GetIsUserLikedReplyQueryVariables = Exact<{
  uid: Scalars['String'];
  rid: Scalars['String'];
}>;


export type GetIsUserLikedReplyQuery = { __typename?: 'Query', getIsUserLikedReply?: boolean | null };

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetRepliedUserQuery = { __typename?: 'Query', getRepliedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetRepliesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepliesQuery = { __typename?: 'Query', getRepliesOfComment: { __typename?: 'RepliesObject', repliesCount: number, lastPage: number, replies: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, commentedUserName: string, parentRepliedUser?: string | null, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } };

export type GetReplyLikesQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetReplyLikesQuery = { __typename?: 'Query', getReplyLikes?: { __typename?: 'replyLikesObject', likesCount: number, likes: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> } | null };

export type AddMovieIdToUserWatchListMutationVariables = Exact<{
  uid: Scalars['String'];
  mid: Scalars['String'];
}>;


export type AddMovieIdToUserWatchListMutation = { __typename?: 'Mutation', addMovieIdToTheUserWatchList: boolean };

export type CreateUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, email: string, nickname: string, name: string, photoUrl: string, joinedAt?: string | null, watchedMovies?: Array<string> | null, updatedAt?: string | null } | null };

export type DeleteUserMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type GetNickNameSuggestionsMutationVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetNickNameSuggestionsMutation = { __typename?: 'Mutation', getTopThreeUserNames?: Array<{ __typename?: 'NicKNameFormat', name: string }> | null };

export type GetUserByNickNameMutationVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type GetUserByNickNameMutation = { __typename?: 'Mutation', getUserByNickName?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetUserMutMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMutMutation = { __typename?: 'Mutation', getUserMut?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type UpdateUserMovieStatusMutationVariables = Exact<{
  options: UserMovieOptions;
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserMovieStatusMutation = { __typename?: 'Mutation', updateUserMovieStats?: { __typename?: 'LikeAndFav', like?: boolean | null, favorite?: boolean | null } | null };

export type UpdateUserNickNameMutationVariables = Exact<{
  uid: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserNickNameMutation = { __typename?: 'Mutation', updateUserNickName: { __typename?: 'NickNameResponse', errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> };

export type GetUserMiniProfileQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMiniProfileQuery = { __typename?: 'Query', getFullUserProfile?: { __typename?: 'FullMiniUser', id: string, followers?: { __typename?: 'FollowerObject', followerCount: number, id: string, followers?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, following?: { __typename?: 'FollowingObject', followingCount: number, id: string, following?: Array<{ __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }> | null } | null, history?: { __typename?: 'HistoryObject', historyCount: number, id: string, history?: Array<{ __typename?: 'Visited', history: Array<string>, deletedAt?: string | null, createdAt: string, movieId: string, updatedAt: string, userId: string, visitCount?: number | null }> | null, recentMovies?: Array<{ __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, platformId: number, titleId: string, parentTitleName?: string | null }> | null } | null, profile?: { __typename?: 'Profile', bio?: string | null, dob?: string | null, firstname: string, gender?: string | null, lastname: string } | null, likes?: { __typename?: 'LikesMObject', likesCount: number, id: string, likes?: Array<{ __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, platformId: number, titleId: string, parentTitleName?: string | null }> | null } | null, favorites?: { __typename?: 'FavoriteObject', favCount: number, id: string, favorites?: Array<{ __typename?: 'Movie', id: string, name: string, stills?: string | null, thumbs?: string | null, season?: string | null, year?: number | null, runtime?: number | null, platformId: number, titleId: string, parentTitleName?: string | null }> | null } | null } | null };

export type GetOnlyUserMovieStatsQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetOnlyUserMovieStatsQuery = { __typename?: 'Query', getOnlyUserMovieStats?: { __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, userId?: string | null, movieId?: string | null, updatedAt: string, createdAt: string } | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null };

export type GetCommentsOfTheUserQueryVariables = Exact<{
  limit: Scalars['Int'];
  uid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentsOfTheUserQuery = { __typename?: 'Query', getCommentsOfTheUser?: { __typename?: 'PaginatedUserComments', totalCommentCount?: number | null, pastCount?: number | null, user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, commentedUserName: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetUserMovieStatusQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetUserMovieStatusQuery = { __typename?: 'Query', getUserMovieStatus?: { __typename?: 'FullUserMovieStats', user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null }, movie: { __typename?: 'Movie', id: string, name: string, platformId: number }, movieStats?: { __typename?: 'MovieStats', like?: boolean | null, favorite?: boolean | null, userId?: string | null, movieId?: string | null, updatedAt: string, createdAt: string } | null } | null };

export type GetUserStatsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserStatsQuery = { __typename?: 'Query', getUserStatistics?: { __typename?: 'FullUserObject', totalComments?: number | null, totalLikes?: number | null, totalWatched?: number | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, bg?: string | null, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt?: string | null, updatedAt?: string | null } | null, favTitles?: Array<{ __typename?: 'FavMovieObject', favorite: boolean, movieName: string, movieId: string, userId: string }> | null, likedTitles?: Array<{ __typename?: 'LikedMovieObject', movieId: string, userId: string, like: boolean, movieName: string }> | null } | null };

export type IsFollowingUserQueryVariables = Exact<{
  fid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type IsFollowingUserQuery = { __typename?: 'Query', isFollowingUser?: boolean | null };

export type InsertVisitedMutationVariables = Exact<{
  time: Scalars['Float'];
  insertVisitedId: Scalars['String'];
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type InsertVisitedMutation = { __typename?: 'Mutation', insertVisited?: { __typename?: 'Visited', userId: string, movieId: string, history: Array<string>, visitCount?: number | null } | null };

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
export const FullMovieStatsFragmentDoc = gql`
    fragment FullMovieStats on MovieStats {
  like
  favorite
  userId
  movieId
  favorite
  updatedAt
  createdAt
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
export const DeleteCommentDocument = gql`
    mutation deleteComment($cid: String!, $mid: String!) {
  deleteComment(cid: $cid, mid: $mid) {
    id
    message
    commentedUserId
    movieId
    createdAt
    deletedAt
  }
}
    `;

export function useDeleteCommentMutation() {
  return Urql.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument);
};
export const InsertCommentDocument = gql`
    mutation insertComment($options: CommentInput!) {
  insertComment(options: $options) {
    id
    commentedUserId
    createdAt
    likesCount
    repliesCount
    message
    movieId
    platformId
    updatedAt
  }
}
    `;

export function useInsertCommentMutation() {
  return Urql.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument);
};
export const SetCommentLikeDocument = gql`
    mutation setCommentLike($like: Boolean!, $mid: String!, $cid: String!, $uid: String!) {
  setCommentLike(like: $like, mid: $mid, cid: $cid, uid: $uid) {
    user {
      id
      name
      nickname
      followerCount
      followingCount
      photoUrl
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
    `;

export function useSetCommentLikeMutation() {
  return Urql.useMutation<SetCommentLikeMutation, SetCommentLikeMutationVariables>(SetCommentLikeDocument);
};
export const GetCommentLikesDocument = gql`
    query getCommentLikes($cid: String!) {
  getCommentLikes(cid: $cid) {
    likes {
      ...FullUser
    }
    likesCount
  }
}
    ${FullUserFragmentDoc}`;

export function useGetCommentLikesQuery(options: Omit<Urql.UseQueryArgs<GetCommentLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentLikesQuery, GetCommentLikesQueryVariables>({ query: GetCommentLikesDocument, ...options });
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
export const CommentLikesDocument = gql`
    subscription commentLikes($cid: String!) {
  commentLikesUpdate(cid: $cid) {
    likes {
      ...FullUser
    }
    likesCount
  }
}
    ${FullUserFragmentDoc}`;

export function useCommentLikesSubscription<TData = CommentLikesSubscription>(options: Omit<Urql.UseSubscriptionArgs<CommentLikesSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<CommentLikesSubscription, TData>) {
  return Urql.useSubscription<CommentLikesSubscription, TData, CommentLikesSubscriptionVariables>({ query: CommentLikesDocument, ...options }, handler);
};
export const MovieCommentsUpdateDocument = gql`
    subscription movieCommentsUpdate {
  movieCommentsUpdate
}
    `;

export function useMovieCommentsUpdateSubscription<TData = MovieCommentsUpdateSubscription>(options: Omit<Urql.UseSubscriptionArgs<MovieCommentsUpdateSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<MovieCommentsUpdateSubscription, TData>) {
  return Urql.useSubscription<MovieCommentsUpdateSubscription, TData, MovieCommentsUpdateSubscriptionVariables>({ query: MovieCommentsUpdateDocument, ...options }, handler);
};
export const ToggleFollowDocument = gql`
    mutation toggleFollow($follow: Boolean!, $followingId: String!, $uid: String!) {
  toggleFollow(follow: $follow, followingId: $followingId, uid: $uid) {
    createdAt
    updatedAt
    userId
    followingId
    follows
  }
}
    `;

export function useToggleFollowMutation() {
  return Urql.useMutation<ToggleFollowMutation, ToggleFollowMutationVariables>(ToggleFollowDocument);
};
export const AmIFollowingThisUserDocument = gql`
    mutation amIFollowingThisUser($fid: String!, $uid: String!) {
  amIFollowingThisUser(fid: $fid, uid: $uid)
}
    `;

export function useAmIFollowingThisUserMutation() {
  return Urql.useMutation<AmIFollowingThisUserMutation, AmIFollowingThisUserMutationVariables>(AmIFollowingThisUserDocument);
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
export const GetUserFollowStatsDocument = gql`
    mutation getUserFollowStats($uid: String!) {
  getUserFollowStats(uid: $uid) {
    followerCount
    followingCount
  }
}
    `;

export function useGetUserFollowStatsMutation() {
  return Urql.useMutation<GetUserFollowStatsMutation, GetUserFollowStatsMutationVariables>(GetUserFollowStatsDocument);
};
export const InsertMovieInfoDocument = gql`
    mutation insertMovieInfo($options: TitleOptions!) {
  insertTitle(options: $options)
}
    `;

export function useInsertMovieInfoMutation() {
  return Urql.useMutation<InsertMovieInfoMutation, InsertMovieInfoMutationVariables>(InsertMovieInfoDocument);
};
export const FetchNewCommentsDocument = gql`
    mutation fetchNewComments($time: String!, $mid: String!) {
  fetchNewComments(time: $time, mid: $mid) {
    ...FullComment
  }
}
    ${FullCommentFragmentDoc}`;

export function useFetchNewCommentsMutation() {
  return Urql.useMutation<FetchNewCommentsMutation, FetchNewCommentsMutationVariables>(FetchNewCommentsDocument);
};
export const GetCommentsOfTheMovieDocument = gql`
    mutation getCommentsOfTheMovie($limit: Int!, $mid: String!, $page: Int, $time: String) {
  getCommentsOfTheMovie(limit: $limit, mid: $mid, page: $page, time: $time) {
    movie {
      id
      name
    }
    lastPage
    totalCommentCount
    pastLoadedCount
    comments {
      ...FullComment
    }
  }
}
    ${FullCommentFragmentDoc}`;

export function useGetCommentsOfTheMovieMutation() {
  return Urql.useMutation<GetCommentsOfTheMovieMutation, GetCommentsOfTheMovieMutationVariables>(GetCommentsOfTheMovieDocument);
};
export const InsertMovieDocument = gql`
    mutation insertMovie($options: MovieInput!) {
  insertMovie(options: $options) {
    ...FullMovie
  }
}
    ${FullMovieFragmentDoc}`;

export function useInsertMovieMutation() {
  return Urql.useMutation<InsertMovieMutation, InsertMovieMutationVariables>(InsertMovieDocument);
};
export const UpdateMovieTitleDocument = gql`
    mutation updateMovieTitle($name: String!, $mid: String!) {
  updateMovieTitle(name: $name, mid: $mid)
}
    `;

export function useUpdateMovieTitleMutation() {
  return Urql.useMutation<UpdateMovieTitleMutation, UpdateMovieTitleMutationVariables>(UpdateMovieTitleDocument);
};
export const GetMovieLikesAndCommentsCountDocument = gql`
    query GetMovieLikesAndCommentsCount($mid: String!) {
  getMovieLikesAndCommentsCount(mid: $mid) {
    likesCount
    commentsCount
  }
}
    `;

export function useGetMovieLikesAndCommentsCountQuery(options: Omit<Urql.UseQueryArgs<GetMovieLikesAndCommentsCountQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMovieLikesAndCommentsCountQuery, GetMovieLikesAndCommentsCountQueryVariables>({ query: GetMovieLikesAndCommentsCountDocument, ...options });
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
export const GetMovieFavCountDocument = gql`
    query getMovieFavCount($mid: String!) {
  getMovieFavoriteCount(mid: $mid)
}
    `;

export function useGetMovieFavCountQuery(options: Omit<Urql.UseQueryArgs<GetMovieFavCountQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMovieFavCountQuery, GetMovieFavCountQueryVariables>({ query: GetMovieFavCountDocument, ...options });
};
export const GetMovieLikesDocument = gql`
    query getMovieLikes($mid: String!) {
  getMovieLikes(mid: $mid) {
    likes {
      ...FullUser
    }
    likesCount
  }
}
    ${FullUserFragmentDoc}`;

export function useGetMovieLikesQuery(options: Omit<Urql.UseQueryArgs<GetMovieLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMovieLikesQuery, GetMovieLikesQueryVariables>({ query: GetMovieLikesDocument, ...options });
};
export const MovieStatusUpdateDocument = gql`
    subscription MovieStatusUpdate {
  movieStatusUpdate {
    userLikesCount
    userFavoriteCount
  }
}
    `;

export function useMovieStatusUpdateSubscription<TData = MovieStatusUpdateSubscription>(options: Omit<Urql.UseSubscriptionArgs<MovieStatusUpdateSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<MovieStatusUpdateSubscription, TData>) {
  return Urql.useSubscription<MovieStatusUpdateSubscription, TData, MovieStatusUpdateSubscriptionVariables>({ query: MovieStatusUpdateDocument, ...options }, handler);
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
    query getIsUserLikedReply($uid: String!, $rid: String!) {
  getIsUserLikedReply(uid: $uid, rid: $rid)
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
export const GetRepliesDocument = gql`
    query getReplies($limit: Int!, $cid: String!, $page: Int) {
  getRepliesOfComment(limit: $limit, cid: $cid, page: $page) {
    replies {
      ...FullReply
    }
    repliesCount
    lastPage
  }
}
    ${FullReplyFragmentDoc}`;

export function useGetRepliesQuery(options: Omit<Urql.UseQueryArgs<GetRepliesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliesQuery, GetRepliesQueryVariables>({ query: GetRepliesDocument, ...options });
};
export const GetReplyLikesDocument = gql`
    query getReplyLikes($rid: String!) {
  getReplyLikes(rid: $rid) {
    likes {
      ...FullUser
    }
    likesCount
  }
}
    ${FullUserFragmentDoc}`;

export function useGetReplyLikesQuery(options: Omit<Urql.UseQueryArgs<GetReplyLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetReplyLikesQuery, GetReplyLikesQueryVariables>({ query: GetReplyLikesDocument, ...options });
};
export const AddMovieIdToUserWatchListDocument = gql`
    mutation addMovieIdToUserWatchList($uid: String!, $mid: String!) {
  addMovieIdToTheUserWatchList(uid: $uid, mid: $mid)
}
    `;

export function useAddMovieIdToUserWatchListMutation() {
  return Urql.useMutation<AddMovieIdToUserWatchListMutation, AddMovieIdToUserWatchListMutationVariables>(AddMovieIdToUserWatchListDocument);
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
    watchedMovies
    joinedAt
    updatedAt
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($uid: String!) {
  deleteUser(uid: $uid)
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const GetNickNameSuggestionsDocument = gql`
    mutation getNickNameSuggestions($search: String!) {
  getTopThreeUserNames(search: $search) {
    name
  }
}
    `;

export function useGetNickNameSuggestionsMutation() {
  return Urql.useMutation<GetNickNameSuggestionsMutation, GetNickNameSuggestionsMutationVariables>(GetNickNameSuggestionsDocument);
};
export const GetUserByNickNameDocument = gql`
    mutation getUserByNickName($nickname: String!) {
  getUserByNickName(nickname: $nickname) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserByNickNameMutation() {
  return Urql.useMutation<GetUserByNickNameMutation, GetUserByNickNameMutationVariables>(GetUserByNickNameDocument);
};
export const GetUserMutDocument = gql`
    mutation getUserMut($uid: String!) {
  getUserMut(uid: $uid) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserMutMutation() {
  return Urql.useMutation<GetUserMutMutation, GetUserMutMutationVariables>(GetUserMutDocument);
};
export const UpdateUserMovieStatusDocument = gql`
    mutation updateUserMovieStatus($options: UserMovieOptions!, $mid: String!, $uid: String!) {
  updateUserMovieStats(options: $options, mid: $mid, uid: $uid) {
    like
    favorite
  }
}
    `;

export function useUpdateUserMovieStatusMutation() {
  return Urql.useMutation<UpdateUserMovieStatusMutation, UpdateUserMovieStatusMutationVariables>(UpdateUserMovieStatusDocument);
};
export const UpdateUserNickNameDocument = gql`
    mutation UpdateUserNickName($uid: String!, $nickname: String) {
  updateUserNickName(uid: $uid, nickname: $nickname) {
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

export function useUpdateUserNickNameMutation() {
  return Urql.useMutation<UpdateUserNickNameMutation, UpdateUserNickNameMutationVariables>(UpdateUserNickNameDocument);
};
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetAllUsersQuery(options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({ query: GetAllUsersDocument, ...options });
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
        stills
        thumbs
        season
        year
        runtime
        platformId
        titleId
        parentTitleName
      }
      id
    }
    profile {
      bio
      dob
      firstname
      gender
      lastname
    }
    likes {
      likesCount
      likes {
        id
        name
        stills
        thumbs
        season
        year
        runtime
        platformId
        titleId
        parentTitleName
      }
      id
    }
    favorites {
      favCount
      favorites {
        id
        name
        stills
        thumbs
        season
        year
        runtime
        platformId
        titleId
        parentTitleName
      }
      id
    }
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserMiniProfileQuery(options: Omit<Urql.UseQueryArgs<GetUserMiniProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserMiniProfileQuery, GetUserMiniProfileQueryVariables>({ query: GetUserMiniProfileDocument, ...options });
};
export const GetOnlyUserMovieStatsDocument = gql`
    query getOnlyUserMovieStats($mid: String!, $uid: String!) {
  getOnlyUserMovieStats(mid: $mid, uid: $uid) {
    ...FullMovieStats
  }
}
    ${FullMovieStatsFragmentDoc}`;

export function useGetOnlyUserMovieStatsQuery(options: Omit<Urql.UseQueryArgs<GetOnlyUserMovieStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOnlyUserMovieStatsQuery, GetOnlyUserMovieStatsQueryVariables>({ query: GetOnlyUserMovieStatsDocument, ...options });
};
export const GetUserDocument = gql`
    query GetUser($uid: String!) {
  getUser(uid: $uid) {
    ...FullUser
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const GetCommentsOfTheUserDocument = gql`
    query getCommentsOfTheUser($limit: Int!, $uid: String!, $page: Int) {
  getCommentsOfTheUser(limit: $limit, uid: $uid, page: $page) {
    user {
      ...FullUser
    }
    totalCommentCount
    pastCount
    comments {
      ...FullComment
    }
  }
}
    ${FullUserFragmentDoc}
${FullCommentFragmentDoc}`;

export function useGetCommentsOfTheUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheUserQuery, GetCommentsOfTheUserQueryVariables>({ query: GetCommentsOfTheUserDocument, ...options });
};
export const GetUserMovieStatusDocument = gql`
    query getUserMovieStatus($mid: String!, $uid: String!) {
  getUserMovieStatus(mid: $mid, uid: $uid) {
    user {
      ...FullUser
    }
    movie {
      id
      name
      platformId
    }
    movieStats {
      ...FullMovieStats
    }
  }
}
    ${FullUserFragmentDoc}
${FullMovieStatsFragmentDoc}`;

export function useGetUserMovieStatusQuery(options: Omit<Urql.UseQueryArgs<GetUserMovieStatusQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserMovieStatusQuery, GetUserMovieStatusQueryVariables>({ query: GetUserMovieStatusDocument, ...options });
};
export const GetUserStatsDocument = gql`
    query getUserStats($uid: String!) {
  getUserStatistics(uid: $uid) {
    user {
      ...FullUser
    }
    favTitles {
      favorite
      movieName
      movieId
      userId
    }
    likedTitles {
      movieId
      userId
      like
      movieName
    }
    totalComments
    totalLikes
    totalWatched
  }
}
    ${FullUserFragmentDoc}`;

export function useGetUserStatsQuery(options: Omit<Urql.UseQueryArgs<GetUserStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserStatsQuery, GetUserStatsQueryVariables>({ query: GetUserStatsDocument, ...options });
};
export const IsFollowingUserDocument = gql`
    query isFollowingUser($fid: String!, $uid: String!) {
  isFollowingUser(fid: $fid, uid: $uid)
}
    `;

export function useIsFollowingUserQuery(options: Omit<Urql.UseQueryArgs<IsFollowingUserQueryVariables>, 'query'>) {
  return Urql.useQuery<IsFollowingUserQuery, IsFollowingUserQueryVariables>({ query: IsFollowingUserDocument, ...options });
};
export const InsertVisitedDocument = gql`
    mutation insertVisited($time: Float!, $insertVisitedId: String!, $mid: String!, $uid: String!) {
  insertVisited(time: $time, id: $insertVisitedId, mid: $mid, uid: $uid) {
    userId
    movieId
    history
    visitCount
  }
}
    `;

export function useInsertVisitedMutation() {
  return Urql.useMutation<InsertVisitedMutation, InsertVisitedMutationVariables>(InsertVisitedDocument);
};