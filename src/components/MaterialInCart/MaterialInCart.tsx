import React, { FC, useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./MaterialInCart.module.css";
import { useDispatch } from "react-redux";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients";
import { useDrag, useDrop } from "react-dnd";
import { TConstructorIngredient } from "../../types";

type TMaterial = TConstructorIngredient & { index: number };

type TMaterialInCartProps = {
  image: string;
  name: string;
  price: number;
  _id: string;
  product: TMaterial;
  index: number;
  moveIngredient: (ingredient: TMaterial, index: number) => void;
};

const MaterialInCart: FC<TMaterialInCartProps> = ({
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
      // @ts-ignore
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      // @ts-ignore
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dIndex < index && hoverClientY < hoverMiddleY) {
        return;
      }
      // @ts-ignore
      moveIngredient(ingredient, index);
      // @ts-ignore
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

  const handleDelete = () => {
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
        extraClass={String(styles.constructor)}
        thumbnail={image}
        text={name}
        price={price}
      />
    </div>
  );
};

export default MaterialInCart;
