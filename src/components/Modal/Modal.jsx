import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import {
  modalRoot,
  reactModalRootElement,
  reactModalRootElementActive,
} from "../../utils/constants";

const Modal = ({ children, isOpen = false }) => {
  useEffect(() => {
    isOpen
      ? reactModalRootElement.classList.add(reactModalRootElementActive)
      : reactModalRootElement.classList.remove(reactModalRootElementActive);

    return () => {};
  }, [isOpen]);

  return createPortal(
    <>
      <div className={modalStyles}>{children}</div>
      <div className={modalStyles}></div>
    </>,
    modalRoot
  );
};

export default Modal;
