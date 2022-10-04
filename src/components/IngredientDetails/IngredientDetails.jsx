import ingredientDetailsStyles from "./IngredientDetails.module.css";
import React from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { INGREDIENT_TYPES } from "../../utils/constants";

const IngredientDetails = ({ isOpen, onClose, ingredient }) => {
  const { image_large, name, calories, fat, carbohydrates, proteins } =
    ingredient;
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          text="Детали ингредиента"
          extraClassName="pb-15"
        >
          <div className={ingredientDetailsStyles.content}>
            <img
              className={`${ingredientDetailsStyles.image} mb-4`}
              src={image_large}
              alt={name}
            />
            <h3 className="text text_type_main-medium mb-8">{name}</h3>
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
        </Modal>
      )}
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: INGREDIENT_TYPES,
  IsOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default IngredientDetails;
