import { combineReducers } from "redux";
import { getBusinessCategoriesReducer } from "./businessCategoryReducers";
import {
  createBusinessReducer,
  editBusinessReducer,
  getBusinessReducer,
} from "./businessReducers";
import {
  createCategoryReducer,
  deleteCategoryReducer,
  editCategoryReducer,
  getCategoriesReducer,
  getCategoryReducer,
} from "./categoriesReducers";
import { getOrderReducer, getOrdersReducer } from "./orderReducers";
import {
  createProductReducer,
  editProductReducer,
  getProductReducer,
  getProductsReducer,
} from "./productReducers";
import {
  getSellerReducer,
  sellerLoginReducer,
  sellerSignupReducer,
} from "./sellerReducers";

const initialState = {
  sellerLogin: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  sellerSignup: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  getSeller: {
    seller: null,
  },
  getBusinessCategories: { categories: null },
  createBusiness: { business: null },
  getBusiness: { business: null },
  editBusiness: { business: null },
  createCategory: { category: null },
  getCategories: { categories: null },
  getCategory: { category: null },
  editCategory: { category: null },
  deleteCategory: { success: null },
  getOrders: { orders: null },
  getOrder: { order: null },
  getProducts: { products: null },
  getProduct: { product: null },
  createProduct: { product: null },
  editProduct: { product: null },
};

const rootReducer = combineReducers({
  sellerLogin: sellerLoginReducer,
  sellerSignup: sellerSignupReducer,
  getSeller: getSellerReducer,
  getBusinessCategories: getBusinessCategoriesReducer,
  createBusiness: createBusinessReducer,
  getBusiness: getBusinessReducer,
  editBusiness: editBusinessReducer,
  createCategory: createCategoryReducer,
  getCategories: getCategoriesReducer,
  getCategory: getCategoryReducer,
  editCategory: editCategoryReducer,
  deleteCategory: deleteCategoryReducer,
  getOrders: getOrdersReducer,
  getOrder: getOrderReducer,
  getProducts: getProductsReducer,
  getProduct: getProductReducer,
  createProduct: createProductReducer,
  editProduct: editProductReducer,
});

export default rootReducer;
export { initialState };
