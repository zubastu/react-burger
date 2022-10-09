import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import materialInCartStyles from "./MaterialInCart.module.css";
import PropTypes from "prop-types";

const MaterialInCart = ({ image, name, price, _id, onDelete }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(_id);
  };
  return (
    <div className={materialInCartStyles.container}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        handleClose={() => handleDelete()}
        extraClass={materialInCartStyles.constructor}
        thumbnail={image}
        text={name}
        price={price}
      />
    </div>
  );
};

MaterialInCart.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MaterialInCart;
