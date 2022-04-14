import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultContainer from "./components/shared/containers/DefaultContainer";
import LoginContainer from "./components/shared/containers/LoginContainer";
import ProtectedRoute from "./components/shared/Routes/ProtectedRoute";
import BusinessPage from "./pages/business/BusinessPage";
import CreateBusinessPage from "./pages/business/CreateBusinessPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import CategoryPage from "./pages/categories/CategoryPage";
import CreateCategoryPage from "./pages/categories/CreateCategoryPage";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import HomePage from "./pages/core/HomePage";
import NotFoundPage from "./pages/core/NotFoundPage";
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
import routes from "./utils/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* core */}
        <Route path="/">
          <Route element={<DefaultContainer />}>
            <Route path="/" element={<HomePage />} exact />
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
            <Route
              exact
              path="business/new"
              element={
                <ProtectedRoute>
                  <CreateBusinessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId"
              element={
                <ProtectedRoute>
                  <BusinessPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories"
              exact
              element={
                <ProtectedRoute>
                  <CategoriesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/new"
              exact
              element={
                <ProtectedRoute>
                  <CreateCategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId"
              element={
                <ProtectedRoute>
                  <CategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId/edit"
              element={
                <ProtectedRoute>
                  <EditCategoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId/products"
              element={
                <ProtectedRoute>
                  <ProductsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId/products/new"
              element={
                <ProtectedRoute>
                  <AddProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId/products/:productId"
              element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/categories/:categoryId/products/:productId/edit"
              element={
                <ProtectedRoute>
                  <EditProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/orders"
              exact
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="business/:businessId/orders/:orderId"
              element={
                <ProtectedRoute>
                  <OrderPage />
                </ProtectedRoute>
              }
            />
            {/* not found */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
