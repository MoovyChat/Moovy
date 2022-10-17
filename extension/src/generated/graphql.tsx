import * as Urql from 'urql';

import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  createdAt: Scalars['String'];
  deletedAt: Scalars['String'];
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
  name: Scalars['String'];
  platformId: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type MovieInput = {
  id: Scalars['String'];
  likes: Array<Scalars['String']>;
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
  deleteReply?: Maybe<Reply>;
  deleteUser: Scalars['Boolean'];
  fetchNewComments: Array<Comment>;
  getCommentsOfTheMovie?: Maybe<PaginatedMovieComments>;
  getTopThreeUserNames?: Maybe<Array<NicKNameFormat>>;
  getUserByNickName?: Maybe<User>;
  getUserFollowStats?: Maybe<UserFollowStats>;
  getUserMut?: Maybe<User>;
  insertComment?: Maybe<Comment>;
  insertMovie?: Maybe<Movie>;
  insertReply?: Maybe<Reply>;
  setCommentLike?: Maybe<CommentsStatsObject>;
  setReplyLike?: Maybe<ReplyStatsObject>;
  toggleFollow?: Maybe<Follow>;
  updateMovieTitle?: Maybe<Scalars['Boolean']>;
  updateUserMovieStats?: Maybe<MovieStats>;
  updateUserNickName: NickNameResponse;
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

export type MutationInsertReplyArgs = {
  options: ReplyInput;
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
  getFollowers?: Maybe<FollowingUsers>;
  getIsUserLikedComment?: Maybe<IsUserLikedObject>;
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

export type QueryGetUserMovieStatusArgs = {
  mid: Scalars['String'];
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
  commentId: Scalars['String'];
  likesCount: Scalars['Int'];
  message: Scalars['String'];
  movieId: Scalars['String'];
  parentReplyId: Scalars['String'];
  platformId: Scalars['Int'];
  repliedUserId: Scalars['String'];
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

export type ReplyLikesObject = {
  __typename?: 'replyLikesObject';
  likes: Array<User>;
  likesCount: Scalars['Int'];
};

export type DeleteCommentMutationVariables = Exact<{
  cid: Scalars['String'];
}>;

export type DeleteCommentMutation = {
  __typename?: 'Mutation';
  deleteComment?: {
    __typename?: 'Comment';
    id: string;
    message: string;
    commentedUserId: string;
    movieId: string;
    createdAt: string;
    deletedAt: string;
  } | null;
};

export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;

export type InsertCommentMutation = {
  __typename?: 'Mutation';
  insertComment?: {
    __typename?: 'Comment';
    id: string;
    commentedUserId: string;
    createdAt: string;
    likesCount?: number | null;
    repliesCount?: number | null;
    message: string;
    movieId: string;
    platformId: number;
    updatedAt: string;
  } | null;
};

export type SetCommentLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  mid: Scalars['String'];
  cid: Scalars['String'];
  uid: Scalars['String'];
}>;

export type SetCommentLikeMutation = {
  __typename?: 'Mutation';
  setCommentLike?: {
    __typename?: 'CommentsStatsObject';
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      followerCount?: number | null;
      followingCount?: number | null;
      photoUrl: string;
    };
    likeStatus: {
      __typename?: 'CommentStats';
      id: number;
      like?: boolean | null;
      movieId: string;
      commentId: string;
      userId: string;
    };
  } | null;
};

export type GetCommentLikesQueryVariables = Exact<{
  cid: Scalars['String'];
}>;

export type GetCommentLikesQuery = {
  __typename?: 'Query';
  getCommentLikes?: {
    __typename?: 'CommentLikesObject';
    likesCount: number;
    likes: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      photoUrl: string;
      followerCount?: number | null;
      followingCount?: number | null;
    }>;
  } | null;
};

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;

export type GetCommentedUserQuery = {
  __typename?: 'Query';
  getCommentedUser?: {
    __typename?: 'User';
    id: string;
    name: string;
    photoUrl: string;
    email: string;
    updatedAt: string;
    watchedMovies?: Array<string> | null;
    nickname: string;
    joinedAt: string;
  } | null;
};

export type CommentLikesSubscriptionVariables = Exact<{
  cid: Scalars['String'];
}>;

