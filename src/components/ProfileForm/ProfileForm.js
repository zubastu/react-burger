import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";

const ProfileForm = () => {
  return (
    <form className={styles.form}>
      <FormHeading text="Регистрация" extraClass="mb-6" />
      <Input
        name="name"
        placeholder="Имя"
        extraClass="mb-6"
        type="text"
        icon="EditIcon"
        isIcon={true}
      />
      <EmailInput
        name="email"
        placeholder="E-mail"
        extraClass="mb-6"
        isIcon={true}
      />
      <PasswordInput
        name="password"
        placeholder="Пароль"
        extraClass="mb-6"
        isIcon={true}
      />
      <Button htmlType="submit" extraClass="mb-20">
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

export default ProfileForm;
