import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <AppHeader />
      <PageContentContainer>
        <LoginForm />
      </PageContentContainer>
    </>
  );
};

export default LoginPage;
