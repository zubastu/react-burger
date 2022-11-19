import React, { useCallback } from "react";
import styles from "./SelectedIngredients.module.css";
import MaterialInCart from "../MaterialInCart/MaterialInCart";
import { useDispatch, useSelector } from "react-redux";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { UPDATE_INGREDIENTS } from "../../services/actions/ingredients";

const SelectedIngredients = () => {
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.ingredients
  );
  const dispatch = useDispatch();

  const moveIngredient = useCallback(
    (dIndex, hIndex) => {
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
      {selectedBun.type && (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            price={selectedBun.price}
            text={`${selectedBun.name} (верх)`}
            thumbnail={selectedBun.image}
            isLocked={true}
            type="top"
          />
        </div>
      )}
      {selectedIngredients.length > 0 &&
        selectedIngredients.map((item, index) => (
          <MaterialInCart
            image={item.image}
            price={item.price}
            name={item.name}
            _id={item._id}
            id={item.id}
            key={item.id}
            product={item}
            index={index}
            moveIngredient={moveIngredient}
          />
        ))}
      {selectedBun.type && (
        <div className={`${styles.constructor} ml-8`}>
          <ConstructorElement
            price={selectedBun.price}
            text={`${selectedBun.name} (низ)`}
            thumbnail={selectedBun.image}
            isLocked={true}
            type="bottom"
          />
        </div>
      )}
    </div>
  );
};

export default SelectedIngredients;
