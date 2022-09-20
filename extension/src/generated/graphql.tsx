import * as Urql from 'urql';

import gql from 'graphql-tag';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type UserInput = {
  uid: string;
  email: string;
  joinedAt: string;
  name: string;
  nickname: string;
  photoURL: string;
};
export type MovieInput = {
  mid: string;
  name: string;
  likes: string[];
  platformId: number;
};
export type CommentInput = {
  cid: string;
  message: string;
  likes: string[];
  likesCount: number;
  movieId: string;
  commentedUserId: string;
  platformId: number;
};
export type UserMovieOptions = {
  like?: boolean;
  favorite?: boolean;
};
export type InsertCommentMutationVariables = Exact<{
  options: CommentInput;
}>;

export type InsertCommentMutation = {
  __typename?: 'Mutation';
  insertComment?: {
    __typename?: 'Comment';
    cid: string;
    commentedUserUid: string;
    createdAt: any;
    likes: Array<string>;
    message: string;
    movieMid: string;
    platformId: number;
    updatedAt: any;
  } | null;
};

export type GetCommentedUserQueryVariables = Exact<{
  cid: Scalars['String'];
}>;

export type GetCommentedUserQuery = {
  __typename?: 'Query';
  getCommentedUser?: {
    __typename?: 'User';
    uid: string;
    name: string;
    photoUrl: string;
    email: string;
    updatedAt?: string | null;
    watchedMovies?: Array<string> | null;
    nickname: string;
    joinedAt?: string | null;
  } | null;
};

export type MovieCommentsUpdateSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type MovieCommentsUpdateSubscription = {
  __typename?: 'Subscription';
  movieCommentsUpdate: number;
};

export type InsertMovieMutationVariables = Exact<{
  options: MovieInput;
}>;

export type InsertMovieMutation = {
  __typename?: 'Mutation';
  insertMovie?: {
    __typename?: 'Movie';
    mid: string;
    name: string;
    platformId: number;
    likes: Array<string>;
    createdAt: any;
    updatedAt: any;
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

export type GetCommentsOfTheMovieQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor: Scalars['String'];
  pid: Scalars['String'];
  mid: Scalars['String'];
}>;

export type GetCommentsOfTheMovieQuery = {
  __typename?: 'Query';
  getCommentsOfTheMovie?: {
    __typename?: 'PaginatedMovieComments';
    hasMoreComments: boolean;
    totalCommentCount: number;
    movie: {
      __typename?: 'Movie';
      mid: string;
      name: string;
      platformId: number;
      likes: Array<string>;
      createdAt: any;
      updatedAt: any;
    };
    comments: Array<{
      __typename?: 'Comment';
      cid: string;
      commentedUserUid: string;
      movieMid: string;
      platformId: number;
      message: string;
      createdAt: any;
      updatedAt: any;
      likes: Array<string>;
    }>;
  } | null;
};

export type GetMovieQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieQuery = {
  __typename?: 'Query';
  getMovie: {
    __typename?: 'Movie';
    mid: string;
    name: string;
    likes: Array<string>;
    platformId: number;
    createdAt: any;
    updatedAt: any;
  };
};

export type GetMovieLikesQueryVariables = Exact<{
  mid: Scalars['String'];
}>;

export type GetMovieLikesQuery = {
  __typename?: 'Query';
  getMovieLikes?: {
    __typename?: 'LikesObject';
    likesCount: number;
    likes?: Array<{
      __typename?: 'User';
      uid: string;
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
    __typename?: 'LikesObject';
    likesCount: number;
    likes?: Array<{
      __typename?: 'User';
      uid: string;
      name: string;
      nickname: string;
      email: string;
      photoUrl: string;
    }> | null;
  };
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
    uid: string;
    email: string;
    nickname: string;
    name: string;
    photoUrl: string;
    joinedAt?: string | null;
    watchedMovies?: Array<string> | null;
    updatedAt?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  uid: Scalars['String'];
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser: boolean;
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
    userUid: string;
    movieMid: string;
    updatedAt: any;
    createdAt: any;
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
      uid: string;
      name: string;
      nickname: string;
      email: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
      joinedAt?: string | null;
      updatedAt?: string | null;
    } | null;
  };
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  users: Array<{
    __typename?: 'User';
    uid: string;
    email: string;
    nickname: string;
    name: string;
    photoUrl: string;
    watchedMovies?: Array<string> | null;
    joinedAt?: string | null;
    updatedAt?: string | null;
  }>;
};

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?: {
    __typename?: 'User';
    uid: string;
    name: string;
    photoUrl: string;
    email: string;
    nickname: string;
    watchedMovies?: Array<string> | null;
    joinedAt?: string | null;
    updatedAt?: string | null;
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
      uid: string;
      name: string;
      email: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
      nickname: string;
      updatedAt?: string | null;
      joinedAt?: string | null;
    };
    comments: Array<{
      __typename?: 'Comment';
      cid: string;
      commentedUserUid: string;
      message: string;
      likes: Array<string>;
      movieMid: string;
      platformId: number;
      createdAt: any;
      updatedAt: any;
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
      uid: string;
      name: string;
      email: string;
      photoUrl: string;
      watchedMovies?: Array<string> | null;
    };
    movie: {
      __typename?: 'Movie';
      mid: string;
      name: string;
      platformId: number;
    };
    movieStats?: {
      __typename?: 'MovieStats';
      id: number;
      like?: boolean | null;
      favorite?: boolean | null;
      movieMid: string;
      userUid: string;
    } | null;
  } | null;
};

