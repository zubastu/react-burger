import React, { FC, useMemo } from "react";
import styles from "./styles.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../types";
import { useAppSelector } from "../../utils/constants";

enum ComponentTypes {
  ingredients = "ingredients",
  constructor = "constructor",
}

type TMobilePriceInterface = {
  componentType: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<ComponentTypes>>;
};

const MobilePriceInterface: FC<TMobilePriceInterface> = ({
  componentType,
  setCurrentComponent,
}) => {
  const { selectedIngredients, selectedBun } = useAppSelector(
    (store) => store.ingredients
  );

  const totalPrice = useMemo(
    () =>
      selectedIngredients.reduce(
        (prev: number, current: TIngredient) => prev + current.price,
        selectedBun.price * 2 || 0
      ),
    [selectedIngredients, selectedBun]
  );

  const switchComponent = () => {
    if (componentType === ComponentTypes.constructor) {
      setCurrentComponent(ComponentTypes.ingredients);
    }
    if (componentType === ComponentTypes.ingredients) {
      setCurrentComponent(ComponentTypes.constructor);
    }
  };
  return (
    <div className={styles.orderDetailsMobile}>
      <div className={styles.priceContainer}>
        <p className="text text_type_digits-default">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        disabled={false}
        htmlType={"button"}
        type="primary"
        size="medium"
        extraClass={styles.orderButton}
        onClick={switchComponent}
      >
        Смотреть заказ
      </Button>
    </div>
  );
};

export default MobilePriceInterface;
