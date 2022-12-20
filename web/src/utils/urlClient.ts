import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import {
  commentLikeChanges,
  insertCommentChanges,
  insertReplyChanges,
  logOutChanges,
  loginChanges,
  profileUpdateChanges,
  replyLikeChanges,
  toggleFollowChanges,
} from './cacheExchanges';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';

import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { pagePagination } from './resolvers';
import { retryExchange } from '@urql/exchange-retry';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});
const cache: Partial<CacheExchangeOpts> = {
  keys: {
    CommentLikesObject: () => null,
    replyLikesObject: () => null,
    Visited: () => null,
    Profile: () => null,
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
    },
  },
  resolvers: {
    Query: {
      getCommentsOfTheMovie: pagePagination(),
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
