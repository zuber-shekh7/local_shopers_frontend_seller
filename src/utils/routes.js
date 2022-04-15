const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  faqs: "/FAQs",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  signup: "/signup",
  login: "/login",
  dashboard: "/seller/dashboard",
  account: "/seller/account",
  business: "/business",
  editBusiness: "/business/:businessId/edit",
  getBusiness: "/business/:businessId",
  createBusiness: "/sellers/business/new",
  createCategory: "/business/:businessId/categories/new",
  getCategories: "/business/:businessId/categories",
  getCategory: "/business/:businessId/categories/:categoryId",
  editCategory: "/business/:businessId/categories/:categoryId/edit",
  getProducts: "/business/:businessId/categories/:categoryId/products",
  createProduct: "/business/:businessId/categories/:categoryId/products/new",
  getProduct:
    "/business/:businessId/categories/:categoryId/products/:productId",
  editProduct:
    "/business/:businessId/categories/:categoryId/products/:productId/edit",
  getOrders: "/business/:businessId/orders",
};

export const generateRoute = (str, values) => {
  let route = str;
  for (let key in values) {
    route = route.replace(key, values[key]);
  }
  return route;
};

export default routes;
