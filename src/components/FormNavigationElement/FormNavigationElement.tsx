import React, { FC } from "react";
import styles from "./FormNavigationElement.module.css";
import { Link } from "react-router-dom";

type TFormNavProps = {
  text: string;
  linkText: string;
  route: string;
  extraClass: string;
};

const FormNavigationElement: FC<TFormNavProps> = ({
  text,
  linkText,
  route,
  extraClass,
}) => {
  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className="text text_type_main-small text_color_inactive">{text}</p>
      <Link className={`${styles.link} text text_type_main-small`} to={route}>
        {linkText}
      </Link>
    </div>
  );
};

export default FormNavigationElement;
