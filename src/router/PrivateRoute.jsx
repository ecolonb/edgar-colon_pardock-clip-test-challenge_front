import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...props }) {
  const { userLogged } = useSelector((state) => state.auth);
  return userLogged ? <Component {...props} /> : <Redirect to="/login" />;
}
