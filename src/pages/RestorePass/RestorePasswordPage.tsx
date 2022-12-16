import React, { FC } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import RestorePassForm from "../../components/RestorePassForm/RestorePassForm";

const RestorePasswordPage: FC = () => {
  return (
    <PageContentContainer>
      <RestorePassForm />
    </PageContentContainer>
  );
};

export default RestorePasswordPage;
