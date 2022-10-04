import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import {
  modalRoot,
  reactModalRootElement,
  reactModalRootElementActive,
} from "../../utils/constants";
import ModalHeader from "../ModalHeader/ModalHeader";

const Modal = ({
  children,
  isOpen = false,
  onClose,
  text = null,
  extraClassName,
}) => {
  const handleClose = () => {
    onClose();
    reactModalRootElement.classList.remove(reactModalRootElementActive);
  };

  useEffect(() => {
    isOpen && reactModalRootElement.classList.add(reactModalRootElementActive);

    return () => {};
  }, [isOpen]);

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

export default Modal;
