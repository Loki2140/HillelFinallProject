import { mocApi } from "../Api/rtq.api";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlicer";

const rootReducer = combineReducers({
  userReducer,
  [mocApi.reducerPath]: mocApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mocApi.middleware)
  });
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
