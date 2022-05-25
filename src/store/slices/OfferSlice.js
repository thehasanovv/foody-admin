import { createSlice } from '@reduxjs/toolkit';

const initialState = { offers: [] };

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    getOffers: (state, action) => {
      state.orders = action.payload;
    },
    addOffer: (state) => {
      state.orders.push(action.payload);
      /* {[...state,action.payload]} */
    },
    deleteOffer: (state) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getOffers, addOffer, deleteOffer } = offerSlice.actions;

export default offerSlice.reducer;
