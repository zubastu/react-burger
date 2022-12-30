import React, { FC, useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { getCookie } from "../../utils/cookie";
import { TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const LoginPage: FC = () => {
  const { isLogged } = useAppSelector((store: TStore) => store.login);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = getCookie("refreshToken");
    !isLogged && token && dispatch(checkAuth(isLogged));
  }, []);

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);
  return (
    <PageContentContainer>
      <LoginForm />
    </PageContentContainer>
  );
};

export default LoginPage;
