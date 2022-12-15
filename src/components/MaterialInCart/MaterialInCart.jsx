import React, { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./MaterialInCart.module.css";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients";
import { useDrag, useDrop } from "react-dnd";

const MaterialInCart = ({
  image,
  name,
  price,
  _id,
  product,
  index,
  moveIngredient,
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ handlerId }, dropTarget] = useDrop({
    accept: "selected-ingredient",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(ingredient, monitor) {
      if (!ref.current) {
        return;
      }
      const dIndex = product.index;

      if (dIndex === index) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dIndex < index && hoverClientY < hoverMiddleY) {
        return;
      }
      moveIngredient(ingredient, index);
      ingredient.index = index;
    },
  });

  const [, drag] = useDrag({
    type: "selected-ingredient",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(dropTarget(ref));

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch({ type: DELETE_INGREDIENT, payload: product.id });
  };

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      onDrop={(e) => e.preventDefault()}
      className={styles.container}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        handleClose={handleDelete}
        extraClass={styles.constructor}
        thumbnail={image}
        text={name}
        price={price}
      />
    </div>
  );
};
/*

MaterialInCart.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  product: INGREDIENT_TYPES.isRequired,
  index: PropTypes.number.isRequired,
  moveIngredient: PropTypes.func.isRequired,
};
*/

export default MaterialInCart;
