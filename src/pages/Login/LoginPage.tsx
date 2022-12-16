import React, { FC, useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { getCookie } from "../../utils/cookie";
import { TStore } from "../../types";

const LoginPage: FC = () => {
  const { isLogged } = useSelector((store: TStore) => store.login);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const token = getCookie("refreshToken");
    !isLogged && token && checkAuth(isLogged)(dispatch);
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
