import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';

import { batchedSubscribe } from 'redux-batched-subscribe';
import debounce from 'lodash.debounce';
import logger from 'redux-logger';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

const debounceNotify = debounce((notify) => notify());
const enhancer = compose(
  applyMiddleware(thunk, logger),
  batchedSubscribe((notify) => {
    notify();
  }),
  batchedSubscribe(debounceNotify)
);
export const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
