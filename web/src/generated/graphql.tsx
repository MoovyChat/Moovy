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
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
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

export type CommentStats = {
  __typename?: 'CommentStats';
  commentId: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
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

export type Follow = {
  __typename?: 'Follow';
  createdAt: Scalars['String'];
  followerId: Scalars['String'];
  follows?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type FollowingUsers = {
  __typename?: 'FollowingUsers';
  followers?: Maybe<Array<User>>;
  user?: Maybe<User>;
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

export type IsUserLikedObject = {
  __typename?: 'IsUserLikedObject';
  id: Scalars['String'];
  isLiked?: Maybe<Scalars['Boolean']>;
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
  deletedAt: Scalars['String'];
  favCount: Scalars['Int'];
  id: Scalars['String'];
  likesCount: Scalars['Int'];
  name: Scalars['String'];
  platformId: Scalars['Int'];
  updatedAt: Scalars['String'];
  viewsCount: Scalars['Int'];
};

export type MovieInfo = {
  __typename?: 'MovieInfo';
  artwork?: Maybe<Scalars['String']>;
  boxart?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  movieId: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  storyart?: Maybe<Scalars['String']>;
  synopsis?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type MovieInfoOptions = {
  artwork: Scalars['String'];
  boxart: Scalars['String'];
  movieId: Scalars['String'];
  rating: Scalars['String'];
  storyart: Scalars['String'];
  synopsis: Scalars['String'];
  title: Scalars['String'];
};

export type MovieInput = {
  id: Scalars['String'];
  likesCount: Scalars['Int'];
  name: Scalars['String'];
  platformId: Scalars['Int'];
};

export type MovieStats = {
  __typename?: 'MovieStats';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  favorite?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Boolean']>;
  movieId: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovieIdToTheUserWatchList: Scalars['Boolean'];
  amIFollowingThisUser?: Maybe<Scalars['Boolean']>;
  createPlatform?: Maybe<Platform>;
  createUser?: Maybe<User>;
  deleteComment?: Maybe<Comment>;
  deleteReply?: Maybe<Scalars['Boolean']>;
  deleteUser: Scalars['Boolean'];
  fetchNewComments: Array<Comment>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getTopThreeUserNames?: Maybe<Array<NicKNameFormat>>;
  getUserByNickName?: Maybe<User>;
  getUserFollowStats?: Maybe<UserFollowStats>;
  getUserMut?: Maybe<User>;
  insertComment?: Maybe<Comment>;
  insertMovie?: Maybe<Movie>;
  insertMovieInfo?: Maybe<Scalars['Boolean']>;
  insertReply?: Maybe<Reply>;
  login?: Maybe<UserResponse>;
  logout: Scalars['Boolean'];
  setCommentLike?: Maybe<CommentsStatsObject>;
  setReplyLike?: Maybe<ReplyStatsObject>;
  toggleFollow?: Maybe<Follow>;
  updateMovieTitle?: Maybe<Scalars['Boolean']>;
  updateUserMovieStats?: Maybe<MovieStats>;
  updateUserNickName: NickNameResponse;
  updateUserProfilePhoto: NickNameResponse;
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
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
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


export type MutationInsertCommentArgs = {
  options: CommentInput;
};


export type MutationInsertMovieArgs = {
  options: MovieInput;
};


export type MutationInsertMovieInfoArgs = {
  options: MovieInfoOptions;
};


export type MutationInsertReplyArgs = {
  options: ReplyInput;
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
  followerId: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationUpdateMovieTitleArgs = {
  mid: Scalars['String'];
  name: Scalars['String'];
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
  deletedAt: Scalars['String'];
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

export type PaginatedUserComments = {
  __typename?: 'PaginatedUserComments';
  comments: Array<Comment>;
  id: Scalars['String'];
  user: User;
};

export type Platform = {
  __typename?: 'Platform';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type PlatformInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Comment>;
  getAllCommentsMadeByUser?: Maybe<Array<Comment>>;
  getAllMovies: Array<Movie>;
  getAllNotifications: Array<Notifications>;
  getAllPlatforms: Array<Platform>;
  getAllReplies: Array<Reply>;
  getComment: Comment;
  getCommentLikes?: Maybe<CommentLikesObject>;
  getCommentedUser?: Maybe<User>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getCommentsOfTheUser?: Maybe<PaginatedUserComments>;
  getFollowers?: Maybe<FollowingUsers>;
  getIsUserLikedComment?: Maybe<IsUserLikedObject>;
  getIsUserLikedReply?: Maybe<Scalars['Boolean']>;
  getMovie: Movie;
  getMovieById: Platform;
  getMovieFavoriteCount?: Maybe<Scalars['Int']>;
  getMovieInfo?: Maybe<MovieInfo>;
  getMovieLikes?: Maybe<LikesObject>;
  getMovieLikesAndCommentsCount?: Maybe<LikesAndComment>;
  getOnlyUserMovieStats?: Maybe<MovieStats>;
  getRepliedUser?: Maybe<User>;
  getRepliesOfComment: RepliesObject;
  getRepliesOfReply: RepliesObject;
  getReply?: Maybe<Reply>;
  getReplyLikes?: Maybe<ReplyLikesObject>;
  getUser?: Maybe<User>;
  getUserMovieStatus?: Maybe<FullUserMovieStats>;
  getUserNotifications: Array<Notifications>;
  getUserStatistics?: Maybe<FullUserObject>;
  hello: Scalars['String'];
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


export type QueryGetCommentedUserArgs = {
  cid: Scalars['String'];
};


export type QueryGetCommentsOfTheMovieArgs = {
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};


export type QueryGetCommentsOfTheUserArgs = {
  uid: Scalars['String'];
};


export type QueryGetFollowersArgs = {
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


export type QueryGetMovieInfoArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieLikesArgs = {
  mid: Scalars['String'];
};


export type QueryGetMovieLikesAndCommentsCountArgs = {
  mid: Scalars['String'];
};


export type QueryGetOnlyUserMovieStatsArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
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


export type QueryGetReplyArgs = {
  rid: Scalars['String'];
};


export type QueryGetReplyLikesArgs = {
  rid: Scalars['String'];
};


export type QueryGetUserArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserMovieStatusArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetUserNotificationsArgs = {
  uid: Scalars['String'];
};


export type QueryGetUserStatisticsArgs = {
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
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentReplyId?: Maybe<Scalars['String']>;
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type ReplyInput = {
  commentedUserId: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentCommentId: Scalars['String'];
  parentReplyId: Scalars['String'];
  platformId: Scalars['Int'];
  repliesCount: Scalars['Int'];
};

export type ReplyStats = {
  __typename?: 'ReplyStats';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
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

export type User = {
  __typename?: 'User';
  deletedAt: Scalars['String'];
  email: Scalars['String'];
  followerCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  joinedAt: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  photoUrl: Scalars['String'];
  updatedAt: Scalars['String'];
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

export type ReplyLikesObject = {
  __typename?: 'replyLikesObject';
  likes: Array<User>;
  likesCount: Scalars['Int'];
};

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  cid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetCommentLikeMutation = { __typename?: 'Mutation', setCommentLike?: { __typename?: 'CommentsStatsObject', user: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string }, likeStatus: { __typename?: 'CommentStats', id: number, like?: boolean | null, movieId: string, commentId: string, userId: string } } | null };

export type GetCommentQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment: { __typename: 'Comment', id: string, commentedUserId: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string } };

export type GetIsUserLikedCommentQueryVariables = Exact<{
  uid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type GetIsUserLikedCommentQuery = { __typename?: 'Query', getIsUserLikedComment?: { __typename: 'IsUserLikedObject', id: string, isLiked?: boolean | null } | null };

export type FullCommentFragment = { __typename: 'Comment', id: string, commentedUserId: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string };

export type FullMovieFragment = { __typename: 'Movie', id: string, name: string, platformId: number, likesCount: number, favCount: number, commentCount: number, viewsCount: number, createdAt: string, updatedAt: string };

export type FullNotificationFragment = { __typename: 'Notifications', id: string, userId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string };

export type FullReplyFragment = { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string };

export type FullUserFragment = { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string };

export type GetCommentsOfTheMovieMutationVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieMutation = { __typename?: 'Mutation', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', lastPage: number, totalCommentCount: number, pastLoadedCount: number, movie: { __typename?: 'Movie', id: string, name: string }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetCommentsOfTheMovieQQueryVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieQQuery = { __typename?: 'Query', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', lastPage: number, totalCommentCount: number, pastLoadedCount: number, movie: { __typename?: 'Movie', id: string, name: string }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie: { __typename: 'Movie', id: string, name: string, platformId: number, likesCount: number, favCount: number, commentCount: number, viewsCount: number, createdAt: string, updatedAt: string } };

export type GetUserNotificationsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserNotificationsQuery = { __typename?: 'Query', getUserNotifications: Array<{ __typename: 'Notifications', id: string, userId: string, message: string, fromUser: string, fromUserPhotoUrl: string, isRead: boolean, createdAt: string, updatedAt: string }> };

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetRepliedUserQuery = { __typename?: 'Query', getRepliedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null };

export type GetRepliesOfCommentQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepliesOfCommentQuery = { __typename?: 'Query', getRepliesOfComment: { __typename: 'RepliesObject', repliesCount: number, lastPage: number, replies: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } };

export type GetRepliesOfReplyQueryVariables = Exact<{
  limit: Scalars['Int'];
  rid: Scalars['String'];
}>;


export type GetRepliesOfReplyQuery = { __typename?: 'Query', getRepliesOfReply: { __typename?: 'RepliesObject', repliesCount: number, lastPage: number, replies: Array<{ __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string }> } };

export type GetReplyQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetReplyQuery = { __typename?: 'Query', getReply?: { __typename: 'Reply', id: string, message: string, movieId: string, parentCommentId: string, parentReplyId?: string | null, commentedUserId: string, likesCount?: number | null, repliesCount?: number | null, platformId: number, createdAt: string, updatedAt: string } | null };

export type LoginMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserResponse', error?: string | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type SaveProfilePictureMutationVariables = Exact<{
  url: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SaveProfilePictureMutation = { __typename?: 'Mutation', updateUserProfilePhoto: { __typename?: 'NickNameResponse', errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null, user?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null } };

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentedUserQuery = { __typename?: 'Query', getCommentedUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename: 'User', id: string, email: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null, followerCount?: number | null, followingCount?: number | null, joinedAt: string, updatedAt: string } | null };

export type GetCommentsOfTheUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetCommentsOfTheUserQuery = { __typename?: 'Query', getCommentsOfTheUser?: { __typename?: 'PaginatedUserComments', id: string, user: { __typename?: 'User', id: string, name: string, email: string, photoUrl: string, nickname: string, updatedAt: string, watchedMovies?: Array<string> | null, joinedAt: string }, comments: Array<{ __typename: 'Comment', id: string, commentedUserId: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieId: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

export const FullCommentFragmentDoc = gql`
    fragment FullComment on Comment {
  __typename
  id
  commentedUserId
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
  platformId
  likesCount
  favCount
  commentCount
  viewsCount
  createdAt
  updatedAt
}
    `;
export const FullNotificationFragmentDoc = gql`
    fragment FullNotification on Notifications {
  __typename
  id
  userId
  message
  fromUser
  fromUserPhotoUrl
  isRead
  createdAt
  updatedAt
}
    `;
export const FullReplyFragmentDoc = gql`
    fragment FullReply on Reply {
  __typename
  id
  message
  movieId
  parentCommentId
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
  watchedMovies
  followerCount
  followingCount
  joinedAt
  updatedAt
}
    `;
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
export const GetUserNotificationsDocument = gql`
    query getUserNotifications($uid: String!) {
  getUserNotifications(uid: $uid) {
    ...FullNotification
  }
}
    ${FullNotificationFragmentDoc}`;

export function useGetUserNotificationsQuery(options: Omit<Urql.UseQueryArgs<GetUserNotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserNotificationsQuery, GetUserNotificationsQueryVariables>({ query: GetUserNotificationsDocument, ...options });
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
    query getRepliesOfReply($limit: Int!, $rid: String!) {
  getRepliesOfReply(limit: $limit, rid: $rid) {
    replies {
      ...FullReply
    }
    repliesCount
    lastPage
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
    query getCommentsOfTheUser($uid: String!) {
  getCommentsOfTheUser(uid: $uid) {
    id
    user {
      id
      name
      email
      photoUrl
      nickname
      updatedAt
      watchedMovies
      joinedAt
    }
    comments {
      ...FullComment
    }
  }
}
    ${FullCommentFragmentDoc}`;

export function useGetCommentsOfTheUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentsOfTheUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentsOfTheUserQuery, GetCommentsOfTheUserQueryVariables>({ query: GetCommentsOfTheUserDocument, ...options });
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