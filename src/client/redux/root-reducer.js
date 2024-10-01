import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import scssReducer from "./scss/scss.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["line"],
};

const rootReducer = combineReducers({
  SCSS: scssReducer,
});

export default persistReducer(persistConfig, rootReducer);
