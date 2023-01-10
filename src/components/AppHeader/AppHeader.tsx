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
import { TIsLogged, TPathnameString, TStore } from "../../types";
import { useAppSelector } from "../../utils/constants";

const AppHeader: FC = () => {
  const location = useLocation();
  const { pathname }: TPathnameString = location;
  const { isLogged }: TIsLogged = useAppSelector(
    (store: TStore) => store.login
  );
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
        <Link to="/" className={styles.nav__item}>
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
    </header>
  );
};

export default AppHeader;
