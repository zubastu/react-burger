import React, { useEffect } from "react";
import styles from "./OrdersHistory.module.css";

import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import Orders from "../../components/Orders/Orders";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import {
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_CONNECTION_CLOSED,
} from "../../services/actions/wsUserHistoryActions";
import PreloaderComponent from "../../components/PreloaderComponent/PreloaderComponent";

const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.userOrders);
  useEffect(() => {
    dispatch({ type: WS_USER_HISTORY_CONNECTION_SUCCESS });
    return () => {
      dispatch({ type: WS_USER_HISTORY_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  if (data.success) {
    return (
      <section className={styles.content}>
        <ProfileNavigationLinks text="В этом разделе вы можете просмотреть свою историю заказов" />

        <Orders />
      </section>
    );
  } else {
    return <PreloaderComponent />;
  }
};

export default OrdersHistory;
