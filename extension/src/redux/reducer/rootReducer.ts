import { persistReducer, persistStore } from 'redux-persist';

import MiscReducer from '../slices/misc/miscSlice';
import audioNodesReducer from '../slices/audioNodes';
import commentReducer from '../slices/comment/commentSlice';
import loadingReducer from '../slices/loading/loadingSlice';
import manipulationReducer from '../slices/videoManipulation';
import movieReducer from '../slices/movie/movieSlice';
import profileReducer from '../slices/userProfile/userProfileSlice';
import replyReducer from '../slices/reply/replySlice';
import settingsReducer from '../slices/settings/settingsSlice';
import storage from 'redux-persist/lib/storage';
import textAreaReducer from '../slices/textArea/textAreaSlice';
import toastReducer from '../slices/toast/toastSlice';
import userReducer from '../slices/user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedSettingsReducer = persistReducer(persistConfig, MiscReducer);

export const rootReducer = {
  movie: movieReducer,
  user: userReducer,
  comments: commentReducer,
  replies: replyReducer,
  settings: settingsReducer,
  loading: loadingReducer,
  textArea: textAreaReducer,
  toast: toastReducer,
  profile: profileReducer,
  misc: persistedSettingsReducer,
  manipulation: manipulationReducer,
  audioNodes: audioNodesReducer,
};

export default rootReducer;
