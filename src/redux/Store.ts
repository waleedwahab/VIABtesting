import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Userslice"; // ✅ user slice
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import chatReducer from "./ChatSlicer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "chat"], // ✅ only persist necessary slices
};

const rootReducer = combineReducers({
  user: userReducer, // ✅ registered user reducer
  chat: chatReducer, // ✅ registered chat reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
