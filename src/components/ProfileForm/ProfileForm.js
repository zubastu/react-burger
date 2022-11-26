import React, { useEffect } from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenAccess } from "../../services/asyncActions/refreshToken";
import { getUserInfo } from "../../services/asyncActions/user";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid, setValues } = useForm();
  const { name, email } = useSelector((store) => store.user.user);

  useEffect(() => {
    dispatch(getUserInfo());
    setValues({ name, email });
  }, [dispatch, name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(refreshTokenAccess());
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
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
        onChange={handleChange}
        value={values.name || ""}
      />
      <Input
        type="text"
        placeholder="Логин"
        name="email"
        error={false}
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.email || ""}
      />
      <PasswordInput
        name="password"
        placeholder="Пароль"
        extraClass="mb-6"
        icon="EditIcon"
        onChange={handleChange}
        value={values.password || ""}
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
