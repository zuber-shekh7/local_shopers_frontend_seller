import { combineReducers } from "redux";
import {
  getSellerReducer,
  sellerLoginReducer,
  sellerSignupReducer,
} from "./sellerReducers";

const initialState = {
  sellerLogin: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  sellerSignup: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  getSeller: {
    seller: null,
  },
};

const rootReducer = combineReducers({
  sellerLogin: sellerLoginReducer,
  sellerSignup: sellerSignupReducer,
  getSeller: getSellerReducer,
});

export default rootReducer;
export { initialState };
