import React from "react";
import styles from "./OrdersHistory.module.css";
import { getCookie } from "../../utils/cookie";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";

const OrdersHistory = () => {
  const url = getCookie("accessToken")?.split("Bearer ");
  return (
    <div className={styles.content}>
      <ProfileNavigationLinks text="В этом разделе вы можете просмотреть свою историю заказов" />
      <PageContentContainer>{}</PageContentContainer>
    </div>
  );
};

export default OrdersHistory;
