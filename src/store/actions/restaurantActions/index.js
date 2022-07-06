import axios from "axios";
import {
  getRestaurants,
  isLoading,
  addRestaurant,
} from "../../slicers/RestaurantSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};
// Add a new product data
export const addRestaurantData = (restaurant) => {
  return async (dispatch) => {
    try {
      // dispatch(isLoading(true));
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants/restaurants.json",
        restaurant,
        options
      );
      dispatch(addRestaurant(restaurant));
      // dispatch(isLoading(false));
    } catch (error) {
      // dispatch(isLoading(false));
    }
  };
};

export const fetchRestaurantData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants.json"
      );
      const loadedData = Object.values(response.data.restaurants);
      dispatch(getRestaurants(loadedData));
      // console.log(response.data.restaurants);
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
    }
  };
};
