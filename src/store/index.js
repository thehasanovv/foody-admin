import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slicers/ProductSlice';
import restaurantSlice from './slicers/RestaurantSlice';
import categorySlice from './slicers/CategorySlice';
import orderSlice from './slicers/OrderSlice';
import offerSlice from './slicers/OfferSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    restaurant: restaurantSlice,
    category: categorySlice,
    order: orderSlice,
    offer: offerSlice,
  },
});
