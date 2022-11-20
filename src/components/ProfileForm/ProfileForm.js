import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";

const ProfileForm = () => {
  return (
    <form className={styles.form}>
      <FormHeading text="Регистрация" extraClass="mb-6" />
      <Input
        type="text"
        placeholder="Имя"
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
        extraClass="mb-6"
      />
      <Input
        type="text"
        placeholder="Логин"
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
        extraClass="mb-6"
      />
      <PasswordInput
        name="password"
        placeholder="Пароль"
        extraClass="mb-6"
        isIcon={true}
        icon="EditIcon"
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
