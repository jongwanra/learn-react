// store를 설정하는 파일
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer, userReducer, postReducer } from "./reducers";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
