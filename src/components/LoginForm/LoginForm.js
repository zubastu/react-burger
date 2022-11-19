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
      <FormHeading text={"Вход"} extraClass={} />
      <EmailInput name={"email"} placeholder="Логин" extraClass={} />
      <PasswordInput name={"password"} placeholder="Логин" extraClass={} />
      <Button htmlType="submit" extraClass={}>Войти</Button>
      <FormNavigationElement
        text="Вы — новый пользователь?"
        linkText="Зарегистрироваться"
        route=""
        extraClass={}
      />
      <FormNavigationElement
        text="Забыли пароль?"
        linkText="Восстановить пароль"
        route=""
        extraClass={}
      />
    </form>
  );
};

export default LoginForm;
