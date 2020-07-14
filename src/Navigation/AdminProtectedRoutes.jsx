import React from "react";
import { Route, Redirect } from "react-router-dom";
const AdminProtectedRoutes = ({ component: Component, ...rest }) => {
  let isSignedIn = false;
  let checkUserType;
  const type = localStorage.getItem("type");
  if (type) {
    checkUserType = type.toString().split("")[type.length - 1];
    if (checkUserType == 1) {
      isSignedIn = true;
    }
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSignedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/auth/signin" />;
        }
      }}
    />
  );
};

export default AdminProtectedRoutes;
