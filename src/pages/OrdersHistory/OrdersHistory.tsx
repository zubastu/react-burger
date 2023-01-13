import React, { useEffect } from "react";
import styles from "./OrdersHistory.module.css";

import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import Orders from "../../components/Orders/Orders";
import {
  useAppDispatch,
  useAppSelector,
  WS_URL_ORDERS_USER_HISTORY,
} from "../../utils/constants";

import PreloaderComponent from "../../components/PreloaderComponent/PreloaderComponent";
import { getCookie } from "../../utils/cookie";
import {
  WS_ORDERS_CONNECTION_CLOSE,
  WS_ORDERS_CONNECTION_INIT,
} from "../../services/actions/wsOrdersActions";

const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((store) => store.orders);

  useEffect(() => {
    dispatch({
      type: WS_ORDERS_CONNECTION_INIT,
      payload: {
        url: `${WS_URL_ORDERS_USER_HISTORY}?token=${
          getCookie("accessToken")?.split("Bearer ")[1]
        }`,
        id: "userHistory",
      },
    });
    return () => {
      dispatch({
        type: WS_ORDERS_CONNECTION_CLOSE,
        payload: { id: "userHistory" },
      });
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
