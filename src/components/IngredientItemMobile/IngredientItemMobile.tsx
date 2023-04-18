import React, { FC } from "react";
import styles from "./styles.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TConstructorIngredient } from "../../types";
import {
  DELETE_INGREDIENT,
  RESET_BUN,
} from "../../services/actions/ingredients";
import { useAppDispatch } from "../../utils/constants";

type TIngredientItemMobileProps = {
  image: string;
  name: string;
  price: number;
  _id?: string;
  product?: TConstructorIngredient;
  isLocked?: boolean;
};

const IngredientItemMobile: FC<TIngredientItemMobileProps> = ({
  image,
  name,
  price,
  _id,
  product,
}) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    if (product?.type === "bun") {
      dispatch({ type: RESET_BUN });
    } else {
      dispatch({ type: DELETE_INGREDIENT, payload: product!.id });
    }
  };
  console.log(product!.id);
  return (
    <div className={styles.ingredientItem}>
      <img src={image} className={styles.ingredientItemImage} />
      <p className={`text text_type_main-default ${styles.ingredientItemName}`}>
        {name}
      </p>
      <div className={styles.ingredientItemPriceContainer}>
        <div className={styles.ingredientItemPrice}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <DeleteIcon type="primary" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default IngredientItemMobile;
