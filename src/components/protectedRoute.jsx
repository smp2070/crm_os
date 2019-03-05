import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

import Container from "../hoc/container";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
      if (!getCurrentUser())
          return (
            <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        // return Component ? <Component {...props} /> : render(props);
        return Component ? <Container><Component {...props} /></Container> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;