import React from "react";
import styles from "./FormNavigationElement.module.css";
import { Link } from "react-router-dom";

const FormNavigationElement = ({ text, linkText, route }) => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-small text_color_inactive">{text}</p>
      <Link className={`${styles.link} text text_type_main-small`} to={route}>
        {linkText}
      </Link>
    </div>
  );
};

export default FormNavigationElement;
