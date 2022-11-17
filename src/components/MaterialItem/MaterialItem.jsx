import React from "react";
import materialItemStyles from "./MaterialItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_INGREDIENT_DETAILS } from "../../services/actions/ingredients";
import { INGREDIENT_TYPES } from "../../utils/constants";

const MaterialItem = ({ material }) => {
  const { name, image, price } = material;
  const dispatch = useDispatch();
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.ingredients
  );

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
    if (material.name === selectedBun.name) return 1;
    const materialsArr = selectedIngredients.filter(
      (item) => item.name === name
    );
    return materialsArr.length;
  };

  return (
    <div
      className={materialItemStyles.material}
      onClick={handleClick}
      ref={dragRef}
    >
      {findCountMaterials() > 0 && (
        <Counter
          count={findCountMaterials()}
          size="small"
          extraClass={materialItemStyles.material__counter}
        />
      )}
      <img src={image} alt={name} ref={dragPreviewRef} />
      <div className={`${materialItemStyles.material__price} mt-1 mb-1`}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p
        className={`${materialItemStyles.material__name} text text_type_main-small`}
      >
        {name}
      </p>
    </div>
  );
};

MaterialItem.propTypes = {
  material: INGREDIENT_TYPES.isRequired,
};

export default MaterialItem;
