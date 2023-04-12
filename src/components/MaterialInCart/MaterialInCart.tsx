import React, { FC, useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./MaterialInCart.module.css";
import { DELETE_INGREDIENT } from "../../services/actions/ingredients";
import { useDrag, useDrop } from "react-dnd";
import { TConstructorIngredient } from "../../types";
import { useAppDispatch } from "../../utils/constants";

type TMaterial = TConstructorIngredient & { index: number };

type TMaterialInCartProps = {
  image: string;
  name: string;
  price: number;
  _id?: string;
  product?: TConstructorIngredient;
  index: number;
  isLocked?: boolean;
  moveIngredient?: (ingredient: TMaterial, index: number) => void;
};

const MaterialInCart: FC<TMaterialInCartProps> = ({
  image,
  name,
  price,
  _id,
  product,
  index,
  moveIngredient,
  isLocked = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [{ handlerId }, dropTarget] = useDrop({
    accept: "selected-ingredient",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(ingredient: TMaterial, monitor) {
      if (!ref.current) {
        return;
      }
      const dIndex = product!.index;

      if (dIndex === index) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dIndex! < index && hoverClientY < hoverMiddleY) {
        return;
      }

      moveIngredient && moveIngredient(ingredient, index);

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
    dispatch({ type: DELETE_INGREDIENT, payload: product!.id });
  };
  if (!isLocked) {
    return (
      <div
        ref={ref}
        data-handler-id={handlerId}
        onDrop={(e) => e.preventDefault()}
        className={styles.container}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          isLocked={isLocked}
          handleClose={handleDelete}
          extraClass={String(styles.constructor)}
          thumbnail={image}
          text={name}
          price={price}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <DragIcon type="primary" />
        <ConstructorElement
          isLocked={isLocked}
          extraClass={String(styles.constructor)}
          thumbnail={image}
          text={name}
          price={price}
        />
      </div>
    );
  }
};

export default MaterialInCart;
