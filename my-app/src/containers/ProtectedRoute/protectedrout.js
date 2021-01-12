import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useLocalStorage } from "@rehooks/local-storage";

const ProtectedRoute = ({
  component: Component,
  isProtectedPage: isProtectedPage,
  redirect: redirectUrl,
  ...props
}) => {
  
  const [email] = useLocalStorage("Email");

  return (
    <Route
      {...props}
      render={() => {
        if (isProtectedPage == !!email) {
          return <Component />;
        } else {
          return <Redirect to={redirectUrl} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
