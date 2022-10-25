import popupReducer from '../slices/popupSlice';
// const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);
import settingsReducer from '../slices/settingsSlice';
import userReducer from '../slices/userSlice';

export const rootReducer = {
  settings: settingsReducer,
  user: userReducer,
  popup: popupReducer,
};
