import React, { useEffect } from "react";
import styles from "./OrdersHistory.module.css";

import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import Orders from "../../components/Orders/Orders";
import {
  useAppDispatch,
  useAppSelector,
  WS_URL_ORDERS_USER_HISTORY,
} from "../../utils/constants";
import {
  WS_USER_HISTORY_INIT,
  WS_USER_HISTORY_CONNECTION_CLOSE,
} from "../../services/actions/wsUserHistoryActions";
import PreloaderComponent from "../../components/PreloaderComponent/PreloaderComponent";
import { getCookie } from "../../utils/cookie";

const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.userOrders);
  useEffect(() => {
    dispatch({
      type: WS_USER_HISTORY_INIT,
      payload: `${WS_URL_ORDERS_USER_HISTORY}?token=${
        getCookie("accessToken")?.split("Bearer ")[1]
      }`,
    });
    return () => {
      dispatch({ type: WS_USER_HISTORY_CONNECTION_CLOSE });
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
