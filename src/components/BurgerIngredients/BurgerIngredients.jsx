import React, { useRef } from "react";
import burgerConstructorStyles from "./BurgerIngredients.module.css";
import MaterialItem from "../MaterialItem/MaterialItem";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useObserver } from "../../hoocs/useObserver";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const BurgerIngredients = () => {
  const sauceRef = useRef();
  const bunRef = useRef();
  const mainRef = useRef();

  let observerBun = useObserver(bunRef);
  let observerSauces = useObserver(sauceRef);
  let observerMain = useObserver(mainRef);

  const handleClick = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  // Логика ингредиентов
  const { bun, sauces, main, isModalIngredientOpen } = useSelector(
    (store) => store.ingredients
  );

  return (
    <section
      id="ingredients-container"
      className={`${burgerConstructorStyles.container} `}
    >
      {isModalIngredientOpen && (
        <Modal
          text="Детали ингредиента"
          extraClassName="pb-15"
          type="ingredient-modal"
        >
          <IngredientDetails />
        </Modal>
      )}

      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div style={{ display: "flex" }}>
        <Tab
          value="one"
          active={observerBun.intersecting}
          onClick={() => handleClick(bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={observerSauces.intersecting}
          onClick={() => handleClick(sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={observerMain.intersecting}
          onClick={() => handleClick(mainRef)}
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
              <MaterialItem material={bunItem} key={bunItem._id} />
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
              <MaterialItem material={sauce} key={sauce._id} />
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
              <MaterialItem material={mainItem} key={mainItem._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
