import backendAPI from "../apis/backendAPI";
import {
  CREATE_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
} from "../constants/business";

const createBusiness = (formData) => async (dispatch) => {
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

export { createBusiness };
