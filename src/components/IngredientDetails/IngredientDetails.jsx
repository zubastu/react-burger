import styles from "./IngredientDetails.module.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";

const IngredientDetails = () => {
  const { ingredientId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ingredient) {
      return;
    }
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { all } = useSelector((store) => store.ingredients);

  let ingredient = all && all.find(({ _id }) => ingredientId === _id);

  return (
    <>
      {ingredient ? (
        <div className={styles.content}>
          <img
            className={`${styles.image} mb-4`}
            src={ingredient.image_large}
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
