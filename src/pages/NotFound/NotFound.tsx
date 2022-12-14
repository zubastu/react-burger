import React, { FC } from "react";
import image from "../../images/404.png";
import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";

const NotFound: FC = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Не найдено" />
      <button
        className={styles.button}
        type="button"
        color="white"
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </div>
  );
};

export default NotFound;
