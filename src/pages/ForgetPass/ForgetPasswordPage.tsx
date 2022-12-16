import React, { useEffect, FC } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ForgotPassForm from "../../components/ForgotPassForm/ForgotPassForm";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TStore } from "../../types";

const ForgetPasswordPage: FC = () => {
  const history = useHistory();
  const { hasRequest } = useSelector((store: TStore) => store.resetPassword);

  useEffect(() => {
    if (hasRequest) {
      history.push("/reset-password");
    }
  }, [hasRequest]);

  return (
    <PageContentContainer>
      <ForgotPassForm />
    </PageContentContainer>
  );
};

export default ForgetPasswordPage;
