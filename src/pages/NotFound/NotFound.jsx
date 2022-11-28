import React from "react";
import image from "../../images/404.png";
import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Не найдено" />
      <button
        className={styles.button}
        type="secondary"
        color="white"
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </div>
  );
};

export default NotFound;
