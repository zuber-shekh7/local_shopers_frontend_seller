import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
} from "../constants/seller";

const sellerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGIN_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case SELLER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SELLER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGOUT_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case SELLER_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { sellerLoginReducer };