export const InsertCommentDocument = gql`
  mutation insertComment($options: CommentInput!) {
    insertComment(options: $options) {
      cid
      commentedUserUid
      createdAt
      likes
      message
      movieMid
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

export function useGetCommentedUserQuery(
  options: Omit<Urql.UseQueryArgs<GetCommentedUserQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetCommentedUserQuery, GetCommentedUserQueryVariables>({
    query: GetCommentedUserDocument,
    ...options,
  });
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
export const GetCommentsOfTheMovieDocument = gql`
  query getCommentsOfTheMovie(
    $limit: Int!
    $cursor: String!
    $pid: String!
    $mid: String!
  ) {
    getCommentsOfTheMovie(
      limit: $limit
      cursor: $cursor
      pid: $pid
      mid: $mid
    ) {
      movie {
        mid
        name
        platformId
        likes
        createdAt
        updatedAt
      }
      hasMoreComments
      totalCommentCount
      comments {
        cid
        commentedUserUid
        movieMid
        platformId
        message
        createdAt
        updatedAt
        likes
      }
    }
  }
`;

export function useGetCommentsOfTheMovieQuery(
  options: Omit<Urql.UseQueryArgs<GetCommentsOfTheMovieQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetCommentsOfTheMovieQuery,
    GetCommentsOfTheMovieQueryVariables
  >({ query: GetCommentsOfTheMovieDocument, ...options });
}
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

export function useGetMovieQuery(
  options: Omit<Urql.UseQueryArgs<GetMovieQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetMovieQuery, GetMovieQueryVariables>({
    query: GetMovieDocument,
    ...options,
  });
}
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
      likes {
        uid
        name
        nickname
        email
        photoUrl
      }
      likesCount
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
      userUid
      movieMid
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
  return Urql.useMutation<
    UpdateUserNickNameMutation,
    UpdateUserNickNameMutationVariables
  >(UpdateUserNickNameDocument);
}
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
        uid
        name
        email
        photoUrl
        watchedMovies
        nickname
        updatedAt
        joinedAt
      }
      comments {
        cid
        commentedUserUid
        message
        likes
        movieMid
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

export function useGetUserMovieStatusQuery(
  options: Omit<Urql.UseQueryArgs<GetUserMovieStatusQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetUserMovieStatusQuery,
    GetUserMovieStatusQueryVariables
  >({ query: GetUserMovieStatusDocument, ...options });
}
