import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Example: Check for auth token in localStorage
  const authToken = localStorage.getItem("authToken");

  // If authenticated, render the children components; otherwise, redirect
  return authToken ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
