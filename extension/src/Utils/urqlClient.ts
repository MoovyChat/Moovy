import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import { commentLikeChanges, replyLikeChanges } from './betterUpdateQuery';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';
import { deleteCommentChanges, toggleFollowChanges } from './cacheExchanges';

import { NextUrqlClientConfig } from 'next-urql';
import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { retryExchange } from '@urql/exchange-retry';

const CUSTOM_DOMAIN = 'server.moovychat.com';

const wsUrl = `wss://${CUSTOM_DOMAIN}/graphql`;
const serverUrl = `https://${CUSTOM_DOMAIN}/graphql`;

const wsClient = createWSClient({
  url: wsUrl,
});
const cache: Partial<CacheExchangeOpts> = {
  keys: {
    LikesObject: () => null,
    CommentLikesObject: () => null,
    RepliesObject: () => null,
    replyLikesObject: () => null,
    Profile: () => null,
    Visited: () => null,
    MovieStats: () => null,
  },
  updates: {
    Mutation: {
      setCommentLike: commentLikeChanges,
      setReplyLike: replyLikeChanges,
      toggleFollow: toggleFollowChanges,
      deleteComment: deleteCommentChanges,
    },
    Subscription: {
      commentLikesUpdate: commentLikeChanges,
    },
  },
};

export const urqlClient: NextUrqlClientConfig = (ssrExchange: any) => ({
  url: serverUrl,
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
