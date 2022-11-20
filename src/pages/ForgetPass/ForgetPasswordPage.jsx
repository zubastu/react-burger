import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ForgotPassForm from "../../components/ForgotPassForm/ForgotPassForm";

const ForgetPasswordPage = () => {
  return (
    <>
      <AppHeader />
      <PageContentContainer>
        <ForgotPassForm />
      </PageContentContainer>
    </>
  );
};

export default ForgetPasswordPage;
