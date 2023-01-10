import React, { FC } from "react";
import styles from "./MaterialItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { OPEN_INGREDIENT_DETAILS } from "../../services/actions/ingredients";
import { Link, useLocation } from "react-router-dom";
import { TIngredient, TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

type TMaterialItemProps = {
  material: TIngredient;
};

const MaterialItem: FC<TMaterialItemProps> = ({ material }) => {
  const { name, image, price } = material;
  const dispatch = useAppDispatch();
  const { selectedIngredients, selectedBun } = useAppSelector(
    (store: TStore) => store.ingredients
  );
  const location = useLocation();

  const [, dragRef, dragPreviewRef] = useDrag({
    type: "ingredient",
    item: material,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const handleClick = () => {
    dispatch({
      type: OPEN_INGREDIENT_DETAILS,
      payload: material,
    });
  };

  const findCountMaterials = () => {
    if (material.name === selectedBun.name) return 2;
    const materialsArr = selectedIngredients.filter(
      (item: TIngredient) => item.name === name
    );
    return materialsArr.length;
  };

  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/ingredients/${material._id}`,
        state: { background: location },
      }}
    >
      <div className={styles.material} onClick={handleClick} ref={dragRef}>
        {findCountMaterials() > 0 && (
          <Counter
            count={findCountMaterials()}
            size="small"
            extraClass={styles.material__counter}
          />
        )}
        <img src={image} alt={name} ref={dragPreviewRef} />
        <div className={`${styles.material__price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>

        <p className={`${styles.material__name} text text_type_main-small`}>
          {name}
        </p>
      </div>
    </Link>
  );
};

export default MaterialItem;