export type CommentLikesSubscription = {
  __typename?: 'Subscription';
  commentLikesUpdate: {
    __typename?: 'CommentLikesObject';
    likesCount: number;
    likes: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
    }>;
  };
};

export type MovieCommentsUpdateSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type MovieCommentsUpdateSubscription = {
  __typename?: 'Subscription';
  movieCommentsUpdate: number;
};

export type ToggleFollowMutationVariables = Exact<{
  follow: Scalars['Boolean'];
  followerId: Scalars['String'];
  uid: Scalars['String'];
}>;

export type ToggleFollowMutation = {
  __typename?: 'Mutation';
  toggleFollow?: {
    __typename?: 'Follow';
    createdAt: string;
    updatedAt: string;
    userId: string;
    followerId: string;
    follows?: boolean | null;
  } | null;
};

export type AmIFollowingThisUserMutationVariables = Exact<{
  fid: Scalars['String'];
  uid: Scalars['String'];
}>;

export type AmIFollowingThisUserMutation = {
  __typename?: 'Mutation';
  amIFollowingThisUser?: boolean | null;
};

export type GetFollowersQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetFollowersQuery = {
  __typename?: 'Query';
  getFollowers?: {
    __typename?: 'FollowingUsers';
    user?: {
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      photoUrl: string;
    } | null;
    followers?: Array<{
      __typename?: 'User';
      id: string;
      nickname: string;
      photoUrl: string;
      joinedAt: string;
      updatedAt: string;
    }> | null;
  } | null;
};

export type GetUserFollowStatsMutationVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserFollowStatsMutation = {
  __typename?: 'Mutation';
  getUserFollowStats?: {
    __typename?: 'UserFollowStats';
    followerCount?: number | null;
    followingCount?: number | null;
  } | null;
};

export type FetchNewCommentsMutationVariables = Exact<{
  time: Scalars['String'];
  mid: Scalars['String'];
}>;

export type FetchNewCommentsMutation = {
  __typename?: 'Mutation';
  fetchNewComments: Array<{
    __typename?: 'Comment';
    id: string;
    commentedUserId: string;
    message: string;
    createdAt: string;
  }>;
};

export type GetCommentsOfTheMovieMutationVariables = Exact<{
  limit: Scalars['Int'];
  mid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['String']>;
}>;

export type GetCommentsOfTheMovieMutation = {
  __typename?: 'Mutation';
  getCommentsOfTheMovie?: {
    __typename?: 'PaginatedMovieComments';
    lastPage: number;
    totalCommentCount: number;
    pastLoadedCount: number;
    movie: { __typename?: 'Movie'; id: string; name: string };
    comments: Array<{
      __typename?: 'Comment';
      id: string;
      commentedUserId: string;
      createdAt: string;
      message: string;
    }>;
  } | null;
};

export type InsertMovieMutationVariables = Exact<{
  options: MovieInput;
}>;

