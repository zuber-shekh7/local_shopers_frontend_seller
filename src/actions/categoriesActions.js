import backendAPI from "../apis/backendAPI";
import {
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../constants/categories";

const getCategories = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));
    const { business } = JSON.parse(localStorage.getItem("seller"));

    const { data } = await backendAPI.get("/categories", {
      params: { business_id: business },
      headers: {
        Authorization: token,
      },
    });

    const { categories } = data;

    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_CATEGORIES_FAIL, payload: error });
  }
};

export { getCategories };
