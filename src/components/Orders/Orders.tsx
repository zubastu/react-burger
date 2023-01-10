import React from "react";
import styles from "./Orders.module.css";
import OrderComponent from "../OrderComponent/OrderComponent";
import { useAppSelector } from "../../utils/constants";

const Orders = () => {
  const { wsConnected, data } = useAppSelector((store) => store.userOrders);

  return (
    <section className={`${styles.container} custom-scroll pr-2`}>
      {wsConnected && data.success
        ? data.orders.map((order) => (
            <OrderComponent order={order} key={order._id} />
          ))
        : null}
    </section>
  );
};

export default Orders;
