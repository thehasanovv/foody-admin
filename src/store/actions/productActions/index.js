import axios from "axios";
import { getProducts, isLoading } from "../../slicers/ProductSlice";

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/products.json"
      );
      dispatch(getProducts(response.data.products));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
    }
  };
};
