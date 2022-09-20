import { persistReducer, persistStore } from 'redux-persist';

import commentReducer from '../slices/comment/commentSlice';
import loadingReducer from '../slices/loading/loadingSlice';
import movieReducer from '../slices/movie/movieSlice';
import replyReducer from '../slices/reply/replySlice';
import settingsReducer from '../slices/settings/settingsSlice';
import storage from 'redux-persist/lib/storage';
import userReducer from '../slices/user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

// const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);

const rootReducer = {
  movie: movieReducer,
  user: userReducer,
  comments: commentReducer,
  replies: replyReducer,
  settings: settingsReducer,
  loading: loadingReducer,
};

export default rootReducer;
