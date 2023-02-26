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
  paginatedFeedResolver,
  paginatedMoviesResolver,
  paginatedUserNotificationsResolver,
  repliesResolver,
  userCommentsResolver,
  userRepliesResolver,
} from './resolvers';

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
    PaginatedMovieComments: () => null,
    getPaginatedMovies: () => null,
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
    PaginatedTitles: () => null,
    NotificationObject: () => null,
    LinkPreview: () => null,
    PaginatedMovieStats: () => null,
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
  resolvers: {
    Query: {
      getCommentsOfTheMovie: movieCommentsResolver(),
      getCommentsOfTheUser: userCommentsResolver(),
      getRepliesOfTheUser: userRepliesResolver(),
      getRepliesOfComment: repliesResolver(),
      getRepliesOfReply: repliesResolver(),
      getPaginatedMovies: paginatedMoviesResolver(),
      getPaginatedShows: paginatedMoviesResolver(),
      getFeed: paginatedFeedResolver(),
      getUserNotifications: paginatedUserNotificationsResolver(),
      getFavTitles: getPaginatedMovieStatsResolver(),
      getLikedTitles: getPaginatedMovieStatsResolver(),
      getUserViewHistory: getUserViewHistoryResolver(),
      searchTitles: getPaginatedSearchTitles(),
      searchMovies: getPaginatedSearchTitles(),
      searchEpisodes: getPaginatedSearchEpisodes(),
      searchPeople: getPaginatedSearchPeople(),
    },
  },
};

export const urqlClient: any = (ssrExchange: any) => ({
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
