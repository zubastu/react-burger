import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import { modalRoot } from "../../utils/constants";
import ModalHeader from "../ModalHeader/ModalHeader";
import PropTypes from "prop-types";

const Modal = ({
  children,
  isOpen = false,
  onClose,
  text = null,
  extraClassName,
}) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keyup", closeOnEscapeKey);
    return () => {
      document.removeEventListener("keyup", closeOnEscapeKey);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div className={modalStyles.container}>
      <div
        className={`${modalStyles.modal} pt-10 pl-10 pr-10 ${extraClassName}`}
      >
        <ModalHeader text={text} onClose={handleClose} />
        {children}
      </div>
      <div className={modalStyles.overlay} onClick={() => handleClose()}></div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.shape(PropTypes.elementType.isRequired).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
  extraClassName: PropTypes.string,
};

export default Modal;
