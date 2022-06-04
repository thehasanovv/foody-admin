import { createSlice } from "@reduxjs/toolkit";

const initialState = { restaurants: [], loading: false };

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    getRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addRestaurant: (state, action) => {
      state.restaurants.push(action.payload);
    },
    deleteRestaurant: (state, action) => {
      state.restaurants = state.restaurants.filter(
        (item) => item.id !== action.payload
      );
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { getRestaurants, addRestaurant, deleteRestaurant, isLoading } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;
