import React from "react";
import image from "../../images/404.png";
import styles from "./NotFound.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Не найдено" />
      <Button
        htmlType="button"
        size="medium"
        type="secondary"
        onClick={() => history.goBack()}
      >
        Назад
      </Button>
    </div>
  );
};

export default NotFound;
