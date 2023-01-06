import React, { FC, useEffect } from "react";
import Main from "../../components/Main/Main";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

const MainPage: FC = () => {
  return (
    <Main>
      <BurgerIngredients />
      <BurgerConstructor />
    </Main>
  );
};

export default MainPage;
