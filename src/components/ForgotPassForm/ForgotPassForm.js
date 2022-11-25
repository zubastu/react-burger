import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";

const ForgotPassForm = () => {
  const { values, handleChange, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values, isValid);
  };
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
