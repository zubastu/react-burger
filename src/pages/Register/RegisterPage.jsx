import React, { useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store) => store.login);
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
      <RegistrationForm />
    </PageContentContainer>
  );
};

export default RegisterPage;
