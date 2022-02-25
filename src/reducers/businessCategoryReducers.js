import {
  GET_BUSINESS_CATEGORIES_FAIL,
  GET_BUSINESS_CATEGORIES_REQUEST,
  GET_BUSINESS_CATEGORIES_SUCCESS,
} from "../constants/businessCategory";

const getBusinessCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case GET_BUSINESS_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_BUSINESS_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { getBusinessCategoriesReducer };
