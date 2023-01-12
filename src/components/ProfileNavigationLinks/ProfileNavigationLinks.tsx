import React, { FC } from "react";
import styles from "./ProfileNavigationLinks.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { deleteCookie } from "../../utils/cookie";
import { LOGOUT } from "../../services/actions/login";
import { RESET_USER_INFO } from "../../services/actions/user";
import { api } from "../../utils/api";
import { LOGOUT_URL, useAppDispatch } from "../../utils/constants";

type TProfileNavigationLinksProps = {
  text: string;
};

const ProfileNavigationLinks: FC<TProfileNavigationLinksProps> = ({ text }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  const { logout } = api(LOGOUT_URL);

  const handleLogout = () => {
    logout()
      .then((res) => {
        if (res && res.success) {
          dispatch({ type: LOGOUT });
          dispatch({ type: RESET_USER_INFO });
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

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
          <button
            className={`${styles.button} text text_type_main-medium text_color_inactive`}
            onClick={handleLogout}
          >
            Выход
          </button>
        </li>
      </ul>
      <p className={`${styles.text} text text_type_main-default mt-20`}>
        {text}
      </p>
    </nav>
  );
};

export default ProfileNavigationLinks;
