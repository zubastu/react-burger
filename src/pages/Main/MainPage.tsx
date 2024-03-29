import React, { FC, useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import MobilePriceInterface from "../../components/MobilePriceInterfce/MobilePriceInterface";
import BurgerConstructorMobile from "../../components/BurgerConstructorMobile/BurgerConstructorMobile";
import { useWindowSize } from "../../utils/useWindowSize";
enum ComponentTypes {
  ingredients = "ingredients",
  constructor = "constructor",
}

const MainPage: FC = () => {
  const [currentComponent, setCurrentComponent] = useState(
    ComponentTypes.ingredients
  );

  const { width } = useWindowSize();

  const handleSwitchComponent = (value: ComponentTypes) => {
    setCurrentComponent(value);
  };

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
        {currentComponent === ComponentTypes.ingredients ? (
          <BurgerIngredients />
        ) : null}
        {currentComponent === ComponentTypes.constructor ? (
          <BurgerConstructorMobile
            componentType={currentComponent}
            setCurrentComponent={handleSwitchComponent}
          />
        ) : null}
        <MobilePriceInterface
          componentType={currentComponent}
          setCurrentComponent={handleSwitchComponent}
        />
      </Main>
    );
  }
};

export default MainPage;
