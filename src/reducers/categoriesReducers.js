import {
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../constants/categories";

const getCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { getCategoriesReducer };
