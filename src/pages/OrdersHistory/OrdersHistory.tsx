import React from "react";
import styles from "./OrdersHistory.module.css";
import { getCookie } from "../../utils/cookie";

import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import Orders from "../../components/Orders/Orders";

const OrdersHistory = () => {
  const url = getCookie("accessToken")?.split("Bearer ");
  return (
    <div className={styles.content}>
      <ProfileNavigationLinks text="В этом разделе вы можете просмотреть свою историю заказов" />

      <Orders />
    </div>
  );
};

export default OrdersHistory;
