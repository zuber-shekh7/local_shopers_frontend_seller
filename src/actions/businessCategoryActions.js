import backendAPI from "../apis/backendAPI";
import {
  GET_BUSINESS_CATEGORIES_FAIL,
  GET_BUSINESS_CATEGORIES_REQUEST,
  GET_BUSINESS_CATEGORIES_SUCCESS,
} from "../constants/businessCategory";

const getBusinessCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_CATEGORIES_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.get("/business-categories", {
      headers: {
        Authorization: token,
      },
    });

    const { categories } = data;

    dispatch({ type: GET_BUSINESS_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_CATEGORIES_FAIL, payload: error });
  }
};

export { getBusinessCategories };
