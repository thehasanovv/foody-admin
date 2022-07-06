import axios from "axios";
import { getCategories, addCategory } from "../../slicers/CategorySlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};
// Add a new product data
export const addCategoryData = (category) => {
  return async (dispatch) => {
    try {
      // dispatch(isLoading(true));
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/categories/categories.json",
        category,
        options
      );
      dispatch(addCategory(category));
      // dispatch(isLoading(false));
    } catch (error) {
      // dispatch(isLoading(false));
    }
  };
};

export const fetchCategoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/categories.json"
      );
      const loadedData = Object.values(response.data.categories);
      dispatch(getCategories(loadedData));
    } catch (error) {}
  };
};
