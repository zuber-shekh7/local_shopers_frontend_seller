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
  profile: "/seller/account/profile",
  editProfile: "/seller/account/profile/edit",
  settings: "/seller/account/settings",
  changePassword: "/seller/account/settings/change-password",
  deactivateAccount: "/seller/account/settings/deactivate-account",
  business: "/business",
  editBusiness: "/business/:businessId/edit",
  getBusiness: "/business/:businessId",
  createBusiness: "/business/new",
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
  getOrder: "/business/:businessId/orders/:orderId",
  editOrder: "/business/:businessId/orders/:orderId/edit",
};

export const generateRoute = (str, values) => {
  let route = str;
  for (let key in values) {
    route = route.replace(key, values[key]);
  }
  return route;
};

export default routes;
