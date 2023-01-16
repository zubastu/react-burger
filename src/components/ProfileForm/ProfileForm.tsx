import React, { FC, useEffect } from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../hooks/useForm";
import { changeUserInfo } from "../../services/asyncActions/user";
import { TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const ProfileForm: FC = () => {
  const dispatch = useAppDispatch();
  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email } = useAppSelector((store: TStore) => store.user.user);

  useEffect(() => {
    setValues({ name, email });
  }, [name, email, setValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeUserInfo(values));
  };

  const handleCancel = () => {
    setValues({ name, email, password: "" });
  };

  const isChanged =
    name !== values.name || (email !== values.email && values.password !== "");

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
      {isChanged ? (
        <div className={styles.buttonsContainer}>
          <Button
            type="secondary"
            htmlType="button"
            extraClass="mb-20"
            onClick={handleCancel}
          >
            Отмена
          </Button>
          <Button type="secondary" htmlType="submit" extraClass="mb-20">
            Сохранить
          </Button>
        </div>
      ) : null}
    </form>
  );
};

export default ProfileForm;
