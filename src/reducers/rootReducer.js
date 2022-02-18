import { combineReducers } from "redux";
import { sellerLoginReducer } from "./sellerReducers";

const initialState = {
  sellerLogin: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
};

const rootReducer = combineReducers({
  sellerLogin: sellerLoginReducer,
});

export default rootReducer;
export { initialState };
