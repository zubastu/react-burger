import React, { useContext } from "react";
import burgerIngredientsStyles from "./BurgerConstructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { burgerConstructorContext } from "../../cotexts/burgerConstructorContext";
import { ORDERS_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import appStyles from "../App/App.module.css";
import MaterialInCart from "../MaterialInCart/MaterialInCart";

const BurgerConstructor = ({
  openOrderInfo,
  isSelectedBun,
  removeIngredient,
}) => {
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
      .catch(() => alert("Ошибка при запросе создания заказа"));
  };
  return (
    <section className={`${burgerIngredientsStyles.container}`}>
      <div
        className={`${burgerIngredientsStyles.materials} custom-scroll mt-25 pl-4 pr-2`}
      >
        {isSelectedBun && (
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
        {selectedIngredients.map((item) => (
          <MaterialInCart
            image={item.image}
            price={item.price}
            name={item.name}
            _id={item._id}
            key={item._id}
            product={item}
            onDelete={removeIngredient}
          />
        ))}
        {isSelectedBun && (
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
