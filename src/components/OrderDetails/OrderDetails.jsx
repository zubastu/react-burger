import React from "react";
import orderDetailsStyles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";

const OrderDetails = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen}>
          <h2>Order</h2>
        </Modal>
      )}
    </>
  );
};

export default OrderDetails;
