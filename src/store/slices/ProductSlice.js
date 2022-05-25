import { createSlice } from '@reduxjs/toolkit';

const initialState = { products: [] };

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state) => {
      state.products.push(action.payload);
      /* {[...state,action.payload]} */
    },
    deleteProduct: (state) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts, addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
