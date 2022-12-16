import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { TChildrenNode, TStore } from "../../types";

type TProtectedRouteProps = {
  children: TChildrenNode;
  path: string;
};

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
