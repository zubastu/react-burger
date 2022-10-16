import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import materialInCartStyles from "./MaterialInCart.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients";

const MaterialInCart = ({ image, name, price, _id, product }) => {
  const dispatch = useDispatch();
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient-cart",
    item: product,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch({ type: DELETE_INGREDIENT, payload: _id });
  };
  return (
    !isDrag && (
      <div className={materialInCartStyles.container} ref={dragRef}>
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
    )
  );
};

MaterialInCart.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default MaterialInCart;
