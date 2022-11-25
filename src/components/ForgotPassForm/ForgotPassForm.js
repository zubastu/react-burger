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
import { postRegistrationDetails } from "../../services/asyncActions/forgot-pass";
import { useHistory } from "react-router-dom";

const ForgotPassForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid } = useForm();
  const { hasRequest } = useSelector((store) => store.forgetPassword);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegistrationDetails(values));
  };

  useEffect(() => {
    if (hasRequest) {
      history.push("/reset-password");
    }
  }, [hasRequest]);

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
