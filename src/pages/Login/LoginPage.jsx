import React from "react";
import styles from "./LoginPage.module.css";
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
