import React from "react";
import styles from "./OrderInfo.module.css";
import { useParams } from "react-router-dom";

const OrderInfo = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <section className={styles.container}>
      <h4 className={styles.orderNumber}></h4>
      <p className={styles.orderName}></p>
      <p className={styles.orderStatus}></p>
      <p className={styles.orderComponents}></p>

      <ul></ul>

      <div>
        <p></p>
        <p></p>
      </div>
    </section>
  );
};

export default OrderInfo;
