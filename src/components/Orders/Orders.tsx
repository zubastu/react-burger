import React from "react";
import styles from "./Orders.module.css";
import OrderComponent from "../OrderComponent/OrderComponent";
import { useAppSelector } from "../../utils/constants";
import { useLocation, Link } from "react-router-dom";

const Orders = () => {
  const { data } = useAppSelector((store) => store.userOrders);
  const location = useLocation();

  return (
    <section className={`${styles.container} custom-scroll pr-2`}>
      {data.success
        ? data.orders.map((order) => (
            <Link
              key={order.number}
              className={styles.link}
              to={{
                pathname: `/profile/orders/${order.number}`,
                state: { background: location },
              }}
            >
              <OrderComponent order={order} />
            </Link>
          ))
        : null}
    </section>
  );
};

export default Orders;
