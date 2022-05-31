import axios from "axios";
import { getProducts } from "../../slicers/ProductSlice";


export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "http://127.0.0.1:5500/src/mocks/product/product.json"
      );

      dispatch(getProducts(response.data.products));
    } catch (error) {
      //   console.log("error message", error);
    }
  };
};
