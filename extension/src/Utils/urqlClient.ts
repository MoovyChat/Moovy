import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import { Comment, Reply } from '../generated/graphql';
import {
  commentLikeChanges,
  insertCommentChanges,
  insertReplyChanges,
  replyLikeChanges,
} from './betterUpdateQuery';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';
import {
  deleteCommentChanges,
  deleteReplyChanges,
  fetchNewCommentsChanges,
  toggleFollowChanges,
} from './cacheExchanges';
import { serverUrl, wsUrl } from '../constants';

import { NextUrqlClientConfig } from 'next-urql';
import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { movieCommentsResolver } from './resolversExchange';
import { relayPagination } from '@urql/exchange-graphcache/extras';
import { retryExchange } from '@urql/exchange-retry';

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
  optimistic: {
    insertComment: (args, cache, info) => {
      const partialComment = args.options as any;
      const newData: Comment = {
        __typename: 'Comment',
        id: `Optimistic-${Math.random()}`,
        flagged: false,
        repliesCount: 0,
        toxicityScore: 0,
        type: 'comment',
        createdAt: 'Posting...',
        updatedAt: 'Posting...',
        deletedAt: null,
        ...partialComment,
      };
      return newData;
    },
    insertReply: (args, cache, info) => {
      const partialComment = args.options as any;
      const newData: Reply = {
        __typename: 'Reply',
        id: `Optimistic-${Math.random()}`,
        flagged: false,
        repliesCount: 0,
        toxicityScore: 0,
        type: 'reply',
        createdAt: 'Posting...',
        updatedAt: 'Posting...',
        deletedAt: null,
        ...partialComment,
      };
      return newData;
    },
  },
  updates: {
    Mutation: {
      setCommentLike: commentLikeChanges,
      setReplyLike: replyLikeChanges,
      toggleFollow: toggleFollowChanges,
      deleteComment: deleteCommentChanges,
      deleteReply: deleteReplyChanges,
      fetchNewComments: fetchNewCommentsChanges,
      insertComment: insertCommentChanges,
      insertReply: insertReplyChanges,
    },
    Subscription: {
      commentLikesUpdate: commentLikeChanges,
    },
  },
  resolvers: {
    Query: {
      getCommentsOfTheMovie: movieCommentsResolver(),
      getRepliesOfComment: relayPagination(),
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
    retryExchange({
      retryIf: (error: any) => {
        return !!(error.graphQLErrors.length > 0 || error.networkError);
      },
    }),
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});
