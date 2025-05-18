import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user ? state.auth.user.uid : "");

  return user ? children : <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
