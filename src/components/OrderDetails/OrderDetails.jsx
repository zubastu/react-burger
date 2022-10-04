import React from "react";
import orderDetailsStyles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";
import successImage from "../../images/done.svg";
import PropTypes from "prop-types";

const OrderDetails = ({ isOpen, onClose }) => {
  const data = {
    orderNumber: Math.ceil(Math.random() * 1000000),
    orderInfo: "идентификатор заказа",
    success: true,
  };
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} extraClassName="pb-30">
          <div className={orderDetailsStyles.content}>
            <h2
              className={`${orderDetailsStyles.order} text text_type_digits-large mt-4 mb-8`}
            >
              {data.orderNumber}
            </h2>
            <p className="text text_type_main-medium mb-15">{data.orderInfo}</p>
            <img
              className={orderDetailsStyles.image}
              src={data.success && successImage}
              alt={data.success ? "Успешно" : "Ошибка"}
            />
            {data.success && (
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
        </Modal>
      )}
    </>
  );
};

OrderDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
