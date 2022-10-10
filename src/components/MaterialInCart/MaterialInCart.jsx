import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import materialInCartStyles from "./MaterialInCart.module.css";
import PropTypes from "prop-types";
import { INGREDIENT_TYPES } from "../../utils/constants";

const MaterialInCart = ({ product, onDelete }) => {
  const { image, name, price, _id } = product;
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(_id);
  };
  return (
    <div className={materialInCartStyles.container}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        handleClose={handleDelete}
        extraClass={materialInCartStyles.constructor}
        thumbnail={image}
        text={name}
        price={price}
      />
    </div>
  );
};

MaterialInCart.propTypes = {
  product: INGREDIENT_TYPES,
  onDelete: PropTypes.func.isRequired,
};

export default MaterialInCart;
