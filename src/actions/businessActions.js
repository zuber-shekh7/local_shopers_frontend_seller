import backendAPI from "../apis/backendAPI";
import {
  CREATE_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  EDIT_BUSINESS_FAIL,
  EDIT_BUSINESS_REQUEST,
  EDIT_BUSINESS_SUCCESS,
  GET_BUSINESS_FAIL,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
} from "../constants/business";
import { extractError } from "../utils/helper";

export const createBusiness = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.post("/business/new", formData, {
      headers: { Authorization: token },
    });

    const { business } = data;

    dispatch({ type: CREATE_BUSINESS_SUCCESS, payload: business });
    dispatch({ type: CREATE_BUSINESS_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_BUSINESS_FAIL, payload: error });
  }
};

export const getBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_REQUEST });

    const { data } = await backendAPI.get(`/business/${id}`);

    const { business } = data;

    dispatch({ type: GET_BUSINESS_SUCCESS, payload: business });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_FAIL, payload: error });
  }
};

export const editBusiness = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_BUSINESS_REQUEST });

    const { data } = await backendAPI.put(`/business/${id}`, formData);

    const { business } = data;

    dispatch({ type: EDIT_BUSINESS_SUCCESS, payload: business });
    dispatch({ type: EDIT_BUSINESS_SUCCESS, payload: null });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: EDIT_BUSINESS_FAIL, payload: error });
  }
};
