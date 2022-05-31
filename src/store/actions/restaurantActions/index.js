import axios from "axios";
import { getRestaurants } from "../../slicers/RestaurantSlice";

export const fetchRestaurantData = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "http://127.0.0.1:5500/src/mocks/restaurant/rest.json"
      );
      dispatch(getRestaurants(response.data.restaurants));
    } catch (error) {
      console.log("error message", error);
    }
  };
};
