import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import Main from "../components/Main/Main";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <Main>
        <BurgerIngredients />
        <BurgerConstructor />
      </Main>
    </>
  );
};

export default MainPage;
