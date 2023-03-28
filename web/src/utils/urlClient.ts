import { CacheExchangeOpts, cacheExchange } from '@urql/exchange-graphcache';
import {
  clearNotificationsChanges,
  commentLikeChanges,
  deleteCommentChanges,
  deleteReplyChanges,
  insertCommentChanges,
  insertReplyChanges,
  logOutChanges,
  loginChanges,
  profileUpdateChanges,
  readNotificationChanges,
  replyLikeChanges,
  toggleFollowChanges,
  updateMovieLikesChanges,
} from './cacheExchanges';
import { dedupExchange, fetchExchange, subscriptionExchange } from 'urql';
import {
  getPaginatedMovieStatsResolver,
  getPaginatedSearchEpisodes,
  getPaginatedSearchPeople,
  getPaginatedSearchTitles,
  getUserViewHistoryResolver,
  movieCommentsResolver,
  paginatedUserNotificationsResolver,
} from './resolvers';
import { serverUrl, wsUrl } from '../constants';

import { Reply } from '../generated/graphql';
import { createClient as createWSClient } from 'graphql-ws';
import { devtoolsExchange } from '@urql/devtools';
import { relayPagination } from '@urql/exchange-graphcache/extras';
import { retryExchange } from '@urql/exchange-retry';

const wsClient = createWSClient({
  url: wsUrl,
});
const cache: Partial<CacheExchangeOpts> = {
  keys: {
    RepliesObject: () => null,
    CommentLikesObject: () => null,
    replyLikesObject: () => null,
    SearchObject: () => null,
    Visited: () => null,
    Profile: () => null,
    MovieStats: () => null,
    CommentOrReply: () => null,
    NotificationObject: () => null,
    LinkPreview: () => null,
    SearchMovieObject: () => null,
    SearchTitleObject: () => null,
    SearchPeopleObject: () => null,
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
      readNotification: readNotificationChanges,
      clearNotifications: clearNotificationsChanges,
    },
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
  resolvers: {
    Query: {
      getCommentReplies: relayPagination(),
      getRepliesOfReply: relayPagination(),
      getFeed: relayPagination(),
      getCommentsOfTheUser: relayPagination(),
      getRepliesOfTheUser: relayPagination(),
      getPaginatedTitles: relayPagination(),
      getMoviesByTitleId: relayPagination(),
      getUserNotifications: paginatedUserNotificationsResolver(),
      getFavTitles: getPaginatedMovieStatsResolver(),
      getLikedTitles: getPaginatedMovieStatsResolver(),
      getUserViewHistory: getUserViewHistoryResolver(),
      searchTitles: getPaginatedSearchTitles(),
      searchMovies: getPaginatedSearchTitles(),
      searchEpisodes: getPaginatedSearchEpisodes(),
      searchPeople: getPaginatedSearchPeople(),
      getCommentsOfTheMovie: movieCommentsResolver(),
    },
  },
};

export const urqlClient: any = (ssrExchange: any) => ({
  url: serverUrl,
  fetchOptions: {
    credentials: 'include',
    compress: true,
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
    },
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
