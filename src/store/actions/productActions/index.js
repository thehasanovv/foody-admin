import axios from "axios";
import { getProducts, isLoading, addProduct } from "../../slicers/ProductSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};
// Add a new product data
export const addProductData = (product) => {
  return async (dispatch) => {
    try {
      // dispatch(isLoading(true));
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/products/products.json",
        product,
        options
      );
      dispatch(addProduct(product));
      // dispatch(isLoading(false));
    } catch (error) {
      // dispatch(isLoading(false));
    }
  };
};

// Fetch Data
export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/products.json"
      );
      const loadedData = Object.values(response.data.products);
      dispatch(getProducts(loadedData));
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
    }
  };
};
