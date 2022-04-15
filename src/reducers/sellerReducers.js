import {
  EDIT_SELLER_FAIL,
  EDIT_SELLER_REQUEST,
  EDIT_SELLER_SUCCESS,
  GET_SELLER_FAIL,
  GET_SELLER_REQUEST,
  GET_SELLER_SUCCESS,
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
  SELLER_SIGNUP_FAIL,
  SELLER_SIGNUP_REQUEST,
  SELLER_SIGNUP_SUCCESS,
} from "../constants/seller";

export const sellerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGIN_SUCCESS:
      return { ...state, loading: false, error: null, seller: action.payload };
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

export const sellerSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SELLER_SIGNUP_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case SELLER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELLER_REQUEST:
      return { ...state, loading: true };
    case GET_SELLER_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case GET_SELLER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_SELLER_REQUEST:
      return { ...state, loading: true };
    case EDIT_SELLER_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case EDIT_SELLER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
