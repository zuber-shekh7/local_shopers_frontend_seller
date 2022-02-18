import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import HomePage from "./pages/core/HomePage";
import LoginPage from "./pages/seller/LoginPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} exact />
      </Routes>
    </Router>
  );
};

export default App;
