import { createSlice } from "@reduxjs/toolkit";

const initialState = { offers: [] };

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.offers = action.payload;
    },
    addOffer: (state) => {
      state.offers.push(action.payload);
      /* {[...state,action.payload]} */
    },
    deleteOffer: (state) => {
      state.offers = state.offers.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getOffers, addOffer, deleteOffer } = offerSlice.actions;

export default offerSlice.reducer;
