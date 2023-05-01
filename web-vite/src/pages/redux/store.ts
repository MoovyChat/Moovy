import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";

import { batchedSubscribe } from "redux-batched-subscribe";
import debounce from "lodash.debounce";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger({
  collapsed: true,
  duration: true,
  level: "log",
  colors: {
    title: () => "#007fff",
    prevState: () => "#9E9E9E",
    action: () => "#03A9F4",
    nextState: () => "#4CAF50",
    error: () => "#F20404",
  },
});

const debounceNotify = debounce((notify) => notify());
const enhancer = compose(
  applyMiddleware(thunk),
  batchedSubscribe((notify) => {
    notify();
  }),
  batchedSubscribe(debounceNotify)
);
export const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
