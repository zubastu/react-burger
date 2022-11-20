import styles from "./IngredientDetails.module.css";
import React from "react";

const IngredientDetails = ({ ingredient }) => {
  /*const { image_large, name, calories, fat, carbohydrates, proteins } =
    ingredient;*/
  const { image_large, name, calories, fat, carbohydrates, proteins } =
    ingredient;

  return (
    <>
      <div className={styles.content}>
        <img className={`${styles.image} mb-4`} src={image_large} alt={name} />
        <h3 className={`${styles.heading} text text_type_main-medium mb-8`}>
          {name}
        </h3>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {calories}
            </p>
          </li>
          <li className={styles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Белки, г
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {proteins}
            </p>
          </li>
          <li className={styles.list__item}>
            <p className="text text_type_main-small text_color_inactive">
              Жиры, г
            </p>
            <p className="text text text_type_digits-default text_color_inactive">
              {fat}
            </p>
          </li>
          <li className={styles.list__item}>
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

export default IngredientDetails;