export type InsertMovieMutation = {
  __typename?: 'Mutation';
  insertMovie?: {
    __typename?: 'Movie';
    id: string;
    name: string;
    platformId: number;
    likes: Array<string>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMovieTitleMutationVariables = Exact<{
  name: Scalars['String'];
  mid: Scalars['String'];
}>;

export type UpdateMovieTitleMutation = {
  __typename?: 'Mutation';
  updateMovieTitle?: boolean | null;
};

export type GetMovieLikesAndCommentsCountQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieLikesAndCommentsCountQuery = {
  __typename?: 'Query';
  getMovieLikesAndCommentsCount?: {
    __typename?: 'LikesAndComment';
    likesCount: number;
    commentsCount: number;
  } | null;
};

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieQuery = {
  __typename?: 'Query';
  getMovie: {
    __typename?: 'Movie';
    id: string;
    name: string;
    likes: Array<string>;
    platformId: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type GetMovieFavCountQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieFavCountQuery = {
  __typename?: 'Query';
  getMovieFavoriteCount?: number | null;
};

export type GetMovieLikesQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieLikesQuery = {
  __typename?: 'Query';
  getMovieLikes?: {
    __typename?: 'LikesObject';
    id: string;
    likesCount: number;
    likes?: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      email: string;
      watchedMovies?: Array<string> | null;
    }> | null;
  } | null;
};

export type MovieStatusSubscribeSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type MovieStatusSubscribeSubscription = {
  __typename?: 'Subscription';
  movieStatusUpdate: {
    __typename?: 'LikesAndFavObj';
    userFavoriteCount?: number | null;
    userLikesCount?: number | null;
  };
};

export type DeleteReplyMutationVariables = Exact<{
  rid: Scalars['String'];
}>;

export type DeleteReplyMutation = {
  __typename?: 'Mutation';
  deleteReply?: {
    __typename?: 'Reply';
    id: string;
    message: string;
    commentedUserId: string;
    movieId: string;
    createdAt: string;
    deletedAt: string;
  } | null;
};

export type InsertReplyMutationVariables = Exact<{
  options: ReplyInput;
}>;

export type InsertReplyMutation = {
  __typename?: 'Mutation';
  insertReply?: {
    __typename?: 'Reply';
    commentedUserId: string;
    createdAt: string;
    message: string;
    movieId: string;
    parentCommentId: string;
    parentReplyId?: string | null;
    platformId: number;
    id: string;
  } | null;
};

export type SetReplyLikeMutationVariables = Exact<{
  like: Scalars['Boolean'];
  rid: Scalars['String'];
  uid: Scalars['String'];
  mid: Scalars['String'];
}>;

export type SetReplyLikeMutation = {
  __typename?: 'Mutation';
  setReplyLike?: {
    __typename?: 'ReplyStatsObject';
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      followerCount?: number | null;
      followingCount?: number | null;
      photoUrl: string;
    };
    likeStatus: {
      __typename?: 'ReplyStats';
      id: number;
      like?: boolean | null;
      movieId: string;
      replyId: string;
      userId: string;
    };
  } | null;
};

export type GetIsUserLikedReplyQueryVariables = Exact<{
  uid: Scalars['String'];
  rid: Scalars['String'];
}>;

export type GetIsUserLikedReplyQuery = {
  __typename?: 'Query';
  getIsUserLikedReply?: boolean | null;
};

export type GetRepliedUserQueryVariables = Exact<{
  rid: Scalars['String'];
}>;

export type GetRepliedUserQuery = {
  __typename?: 'Query';
  getRepliedUser?: {
    __typename?: 'User';
    id: string;
    name: string;
    nickname: string;
    photoUrl: string;
    watchedMovies?: Array<string> | null;
  } | null;
};

export type GetRepliesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cid: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;

export type GetRepliesQuery = {
  __typename?: 'Query';
  getRepliesOfComment: {
    __typename?: 'RepliesObject';
    repliesCount: number;
    lastPage: number;
    replies: Array<{
      __typename?: 'Reply';
      id: string;
      message: string;
      likesCount?: number | null;
      repliesCount?: number | null;
      commentedUserId: string;
      movieId: string;
      parentCommentId: string;
      parentReplyId?: string | null;
      platformId: number;
      createdAt: string;
    }>;
  };
};

export type GetReplyLikesQueryVariables = Exact<{
  rid: Scalars['String'];
}>;

export type GetReplyLikesQuery = {
  __typename?: 'Query';
  getReplyLikes?: {
    __typename?: 'replyLikesObject';
    likesCount: number;
    likes: Array<{
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      photoUrl: string;
    }>;
  } | null;
};

export type AddMovieIdToUserWatchListMutationVariables = Exact<{
  uid: Scalars['String'];
  mid: Scalars['String'];
}>;

export type AddMovieIdToUserWatchListMutation = {
  __typename?: 'Mutation';
  addMovieIdToTheUserWatchList: boolean;
};

export type CreateUserMutationVariables = Exact<{
  options: UserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?: {
    __typename?: 'User';
    id: string;
    email: string;
    nickname: string;
    name: string;
    photoUrl: string;
    joinedAt: string;
    watchedMovies?: Array<string> | null;
    updatedAt: string;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  uid: Scalars['String'];
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser: boolean;
};

export type GetNickNameSuggestionsMutationVariables = Exact<{
  search: Scalars['String'];
}>;

export type GetNickNameSuggestionsMutation = {
  __typename?: 'Mutation';
  getTopThreeUserNames?: Array<{
    __typename?: 'NicKNameFormat';
    name: string;
  }> | null;
};

export type GetUserByNickNameMutationVariables = Exact<{
  nickname: Scalars['String'];
}>;

export type GetUserByNickNameMutation = {
  __typename?: 'Mutation';
  getUserByNickName?: {
    __typename?: 'User';
    id: string;
    name: string;
    nickname: string;
    photoUrl: string;
    email: string;
    joinedAt: string;
    updatedAt: string;
    watchedMovies?: Array<string> | null;
  } | null;
};

export type GetUserMutMutationVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserMutMutation = {
  __typename?: 'Mutation';
  getUserMut?: {
    __typename?: 'User';
    id: string;
    name: string;
    nickname: string;
    photoUrl: string;
    watchedMovies?: Array<string> | null;
  } | null;
};

export type UpdateUserMovieStatusMutationVariables = Exact<{
  options: UserMovieOptions;
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;

export type UpdateUserMovieStatusMutation = {
  __typename?: 'Mutation';
  updateUserMovieStats?: {
    __typename?: 'MovieStats';
    id: number;
    like?: boolean | null;
    favorite?: boolean | null;
    userId: string;
    movieId: string;
    updatedAt: string;
    createdAt: string;
  } | null;
};

export type UpdateUserNickNameMutationVariables = Exact<{
  uid: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserNickNameMutation = {
  __typename?: 'Mutation';
  updateUserNickName: {
    __typename?: 'NickNameResponse';
    errors?: Array<{
      __typename?: 'ErrorField';
      field: string;
      message: string;
    }> | null;
    user?: {
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      email: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
      joinedAt: string;
      updatedAt: string;
    } | null;
  };
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'User';
    id: string;
    email: string;
    nickname: string;
    name: string;
    photoUrl: string;
    watchedMovies?: Array<string> | null;
    joinedAt: string;
    updatedAt: string;
  }>;
};

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?: {
    __typename?: 'User';
    id: string;
    name: string;
    photoUrl: string;
    email: string;
    nickname: string;
    watchedMovies?: Array<string> | null;
    joinedAt: string;
    updatedAt: string;
  } | null;
};

export type GetUserCommentsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserCommentsQuery = {
  __typename?: 'Query';
  getCommentsOfTheUser?: {
    __typename?: 'PaginatedUserComments';
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      photoUrl: string;
      nickname: string;
      updatedAt: string;
      watchedMovies?: Array<string> | null;
      joinedAt: string;
    };
    comments: Array<{
      __typename?: 'Comment';
      id: string;
      commentedUserId: string;
      message: string;
      likesCount?: number | null;
      repliesCount?: number | null;
      movieId: string;
      platformId: number;
      createdAt: string;
      updatedAt: string;
    }>;
  } | null;
};

export type GetUserMovieStatusQueryVariables = Exact<{
  mid: Scalars['String'];
  uid: Scalars['String'];
}>;

export type GetUserMovieStatusQuery = {
  __typename?: 'Query';
  getUserMovieStatus?: {
    __typename?: 'FullUserMovieStats';
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
    };
    movie: {
      __typename?: 'Movie';
      id: string;
      name: string;
      platformId: number;
    };
    movieStats?: {
      __typename?: 'MovieStats';
      id: number;
      like?: boolean | null;
      favorite?: boolean | null;
      movieId: string;
      userId: string;
    } | null;
  } | null;
};

export type GetUserStatsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserStatsQuery = {
  __typename?: 'Query';
  getUserStatistics?: {
    __typename?: 'FullUserObject';
    totalComments?: number | null;
    totalLikes?: number | null;
    totalWatched?: number | null;
    user?: {
      __typename?: 'User';
      id: string;
      name: string;
      nickname: string;
      email: string;
      joinedAt: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
    } | null;
    favTitles?: Array<{
      __typename?: 'FavMovieObject';
      favorite: boolean;
      movieName: string;
      movieId: string;
      userId: string;
    }> | null;
    likedTitles?: Array<{
      __typename?: 'LikedMovieObject';
      movieId: string;
      userId: string;
      like: boolean;
      movieName: string;
    }> | null;
  } | null;
};

export const DeleteCommentDocument = gql`
  mutation deleteComment($cid: String!) {
    deleteComment(cid: $cid) {
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
  return Urql.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument);
}
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
  return Urql.useMutation<
    InsertCommentMutation,
    InsertCommentMutationVariables
  >(InsertCommentDocument);
}
export const SetCommentLikeDocument = gql`
  mutation setCommentLike(
    $like: Boolean!
    $mid: String!
    $cid: String!
    $uid: String!
  ) {
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
  return Urql.useMutation<
    SetCommentLikeMutation,
    SetCommentLikeMutationVariables
  >(SetCommentLikeDocument);
}
export const GetCommentLikesDocument = gql`
  query getCommentLikes($cid: String!) {
    getCommentLikes(cid: $cid) {
      likes {
        id
        name
        nickname
        photoUrl
        followerCount
        followingCount
      }
      likesCount
    }
  }
`;

export function useGetCommentLikesQuery(
  options: Omit<Urql.UseQueryArgs<GetCommentLikesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetCommentLikesQuery, GetCommentLikesQueryVariables>({
    query: GetCommentLikesDocument,
    ...options,
  });
}
export const GetCommentedUserDocument = gql`
  query getCommentedUser($cid: String!) {
    getCommentedUser(cid: $cid) {
      id
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

export function useGetCommentedUserQuery(
  options: Omit<Urql.UseQueryArgs<GetCommentedUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetCommentedUserQuery, GetCommentedUserQueryVariables>({
    query: GetCommentedUserDocument,
    ...options,
  });
}
export const CommentLikesDocument = gql`
  subscription commentLikes($cid: String!) {
    commentLikesUpdate(cid: $cid) {
      likes {
        id
        name
        nickname
        photoUrl
        watchedMovies
      }
      likesCount
    }
  }
`;

export function useCommentLikesSubscription<TData = CommentLikesSubscription>(
  options: Omit<
    Urql.UseSubscriptionArgs<CommentLikesSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<CommentLikesSubscription, TData>
) {
  return Urql.useSubscription<
    CommentLikesSubscription,
    TData,
    CommentLikesSubscriptionVariables
  >({ query: CommentLikesDocument, ...options }, handler);
}
export const MovieCommentsUpdateDocument = gql`
  subscription movieCommentsUpdate {
    movieCommentsUpdate
  }
`;

export function useMovieCommentsUpdateSubscription<
  TData = MovieCommentsUpdateSubscription
>(
  options: Omit<
    Urql.UseSubscriptionArgs<MovieCommentsUpdateSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<MovieCommentsUpdateSubscription, TData>
) {
  return Urql.useSubscription<
    MovieCommentsUpdateSubscription,
    TData,
    MovieCommentsUpdateSubscriptionVariables
  >({ query: MovieCommentsUpdateDocument, ...options }, handler);
}
export const ToggleFollowDocument = gql`
  mutation toggleFollow(
    $follow: Boolean!
    $followerId: String!
    $uid: String!
  ) {
    toggleFollow(follow: $follow, followerId: $followerId, uid: $uid) {
      createdAt
      updatedAt
      userId
      followerId
      follows
    }
  }
`;

export function useToggleFollowMutation() {
  return Urql.useMutation<ToggleFollowMutation, ToggleFollowMutationVariables>(
    ToggleFollowDocument
  );
}
export const AmIFollowingThisUserDocument = gql`
  mutation amIFollowingThisUser($fid: String!, $uid: String!) {
    amIFollowingThisUser(fid: $fid, uid: $uid)
  }
`;

export function useAmIFollowingThisUserMutation() {
  return Urql.useMutation<
    AmIFollowingThisUserMutation,
    AmIFollowingThisUserMutationVariables
  >(AmIFollowingThisUserDocument);
}
export const GetFollowersDocument = gql`
  query getFollowers($uid: String!) {
    getFollowers(uid: $uid) {
      user {
        id
        name
        nickname
        photoUrl
      }
      followers {
        id
        nickname
        photoUrl
        joinedAt
        updatedAt
      }
    }
  }
`;

export function useGetFollowersQuery(
  options: Omit<Urql.UseQueryArgs<GetFollowersQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetFollowersQuery, GetFollowersQueryVariables>({
    query: GetFollowersDocument,
    ...options,
  });
}
export const GetUserFollowStatsDocument = gql`
  mutation getUserFollowStats($uid: String!) {
    getUserFollowStats(uid: $uid) {
      followerCount
      followingCount
    }
  }
`;

export function useGetUserFollowStatsMutation() {
  return Urql.useMutation<
    GetUserFollowStatsMutation,
    GetUserFollowStatsMutationVariables
  >(GetUserFollowStatsDocument);
}
export const FetchNewCommentsDocument = gql`
  mutation fetchNewComments($time: String!, $mid: String!) {
    fetchNewComments(time: $time, mid: $mid) {
      id
      commentedUserId
      message
      createdAt
    }
  }
`;

export function useFetchNewCommentsMutation() {
  return Urql.useMutation<
    FetchNewCommentsMutation,
    FetchNewCommentsMutationVariables
  >(FetchNewCommentsDocument);
}
export const GetCommentsOfTheMovieDocument = gql`
  mutation getCommentsOfTheMovie(
    $limit: Int!
    $mid: String!
    $page: Int
    $time: String
  ) {
    getCommentsOfTheMovie(limit: $limit, mid: $mid, page: $page, time: $time) {
      movie {
        id
        name
      }
      lastPage
      totalCommentCount
      pastLoadedCount
      comments {
        id
        commentedUserId
        createdAt
        message
      }
    }
  }
`;

export function useGetCommentsOfTheMovieMutation() {
  return Urql.useMutation<
    GetCommentsOfTheMovieMutation,
    GetCommentsOfTheMovieMutationVariables
  >(GetCommentsOfTheMovieDocument);
}
export const InsertMovieDocument = gql`
  mutation insertMovie($options: MovieInput!) {
    insertMovie(options: $options) {
      id
      name
      platformId
      likes
      createdAt
      updatedAt
    }
  }
`;

export function useInsertMovieMutation() {
  return Urql.useMutation<InsertMovieMutation, InsertMovieMutationVariables>(
    InsertMovieDocument
  );
}
export const UpdateMovieTitleDocument = gql`
  mutation updateMovieTitle($name: String!, $mid: String!) {
    updateMovieTitle(name: $name, mid: $mid)
  }
`;

export function useUpdateMovieTitleMutation() {
  return Urql.useMutation<
    UpdateMovieTitleMutation,
    UpdateMovieTitleMutationVariables
  >(UpdateMovieTitleDocument);
}
export const GetMovieLikesAndCommentsCountDocument = gql`
  query getMovieLikesAndCommentsCount($mid: String!) {
    getMovieLikesAndCommentsCount(mid: $mid) {
      likesCount
      commentsCount
    }
  }
`;

export function useGetMovieLikesAndCommentsCountQuery(
  options: Omit<
    Urql.UseQueryArgs<GetMovieLikesAndCommentsCountQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetMovieLikesAndCommentsCountQuery,
    GetMovieLikesAndCommentsCountQueryVariables
  >({ query: GetMovieLikesAndCommentsCountDocument, ...options });
}
export const GetMovieDocument = gql`
  query getMovie($mid: String!) {
    getMovie(mid: $mid) {
      id
      name
      likes
      platformId
      createdAt
      updatedAt
    }
  }
`;

export function useGetMovieQuery(
  options: Omit<Urql.UseQueryArgs<GetMovieQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMovieQuery, GetMovieQueryVariables>({
    query: GetMovieDocument,
    ...options,
  });
}
export const GetMovieFavCountDocument = gql`
  query getMovieFavCount($mid: String!) {
    getMovieFavoriteCount(mid: $mid)
  }
`;

export function useGetMovieFavCountQuery(
  options: Omit<Urql.UseQueryArgs<GetMovieFavCountQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMovieFavCountQuery, GetMovieFavCountQueryVariables>({
    query: GetMovieFavCountDocument,
    ...options,
  });
}
export const GetMovieLikesDocument = gql`
  query getMovieLikes($mid: String!) {
    getMovieLikes(mid: $mid) {
      id
      likes {
        id
        name
        nickname
        email
        watchedMovies
      }
      likesCount
    }
  }
`;

export function useGetMovieLikesQuery(
  options: Omit<Urql.UseQueryArgs<GetMovieLikesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMovieLikesQuery, GetMovieLikesQueryVariables>({
    query: GetMovieLikesDocument,
    ...options,
  });
}
export const MovieStatusSubscribeDocument = gql`
  subscription movieStatusSubscribe {
    movieStatusUpdate {
      userFavoriteCount
      userLikesCount
    }
  }
`;

export function useMovieStatusSubscribeSubscription<
  TData = MovieStatusSubscribeSubscription
>(
  options: Omit<
    Urql.UseSubscriptionArgs<MovieStatusSubscribeSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<MovieStatusSubscribeSubscription, TData>
) {
  return Urql.useSubscription<
    MovieStatusSubscribeSubscription,
    TData,
    MovieStatusSubscribeSubscriptionVariables
  >({ query: MovieStatusSubscribeDocument, ...options }, handler);
}
export const DeleteReplyDocument = gql`
  mutation deleteReply($rid: String!) {
    deleteReply(rid: $rid) {
      id
      message
      commentedUserId
      movieId
      createdAt
      deletedAt
    }
  }
`;

export function useDeleteReplyMutation() {
  return Urql.useMutation<DeleteReplyMutation, DeleteReplyMutationVariables>(
    DeleteReplyDocument
  );
}
export const InsertReplyDocument = gql`
  mutation insertReply($options: ReplyInput!) {
    insertReply(options: $options) {
      commentedUserId
      createdAt
      message
      movieId
      parentCommentId
      parentReplyId
      platformId
      id
    }
  }
`;

export function useInsertReplyMutation() {
  return Urql.useMutation<InsertReplyMutation, InsertReplyMutationVariables>(
    InsertReplyDocument
  );
}
export const SetReplyLikeDocument = gql`
  mutation setReplyLike(
    $like: Boolean!
    $rid: String!
    $uid: String!
    $mid: String!
  ) {
    setReplyLike(like: $like, rid: $rid, uid: $uid, mid: $mid) {
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
        replyId
        userId
      }
    }
  }
