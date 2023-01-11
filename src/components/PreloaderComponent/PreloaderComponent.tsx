import React from "react";
import styles from "./PreloaderComponent.module.css";
import preloaderImage from "../../images/arrowImage.svg";

const PreloaderComponent = () => {
  return (
    <section className={styles.container}>
      <img className={styles.img} src={preloaderImage} alt="Загрузка" />
    </section>
  );
};

export default PreloaderComponent;
