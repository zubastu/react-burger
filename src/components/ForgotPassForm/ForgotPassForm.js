import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";

const ForgotPassForm = () => {
  return (
    <form className={styles.form}>
      <FormHeading text="Восстановление пароля" extraClass="mb-6" />
      <EmailInput
        name={"email"}
        placeholder="Укажите e-mail"
        extraClass="mb-6"
      />
      <Button htmlType="submit" extraClass="mb-20">
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
