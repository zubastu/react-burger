import React, { FC } from "react";
import styles from "./OrderDetails.module.css";
import successImage from "../../images/done.svg";
import errorImage from "../../images/error.svg";
import { TStore } from "../../types";
import { useAppSelector } from "../../utils/constants";

const OrderDetails: FC = () => {
  const { orderDetails } = useAppSelector((store: TStore) => store.order);
  const { name, order, success } = orderDetails;
  const { number } = order;
  return (
    <>
      <div className={styles.content}>
        <h2 className={`${styles.order} text text_type_digits-large mt-4 mb-8`}>
          {number}
        </h2>
        <p className="text text_type_main-medium mb-15">{name}</p>
        <img
          className={styles.image}
          src={success ? successImage : errorImage}
          alt={success ? "Успешно" : "Ошибка"}
        />
        {success && (
          <>
            <p className="text text_type_main-default mt-15 mb-2">
              Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Дождитесь готовности на орбитальной станции
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
