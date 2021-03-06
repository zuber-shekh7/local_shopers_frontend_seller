import backendAPI from "../apis/backendAPI";

import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
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

const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));
    const seller = JSON.parse(localStorage.getItem("seller"));

    formData.append("business_id", seller.business);

    const { data } = await backendAPI.post("/categories", formData, {
      headers: {
        Authorization: token,
      },
    });

    const { category } = data;

    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: category });
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_CATEGORY_FAIL, payload: error });
  }
};

const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });

    const { data } = await backendAPI.get(`/categories/${id}`, {});
    const { category } = data;

    dispatch({ type: GET_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_CATEGORY_FAIL, payload: error });
  }
};

const editCategory = (formData, category_id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_CATEGORY_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await backendAPI.put(
      `/categories/${category_id}`,
      formData,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const { category } = data;

    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: category });

    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: EDIT_CATEGORY_FAIL, payload: error });
  }
};

const deleteCategory = (category_id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });

    const token = JSON.parse(localStorage.getItem("token"));

    await backendAPI.delete(`/categories/${category_id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: true });

    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: DELETE_CATEGORY_FAIL, payload: error });
  }
};

export {
  getCategories,
  createCategory,
  getCategory,
  editCategory,
  deleteCategory,
};
