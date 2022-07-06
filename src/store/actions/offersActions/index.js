import axios from "axios";
import { addOffer } from "../../slicers/OfferSlice";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
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
