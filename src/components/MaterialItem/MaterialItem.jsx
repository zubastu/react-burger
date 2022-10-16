import React from "react";
import materialItemStyles from "./MaterialItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_INGREDIENT_DETAILS,
  ADD_INGREDIENT,
  SELECT_BUN,
} from "../../services/actions/ingredients";
import { INGREDIENT_TYPES } from "../../utils/constants";

const MaterialItem = ({ material }) => {
  const dispatch = useDispatch();
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.ingredients
  );

  const handleClick = () => {
    /* if (material.type !== "bun") {
      dispatch({ type: ADD_INGREDIENT, payload: material });
    } else {
      dispatch({ type: SELECT_BUN, payload: material });
    }*/
    dispatch({
      type: OPEN_INGREDIENT_DETAILS,
      payload: material,
    });
  };

  const { name, image, price } = material;

  const findCountMaterials = () => {
    if (material.name === selectedBun.name) return 1;
    const materialsArr = selectedIngredients.filter(
      (item) => item.name === name
    );
    return materialsArr.length;
  };

  return (
    <div className={materialItemStyles.material} onClick={handleClick}>
      {findCountMaterials() > 0 && (
        <Counter
          count={findCountMaterials()}
          size="small"
          extraClass={materialItemStyles.material__counter}
        />
      )}
      <img src={image} alt={name} />
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
  material: INGREDIENT_TYPES,
};

export default MaterialItem;
