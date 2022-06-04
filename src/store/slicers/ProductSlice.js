import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false };

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts, addProduct, deleteProduct, isLoading } =
  productSlice.actions;

export default productSlice.reducer;
