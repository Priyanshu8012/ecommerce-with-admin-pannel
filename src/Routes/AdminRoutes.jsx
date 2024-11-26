import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Admin/Login";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Admin/Dashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/admin" element={<Login />} />

      {/* Protected Dashboard Route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
