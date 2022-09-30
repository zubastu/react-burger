import React from "react";
import burgerConstructorStyles from "./BurgerConstructor.module.css";
import MyTab from "../MyTab/MyTab";
import MaterialItem from "../MaterialItem/MaterialItem";

const BurgerConstructor = ({
  bun,
  sauces,
  main,
  selectBun,
  selectIngredient,
  selectedBun,
  selectedIngredients,
}) => {
  return (
    <section className={`${burgerConstructorStyles.container} custom-scroll`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <MyTab />
      <h2 className="text text_type_main-medium mt-10">Булки</h2>
      <div
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
      <h2 className="text text_type_main-medium mt-10">Соусы</h2>
      <div
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
      <h2 className="text text_type_main-medium mt-10">Начинки</h2>
      <div
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
    </section>
  );
};

export default BurgerConstructor;
