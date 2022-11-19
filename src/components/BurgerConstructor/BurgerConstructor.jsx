import React, { useMemo } from "react";
import uuidv1 from "uuid/v1";

import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { postOrderDetails } from "../../services/asyncActions/order";
import Modal from "../Modal/Modal";
import { ADD_INGREDIENT, SELECT_BUN } from "../../services/actions/ingredients";
import SelectedIngredients from "../SelectedIngredients/SelectedIngredients";
import { CLOSE_ORDER_MODAL } from "../../services/actions/order";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { isOpenOrderModal, isRequest } = useSelector((store) => store.order);
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.ingredients
  );

  const addIngredient = (ingredient) => {
    if (ingredient.type !== "bun") {
      const newIngredient = {
        ...ingredient,
        id: uuidv1(),
      };
      dispatch({ type: ADD_INGREDIENT, payload: newIngredient });
    } else {
      dispatch({ type: SELECT_BUN, payload: ingredient });
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      addIngredient(ingredient);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const totalPrice = useMemo(
    () =>
      selectedIngredients.reduce(
        (prev, current) => prev + current.price,
        selectedBun.price * 2 || 0
      ),
    [selectedIngredients, selectedBun]
  );

  const postOrder = () => {
    const productIds = selectedIngredients.map((i) => i._id);
    const productData = {
      ingredients: [selectedBun._id, ...productIds, selectedBun._id],
    };
    dispatch(postOrderDetails(productData));
  };

  const closeModal = () => dispatch({ type: CLOSE_ORDER_MODAL });

  const isDisabled =
    isRequest ||
    !Boolean(selectedBun.type) ||
    !Boolean(selectedIngredients.length);

  return (
    <section
      ref={dropTarget}
      className={`${burgerIngredientsStyles.container} `}
    >
      {isOpenOrderModal && (
        <Modal extraClassName="pb-30" type="orderModal" onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
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
