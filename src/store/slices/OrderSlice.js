import { createSlice } from '@reduxjs/toolkit';

const initialState = { orders: [] };

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrder: (state) => {
      state.orders.push(action.payload);
      /* {[...state,action.payload]} */
    },
    deleteOrder: (state) => {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getOrders, addOrder, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
