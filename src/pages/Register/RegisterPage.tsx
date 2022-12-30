import React, { FC, useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../services/asyncActions/auth";
import { RESET_REGISTRATION } from "../../services/actions/register";
import { TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((store: TStore) => store.login);
  const { hasRequest } = useAppSelector((store: TStore) => store.register);
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
