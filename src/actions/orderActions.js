import backendAPI from "../apis/backendAPI";
import {
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orders";

const getOrders = (business_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get(`/orders/seller`, {
      headers: {
        Authorization: token,
      },
      params: { business_id },
    });

    const { orders } = data;

    dispatch({ type: GET_ORDERS_SUCCESS, payload: orders });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ORDERS_FAIL, payload: error });
  }
};

const getOrder = (id) => async (dispatch) => {
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

export { getOrders, getOrder };
