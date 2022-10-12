// const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);
import settingsReducer from '../slices/settingsSlice';

export const rootReducer = {
  settings: settingsReducer,
};
