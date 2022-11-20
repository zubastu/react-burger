import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import styles from "./IngredientPage.module.css";

const IngredientPage = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
    </>
  );
};

export default IngredientPage;
