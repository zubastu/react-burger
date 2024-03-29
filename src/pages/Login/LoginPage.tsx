import React, { FC, useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useHistory, useLocation } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { getCookie } from "../../utils/cookie";
import { TLocationState } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const LoginPage: FC = () => {
  const { isLogged } = useAppSelector((store) => store.login);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation<TLocationState>();
  const redirectPathname = location.state?.from.pathname || "/";

  useEffect(() => {
    const token = getCookie("refreshToken");
    !isLogged && token && dispatch(checkAuth(isLogged));
  }, [dispatch, isLogged]);

  useEffect(() => {
    if (isLogged) {
      history.push(redirectPathname);
    }
  }, [isLogged, history, redirectPathname]);

  return (
    <PageContentContainer>
      <LoginForm />
    </PageContentContainer>
  );
};

export default LoginPage;
