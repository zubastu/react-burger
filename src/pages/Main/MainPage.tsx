import React, { FC, useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

const MainPage: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const setWindowSize = () => {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowSize);
    console.log(width);
    return () => {
      window.removeEventListener("resize", setWindowSize);
    };
  }, [width]);

  const isMediumSize = width <= 1140;
  if (!isMediumSize) {
    return (
      <Main>
        <BurgerIngredients />
        <BurgerConstructor />
      </Main>
    );
  } else {
    return (
      <Main>
        <BurgerIngredients />
      </Main>
    );
  }
};

export default MainPage;
