import React from "react";
import appHeaderStyles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../NavigationLink/NavigationLink";

const AppHeader = () => {
  return (
    <header className={appHeaderStyles.header}>
      <nav className={appHeaderStyles.nav}>
        <div className={appHeaderStyles.nav__item}>
          <NavigationLink path="/" text="Конструктор" styles="mr-2">
            <BurgerIcon type="secondary" />
          </NavigationLink>

          <NavigationLink path="/" text="Лента заказов">
            <ListIcon type="secondary" />
          </NavigationLink>
        </div>
        <a href="#" className={appHeaderStyles.nav__item}>
          <Logo />
        </a>
        <div className={appHeaderStyles.nav__item}>
          <NavigationLink path="/" text="Личный кабинет">
            <ProfileIcon type="secondary" />
          </NavigationLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
