import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
const location = useLocation();
// console.log(location)

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;