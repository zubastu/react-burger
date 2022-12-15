import React, { FC } from "react";
import styles from "./IngredientPage.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientPage: FC = () => {
  return (
    <div className={styles.container}>
      <IngredientDetails hasHeading={true} />
    </div>
  );
};

export default IngredientPage;
