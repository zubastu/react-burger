import React from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileForm = () => {
  return (
    <form className={styles.form}>
      <FormHeading extraClass="mb-6" />
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
      <div className={styles.buttonsContainer}>
        <Button type="secondary" htmlType="button" extraClass="mb-20">
          Отмена
        </Button>
        <Button type="secondary" htmlType="submit" extraClass="mb-20">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
