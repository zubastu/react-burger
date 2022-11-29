import React, { useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { RESET_REGISTRATION } from "../../services/actions/register";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store) => store.login);
  const { hasRequest } = useSelector((store) => store.register);
  const history = useHistory();

  useEffect(() => {
    if (hasRequest) {
      history.push("/login");
      dispatch({ type: RESET_REGISTRATION });
    }
  }, [hasRequest]);

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
      <RegistrationForm />
    </PageContentContainer>
  );
};

export default RegisterPage;
