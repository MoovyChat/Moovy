import { persistReducer, persistStore } from 'redux-persist';

import miscReducer from '../slices/miscSlice';
import popupReducer from '../slices/popupSlice';
import profileReducer from '../slices/userProfileSlice';
import settingsReducer from '../slices/settingsSlice';
import storage from 'redux-persist/lib/storage';
import textAreaReducer from '../slices/textAreaSlice';
import userReducer from '../slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);

export const rootReducer = {
  settings: persistedSettingsReducer,
  user: userReducer,
  popup: popupReducer,
  misc: miscReducer,
  profile: profileReducer,
  textArea: textAreaReducer,
};
