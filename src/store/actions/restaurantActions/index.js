import axios from "axios";
import { getRestaurants, isLoading } from "../../slicers/RestaurantSlice";

export const fetchRestaurantData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        // "http://127.0.0.1:5500/src/mocks/restaurant/rest.json"
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants.json"
      );
      dispatch(getRestaurants(response.data.restaurants));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
    }
  };
};
