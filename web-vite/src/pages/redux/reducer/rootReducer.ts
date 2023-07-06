import MiscReducer from "../slices/misc/miscSlice";
import loadingReducer from "../slices/loading/loadingSlice";
import manipulationReducer from "../slices/videoManipulation";
import nestReducer from "../slices/nestSlice";
import movieReducer from "../slices/movie/movieSlice";
import { persistReducer } from "redux-persist";
import settingsReducer from "../slices/settings/settingsSlice";
import storage from "redux-persist/lib/storage";
import textAreaReducer from "../slices/textArea/textAreaSlice";
import toastReducer from "../slices/toast/toastSlice";
import toolTipReducer from "../slices/tooltip/tooltipSlice";
import userReducer from "../slices/user/userSlice";
import socketReducer from "../slices/socket/socketSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSettingsReducer = persistReducer(persistConfig, MiscReducer);

const rootReducer = {
  movie: movieReducer,
  user: userReducer,
  settings: settingsReducer,
  loading: loadingReducer,
  textArea: textAreaReducer,
  toast: toastReducer,
  tooltip: toolTipReducer,
  misc: persistedSettingsReducer,
  manipulation: manipulationReducer,
  socket: socketReducer,
  nest: nestReducer,
};

export default rootReducer;
