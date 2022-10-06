import React from "react";
import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerConstructor = ({ children, totalPrice, openOrderInfo }) => {
  return (
    <section className={`${burgerIngredientsStyles.container}`}>
      <div
        className={`${burgerIngredientsStyles.materials} custom-scroll mt-25 pl-4 pr-2`}
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
          extraClass={`${burgerIngredientsStyles.buyBtn} ml-10 mr-4`}
          onClick={() => openOrderInfo()}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  totalPrice: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.elementType]),
  openOrderInfo: PropTypes.func,
};

export default BurgerConstructor;
