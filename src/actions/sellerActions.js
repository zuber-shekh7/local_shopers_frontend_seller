import backendAPI from "../apis/backendAPI";
import {
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

const sellerLogin = (email, password) => async (dispatch) => {
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
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_LOGIN_FAIL, payload: error });
  }
};

const sellerSignup = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_SIGNUP_REQUEST });

    const { data } = await backendAPI.post("/sellers/signup", {
      email,
      password,
    });

    dispatch(sellerLogin(email, password));

    dispatch({ type: SELLER_SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_SIGNUP_FAIL, payload: error });
  }
};

const sellerLogout = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: SELLER_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_LOGOUT_FAIL, payload: error });
  }
};

const getSeller = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLER_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get(`/sellers/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const { seller } = data;

    dispatch({ type: GET_SELLER_SUCCESS, payload: seller });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_SELLER_FAIL, payload: error });
  }
};

export { sellerLogin, sellerSignup, sellerLogout, getSeller };
