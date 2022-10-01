import React from "react";
import burgerIngredientsStyles from "./BurgerIngredients.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerIngredients = ({ children, totalPrice }) => {
  return (
    <section className={`${burgerIngredientsStyles.container} `}>
      <div
        className={`${burgerIngredientsStyles.materials} custom-scroll mt-25 pl-4 pr-4 `}
      >
        {children}
      </div>
      <div className={`${burgerIngredientsStyles.total} mt-10`}>
        <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button
          htmlType={"button"}
          type="primary"
          size="medium"
          extraClass={`${burgerIngredientsStyles.buyBtn} ml-10`}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  totalPrice: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.elementType]),
};

export default BurgerIngredients;
