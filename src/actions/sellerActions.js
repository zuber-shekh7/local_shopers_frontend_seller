import backendAPI from "../apis/backendAPI";
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
import { extractError } from "../utils/helper";

export const sellerLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGIN_REQUEST });

    const { data } = await backendAPI.post("/sellers/login", {
      email,
      password,
    });

    const { seller, token } = data;

    localStorage.setItem("seller", JSON.stringify(seller));
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({ type: SELLER_LOGIN_SUCCESS, payload: seller });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: SELLER_LOGIN_FAIL, payload: error });
  }
};

export const sellerSignup = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_SIGNUP_REQUEST });

    const { data } = await backendAPI.post("/sellers/signup", {
      email,
      password,
    });

    dispatch(sellerLogin(email, password));

    dispatch({ type: SELLER_SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: SELLER_SIGNUP_FAIL, payload: error });
  }
};

export const sellerLogout = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: SELLER_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: SELLER_LOGOUT_FAIL, payload: error });
  }
};

export const getSeller = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLER_REQUEST });

    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    const { data } = await backendAPI.get(`/sellers/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const { seller } = data;

    dispatch({ type: GET_SELLER_SUCCESS, payload: seller });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: GET_SELLER_FAIL, payload: error });
  }
};

export const editSeller = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_SELLER_REQUEST });

    const { data } = await backendAPI.put(`/sellers/${id}`, formData);

    const { seller } = data;

    dispatch({ type: EDIT_SELLER_SUCCESS, payload: seller });
    dispatch({ type: EDIT_SELLER_SUCCESS, payload: null });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: EDIT_SELLER_FAIL, payload: error });
  }
};
