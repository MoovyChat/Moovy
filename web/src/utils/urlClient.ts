import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import {
  commentLikeChanges,
  deleteCommentChanges,
  deleteReplyChanges,
  insertCommentChanges,
  insertReplyChanges,
  logOutChanges,
  loginChanges,
  profileUpdateChanges,
  replyLikeChanges,
  toggleFollowChanges,
  updateMovieLikesChanges,
} from './cacheExchanges';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';
import {
  movieCommentsResolver,
  paginatedMoviesResolver,
  repliesResolver,
  userCommentsResolver,
  userRepliesResolver,
} from './resolvers';

import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { retryExchange } from '@urql/exchange-retry';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});
const cache: Partial<CacheExchangeOpts> = {
  keys: {
    PaginatedMovieComments: () => null,
    PaginatedUserComments: () => null,
    RepliesObject: () => null,
    PaginatedUserReplies: () => null,
    CommentLikesObject: () => null,
    replyLikesObject: () => null,
    SearchObject: () => null,
    Visited: () => null,
    Profile: () => null,
    MovieStats: () => null,
    CommentOrReply: () => null,
  },
  updates: {
    Mutation: {
      login: loginChanges,
      logout: logOutChanges,
      setCommentLike: commentLikeChanges,
      setReplyLike: replyLikeChanges,
      upsertProfile: profileUpdateChanges,
      insertComment: insertCommentChanges,
      insertReply: insertReplyChanges,
      toggleFollow: toggleFollowChanges,
      deleteComment: deleteCommentChanges,
      deleteReply: deleteReplyChanges,
      updateUserMovieStats: updateMovieLikesChanges,
    },
  },
  resolvers: {
    Query: {
      getCommentsOfTheMovie: movieCommentsResolver(),
      getCommentsOfTheUser: userCommentsResolver(),
      getRepliesOfTheUser: userRepliesResolver(),
      getRepliesOfComment: repliesResolver(),
      getRepliesOfReply: repliesResolver(),
      getPaginatedMovies: paginatedMoviesResolver(),
      getPaginatedShows: paginatedMoviesResolver(),
    },
  },
};

export const urqlClient: any = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange(cache),
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
    retryExchange({
      retryIf: (error: any) => {
        return !!(error.graphQLErrors.length > 0 || error.networkError);
      },
    }),
    fetchExchange,
  ],
});
