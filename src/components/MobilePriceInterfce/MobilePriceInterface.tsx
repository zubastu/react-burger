import React, { FC, useMemo } from "react";
import styles from "./styles.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import { postOrderDetails } from "../../services/asyncActions/order";
import { useHistory } from "react-router-dom";

enum ComponentTypes {
  ingredients = "ingredients",
  constructor = "constructor",
}

type TMobilePriceInterface = {
  componentType: string;
  setCurrentComponent: (value: ComponentTypes) => void;
};

const MobilePriceInterface: FC<TMobilePriceInterface> = ({
  componentType,
  setCurrentComponent,
}) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isRequest } = useAppSelector((store) => store.order);
  const { isLogged } = useAppSelector((store) => store.login);
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

  const postOrder = (): void => {
    if (isLogged) {
      const productIds: Array<string> = selectedIngredients.map(
        (i: TIngredient) => i._id
      );

      const productData: { ingredients: Array<string> } = {
        ingredients: [selectedBun._id, ...productIds, selectedBun._id],
      };
      dispatch(postOrderDetails(productData));
    } else {
      history.push("/login");
    }
  };

  const switchComponent = () => {
    if (componentType === ComponentTypes.constructor) {
      postOrder();
    }
    if (componentType === ComponentTypes.ingredients) {
      setCurrentComponent(ComponentTypes.constructor);
    }
  };

  const isDisabled: boolean =
    isRequest ||
    !Boolean(selectedBun.type) ||
    !Boolean(selectedIngredients.length);
  return (
    <div className={styles.orderDetailsMobile}>
      <div className={styles.priceContainer}>
        <p className="text text_type_digits-default">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        disabled={isDisabled}
        htmlType={"button"}
        type="primary"
        size="medium"
        extraClass={styles.orderButton}
        onClick={switchComponent}
      >
        {componentType === ComponentTypes.constructor
          ? "Оформить заказ"
          : "Смотреть заказ"}
      </Button>
    </div>
  );
};

export default MobilePriceInterface;
