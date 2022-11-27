import React, { useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const RegisterPage = ({ auth }) => {
  const { isLogged } = useSelector((store) => store.login);
  const history = useHistory();
  useEffect(() => {
    !isLogged && auth();
  }, []);

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);
  return (
    <>
      <AppHeader />
      <PageContentContainer>
        <RegistrationForm />
      </PageContentContainer>
    </>
  );
};

RegisterPage.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default RegisterPage;
