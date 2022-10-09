import React, { useContext } from "react";
import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { burgerConstructorContext } from "../../cotexts/burgerConstructorContext";
import { ORDERS_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const BurgerConstructor = ({ children, openOrderInfo }) => {
  const { totalPrice, selectedBun, selectedIngredients } = useContext(
    burgerConstructorContext
  );
  const { fetchPost } = api(ORDERS_URL);

  const postOrderDetails = () => {
    const productIds = selectedIngredients.map((i) => i._id);
    const productData = {
      ingredients: [selectedBun._id, ...productIds, selectedBun._id],
    };
    fetchPost(productData)
      .then((data) => {
        openOrderInfo(data);
      })
      .catch((e) => alert("Ошибка при запросе создания заказа"));
  };
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
          onClick={postOrderDetails}
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
