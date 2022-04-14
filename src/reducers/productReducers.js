import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../constants/products";

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case CREATE_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case GET_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editProductReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case EDIT_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
