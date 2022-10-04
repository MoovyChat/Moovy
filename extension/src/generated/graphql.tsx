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
  cid: Scalars['String'];
  commentedUserUid: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieMid: Scalars['String'];
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

export type CommentStats = {
  __typename?: 'CommentStats';
  commentCid: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['Int'];
  like?: Maybe<Scalars['Boolean']>;
  movieMid: Scalars['String'];
  updatedAt: Scalars['String'];
  userUid: Scalars['String'];
};

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FavMovieObject = {
  __typename?: 'FavMovieObject';
  favorite: Scalars['Boolean'];
  movieMid: Scalars['String'];
  movieName: Scalars['String'];
  userUid: Scalars['String'];
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

export type LikedMovieObject = {
  __typename?: 'LikedMovieObject';
  like: Scalars['Boolean'];
  movieMid: Scalars['String'];
  movieName: Scalars['String'];
  userUid: Scalars['String'];
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
  likes?: Maybe<Array<User>>;
  likesCount: Scalars['Int'];
  movieId: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  likes: Array<Scalars['String']>;
  mid: Scalars['String'];
  name: Scalars['String'];
  platformId: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type MovieInput = {
  likes: Array<Scalars['String']>;
  mid: Scalars['String'];
  name: Scalars['String'];
  platformId: Scalars['Int'];
};

export type MovieStats = {
  __typename?: 'MovieStats';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  favorite?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  like?: Maybe<Scalars['Boolean']>;
  movieMid: Scalars['String'];
  updatedAt: Scalars['String'];
  userUid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovieIdToTheUserWatchList: Scalars['Boolean'];
  createPlatform?: Maybe<Platform>;
  createUser?: Maybe<User>;
  deleteComment?: Maybe<Comment>;
  deleteReply?: Maybe<Reply>;
  deleteUser: Scalars['Boolean'];
  fetchNewComments: Array<Comment>;
  getCommentStats?: Maybe<CommentStats>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getReplyStats?: Maybe<ReplyStats>;
  getTopThreeUserNames?: Maybe<Array<NicKNameFormat>>;
  getUserMut?: Maybe<User>;
  insertComment?: Maybe<Comment>;
  insertMovie?: Maybe<Movie>;
  insertReply?: Maybe<Reply>;
  updateMovieTitle?: Maybe<Scalars['Boolean']>;
  updateUserMovieStats?: Maybe<MovieStats>;
  updateUserNickName: NickNameResponse;
};


export type MutationAddMovieIdToTheUserWatchListArgs = {
  mid: Scalars['String'];
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


export type MutationGetCommentStatsArgs = {
  cid: Scalars['String'];
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationGetCommentsOfTheMovieArgs = {
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
};


export type MutationGetReplyStatsArgs = {
  like: Scalars['Boolean'];
  rid: Scalars['String'];
  uid: Scalars['String'];
};


export type MutationGetTopThreeUserNamesArgs = {
  search: Scalars['String'];
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


export type MutationInsertReplyArgs = {
  options: ReplyInput;
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

export type NicKNameFormat = {
  __typename?: 'NicKNameFormat';
  name: Scalars['String'];
};

export type NickNameResponse = {
  __typename?: 'NickNameResponse';
  errors?: Maybe<Array<ErrorField>>;
  user?: Maybe<User>;
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
  getAllPlatforms: Array<Platform>;
  getAllReplies: Array<Reply>;
  getComment: Comment;
  getCommentLikes?: Maybe<CommentLikesObject>;
  getCommentedUser?: Maybe<User>;
  getCommentsOfTheUser?: Maybe<PaginatedUserComments>;
  getIsUserLikedComment?: Maybe<Scalars['Boolean']>;
  getIsUserLikedReply?: Maybe<Scalars['Boolean']>;
  getMovie: Movie;
  getMovieById: Platform;
  getMovieFavoriteCount?: Maybe<Scalars['Int']>;
  getMovieLikes?: Maybe<LikesObject>;
  getMovieLikesAndCommentsCount?: Maybe<LikesAndComment>;
  getRepliedUser?: Maybe<User>;
  getRepliesOfComment: RepliesObject;
  getReply?: Maybe<Reply>;
  getReplyLikes?: Maybe<ReplyLikesObject>;
  getUser?: Maybe<User>;
  getUserByNickName?: Maybe<User>;
  getUserMovieStatus?: Maybe<FullUserMovieStats>;
  getUserStatistics?: Maybe<FullUserObject>;
  hello: Scalars['String'];
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


export type QueryGetCommentsOfTheUserArgs = {
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


export type QueryGetRepliedUserArgs = {
  rid: Scalars['String'];
};


export type QueryGetRepliesOfCommentArgs = {
  cid: Scalars['String'];
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
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


export type QueryGetUserByNickNameArgs = {
  nickname: Scalars['String'];
};


export type QueryGetUserMovieStatusArgs = {
  mid: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryGetUserStatisticsArgs = {
  nickname: Scalars['String'];
};

export type RepliesObject = {
  __typename?: 'RepliesObject';
  lastPage: Scalars['Int'];
  replies: Array<Reply>;
  repliesCount: Scalars['Int'];
};

export type Reply = {
  __typename?: 'Reply';
  commentedUserUid: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  likesCount?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
  movieMid: Scalars['String'];
  parentCommentCid: Scalars['String'];
  parentReplyRid?: Maybe<Scalars['String']>;
  platformId: Scalars['Int'];
  repliesCount?: Maybe<Scalars['Int']>;
  rid: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ReplyInput = {
  commentId: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentReplyRid: Scalars['String'];
  platformId: Scalars['Int'];
  repliedUserUid: Scalars['String'];
  repliesCount: Scalars['Int'];
};

export type ReplyStats = {
  __typename?: 'ReplyStats';
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['Int'];
  like?: Maybe<Scalars['Boolean']>;
  replyRid: Scalars['String'];
  updatedAt: Scalars['String'];
  userUid: Scalars['String'];
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
  joinedAt: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  photoUrl: Scalars['String'];
  uid: Scalars['String'];
  updatedAt: Scalars['String'];
  watchedMovies?: Maybe<Array<Scalars['String']>>;
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  nickname: Scalars['String'];
  photoUrl: Scalars['String'];
  uid: Scalars['String'];
};

export type UserMovieOptions = {
  favorite?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['Boolean']>;
};

export type CommentLikesObject = {
  __typename?: 'commentLikesObject';
  likes: Array<User>;
  likesCount: Scalars['Int'];
};

export type ReplyLikesObject = {
  __typename?: 'replyLikesObject';
  likes: Array<User>;
  likesCount: Scalars['Int'];
};

export type DeleteCommentMutationVariables = Exact<{
  cid: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: { __typename?: 'Comment', cid: string, message: string, commentedUserUid: string, movieMid: string, createdAt: string, deletedAt: string } | null };

export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;


export type InsertCommentMutation = { __typename?: 'Mutation', insertComment?: { __typename?: 'Comment', cid: string, commentedUserUid: string, createdAt: string, likesCount?: number | null, repliesCount?: number | null, message: string, movieMid: string, platformId: number, updatedAt: string } | null };

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  cid: Scalars['String'];
  uid: Scalars['String'];
  mid: Scalars['String'];
}>;


export type SetCommentLikeMutation = { __typename?: 'Mutation', getCommentStats?: { __typename?: 'CommentStats', id: number, like?: boolean | null, movieMid: string, commentCid: string } | null };

export type GetCommentLikesQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentLikesQuery = { __typename?: 'Query', getCommentLikes?: { __typename?: 'commentLikesObject', likesCount: number, likes: Array<{ __typename?: 'User', uid: string, name: string, nickname: string, photoUrl: string }> } | null };

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type GetCommentedUserQuery = { __typename?: 'Query', getCommentedUser?: { __typename?: 'User', uid: string, name: string, photoUrl: string, email: string, updatedAt: string, watchedMovies?: Array<string> | null, nickname: string, joinedAt: string } | null };

export type GetIsUserLikedCommentQueryVariables = Exact<{
  uid: Scalars['String'];
  cid: Scalars['String'];
}>;


export type GetIsUserLikedCommentQuery = { __typename?: 'Query', getIsUserLikedComment?: boolean | null };

export type CommentLikesSubscriptionVariables = Exact<{
  cid: Scalars['String'];
}>;


export type CommentLikesSubscription = { __typename?: 'Subscription', commentLikesUpdate: { __typename?: 'commentLikesObject', likesCount: number, likes: Array<{ __typename?: 'User', uid: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null }> } };

export type MovieCommentsUpdateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MovieCommentsUpdateSubscription = { __typename?: 'Subscription', movieCommentsUpdate: number };

export type FetchNewCommentsMutationVariables = Exact<{
  time: Scalars['String'];
  mid: Scalars['String'];
}>;


export type FetchNewCommentsMutation = { __typename?: 'Mutation', fetchNewComments: Array<{ __typename?: 'Comment', cid: string, commentedUserUid: string, message: string, createdAt: string }> };

export type GetCommentsOfTheMovieMutationVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;


export type GetCommentsOfTheMovieMutation = { __typename?: 'Mutation', getCommentsOfTheMovie?: { __typename?: 'PaginatedMovieComments', lastPage: number, totalCommentCount: number, pastLoadedCount: number, movie: { __typename?: 'Movie', mid: string, name: string }, comments: Array<{ __typename?: 'Comment', cid: string, commentedUserUid: string, createdAt: string, message: string }> } | null };

export type InsertMovieMutationVariables = Exact<{
  options: MovieInput;
}>;


export type InsertMovieMutation = { __typename?: 'Mutation', insertMovie?: { __typename?: 'Movie', mid: string, name: string, platformId: number, likes: Array<string>, createdAt: string, updatedAt: string } | null };

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


export type GetMovieQuery = { __typename?: 'Query', getMovie: { __typename?: 'Movie', mid: string, name: string, likes: Array<string>, platformId: number, createdAt: string, updatedAt: string } };

export type GetMovieFavCountQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieFavCountQuery = { __typename?: 'Query', getMovieFavoriteCount?: number | null };

export type GetMovieLikesQueryVariables = Exact<{
  mid: Scalars['String'];
}>;


export type GetMovieLikesQuery = { __typename?: 'Query', getMovieLikes?: { __typename?: 'LikesObject', likesCount: number, likes?: Array<{ __typename?: 'User', uid: string, name: string, nickname: string, email: string, watchedMovies?: Array<string> | null }> | null } | null };

export type MovieStatusSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MovieStatusSubscribeSubscription = { __typename?: 'Subscription', movieStatusUpdate: { __typename?: 'LikesAndFavObj', userFavoriteCount?: number | null, userLikesCount?: number | null } };

export type DeleteReplyMutationVariables = Exact<{
  rid: Scalars['String'];
}>;


export type DeleteReplyMutation = { __typename?: 'Mutation', deleteReply?: { __typename?: 'Reply', rid: string, message: string, commentedUserUid: string, movieMid: string, createdAt: string, deletedAt: string } | null };

export type InsertReplyMutationVariables = Exact<{
  options: ReplyInput;
}>;


export type InsertReplyMutation = { __typename?: 'Mutation', insertReply?: { __typename?: 'Reply', commentedUserUid: string, createdAt: string, message: string, movieMid: string, parentCommentCid: string, parentReplyRid?: string | null, platformId: number, rid: string } | null };

export type SetReplyLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  rid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type SetReplyLikeMutation = { __typename?: 'Mutation', getReplyStats?: { __typename?: 'ReplyStats', id: number, like?: boolean | null, userUid: string } | null };

export type GetIsUserLikedReplyQueryVariables = Exact<{
  uid: Scalars['String'];
  rid: Scalars['String'];
}>;


export type GetIsUserLikedReplyQuery = { __typename?: 'Query', getIsUserLikedReply?: boolean | null };

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetRepliedUserQuery = { __typename?: 'Query', getRepliedUser?: { __typename?: 'User', name: string, uid: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null } | null };

export type GetRepliesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetRepliesQuery = { __typename?: 'Query', getRepliesOfComment: { __typename?: 'RepliesObject', repliesCount: number, lastPage: number, replies: Array<{ __typename?: 'Reply', rid: string, message: string, likesCount?: number | null, repliesCount?: number | null, commentedUserUid: string, movieMid: string, parentCommentCid: string, parentReplyRid?: string | null, platformId: number, createdAt: string }> } };

export type GetReplyLikesQueryVariables = Exact<{
  rid: Scalars['String'];
}>;


export type GetReplyLikesQuery = { __typename?: 'Query', getReplyLikes?: { __typename?: 'replyLikesObject', likesCount: number, likes: Array<{ __typename?: 'User', uid: string, name: string, nickname: string, photoUrl: string }> } | null };

export type AddMovieIdToUserWatchListMutationVariables = Exact<{
  uid: Scalars['String'];
  mid: Scalars['String'];
}>;


export type AddMovieIdToUserWatchListMutation = { __typename?: 'Mutation', addMovieIdToTheUserWatchList: boolean };

export type CreateUserMutationVariables = Exact<{
  options: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', uid: string, email: string, nickname: string, name: string, photoUrl: string, joinedAt: string, watchedMovies?: Array<string> | null, updatedAt: string } | null };

export type DeleteUserMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type GetNickNameSuggestionsMutationVariables = Exact<{
  search: Scalars['String'];
}>;


export type GetNickNameSuggestionsMutation = { __typename?: 'Mutation', getTopThreeUserNames?: Array<{ __typename?: 'NicKNameFormat', name: string }> | null };

export type GetUserMutMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserMutMutation = { __typename?: 'Mutation', getUserMut?: { __typename?: 'User', uid: string, name: string, nickname: string, photoUrl: string, watchedMovies?: Array<string> | null } | null };

export type UpdateUserMovieStatusMutationVariables = Exact<{
  options: UserMovieOptions;
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type UpdateUserMovieStatusMutation = { __typename?: 'Mutation', updateUserMovieStats?: { __typename?: 'MovieStats', id: number, like?: boolean | null, favorite?: boolean | null, userUid: string, movieMid: string, updatedAt: string, createdAt: string } | null };

export type UpdateUserNickNameMutationVariables = Exact<{
  uid: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserNickNameMutation = { __typename?: 'Mutation', updateUserNickName: { __typename?: 'NickNameResponse', errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null, user?: { __typename?: 'User', uid: string, name: string, nickname: string, email: string, photoUrl: string, watchedMovies?: Array<string> | null, joinedAt: string, updatedAt: string } | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', uid: string, email: string, nickname: string, name: string, photoUrl: string, watchedMovies?: Array<string> | null, joinedAt: string, updatedAt: string }> };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', uid: string, name: string, photoUrl: string, email: string, nickname: string, watchedMovies?: Array<string> | null, joinedAt: string, updatedAt: string } | null };

export type GetUserCommentsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserCommentsQuery = { __typename?: 'Query', getCommentsOfTheUser?: { __typename?: 'PaginatedUserComments', user: { __typename?: 'User', uid: string, name: string, email: string, photoUrl: string, nickname: string, updatedAt: string, watchedMovies?: Array<string> | null, joinedAt: string }, comments: Array<{ __typename?: 'Comment', cid: string, commentedUserUid: string, message: string, likesCount?: number | null, repliesCount?: number | null, movieMid: string, platformId: number, createdAt: string, updatedAt: string }> } | null };

export type GetUserMovieStatusQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;


export type GetUserMovieStatusQuery = { __typename?: 'Query', getUserMovieStatus?: { __typename?: 'FullUserMovieStats', user: { __typename?: 'User', uid: string, name: string, email: string, photoUrl: string, watchedMovies?: Array<string> | null }, movie: { __typename?: 'Movie', mid: string, name: string, platformId: number }, movieStats?: { __typename?: 'MovieStats', id: number, like?: boolean | null, favorite?: boolean | null, movieMid: string, userUid: string } | null } | null };

export type GetUserStatsByNickNameQueryVariables = Exact<{
  nickname: Scalars['String'];
}>;


export type GetUserStatsByNickNameQuery = { __typename?: 'Query', getUserStatistics?: { __typename?: 'FullUserObject', totalComments?: number | null, totalLikes?: number | null, totalWatched?: number | null, user?: { __typename?: 'User', uid: string, name: string, nickname: string, email: string, joinedAt: string, photoUrl: string, watchedMovies?: Array<string> | null } | null, favTitles?: Array<{ __typename?: 'FavMovieObject', favorite: boolean, movieName: string, movieMid: string, userUid: string }> | null, likedTitles?: Array<{ __typename?: 'LikedMovieObject', movieMid: string, userUid: string, like: boolean, movieName: string }> | null } | null };


export const DeleteCommentDocument = gql`
    mutation deleteComment($cid: String!) {
  deleteComment(cid: $cid) {
    cid
    message
    commentedUserUid
    movieMid
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
    cid
    commentedUserUid
    createdAt
    likesCount
    repliesCount
    message
    movieMid
    platformId
    updatedAt
  }
}
    `;

export function useInsertCommentMutation() {
  return Urql.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument);
};
export const SetCommentLikeDocument = gql`
    mutation setCommentLike($like: Boolean!, $cid: String!, $uid: String!, $mid: String!) {
  getCommentStats(like: $like, cid: $cid, uid: $uid, mid: $mid) {
    id
    like
    movieMid
    commentCid
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
      uid
      name
      nickname
      photoUrl
    }
    likesCount
  }
}
    `;

export function useGetCommentLikesQuery(options: Omit<Urql.UseQueryArgs<GetCommentLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentLikesQuery, GetCommentLikesQueryVariables>({ query: GetCommentLikesDocument, ...options });
};
export const GetCommentedUserDocument = gql`
    query getCommentedUser($cid: String!) {
  getCommentedUser(cid: $cid) {
    uid
    name
    photoUrl
    email
    updatedAt
    watchedMovies
    nickname
    joinedAt
    updatedAt
  }
}
    `;

export function useGetCommentedUserQuery(options: Omit<Urql.UseQueryArgs<GetCommentedUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCommentedUserQuery, GetCommentedUserQueryVariables>({ query: GetCommentedUserDocument, ...options });
};
export const GetIsUserLikedCommentDocument = gql`
    query getIsUserLikedComment($uid: String!, $cid: String!) {
  getIsUserLikedComment(uid: $uid, cid: $cid)
}
    `;

export function useGetIsUserLikedCommentQuery(options: Omit<Urql.UseQueryArgs<GetIsUserLikedCommentQueryVariables>, 'query'>) {
  return Urql.useQuery<GetIsUserLikedCommentQuery, GetIsUserLikedCommentQueryVariables>({ query: GetIsUserLikedCommentDocument, ...options });
};
export const CommentLikesDocument = gql`
    subscription commentLikes($cid: String!) {
  commentLikesUpdate(cid: $cid) {
    likes {
      uid
      name
      nickname
      photoUrl
      watchedMovies
    }
    likesCount
  }
}
    `;

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
export const FetchNewCommentsDocument = gql`
    mutation fetchNewComments($time: String!, $mid: String!) {
  fetchNewComments(time: $time, mid: $mid) {
    cid
    commentedUserUid
    message
    createdAt
  }
}
    `;

export function useFetchNewCommentsMutation() {
  return Urql.useMutation<FetchNewCommentsMutation, FetchNewCommentsMutationVariables>(FetchNewCommentsDocument);
};
export const GetCommentsOfTheMovieDocument = gql`
    mutation getCommentsOfTheMovie($limit: Int!, $mid: String!, $page: Int, $time: String) {
  getCommentsOfTheMovie(limit: $limit, mid: $mid, page: $page, time: $time) {
    movie {
      mid
      name
    }
    lastPage
    totalCommentCount
    pastLoadedCount
    comments {
      cid
      commentedUserUid
      createdAt
      message
    }
  }
}
    `;

export function useGetCommentsOfTheMovieMutation() {
  return Urql.useMutation<GetCommentsOfTheMovieMutation, GetCommentsOfTheMovieMutationVariables>(GetCommentsOfTheMovieDocument);
};
export const InsertMovieDocument = gql`
    mutation insertMovie($options: MovieInput!) {
  insertMovie(options: $options) {
    mid
    name
    platformId
    likes
    createdAt
    updatedAt
  }
}
    `;

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
    query getMovieLikesAndCommentsCount($mid: String!) {
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
    mid
    name
    likes
    platformId
    createdAt
    updatedAt
  }
}
    `;

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
      uid
      name
      nickname
      email
      watchedMovies
    }
    likesCount
  }
}
    `;

export function useGetMovieLikesQuery(options: Omit<Urql.UseQueryArgs<GetMovieLikesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMovieLikesQuery, GetMovieLikesQueryVariables>({ query: GetMovieLikesDocument, ...options });
};
export const MovieStatusSubscribeDocument = gql`
    subscription movieStatusSubscribe {
  movieStatusUpdate {
    userFavoriteCount
    userLikesCount
  }
}
    `;

export function useMovieStatusSubscribeSubscription<TData = MovieStatusSubscribeSubscription>(options: Omit<Urql.UseSubscriptionArgs<MovieStatusSubscribeSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<MovieStatusSubscribeSubscription, TData>) {
  return Urql.useSubscription<MovieStatusSubscribeSubscription, TData, MovieStatusSubscribeSubscriptionVariables>({ query: MovieStatusSubscribeDocument, ...options }, handler);
};
export const DeleteReplyDocument = gql`
    mutation deleteReply($rid: String!) {
  deleteReply(rid: $rid) {
    rid
    message
    commentedUserUid
    movieMid
    createdAt
    deletedAt
  }
}
    `;

export function useDeleteReplyMutation() {
  return Urql.useMutation<DeleteReplyMutation, DeleteReplyMutationVariables>(DeleteReplyDocument);
};
export const InsertReplyDocument = gql`
    mutation insertReply($options: ReplyInput!) {
  insertReply(options: $options) {
    commentedUserUid
    createdAt
    message
    movieMid
    parentCommentCid
    parentReplyRid
    platformId
    rid
  }
}
    `;

export function useInsertReplyMutation() {
  return Urql.useMutation<InsertReplyMutation, InsertReplyMutationVariables>(InsertReplyDocument);
};
export const SetReplyLikeDocument = gql`
    mutation setReplyLike($like: Boolean!, $rid: String!, $uid: String!) {
  getReplyStats(like: $like, rid: $rid, uid: $uid) {
    id
    like
    userUid
  }
}
    `;

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
    name
    uid
    nickname
    photoUrl
    watchedMovies
  }
}
    `;

export function useGetRepliedUserQuery(options: Omit<Urql.UseQueryArgs<GetRepliedUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliedUserQuery, GetRepliedUserQueryVariables>({ query: GetRepliedUserDocument, ...options });
};
export const GetRepliesDocument = gql`
    query getReplies($limit: Int!, $cid: String!, $page: Int) {
  getRepliesOfComment(limit: $limit, cid: $cid, page: $page) {
    replies {
      rid
      message
      likesCount
      repliesCount
      commentedUserUid
      movieMid
      parentCommentCid
      parentReplyRid
      platformId
      createdAt
    }
    repliesCount
    lastPage
  }
}
    `;

export function useGetRepliesQuery(options: Omit<Urql.UseQueryArgs<GetRepliesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRepliesQuery, GetRepliesQueryVariables>({ query: GetRepliesDocument, ...options });
};
export const GetReplyLikesDocument = gql`
    query getReplyLikes($rid: String!) {
  getReplyLikes(rid: $rid) {
    likes {
      uid
      name
      nickname
      photoUrl
    }
    likesCount
  }
}
    `;

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
    uid
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
export const GetUserMutDocument = gql`
    mutation getUserMut($uid: String!) {
  getUserMut(uid: $uid) {
    uid
    name
    nickname
    photoUrl
    watchedMovies
  }
}
    `;

export function useGetUserMutMutation() {
  return Urql.useMutation<GetUserMutMutation, GetUserMutMutationVariables>(GetUserMutDocument);
};
export const UpdateUserMovieStatusDocument = gql`
    mutation updateUserMovieStatus($options: UserMovieOptions!, $mid: String!, $uid: String!) {
  updateUserMovieStats(options: $options, mid: $mid, uid: $uid) {
    id
    like
    favorite
    userUid
    movieMid
    favorite
    updatedAt
    createdAt
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
      uid
      name
      nickname
      email
      photoUrl
      watchedMovies
      joinedAt
      updatedAt
    }
  }
}
    `;

export function useUpdateUserNickNameMutation() {
  return Urql.useMutation<UpdateUserNickNameMutation, UpdateUserNickNameMutationVariables>(UpdateUserNickNameDocument);
};
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    uid
    email
    nickname
    name
    photoUrl
    watchedMovies
    joinedAt
    updatedAt
  }
}
    `;

export function useGetAllUsersQuery(options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({ query: GetAllUsersDocument, ...options });
};
export const GetUserDocument = gql`
    query GetUser($uid: String!) {
  getUser(uid: $uid) {
    uid
    name
    photoUrl
    email
    nickname
    watchedMovies
    joinedAt
    updatedAt
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const GetUserCommentsDocument = gql`
    query getUserComments($uid: String!) {
  getCommentsOfTheUser(uid: $uid) {
    user {
      uid
      name
      email
      photoUrl
      nickname
      updatedAt
      watchedMovies
      joinedAt
    }
    comments {
      cid
      commentedUserUid
      message
      likesCount
      repliesCount
      movieMid
      platformId
      createdAt
      updatedAt
    }
  }
}
    `;

export function useGetUserCommentsQuery(options: Omit<Urql.UseQueryArgs<GetUserCommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserCommentsQuery, GetUserCommentsQueryVariables>({ query: GetUserCommentsDocument, ...options });
};
export const GetUserMovieStatusDocument = gql`
    query getUserMovieStatus($mid: String!, $uid: String!) {
  getUserMovieStatus(mid: $mid, uid: $uid) {
    user {
      uid
      name
      email
      photoUrl
      watchedMovies
    }
    movie {
      mid
      name
      platformId
    }
    movieStats {
      id
      like
      favorite
      movieMid
      userUid
    }
  }
}
    `;

export function useGetUserMovieStatusQuery(options: Omit<Urql.UseQueryArgs<GetUserMovieStatusQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserMovieStatusQuery, GetUserMovieStatusQueryVariables>({ query: GetUserMovieStatusDocument, ...options });
};
export const GetUserStatsByNickNameDocument = gql`
    query getUserStatsByNickName($nickname: String!) {
  getUserStatistics(nickname: $nickname) {
    user {
      uid
      name
      nickname
      email
      joinedAt
      photoUrl
      watchedMovies
    }
    favTitles {
      favorite
      movieName
      movieMid
      userUid
    }
    likedTitles {
      movieMid
      userUid
      like
      movieName
    }
    totalComments
    totalLikes
    totalWatched
  }
}
    `;

export function useGetUserStatsByNickNameQuery(options: Omit<Urql.UseQueryArgs<GetUserStatsByNickNameQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserStatsByNickNameQuery, GetUserStatsByNickNameQueryVariables>({ query: GetUserStatsByNickNameDocument, ...options });
};