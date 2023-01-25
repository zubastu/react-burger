import React, { FC, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { TChildrenNode } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import { checkAuth } from "../../services/asyncActions/auth";

type TProtectedRouteProps = RouteProps & { children?: TChildrenNode };

const ProtectedRoute: FC<TProtectedRouteProps> = ({ children, ...rest }) => {
  const { isLogged } = useAppSelector((store) => store.login);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [isLogged, dispatch]);

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
