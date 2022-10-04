import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import materialInCartStyles from "./MaterialInCart.module.css";

const MaterialInCart = ({
  image,
  name,
  price,
  _id,
  onDelete,
  showInfo,
  product,
}) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(_id);
  };
  return (
    <div
      className={materialInCartStyles.container}
      onClick={() => showInfo(product)}
    >
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

export default MaterialInCart;
