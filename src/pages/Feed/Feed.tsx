import React, { useEffect } from "react";
import styles from "./Feed.module.css";
import {
  useAppDispatch,
  useAppSelector,
  WS_URL_ORDERS_ALL,
} from "../../utils/constants";
import {
  WS_ORDERS_CONNECTION_CLOSE,
  WS_ORDERS_CONNECTION_INIT,
} from "../../services/actions/wsOrdersActions";
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import { TOrder } from "../../types";
import { Link, useLocation } from "react-router-dom";
import PreloaderComponent from "../../components/PreloaderComponent/PreloaderComponent";

const Feed = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.orders);
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: WS_ORDERS_CONNECTION_INIT,
      payload: { url: WS_URL_ORDERS_ALL, id: "feed" },
    });
    return () => {
      dispatch({ type: WS_ORDERS_CONNECTION_CLOSE, payload: { id: "feed" } });
    };
  }, [dispatch]);

  const getOrderNumbers = (orders: TOrder[]) => {
    const completedOrders: number[] = [];
    const ordersInProgress: number[] = [];
    orders.forEach((o) => {
      o.status === "done"
        ? completedOrders.push(o.number)
        : ordersInProgress.push(o.number);
    });

    return { completedOrders, ordersInProgress };
  };

  if (data.success) {
    return (
      <section className={styles.container}>
        <h3 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
          Лента заказов
        </h3>
        <div className={styles.content}>
          <div className={`${styles.ordersContainer} pr-2 custom-scroll`}>
            {data.orders.map((order, index) => (
              <Link
                key={index}
                className={styles.link}
                to={{
                  pathname: `/feed/${order.number}`,
                  state: { background: location },
                }}
              >
                <OrderComponent order={order} showStatus={false} />
              </Link>
            ))}
          </div>

          <div className={styles.orderNumbersContainer}>
            <div className={styles.orderNumbers}>
              <div className={styles.orderNumbersCompleted}>
                <p className="text text_type_main-medium mb-6">Готовы:</p>
                <ul className={styles.ordersTable}>
                  {getOrderNumbers(data.orders)
                    .completedOrders.slice(0, 21)
                    .map((n, i) => (
                      <li
                        className={`${styles.orderNumber} text text_type_digits-default text_color_success`}
                        key={i}
                      >
                        {n}
                      </li>
                    ))}
                </ul>
              </div>

              <div className={styles.orderNumbersInProgress}>
                <p className="text text_type_main-medium mb-6">В работе:</p>
                <ul className={styles.ordersTable}>
                  {getOrderNumbers(data.orders).ordersInProgress.length > 0
                    ? getOrderNumbers(data.orders)
                        .ordersInProgress.slice(0, 21)
                        .map((n, i) => (
                          <li
                            className={`${styles.orderNumber} text text_type_digits-default`}
                            key={i}
                          >
                            {n}
                          </li>
                        ))
                    : null}
                </ul>
              </div>
            </div>

            <div className={styles.ordersTotal}>
              <p className="text text_type_main-medium">
                Выполнено за все время:
              </p>
              <p
                className={`${styles.ordersCounter} text text_type_digits-large`}
              >
                {data.total}
              </p>
            </div>

            <div className={styles.ordersTotalToday}>
              <p className="text text_type_main-medium">
                Выполнено за сегодня:
              </p>
              <p
                className={`${styles.ordersCounter} text text_type_digits-large`}
              >
                {data.totalToday}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <PreloaderComponent />;
  }
};

export default Feed;
