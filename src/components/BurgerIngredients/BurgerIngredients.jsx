import React, { useEffect, useRef, useState } from "react";
import burgerConstructorStyles from "./BurgerIngredients.module.css";
import MaterialItem from "../MaterialItem/MaterialItem";
import PropTypes from "prop-types";
import { INGREDIENT_TYPES } from "../../utils/constants";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useObserver } from "../../hoocs/useObserver";

const BurgerIngredients = ({
  bun,
  sauces,
  main,
  selectIngredient,
  selectedBun,
  selectedIngredients,
  selectBun = null,
}) => {
  const [current, setCurrent] = useState("one");

  const sauceRef = useRef();
  const bunRef = useRef();
  const mainRef = useRef();

  let observerBun = useObserver(bunRef);
  let observerSauces = useObserver(sauceRef);
  let observerMain = useObserver(mainRef);

  useEffect(() => {
    const element = document.getElementById(current);
    element.scrollIntoView({ behavior: "smooth" });
  }, [current]);

  return (
    <section
      id="ingredients-container"
      className={`${burgerConstructorStyles.container} `}
    >
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div style={{ display: "flex" }}>
        <Tab value="one" active={observerBun.intersecting} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab
          value="two"
          active={observerSauces.intersecting}
          onClick={setCurrent}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={observerMain.intersecting}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>

      <div className={`${burgerConstructorStyles.scroll} custom-scroll mt-10`}>
        <h2 id="one" className="text text_type_main-medium">
          Булки
        </h2>
        <div
          ref={bunRef}
          className={`${burgerConstructorStyles.material_container} pt-6 pl-4 pr-4`}
        >
          {bun &&
            bun.map((bunItem) => (
              <MaterialItem
                selectedBun={selectedBun}
                material={bunItem}
                key={bunItem._id}
                onSelect={selectBun}
              />
            ))}
        </div>
        <h2 id="two" className="text text_type_main-medium mt-10">
          Соусы
        </h2>
        <div
          ref={sauceRef}
          className={`${burgerConstructorStyles.material_container} pt-6 pl-4 pr-4`}
        >
          {sauces &&
            sauces.map((sauce) => (
              <MaterialItem
                selectedIngredients={selectedIngredients}
                material={sauce}
                key={sauce._id}
                onSelect={selectIngredient}
              />
            ))}
        </div>
        <h2 id="three" className="text text_type_main-medium mt-10">
          Начинки
        </h2>
        <div
          ref={mainRef}
          className={`${burgerConstructorStyles.material_container} pt-6 pl-4 pr-4`}
        >
          {main &&
            main.map((mainItem) => (
              <MaterialItem
                selectedIngredients={selectedIngredients}
                material={mainItem}
                key={mainItem._id}
                onSelect={selectIngredient}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  bun: PropTypes.array.isRequired,
  sauces: PropTypes.array.isRequired,
  main: PropTypes.array.isRequired,
  selectIngredient: PropTypes.func.isRequired,
  selectedBun: INGREDIENT_TYPES.isRequired,
  selectedIngredients: PropTypes.arrayOf(INGREDIENT_TYPES).isRequired,
};

export default BurgerIngredients;
