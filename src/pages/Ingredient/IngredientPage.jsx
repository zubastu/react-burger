import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import styles from "./IngredientPage.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientPage = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <IngredientDetails hasHeading={true} />
      </div>
    </>
  );
};

export default IngredientPage;