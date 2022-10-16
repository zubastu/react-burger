import React, { useEffect, useRef, useState } from "react";
import burgerConstructorStyles from "./BurgerIngredients.module.css";
import MaterialItem from "../MaterialItem/MaterialItem";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useObserver } from "../../hoocs/useObserver";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients";

const BurgerIngredients = () => {
  //Логика табов
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

  // Логика ингредиентов
  const { bun, sauces, main, isModalIngredientOpen } = useSelector(
    (store) => store.ingredients
  );

  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient-cart",
    drop(ingredient) {
      dispatch({ type: DELETE_INGREDIENT, payload: ingredient._id });
    },
  });

  return (
    <section
      ref={dropTarget}
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
