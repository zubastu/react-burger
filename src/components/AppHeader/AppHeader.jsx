import React from "react";
import styles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../NavigationLink/NavigationLink";
import { Link, useLocation } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <NavigationLink path="/" text="Конструктор" propStyles="mr-2">
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
          </NavigationLink>

          <NavigationLink path="/profile/orders" text="Лента заказов">
            <ListIcon
              type={pathname === "/profile/orders" ? "primary" : "secondary"}
            />
          </NavigationLink>
        </div>
        <Link to="/" className={styles.nav__item}>
          <Logo />
        </Link>
        <div className={styles.nav__item}>
          <NavigationLink path="/profile" text="Личный кабинет">
            <ProfileIcon
              type={pathname === "/profile" ? "primary" : "secondary"}
            />
          </NavigationLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