`;

export function useSetReplyLikeMutation() {
  return Urql.useMutation<SetReplyLikeMutation, SetReplyLikeMutationVariables>(
    SetReplyLikeDocument
  );
}
export const GetIsUserLikedReplyDocument = gql`
  query getIsUserLikedReply($uid: String!, $rid: String!) {
    getIsUserLikedReply(uid: $uid, rid: $rid)
  }
`;

export function useGetIsUserLikedReplyQuery(
  options: Omit<Urql.UseQueryArgs<GetIsUserLikedReplyQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetIsUserLikedReplyQuery,
    GetIsUserLikedReplyQueryVariables
  >({ query: GetIsUserLikedReplyDocument, ...options });
}
export const GetRepliedUserDocument = gql`
  query getRepliedUser($rid: String!) {
    getRepliedUser(rid: $rid) {
      id
      name
      nickname
      photoUrl
      watchedMovies
    }
  }
`;

export function useGetRepliedUserQuery(
  options: Omit<Urql.UseQueryArgs<GetRepliedUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetRepliedUserQuery, GetRepliedUserQueryVariables>({
    query: GetRepliedUserDocument,
    ...options,
  });
}
export const GetRepliesDocument = gql`
  query getReplies($limit: Int!, $cid: String!, $page: Int) {
    getRepliesOfComment(limit: $limit, cid: $cid, page: $page) {
      replies {
        id
        message
        likesCount
        repliesCount
        commentedUserId
        movieId
        parentCommentId
        parentReplyId
        platformId
        createdAt
      }
      repliesCount
      lastPage
    }
  }
