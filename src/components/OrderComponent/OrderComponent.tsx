import React, { FC } from "react";
import styles from "./OrderComponent.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TOrder } from "../../types";
import { getParsedOrderTime } from "../../utils/getParsedTime";
import { useAppSelector } from "../../utils/constants";
import { getIngredientsDetails } from "../../utils/getIngredientsDetails";
import IngredientIcon from "../IngredientIcon/IngredientIcon";

type TOrderComponentProps = {
  order: TOrder;
  showStatus?: boolean;
};

const OrderComponent: FC<TOrderComponentProps> = ({
  order,
  showStatus = true,
}) => {
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

      {showStatus ? (
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
              <IngredientIcon
                src={i}
                key={index}
                zIndex={`${-index + 500}`}
                type="big"
              />
            ))}
          {getIngredientsImages().length > 6 ? (
            <div className={`${styles.orderIngredientImageContainer}`}>
              <IngredientIcon
                src={getIngredientsImages()[5]}
                type="big"
                opacity={true}
                counter={{
                  hasCounter: true,
                  counterNumber: getIngredientsImages().length - 6,
                }}
              />
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
