import ingredientDetailsStyles from "./IngredientDetails.module.css";
import React from "react";
import { INGREDIENT_TYPES } from "../../utils/constants";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const { image_large, name, calories, fat, carbohydrates, proteins } =
    useSelector((store) => store.ingredients.selectedIngredient);

  return (
    <>
      <div className={ingredientDetailsStyles.content}>
        <img
          className={`${ingredientDetailsStyles.image} mb-4`}
          src={image_large}
          alt={name}
        />
        <h3
          className={`${ingredientDetailsStyles.heading} text text_type_main-medium mb-8`}
        >
          {name}
        </h3>
        <ul className={ingredientDetailsStyles.list}>
          <li className={ingredientDetailsStyles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {calories}
            </p>
          </li>
          <li className={ingredientDetailsStyles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Белки, г
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {proteins}
            </p>
          </li>
          <li className={ingredientDetailsStyles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Жиры, г
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {fat}
            </p>
          </li>
          <li className={ingredientDetailsStyles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: INGREDIENT_TYPES,
};

export default IngredientDetails;