`;

export function useGetRepliesQuery(
  options: Omit<Urql.UseQueryArgs<GetRepliesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetRepliesQuery, GetRepliesQueryVariables>({
    query: GetRepliesDocument,
    ...options,
  });
}
export const GetReplyLikesDocument = gql`
  query getReplyLikes($rid: String!) {
    getReplyLikes(rid: $rid) {
      likes {
        id
        name
        nickname
        photoUrl
      }
      likesCount
    }
  }
`;

export function useGetReplyLikesQuery(
  options: Omit<Urql.UseQueryArgs<GetReplyLikesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetReplyLikesQuery, GetReplyLikesQueryVariables>({
    query: GetReplyLikesDocument,
    ...options,
  });
}
export const AddMovieIdToUserWatchListDocument = gql`
  mutation addMovieIdToUserWatchList($uid: String!, $mid: String!) {
    addMovieIdToTheUserWatchList(uid: $uid, mid: $mid)
  }
`;

export function useAddMovieIdToUserWatchListMutation() {
  return Urql.useMutation<
    AddMovieIdToUserWatchListMutation,
    AddMovieIdToUserWatchListMutationVariables
  >(AddMovieIdToUserWatchListDocument);
}
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
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument
  );
}
export const DeleteUserDocument = gql`
  mutation DeleteUser($uid: String!) {
    deleteUser(uid: $uid)
  }
