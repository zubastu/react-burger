import React, { useEffect } from "react";
import styles from "./OrderInfo.module.css";
import { useParams, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import {
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
} from "../../services/actions/wsUserHistoryActions";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_SUCCESS,
} from "../../services/actions/wsOrdersActions";
import { getParsedOrderTime } from "../../utils/getParsedTime";
import { getIngredientsDetails } from "../../utils/getIngredientsDetails";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientIcon from "../IngredientIcon/IngredientIcon";

type TSortedIngredient = {
  [key: string]: number;
};

const OrderInfo = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const orders = useAppSelector((store) =>
    location.pathname === `/profile/orders/${id}`
      ? store.userOrders.data.orders
      : store.orders.data.orders
  );
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === `/profile/orders/${id}`) {
      dispatch({ type: WS_USER_HISTORY_CONNECTION_SUCCESS });
    }
    return () => {
      if (location.pathname === `/profile/orders/${id}`) {
        dispatch({ type: WS_USER_HISTORY_CONNECTION_CLOSED });
      }
    };
  }, [dispatch, id, location]);

  useEffect(() => {
    if (location.pathname === `/feed/${id}`) {
      dispatch({ type: WS_ORDERS_CONNECTION_SUCCESS });
    }
    return () => {
      if (location.pathname === `/feed/${id}`) {
        dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
      }
    };
  }, [dispatch, id, location]);

  if (orders.length > 0) {
    const getCurrentOrder = () => {
      return orders.find(({ _id }) => _id === id);
    };
    const orderIds = getCurrentOrder()!.ingredients;
    const orderNumber = getCurrentOrder()!.number;
    const orderName = getCurrentOrder()!.name;
    const orderCreatedTime = getCurrentOrder()!.createdAt;
    const orderStatus = getCurrentOrder()!.status;

    const { getOrderPrice, getOrderStatus, getOrderStatusColor } =
      getIngredientsDetails(ingredients, orderIds, orderStatus);

    const time = getParsedOrderTime(orderCreatedTime).time;
    const days = getParsedOrderTime(orderCreatedTime).day();

    const getSortedIngredients = (arr: string[]) => {
      return arr.reduce((target: TSortedIngredient, key) => {
        target[key] = (target[key] || 0) + 1;
        return target;
      }, {});
    };

    const getOrderIngredients = () => {
      const items = getSortedIngredients(orderIds);
      const result: {
        image: string;
        price: number;
        quantity: number;
        name: string;
      }[] = [];
      ingredients.forEach((i) => {
        if (items[i._id]) {
          result.push({
            image: i.image_large,
            price: i.price,
            quantity: items[i._id],
            name: i.name,
          });
        }
      });
      return result;
    };
    console.log(getOrderIngredients());

    return (
      <section className={styles.container}>
        <h4 className={styles.orderNumber}>#{orderNumber}</h4>
        <p className={styles.orderName}>{orderName}</p>
        <p className={`${styles.orderStatus} ${getOrderStatusColor()}`}>
          {getOrderStatus()}
        </p>
        <p className={styles.orderComponents}>Состав:</p>

        <ul>
          {getOrderIngredients().map((i, index) => (
            <li>
              <IngredientIcon src={i.image} type="small" />
              <p>{i.name}</p>
              <p>
                {`${i.quantity}x${i.price}`} <CurrencyIcon type="primary" />
              </p>
            </li>
          ))}
        </ul>

        <div>
          <p>{days + ":" + time}</p>
          <CurrencyIcon type="primary" />
          <p>{getOrderPrice()}</p>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default OrderInfo;
