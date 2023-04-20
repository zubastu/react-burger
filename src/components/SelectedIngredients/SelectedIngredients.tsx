import React, { FC, useCallback } from "react";
import styles from "./SelectedIngredients.module.css";
import emptyIngredientImage from "../../images/emptyIngredient.svg";
import MaterialInCart from "../MaterialInCart/MaterialInCart";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { UPDATE_INGREDIENTS } from "../../services/actions/ingredients";
import { TConstructorIngredient } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const SelectedIngredients: FC = () => {
  const { selectedIngredients, selectedBun } = useAppSelector(
    (store) => store.ingredients
  );
  const dispatch = useAppDispatch();

  const moveIngredient = useCallback(
    (dIndex: { index: number }, hIndex: number) => {
      let draggingIngredient = selectedIngredients[dIndex.index];
      const newSelectedIngredients = [...selectedIngredients];
      newSelectedIngredients.splice(dIndex.index, 1);
      newSelectedIngredients.splice(hIndex, 0, draggingIngredient);

      dispatch({
        type: UPDATE_INGREDIENTS,
        payload: newSelectedIngredients,
      });
    },
    [selectedIngredients, dispatch]
  );

  return (
    <div className={styles.container}>
      {selectedBun.type ? (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            price={selectedBun.price}
            text={`${selectedBun.name} (верх)`}
            thumbnail={selectedBun.image}
            isLocked={true}
            type="top"
          />
        </div>
      ) : (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            thumbnail={emptyIngredientImage}
            text="Перетащите булку"
            price={0}
            isLocked={true}
            type="top"
          />
        </div>
      )}
      {selectedIngredients.length > 0 ? (
        selectedIngredients.map(
          (item: TConstructorIngredient, index: number) => (
            <MaterialInCart
              image={item.image}
              price={item.price}
              name={item.name}
              _id={item._id}
              key={item.id}
              product={item}
              index={index}
              moveIngredient={moveIngredient}
            />
          )
        )
      ) : (
        <MaterialInCart
          image={emptyIngredientImage}
          price={0}
          name="Перетащите ингредиенты"
          index={1}
          isLocked={true}
        />
      )}
      {selectedBun.type ? (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            price={selectedBun.price}
            text={`${selectedBun.name} (низ)`}
            thumbnail={selectedBun.image}
            isLocked={true}
            type="bottom"
          />
        </div>
      ) : (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            thumbnail={emptyIngredientImage}
            text="Перетащите булку"
            price={0}
            isLocked={true}
            type="bottom"
          />
        </div>
      )}
    </div>
  );
};

export default SelectedIngredients;
