import styles from "./IngredientDetails.module.css";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../utils/constants";

type TIngredientDetailsProps = {
  hasHeading: boolean;
};
interface IIngredientDetailsParams {
  ingredientId: string;
}

const IngredientDetails: FC<TIngredientDetailsProps> = ({ hasHeading }) => {
  const { ingredientId } = useParams<IIngredientDetailsParams>();

  const { ingredients } = useAppSelector((store) => store.ingredients);
  const ingredient = ingredients.find(({ _id }) => ingredientId === _id);

  return (
    <>
      {ingredient ? (
        <div className={styles.content}>
          {hasHeading ? (
            <h2 className="text text_type_main-large">Детали ингредиента</h2>
          ) : null}
          <img
            className={`${styles.image} mb-4`}
            src={String(ingredient.image_large)}
            alt={ingredient.name}
          />
          <h3 className={`${styles.heading} text text_type_main-medium mb-8`}>
            {ingredient.name}
          </h3>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <p className="text text_type_main-small text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {ingredient.calories}
              </p>
            </li>
            <li className={styles.list__item}>
              <p className="text text_type_main-small text_color_inactive">
                Белки, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {ingredient.proteins}
              </p>
            </li>
            <li className={styles.list__item}>
              <p className="text text_type_main-small text_color_inactive">
                Жиры, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {ingredient.fat}
              </p>
            </li>
            <li className={styles.list__item}>
              <p className="text text_type_main-small text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {ingredient.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default IngredientDetails;
