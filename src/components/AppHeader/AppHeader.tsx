import React, { FC } from "react";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  LogoutIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../NavigationLink/NavigationLink";
import { Link, useLocation } from "react-router-dom";
import { TIsLogged, TPathnameString } from "../../types";
import { useAppSelector, useAppDispatch } from "../../utils/constants";
import logoSmall from "../../images/logoSmall.svg";
import { MOBILE_MODAL_OPEN } from "../../services/actions/mobileNavigationModal";

const AppHeader: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname }: TPathnameString = location;
  const { isLogged }: TIsLogged = useAppSelector((store) => store.login);

  const openMobileModal = () => {
    dispatch({ type: MOBILE_MODAL_OPEN });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <NavigationLink path="/" text="Конструктор" propStyles="mr-2">
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
          </NavigationLink>

          <NavigationLink path="/feed" include="feed" text="Лента заказов">
            <ListIcon
              type={pathname.includes("feed") ? "primary" : "secondary"}
            />
          </NavigationLink>
        </div>
        <Link to="/" className={styles.nav__itemCenter} data-testid="logo">
          <Logo />
        </Link>
        {isLogged ? (
          <div className={styles.nav__item}>
            <NavigationLink
              path="/profile"
              include="profile"
              text="Личный кабинет"
            >
              <ProfileIcon
                type={pathname.includes("profile") ? "primary" : "secondary"}
              />
            </NavigationLink>
          </div>
        ) : (
          <div className={styles.nav__item}>
            <NavigationLink path="/login" text="Войти">
              <LogoutIcon
                type={pathname === "/login" ? "primary" : "secondary"}
              />
            </NavigationLink>
          </div>
        )}
      </nav>

      <nav className={styles.nav_small}>
        <Link to="/" className={styles.nav_small__item} data-testid="logo">
          <img
            className={styles.headerLogoImage}
            src={logoSmall}
            alt="Логотип"
          />
        </Link>
        <button
          className={styles.headerModalButton}
          onClick={openMobileModal}
        ></button>
      </nav>
    </header>
  );
};

export default AppHeader;