`;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument
  );
}
export const GetNickNameSuggestionsDocument = gql`
  mutation getNickNameSuggestions($search: String!) {
    getTopThreeUserNames(search: $search) {
      name
    }
  }
`;

export function useGetNickNameSuggestionsMutation() {
  return Urql.useMutation<
    GetNickNameSuggestionsMutation,
    GetNickNameSuggestionsMutationVariables
  >(GetNickNameSuggestionsDocument);
}
export const GetUserByNickNameDocument = gql`
  mutation getUserByNickName($nickname: String!) {
    getUserByNickName(nickname: $nickname) {
      id
      name
      nickname
      photoUrl
      email
      joinedAt
      updatedAt
      watchedMovies
    }
  }
`;

export function useGetUserByNickNameMutation() {
  return Urql.useMutation<
    GetUserByNickNameMutation,
    GetUserByNickNameMutationVariables
  >(GetUserByNickNameDocument);
}
export const GetUserMutDocument = gql`
  mutation getUserMut($uid: String!) {
    getUserMut(uid: $uid) {
      id
      name
      nickname
      photoUrl
      watchedMovies
    }
  }
`;

export function useGetUserMutMutation() {
  return Urql.useMutation<GetUserMutMutation, GetUserMutMutationVariables>(
    GetUserMutDocument
  );
}
export const UpdateUserMovieStatusDocument = gql`
  mutation updateUserMovieStatus(
    $options: UserMovieOptions!
    $mid: String!
    $uid: String!
  ) {
    updateUserMovieStats(options: $options, mid: $mid, uid: $uid) {
      id
      like
      favorite
      userId
      movieId
      favorite
      updatedAt
      createdAt
    }
  }
