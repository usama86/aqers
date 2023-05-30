import usersReducer from "../slices/user";
import CardData from "../slices/CardData";
import { createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  user: usersReducer,
  card: CardData,
});

const makeStore = () =>
  configureStore({
    reducer: combineReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
