import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import ProtectedRoute from "./components/shared/Routes/ProtectedRoute";
import CreateBusinessPage from "./pages/business/CreateBusinessPage";
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
        {/* not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
