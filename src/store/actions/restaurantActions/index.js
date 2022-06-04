import axios from "axios";
import { getRestaurants, isLoading } from "../../slicers/RestaurantSlice";

export const fetchRestaurantData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        "http://127.0.0.1:5500/src/mocks/restaurant/rest.json"
      );
      dispatch(getRestaurants(response.data.restaurants));

      setTimeout(() => {
        dispatch(isLoading(false));
      }, 300);

      // dispatch(isLoading(false));
    } catch (error) {
      console.log("error message", error);
      dispatch(isLoading(false));
    }
  };
};
