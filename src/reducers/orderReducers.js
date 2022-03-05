import {
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orders";

const getOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case GET_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case GET_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { getOrdersReducer, getOrderReducer };
