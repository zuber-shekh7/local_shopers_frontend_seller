import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { seller } = useSelector((state) => state.sellerLogin);

  return seller ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
