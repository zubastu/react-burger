import React from "react";
import styles from "./LoginForm.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormHeading from "../FormHeading/FormHeading";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../services/asyncActions/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(values));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <FormHeading text={"Вход"} extraClass="mb-6" />
      <EmailInput
        onChange={handleChange}
        value={values.email || ""}
        name={"email"}
        placeholder="Логин"
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password || ""}
        name={"password"}
        placeholder="Логин"
        extraClass="mb-6"
      />
      <Button disabled={!isValid} htmlType="submit" extraClass="mb-20">
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
        route="/forgot-password"
        extraClass="mb-6"
      />
    </form>
  );
};

export default LoginForm;
