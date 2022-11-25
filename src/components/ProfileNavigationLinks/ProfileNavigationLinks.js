import React from "react";
import styles from "./ProfileNavigationLinks.module.css";
import { Link, useLocation } from "react-router-dom";

const ProfileNavigationLinks = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={`${styles.link} text text_type_main-medium ${
              pathname === "/profile"
                ? "text_color_primary"
                : "text_color_inactive"
            }`}
            to="/profile"
          >
            Профиль
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={`${styles.link} text text_type_main-medium ${
              pathname === "/profile/orders"
                ? "text_color_primary"
                : "text_color_inactive"
            }`}
            to="/profile/orders"
          >
            История заказов
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={`${styles.link} text text_type_main-medium text_color_inactive`}
            to="/login"
          >
            Выход
          </Link>
        </li>
      </ul>
      <p className={`${styles.text} text text_type_main-default mt-20`}>
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </nav>
  );
};

export default ProfileNavigationLinks;
