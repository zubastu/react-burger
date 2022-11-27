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
import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
} from "../../services/actions/user";
const { fetchSecurePatch } = api(USER_INFO_URL);

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm();
  const { name, email } = useSelector((store) => store.user.user);

  const changeUserInfo = (data) => {
    dispatch({ type: GET_USER_INFO_START });
    return fetchSecurePatch(data)
      .then((response) => {
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
      })
      .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
  };

  useEffect(() => {
    setValues({ name, email });
  }, [name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeUserInfo(values);
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
