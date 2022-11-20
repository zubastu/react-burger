import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RestorePassForm from "../../components/RestorePassForm/RestorePassForm";

const RestorePasswordPage = () => {
  return (
    <>
      <AppHeader />
      <PageContentContainer>
        <RestorePassForm />
      </PageContentContainer>
    </>
  );
};

export default RestorePasswordPage;
