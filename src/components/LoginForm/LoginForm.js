import React from "react";
import styles from "./LoginForm.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormHeading from "../FormHeading/FormHeading";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <FormHeading text={"Вход"} extraClass="mb-6" />
      <EmailInput name={"email"} placeholder="Логин" extraClass="mb-6" />
      <PasswordInput name={"password"} placeholder="Логин" extraClass="mb-6" />
      <Button htmlType="submit" extraClass="mb-20">
        Войти
      </Button>
      <FormNavigationElement
        text="Вы — новый пользователь?"
        linkText="Зарегистрироваться"
        route="/register"
        extraClass="mb-6"
      />
      <FormNavigationElement
        text="Забыли пароль?"
        linkText="Восстановить пароль"
        route="/reset-password"
        extraClass="mb-6"
      />
    </form>
  );
};

export default LoginForm;
