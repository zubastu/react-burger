import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNavigationLinks = () => {
  return (
    <nav>
      <NavLink to="">Профиль</NavLink>
      <NavLink to="">История заказов</NavLink>
      <NavLink to="">Выход</NavLink>
      <p>В этом разделе вы можете изменить свои персональные данные</p>
    </nav>
  );
};

export default ProfileNavigationLinks;
