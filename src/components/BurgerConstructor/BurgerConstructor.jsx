import React from "react";
import burgerConstructorStyles from "./BurgerConstructor.module.css";
import MyTab from "../MyTab/MyTab";

const BurgerConstructor = () => {
  return (
    <section className={`${burgerConstructorStyles.container} custom-scroll`}>
      <h1 className="text text_type_main-large mt-20 mb-10">Соберите бургер</h1>
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
      <MyTab />
    </section>
  );
};

export default BurgerConstructor;
