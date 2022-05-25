import { createSlice } from '@reduxjs/toolkit';

const initialState = { restaurants: [] };

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    getRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    addRestaurant: (state, action) => {
      state.restaurants.push(action.payload);
    },
    deleteRestaurant: (state, action) => {
      state.restaurants = state.restaurants.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRestaurants, addRestaurant, deleteRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
