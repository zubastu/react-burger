import React, { FC } from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { postRegistrationDetails } from "../../services/asyncActions/register";

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postRegistrationDetails(values)(dispatch);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
      <FormHeading text="Регистрация" extraClass="mb-6" />
      <Input
        name={"name"}
        placeholder="Имя"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.name || ""}
        required={true}
      />
      <EmailInput
        name={"email"}
        placeholder="E-mail"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.email || ""}
        required={true}
      />
      <PasswordInput
        name={"password"}
        placeholder="Пароль"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.password || ""}
        required={true}
      />
      <Button disabled={!isValid} htmlType="submit" extraClass="mb-20">
        Зарегистрироваться
      </Button>
      <FormNavigationElement
        text="Уже зарегистрированы?"
        linkText="Войти"
        route="/login"
        extraClass="mb-6"
      />
    </form>
  );
};

export default RegistrationForm;
