import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import materialInCartStyles from "./MaterialInCart.module.css";

const MaterialInCart = ({ image, name, price, _id, onDelete }) => {
  return (
    <div className={materialInCartStyles.container}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        handleClose={() => onDelete(_id)}
        extraClass={materialInCartStyles.constructor}
        thumbnail={image}
        text={name}
        price={price}
      />
    </div>
  );
};

export default MaterialInCart;
