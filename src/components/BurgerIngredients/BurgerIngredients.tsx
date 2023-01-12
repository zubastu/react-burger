import React, { useRef, RefObject } from "react";
import styles from "./BurgerIngredients.module.css";
import MaterialItem from "../MaterialItem/MaterialItem";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useObserver } from "../../hooks/useObserver";
import { TStore, TIngredient } from "../../types";
import { useAppSelector } from "../../utils/constants";

const BurgerIngredients = () => {
  const sauceRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  let observerBun = useObserver(bunRef);
  let observerSauces = useObserver(sauceRef);
  let observerMain = useObserver(mainRef);

  const handleClick = (ref: RefObject<HTMLDivElement>): void =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const { bun, sauces, main } = useAppSelector(
    (store: TStore) => store.ingredients
  );

  return (
    <section className={`${styles.container} `}>
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

      <div className={`${styles.scroll} custom-scroll mt-10`}>
        <h2 id="one" className="text text_type_main-medium">
          Булки
        </h2>
        <div
          ref={bunRef}
          className={`${styles.material_container} pt-6 pl-4 pr-4`}
        >
          {bun &&
            bun.map((bunItem: TIngredient) => (
              <MaterialItem material={bunItem} key={bunItem._id} />
            ))}
        </div>
        <h2 id="two" className="text text_type_main-medium mt-10">
          Соусы
        </h2>
        <div
          ref={sauceRef}
          className={`${styles.material_container} pt-6 pl-4 pr-4`}
        >
          {sauces &&
            sauces.map((sauce: TIngredient) => (
              <MaterialItem material={sauce} key={sauce._id} />
            ))}
        </div>
        <h2 id="three" className="text text_type_main-medium mt-10">
          Начинки
        </h2>
        <div
          ref={mainRef}
          id="ingredients-container"
          className={`${styles.material_container} pt-6 pl-4 pr-4`}
        >
          {main &&
            main.map((mainItem: TIngredient) => (
              <MaterialItem material={mainItem} key={mainItem._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
