import React, { FC, useEffect } from "react";
import styles from "./OrderInfo.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

import { getParsedOrderTime } from "../../utils/getParsedTime";
import { getIngredientsDetails } from "../../utils/getIngredientsDetails";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientIcon from "../IngredientIcon/IngredientIcon";
import { getCurrentOrder } from "../../services/asyncActions/order";

type TOrderInfoProps = {
  isModal?: boolean;
};

const OrderInfo: FC<TOrderInfoProps> = ({ isModal = false }) => {
  const dispatch = useAppDispatch();
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const { currentOrder } = useAppSelector((store) => store.order);
  const { orderNumber } = useParams<{ orderNumber: string }>();
  useEffect(() => {
    dispatch(getCurrentOrder(orderNumber));
  }, [dispatch]);

  const orderIds = currentOrder.orders[0].ingredients;
  const orderName = currentOrder.orders[0].name;
  const orderCreatedTime = currentOrder.orders[0].createdAt;
  const orderStatus = currentOrder.orders[0].status;

  const {
    getOrderPrice,
    getOrderStatus,
    getOrderStatusColor,
    getSortedOrderIngredients,
  } = getIngredientsDetails(ingredients, orderIds, orderStatus);

  const time = getParsedOrderTime(orderCreatedTime).time;
  const days = getParsedOrderTime(orderCreatedTime).day();
  const orderIngredients = getSortedOrderIngredients();

  return (
    <section className={styles.container}>
      {!isModal ? (
        <h4
          className={`${styles.orderNumber} text text_type_digits-default mb-10`}
        >
          #{orderNumber}
        </h4>
      ) : null}
      <p className={`${styles.orderName} text text_type_main-medium mb-3`}>
        {orderName}
      </p>
      <p
        className={`${
          styles.orderStatus
        } text text_type_main-small ${getOrderStatusColor()} mb-15`}
      >
        {getOrderStatus()}
      </p>
      <p
        className={`${styles.orderComponents} text text_type_main-medium mb-6`}
      >
        Состав:
      </p>

      <ul className={`${styles.ingredientsList} mb-10 custom-scroll`}>
        {orderIngredients.map((i, index) => (
          <li className={`${styles.ingredient} mr-6`} key={index}>
            <div className={`${styles.orderNameContainer} pr-6`}>
              <IngredientIcon src={i.image} type="small" />
              <p
                className={`${styles.ingredientName} text text_type_main-default ml-4 mr-4`}
              >
                {i.name}
              </p>
            </div>
            <div className={styles.orderPriceDetails}>
              <p className="text text_type_digits-default">
                {`${i.quantity} x ${i.price}`}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.orderPriceDetails}>
        <p className="text text_type_main-small text_color_inactive">
          {`${days}, ${time}`}
        </p>
        <div className={styles.orderPriceDetails}>
          <p className="text text_type_digits-default">{getOrderPrice()}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
