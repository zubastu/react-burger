import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { TConstructorIngredient, TIngredient, TStore } from "../../types";

import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import { postOrderDetails } from "../../services/asyncActions/order";
import { ADD_INGREDIENT, SELECT_BUN } from "../../services/actions/ingredients";
import SelectedIngredients from "../SelectedIngredients/SelectedIngredients";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const BurgerConstructor = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isRequest } = useAppSelector((store: TStore) => store.order);
  const { selectedIngredients, selectedBun } = useAppSelector(
    (store: TStore) => store.ingredients
  );
  const { isLogged } = useAppSelector((store: TStore) => store.login);

  const addIngredient = (
    ingredient: TIngredient | TConstructorIngredient
  ): void => {
    if (ingredient.type !== "bun") {
      const newIngredient = {
        ...ingredient,
        id: uuidv4(),
      };
      dispatch({ type: ADD_INGREDIENT, payload: newIngredient });
    } else {
      dispatch({ type: SELECT_BUN, payload: ingredient });
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient: TIngredient) {
      addIngredient(ingredient);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

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

  const isDisabled: boolean =
    isRequest ||
    !Boolean(selectedBun.type) ||
    !Boolean(selectedIngredients.length);

  return (
    <section
      ref={dropTarget}
      className={`${burgerIngredientsStyles.container} `}
    >
      <div
        className={`${burgerIngredientsStyles.materials} ${
          isHover && burgerIngredientsStyles.materials_active
        } custom-scroll mt-25 pl-4 pr-2`}
      >
        <SelectedIngredients />
      </div>
      <div className={`${burgerIngredientsStyles.total} mt-10`}>
        <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button
          disabled={isDisabled}
          htmlType={"button"}
          type="primary"
          size="medium"
          extraClass={`${burgerIngredientsStyles.buyBtn} ml-10 mr-4`}
          onClick={postOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
