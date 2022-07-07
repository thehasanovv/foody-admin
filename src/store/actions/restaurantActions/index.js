import axios from "axios";
import {
  getRestaurants,
  isLoading,
  addRestaurant,
  deleteRestaurant,
} from "../../slicers/RestaurantSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Remove data from database
export const removeRestaurantsData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants/restaurants/${id}.json`,
        options
      );
      dispatch(deleteRestaurant(id));
    } catch (error) {}
  };
};

// Add a new product data
export const addRestaurantData = (restaurant) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/restaurants/restaurants.json",
        restaurant,
        options
      );
      dispatch(addRestaurant(restaurant));
    } catch (error) {}
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
