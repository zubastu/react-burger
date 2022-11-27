import React, { useEffect } from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { FORGOT_PASS_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../../services/actions/forgot-pass";

const ForgotPassForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid } = useForm();
  const { fetchPost } = api(FORGOT_PASS_URL);
  const history = useHistory();
  const { isLogged } = useSelector((store) => store.login);

  const postRegistrationDetails = (data) => {
    dispatch({ type: START_FORGOT_PASS });
    fetchPost(data)
      .then((response) => {
        if (response && response.success) {
          dispatch({ type: SUCCESS_FORGOT_PASS, payload: response });
          dispatch({ type: ERROR_FORGOT_PASS });
          history.push("/reset-password");
        }
      })
      .catch((err) => dispatch({ type: ERROR_FORGOT_PASS }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRegistrationDetails(values);
  };

  useEffect(() => {
    if (isLogged) {
      history.push("/profile");
    }
  }, [isLogged]);

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
      <FormHeading text="Восстановление пароля" extraClass="mb-6" />
      <EmailInput
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        placeholder="Укажите e-mail"
        extraClass="mb-6"
      />
      <Button disabled={!isValid} htmlType="submit" extraClass="mb-20">
        Восстановить
      </Button>
      <FormNavigationElement
        text="Вспомнили пароль?"
        linkText="Войти"
        route="/login"
        extraClass="mb-6"
      />
    </form>
  );
};

export default ForgotPassForm;
