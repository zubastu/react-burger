import React from "react";
import styles from "./ProfileNavigationLinks.module.css";
import { NavLink } from "react-router-dom";

const ProfileNavigationLinks = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            className={`${styles.link} text text_type_main-medium`}
            to="/profile"
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={`${styles.link} text text_type_main-medium`}
            to="/profile/orders"
          >
            История заказов
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            className={`${styles.link} text text_type_main-medium`}
            to="/login"
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={`${styles.text} text text_type_main-default mt-20`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};

export default ProfileNavigationLinks;
