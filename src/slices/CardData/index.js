import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

const CardDataSlice = createSlice({
  name: "cardData",
  initialState: {
    cardsData: [],
  },
  reducers: {
    AddCardData(state, action) {
      state.cardsData = action?.payload?.payload;
    },
  },
});

export const AddCard = (cardDatas) => {
  return async (dispatch) => {
    try {
      dispatch(AddCardData(cardDatas));
    } catch (error) {
      console.log("ERROR");
    }
  };
};

export const { AddCardData } = CardDataSlice.actions;
export default CardDataSlice.reducer;
