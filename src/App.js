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
import DashboardPage from "./pages/seller/DashboardPage";
import LoginPage from "./pages/seller/LoginPage";
import SignupPage from "./pages/seller/SignupPage";
import routes from "./utils/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultContainer />}>
          <Route path="/" element={<HomePage />} exact />
          <Route
            exact
            path="/seller/account"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={routes.createBusiness}
            element={
              <ProtectedRoute>
                <CreateBusinessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${routes.getBusiness}/:business_id`}
            element={
              <ProtectedRoute>
                <BusinessPage />
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
            path={`${routes.getCategories}/:category_id`}
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={`${routes.getCategories}/:category_id/edit`}
            element={
              <ProtectedRoute>
                <EditCategoryPage />
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
            path={`${routes.getOrders}/:order_id`}
            element={
              <ProtectedRoute>
                <OrderPage />
              </ProtectedRoute>
            }
          />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<LoginContainer />}>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} exact />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
