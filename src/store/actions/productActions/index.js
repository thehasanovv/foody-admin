import axios from "axios";
import {
  getProducts,
  isLoading,
  addProduct,
  deleteProduct,
} from "../../slicers/ProductSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Remove data from database
export const removeProductData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://foody-delivery-admin-default-rtdb.firebaseio.com/products/products/${id}.json`,
        options
      );
      dispatch(deleteProduct(id));
    } catch (error) {}
  };
};

// Add a new data to database
export const addProductData = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/products/products.json",
        product,
        options
      );
      dispatch(addProduct(product));
    } catch (error) {}
  };
};

// Fetch data from database
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
