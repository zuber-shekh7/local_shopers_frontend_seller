import backendAPI from "../apis/backendAPI";
import {
  EDIT_ORDER_FAIL,
  EDIT_ORDER_REQUEST,
  EDIT_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orders";
import { extractError } from "../utils/helper";

export const getOrders = (businessId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    const { data } = await backendAPI.get(`/orders/seller`, {
      headers: {
        Authorization: token,
      },
      params: { businessId },
    });

    const { orders } = data;

    dispatch({ type: GET_ORDERS_SUCCESS, payload: orders });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ORDERS_FAIL, payload: error });
  }
};

export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const { order } = data;

    dispatch({ type: GET_ORDER_SUCCESS, payload: order });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ORDER_FAIL, payload: error });
  }
};

export const editOrder = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_ORDER_REQUEST });

    const { data } = await backendAPI.put(`/orders/${id}`, formData);

    const { order } = data;

    dispatch({ type: EDIT_ORDER_SUCCESS, payload: order });
    dispatch({ type: EDIT_ORDER_SUCCESS, payload: null });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: EDIT_ORDER_FAIL, payload: error });
  }
};
