import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <>
      <AppHeader />
      <PageContentContainer>
        <RegistrationForm />
      </PageContentContainer>
    </>
  );
};

export default RegisterPage;
