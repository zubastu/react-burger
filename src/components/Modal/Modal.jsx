import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import { reactModalRootElement } from "../../utils/constants";
import ModalHeader from "../ModalHeader/ModalHeader";
import PropTypes from "prop-types";
import Overlay from "../Overlay/Overlay";
import { useDispatch } from "react-redux";
import { CLOSE_ORDER_MODAL } from "../../services/actions/order";

const Modal = ({ children, type, text = null, extraClassName }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    if (type === "orderModal") {
      dispatch({ type: CLOSE_ORDER_MODAL });
    }
  };

  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", closeOnEscapeKey);
    return () => {
      document.removeEventListener("keyup", closeOnEscapeKey);
    };
  }, [onClose]);

  return createPortal(
    <div className={modalStyles.container}>
      <Overlay onClick={onClose} />

      <div
        className={`${modalStyles.modal} pt-10 pl-10 pr-10 ${extraClassName}`}
      >
        <ModalHeader text={text} onClose={onClose} />
        {children}
      </div>
    </div>,
    reactModalRootElement
  );
};

Modal.propTypes = {
  children: PropTypes.shape(PropTypes.elementType.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default Modal;
