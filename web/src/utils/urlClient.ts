import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';
import {
  logOutChanges,
  loginChanges,
  setCommentLikeChanges,
} from './cacheExchanges';

import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { retryExchange } from '@urql/exchange-retry';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});
const cache: Partial<CacheExchangeOpts> = {
  keys: {
    LikesObject: (data) => data.id as string,
    CommentLikesObject: (data) => data.id as string,
    RepliesObject: (data) => data.id as string,
    replyLikesObject: (data) => data.id as string,
  },
  updates: {
    Mutation: {
      login: loginChanges,
      logout: logOutChanges,
      setCommentLike: setCommentLikeChanges,
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
