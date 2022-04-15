import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultContainer from "./components/shared/containers/DefaultContainer";
import LoginContainer from "./components/shared/containers/LoginContainer";
import ProtectedRoute from "./components/shared/Routes/ProtectedRoute";
import BusinessPage from "./pages/business/BusinessPage";
import EditBusinessPage from "./pages/business/EditBusinessPage";
import CreateBusinessPage from "./pages/business/CreateBusinessPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import CategoryPage from "./pages/categories/CategoryPage";
import CreateCategoryPage from "./pages/categories/CreateCategoryPage";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import AboutUsPage from "./pages/core/AboutUsPage";
import ContactUsPage from "./pages/core/ContactUsPage";
import FAQPage from "./pages/core/FAQPage";
import HomePage from "./pages/core/HomePage";
import NotFoundPage from "./pages/core/NotFoundPage";
import PrivacyPolicyPage from "./pages/core/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/core/TermsOfServicePage";
import OrderPage from "./pages/orders/OrderPage";
import OrdersPage from "./pages/orders/OrdersPage";
import {
  AddProductPage,
  EditProductPage,
  ProductPage,
  ProductsPage,
} from "./pages/products";
import DashboardPage from "./pages/seller/DashboardPage";
import LoginPage from "./pages/seller/LoginPage";
import SignupPage from "./pages/seller/SignupPage";
import AccountContainer from "./components/shared/containers/AccountContainer";
import routes from "./utils/routes";
import ProfilePage from "./pages/seller/ProfilePage";
import SettingsPage from "./pages/seller/SettingsPage";
import EditProfilePage from "./pages/seller/EditProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* core */}
        <Route path="/">
          <Route element={<DefaultContainer />}>
            <Route path="/" element={<HomePage />} exact />
            <Route path={routes.about} element={<AboutUsPage />} exact />
            <Route path={routes.contact} element={<ContactUsPage />} exact />
            <Route path={routes.faqs} element={<FAQPage />} exact />
            <Route path={routes.terms} element={<TermsOfServicePage />} exact />
            <Route
              path={routes.privacy}
              element={<PrivacyPolicyPage />}
              exact
            />
            {/* not found */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/" element={<LoginContainer />}>
            <Route path="login" exact element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} exact />
          </Route>
        </Route>
        {/* seller */}
        <Route path="/seller">
          <Route element={<DefaultContainer />}>
            <Route
              exact
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route element={<AccountContainer />}>
              <Route
                exact
                path={routes.profile}
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path={routes.editProfile}
                element={
                  <ProtectedRoute>
                    <EditProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path={routes.settings}
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Route>
        {/* business */}

        <Route path="/business">
          <Route element={<DefaultContainer />}>
            <Route
              exact
              path="new"
              element={
                <ProtectedRoute>
                  <CreateBusinessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getBusiness}
              element={
                <ProtectedRoute>
                  <BusinessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.editBusiness}
              element={
                <ProtectedRoute>
                  <EditBusinessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getCategories}
              exact
              element={
                <ProtectedRoute>
                  <CategoriesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.createCategory}
              exact
              element={
                <ProtectedRoute>
                  <CreateCategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getCategory}
              element={
                <ProtectedRoute>
                  <CategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.editCategory}
              element={
                <ProtectedRoute>
                  <EditCategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getProducts}
              element={
                <ProtectedRoute>
                  <ProductsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.createProduct}
              element={
                <ProtectedRoute>
                  <AddProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getProduct}
              element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.editProduct}
              element={
                <ProtectedRoute>
                  <EditProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={routes.getOrders}
              exact
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path=":businessId/orders/:orderId"
              element={
                <ProtectedRoute>
                  <OrderPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
