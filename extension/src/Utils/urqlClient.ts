import {
  dedupExchange,
  defaultExchanges,
  fetchExchange,
  subscriptionExchange,
} from 'urql';

import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient as createWSClient } from 'graphql-ws';
import { retryExchange } from '@urql/exchange-retry';

const wsClient = createWSClient({
  url: 'ws://localhost:4000/graphql',
});
export const urqlClient = (ssrExchange: any) => ({
  url: 'http://localhost:4000/graphql',
  exchanges: [
    ...defaultExchanges,
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {},
      },
    }),
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
