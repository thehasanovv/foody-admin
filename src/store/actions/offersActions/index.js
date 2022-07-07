import axios from "axios";
import { addOffer, deleteOffer } from "../../slicers/OfferSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Remove data from database
export const removeOfferData = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `https://foody-delivery-admin-default-rtdb.firebaseio.com/offers/offers/${id}.json`,
        options
      );
      dispatch(deleteOffer(id));
    } catch (error) {}
  };
};

// Add a new product data
export const addOfferData = (offer) => {
  return async (dispatch) => {
    try {
      // dispatch(isLoading(true));
      const response = await axios.post(
        "https://foody-delivery-admin-default-rtdb.firebaseio.com/offers/offers.json",
        offer,
        options
      );
      dispatch(addOffer(offer));
      // dispatch(isLoading(false));
    } catch (error) {
      // dispatch(isLoading(false));
    }
  };
};
