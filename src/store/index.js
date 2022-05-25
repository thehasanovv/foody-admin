import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/ProductSlice';
import restaurantSlice from './slicers/RestaurantSlice';
import categorySlice from './slices/CategorySlice';
import orderSlice from './slices/OrderSlice';
import offerSlice from './slices/OfferSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    restaurant: restaurantSlice,
    category: categorySlice,
    order: orderSlice,
    offer: offerSlice,
  },
});