`;

export function useUpdateUserMovieStatusMutation() {
  return Urql.useMutation<
    UpdateUserMovieStatusMutation,
    UpdateUserMovieStatusMutationVariables
  >(UpdateUserMovieStatusDocument);
}
export const UpdateUserNickNameDocument = gql`
  mutation UpdateUserNickName($uid: String!, $nickname: String) {
    updateUserNickName(uid: $uid, nickname: $nickname) {
      errors {
        field
        message
      }
      user {
        id
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
  return Urql.useMutation<
    UpdateUserNickNameMutation,
    UpdateUserNickNameMutationVariables
  >(UpdateUserNickNameDocument);
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users {
      id
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

export function useGetAllUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
    ...options,
  });
}
export const GetUserDocument = gql`
  query GetUser($uid: String!) {
    getUser(uid: $uid) {
      id
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

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({
    query: GetUserDocument,
    ...options,
  });
}
export const GetUserCommentsDocument = gql`
  query getUserComments($uid: String!) {
    getCommentsOfTheUser(uid: $uid) {
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
    }
  }
`;

export function useGetUserCommentsQuery(
  options: Omit<Urql.UseQueryArgs<GetUserCommentsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUserCommentsQuery, GetUserCommentsQueryVariables>({
    query: GetUserCommentsDocument,
    ...options,
  });
}
export const GetUserMovieStatusDocument = gql`
  query getUserMovieStatus($mid: String!, $uid: String!) {
    getUserMovieStatus(mid: $mid, uid: $uid) {
      user {
        id
        name
        email
        photoUrl
        watchedMovies
      }
      movie {
        id
        name
        platformId
      }
      movieStats {
        id
        like
        favorite
        movieId
        userId
      }
    }
  }
`;

export function useGetUserMovieStatusQuery(
  options: Omit<Urql.UseQueryArgs<GetUserMovieStatusQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetUserMovieStatusQuery,
    GetUserMovieStatusQueryVariables
  >({ query: GetUserMovieStatusDocument, ...options });
}
export const GetUserStatsDocument = gql`
  query getUserStats($uid: String!) {
    getUserStatistics(uid: $uid) {
      user {
        id
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
`;

export function useGetUserStatsQuery(
  options: Omit<Urql.UseQueryArgs<GetUserStatsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUserStatsQuery, GetUserStatsQueryVariables>({
    query: GetUserStatsDocument,
    ...options,
  });
}
