import React, { useEffect } from "react";
import styles from "./OrdersHistory.module.css";

import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import Orders from "../../components/Orders/Orders";
import { useAppDispatch } from "../../utils/constants";
import {
  WS_USER_HISTORY_CONNECTION_SUCCESS,
  WS_USER_HISTORY_CONNECTION_CLOSED,
} from "../../services/actions/wsUserHistoryActions";

const OrdersHistory = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: WS_USER_HISTORY_CONNECTION_SUCCESS });

    return () => {
      console.log("clean up");
      dispatch({ type: WS_USER_HISTORY_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <ProfileNavigationLinks text="В этом разделе вы можете просмотреть свою историю заказов" />

      <Orders />
    </div>
  );
};

export default OrdersHistory;
