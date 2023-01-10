import React, { FC } from "react";
import styles from "./OrderComponent.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TOrder } from "../../types";
import { getParsedOrderTime } from "../../utils/getParsedTime";
import { useAppSelector } from "../../utils/constants";
import { getIngredientsDetails } from "../../utils/getIngredientsDetails";

type TOrderComponentProps = {
  order: TOrder;
};

const OrderComponent: FC<TOrderComponentProps> = ({ order }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const orderDate = `${getParsedOrderTime(order.createdAt).day()}, ${
    getParsedOrderTime(order.createdAt).time
  }`;
  const {
    getOrderPrice,
    getIngredientsImages,
    getOrderStatus,
    getOrderStatusColor,
  } = getIngredientsDetails(ingredients, order.ingredients, order.status);

  return (
    <section className={styles.container}>
      <div className={`${styles.orderInfo} mb-6`}>
        <p className={`${styles.orderNumber} text text_type_digits-default`}>
          {`#${order.number}`}
        </p>
        <p
          className={`${styles.orderDate} text text_type_main-default text_color_inactive`}
        >
          {orderDate}
        </p>
      </div>

      <div className={`${styles.orderHeading} text text_type_main-medium`}>
        {order.name}
      </div>

      {order.status ? (
        <div
          className={`${
            styles.orderStatus
          } text text_type_main-default ${getOrderStatusColor()} mt-2`}
        >
          {getOrderStatus()}
        </div>
      ) : null}

      <div className={`${styles.orderDetails} mt-6`}>
        <div className={styles.orderIngredient}>
          {getIngredientsImages()
            .slice(0, 5)
            .map((i, index) => (
              <div
                className={`${styles.orderIngredientImageContainer}`}
                style={{ zIndex: `${-index + 500}` }}
                key={index}
              >
                <img
                  src={i}
                  className={styles.orderIngredientImage}
                  alt="Ингредиент"
                />
              </div>
            ))}
          {getIngredientsImages().length > 6 ? (
            <div className={`${styles.orderIngredientImageContainer}`}>
              <img
                src={getIngredientsImages()[5]}
                className={styles.orderIngredientImage}
                style={{ opacity: ".5" }}
                alt="Ингредиент"
              />
              <p className={`${styles.counter} text text_type_digits-default`}>
                +{getIngredientsImages().length - 6}
              </p>
            </div>
          ) : null}
        </div>
        <div className={styles.orderPriceInfo}>
          <p className={`${styles.orderPrice} text text_type_digits-default`}>
            {getOrderPrice()}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};

export default OrderComponent;
