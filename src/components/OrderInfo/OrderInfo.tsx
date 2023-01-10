import React from "react";
import styles from "./OrderInfo.module.css";
import { useParams } from "react-router-dom";

const OrderInfo = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <section className={styles.container}>
      <>{id}</>
    </section>
  );
};

export default OrderInfo;
