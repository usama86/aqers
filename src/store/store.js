import usersReducer from "../slices/user";
import { createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  user: usersReducer,
});

const makeStore = () =>
  configureStore({
    reducer: combineReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
