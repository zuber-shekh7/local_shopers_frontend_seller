import backendAPI from "../apis/backendAPI";
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

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } = await backendAPI.post(`/products/`, formData);

    const { product } = data;

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: product });
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error });
  }
};

export const getProducts = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await backendAPI.get("/products", {
      params: { categoryId },
    });

    const { products } = data;

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } = await backendAPI.get(`/products/${productId}`);

    const { product } = data;

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

export const editProduct = (formData, productId) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PRODUCT_REQUEST });

    const { data } = await backendAPI.put(`/products/${productId}`, formData);

    const { product } = data;

    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: product });
    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
  }
};
