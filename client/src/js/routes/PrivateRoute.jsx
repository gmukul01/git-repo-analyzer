import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <div>
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        </div>
      )
    }
  />
);

export default PrivateRoute;
