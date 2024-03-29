import React, { FC, useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { RESET_REGISTRATION } from "../../services/actions/register";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((store) => store.login);
  const { hasRequest } = useAppSelector((store) => store.register);
  const history = useHistory();

  useEffect(() => {
    if (hasRequest) {
      history.push("/login");
      dispatch({ type: RESET_REGISTRATION });
    }
  }, [hasRequest, dispatch, history]);

  useEffect(() => {
    !isLogged && dispatch(checkAuth(isLogged));
  }, [isLogged, dispatch]);

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);
  return (
    <PageContentContainer>
      <RegistrationForm />
    </PageContentContainer>
  );
};

export default RegisterPage;
