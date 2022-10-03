import ingredientDetailsStyles from "./IngredientDetails.module.css";
import React from "react";
import Modal from "../Modal/Modal";

const IngredientDetails = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <h2>Ingredients</h2>
        </Modal>
      )}
    </>
  );
};

export default IngredientDetails;
