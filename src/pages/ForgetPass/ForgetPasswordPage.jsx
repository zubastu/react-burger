import React, { useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ForgotPassForm from "../../components/ForgotPassForm/ForgotPassForm";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ForgetPasswordPage = () => {
  const history = useHistory();
  const { hasRequest } = useSelector((store) => store.resetPassword);

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
