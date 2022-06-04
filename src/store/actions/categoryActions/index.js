import axios from "axios";
import { getCategories } from "../../slicers/CategorySlice";

export const fetchCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "http://127.0.0.1:5500/src/mocks/category/category.json"
      );

      dispatch(getCategories(response.data.categories));
    } catch (error) {}
  };
};
