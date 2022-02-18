import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import HomePage from "./pages/core/HomePage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </Router>
  );
};

export default App;
