import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  // redirect :경로를 튕겨주세요 (Navigate to =="")
  return authenticate === true ? <ProductDetail /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
