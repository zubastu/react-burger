import React, { useEffect } from "react";
import styles from "../LoginForm/LoginForm.module.css";
import FormHeading from "../FormHeading/FormHeading";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormNavigationElement from "../FormNavigationElement/FormNavigationElement";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RESET_REQUEST_ACCEPT } from "../../services/actions/restore-pass";
import { postRegistrationDetails } from "../../services/asyncActions/auth";

const RestorePassForm = () => {
  const dispatch = useDispatch();
  const { values, handleChange, isValid } = useForm();
  const { hasRequest } = useSelector((store) => store.resetPassword);
  const history = useHistory();
  const { isLogged } = useSelector((store) => store.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegistrationDetails(values));
  };

  useEffect(() => {
    if (!hasRequest) {
      history.push("/login");
      dispatch({ type: RESET_REQUEST_ACCEPT });
    } else if (isLogged) {
      history.push("/profile");
    }
  }, [hasRequest, isLogged]);

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.form}>
      <FormHeading text="Восстановление пароля" extraClass="mb-6" />
      <PasswordInput
        name={"password"}
        placeholder="Введите новый пароль"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.password || ""}
        required
      />
      <Input
        name={"token"}
        placeholder="Введите код из письма"
        extraClass="mb-6"
        onChange={handleChange}
        value={values.token || ""}
        required
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
