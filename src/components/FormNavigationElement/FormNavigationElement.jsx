import React from "react";
import styles from "./FormNavigationElement.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FormNavigationElement = ({ text, linkText, route, extraClass }) => {
  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className="text text_type_main-small text_color_inactive">{text}</p>
      <Link className={`${styles.link} text text_type_main-small`} to={route}>
        {linkText}
      </Link>
    </div>
  );
};

FormNavigationElement.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  extraClass: PropTypes.string.isRequired,
};

export default FormNavigationElement;
