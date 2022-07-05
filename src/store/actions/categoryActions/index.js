import axios from "axios";
import { getCategories } from "../../slicers/CategorySlice";

export const fetchCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/categories.json"
      );

      dispatch(getCategories(response.data.categories));
    } catch (error) {}
  };
};
