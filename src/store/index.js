import { configureStore } from '@reduxjs/toolkit';
import  productSlice from './slices/ProductSlice';

export const store = configureStore({
  reducer: { product: productSlice },
});
