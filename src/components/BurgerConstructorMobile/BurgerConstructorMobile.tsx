import React, { FC } from "react";
import styles from "./styles.module.css";
import { TConstructorIngredient } from "../../types";

import { useAppSelector } from "../../utils/constants";
import IngredientItemMobile from "../IngredientItemMobile/IngredientItemMobile";

enum ComponentTypes {
  ingredients = "ingredients",
  constructor = "constructor",
}
interface IPropsInterface {
  componentType: string;
  setCurrentComponent: (value: ComponentTypes) => void;
}

const BurgerConstructorMobile: FC<IPropsInterface> = ({
  setCurrentComponent,
}) => {
  const { selectedIngredients, selectedBun } = useAppSelector(
    (store) => store.ingredients
  );

  return (
    <div className={styles.container}>
      <div className={styles.orderHeader}>
        <h4 className={`text text_type_main-large ${styles.headerText}`}>
          Заказ
        </h4>
        <button
          className={styles.closeButton}
          onClick={() => setCurrentComponent(ComponentTypes.ingredients)}
        ></button>
      </div>

      <div className={styles.ingredientsContainer}>
        {selectedBun.type ? (
          <IngredientItemMobile
            image={selectedBun.image_mobile}
            price={selectedBun.price}
            name={selectedBun.name + "(верх)"}
            _id={selectedBun._id}
            key={selectedBun.id}
            product={selectedBun}
          />
        ) : null}
        {selectedIngredients &&
          selectedIngredients.length > 0 &&
          selectedIngredients.map((item: TConstructorIngredient) => (
            <IngredientItemMobile
              image={item.image_mobile}
              price={item.price}
              name={item.name}
              _id={item._id}
              key={item.id}
              product={item}
            />
          ))}
        {selectedBun.type ? (
          <IngredientItemMobile
            image={selectedBun.image_mobile}
            price={selectedBun.price}
            name={selectedBun.name + "(низ)"}
            _id={selectedBun._id}
            key={selectedBun.id}
            product={selectedBun}
          />
        ) : null}
      </div>
    </div>
  );
};

export default BurgerConstructorMobile;
