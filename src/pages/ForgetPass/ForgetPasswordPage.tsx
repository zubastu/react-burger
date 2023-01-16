import React, { useEffect, FC } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ForgotPassForm from "../../components/ForgotPassForm/ForgotPassForm";
import { useHistory } from "react-router-dom";
import { TStore } from "../../types";
import { useAppSelector } from "../../utils/constants";

const ForgetPasswordPage: FC = () => {
  const history = useHistory();
  const { hasRequest } = useAppSelector((store: TStore) => store.resetPassword);

  useEffect(() => {
    if (hasRequest) {
      history.push("/reset-password");
    }
  }, [hasRequest, history]);

  return (
    <PageContentContainer>
      <ForgotPassForm />
    </PageContentContainer>
  );
};

export default ForgetPasswordPage;
