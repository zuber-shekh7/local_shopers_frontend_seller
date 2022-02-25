import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import ProtectedRoute from "./components/shared/Routes/ProtectedRoute";
import BusinessPage from "./pages/business/BusinessPage";
import CreateBusinessPage from "./pages/business/CreateBusinessPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import CreateCategoryPage from "./pages/categories/CreateCategoryPage";
import HomePage from "./pages/core/HomePage";
import NotFoundPage from "./pages/core/NotFoundPage";
import DashboardPage from "./pages/seller/DashboardPage";
import LoginPage from "./pages/seller/LoginPage";
import SignupPage from "./pages/seller/SignupPage";
import routes from "./utils/routes";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />

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
        {/* not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
