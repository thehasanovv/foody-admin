import axios from "axios";
import { getProducts, isLoading } from "../../slicers/ProductSlice";

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        "http://127.0.0.1:5500/src/mocks/product/product.json"
      );
      dispatch(getProducts(response.data.products));

      setTimeout(() => {
        dispatch(isLoading(false));
      }, 700);

      // dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
    }
  };
};
