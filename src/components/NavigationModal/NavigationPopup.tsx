import React, { FC } from "react";
import styles from "./NavigationPopup.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TNavigationPopupProps = {
  menuActive: boolean;
  closeMobileModal: () => void;
};

const NavigationPopup: FC<TNavigationPopupProps> = ({
  menuActive = true,
  closeMobileModal,
}) => {
  const location = useLocation();

  const popupClassName = menuActive
    ? `${styles.navigationPopup} ${styles.navigationPopup_type_active}`
    : styles.navigationPopup;

  const overlayClassName = menuActive
    ? `${styles.navigationPopup__overlay} ${styles.navigationPopup__overlay_type_active}`
    : styles.navigationPopup__overlay;

  const sliderClassName = menuActive
    ? `${styles.navigationPopup__links} ${styles.navigationPopup__links_type_active}`
    : styles.navigationPopup__links;

  return (
    <div className={popupClassName}>
      <div className={overlayClassName} onClick={closeMobileModal} />

      <div
        className={sliderClassName}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.navigationPopup__closeButtonContainer}>
          <CloseIcon type="primary" onClick={closeMobileModal} />
        </div>
        <nav className={styles.navigationPopup__navigationContainer}>
          <NavLink
            onClick={closeMobileModal}
            to="/"
            className={
              location.pathname === "/"
                ? `${styles.navigationPopup__link} ${styles.navigationPopup__link_type_active}`
                : styles.navigationPopup__link
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={closeMobileModal}
            to="/profile"
            className={
              location.pathname.includes("/profile")
                ? `${styles.navigationPopup__link} ${styles.navigationPopup__link_type_active}`
                : styles.navigationPopup__link
            }
          >
            Профиль
          </NavLink>
          <NavLink
            onClick={closeMobileModal}
            to="/feed"
            className={
              location.pathname.includes("/feed")
                ? `${styles.navigationPopup__link} ${styles.navigationPopup__link_type_active}`
                : styles.navigationPopup__link
            }
          >
            Лента заказов
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavigationPopup;
