import React, { useMemo } from "react";
import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import appStyles from "../App/App.module.css";
import MaterialInCart from "../MaterialInCart/MaterialInCart";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { postOrderDetails } from "../../services/asyncActions/order";
import Modal from "../Modal/Modal";
import { ADD_INGREDIENT, SELECT_BUN } from "../../services/actions/ingredients";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { isOpenOrderModal } = useSelector((store) => store.order);
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.ingredients
  );

  const addIngredient = (ingredient) => {
    const checkIngredients = () => {
      const checkInCart = (item) => ingredient._id === item._id;
      return selectedIngredients.some(checkInCart);
    };

    if (!checkIngredients() && ingredient.type !== "bun") {
      dispatch({ type: ADD_INGREDIENT, payload: ingredient });
    } else if (ingredient.type === "bun") {
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

  return (
    <section
      ref={dropTarget}
      className={`${burgerIngredientsStyles.container}`}
    >
      {isOpenOrderModal && (
        <Modal extraClassName="pb-30" type="orderModal">
          <OrderDetails />
        </Modal>
      )}
      <div
        className={`${burgerIngredientsStyles.materials} ${
          isHover && burgerIngredientsStyles.materials_active
        } custom-scroll mt-25 pl-4 pr-2`}
      >
        {selectedBun.type && (
          <div className={`${appStyles.constructor} ml-8`}>
            <ConstructorElement
              price={selectedBun.price}
              text={`${selectedBun.name} (верх)`}
              thumbnail={selectedBun.image}
              isLocked={true}
              type="top"
            />
          </div>
        )}
        {selectedIngredients.length > 0 &&
          selectedIngredients.map((item) => (
            <MaterialInCart
              image={item.image}
              price={item.price}
              name={item.name}
              _id={item._id}
              key={item._id}
              product={item}
            />
          ))}
        {selectedBun.type && (
          <div className={`${appStyles.constructor} ml-8`}>
            <ConstructorElement
              price={selectedBun.price}
              text={`${selectedBun.name} (низ)`}
              thumbnail={selectedBun.image}
              isLocked={true}
              type="bottom"
            />
          </div>
        )}
      </div>
      <div className={`${burgerIngredientsStyles.total} mt-10`}>
        <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button
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

BurgerConstructor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.elementType]),
  openOrderInfo: PropTypes.func,
};

export default BurgerConstructor;
