import React, { useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";

const LoginPage = () => {
  const { isLogged } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    !isLogged && dispatch(checkAuth(isLogged));
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
