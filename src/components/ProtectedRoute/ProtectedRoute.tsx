import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { TChildrenNode, TStore } from "../../types";

type TProtectedRouteProps = RouteProps & { children?: TChildrenNode };

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, ...rest }) => {
  const { isLogged } = useSelector((store: TStore) => store.login);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
