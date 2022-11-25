import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";

const RestorePassForm = () => {
  const { values, handleChange, isValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values, isValid);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
      <FormHeading text="Регистрация" extraClass="mb-6" />
      <PasswordInput
        name={"password"}
        placeholder="Логин"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.password || ""}
      />
      <Input
        name={"code"}
        placeholder="Введите код из письма"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.code || ""}
      />
      <Button disabled={!isValid} htmlType="submit" extraClass="mb-20">
        Сохранить
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

export default RestorePassForm;
