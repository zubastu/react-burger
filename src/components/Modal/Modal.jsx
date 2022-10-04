import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import modalStyles from "./Modal.module.css";
import {
  modalRoot,
  reactModalRootElement,
  reactModalRootElementActive,
} from "../../utils/constants";
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
    reactModalRootElement.classList.remove(reactModalRootElementActive);
  };

  console.log(children);

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

Modal.propTypes = {
  children: PropTypes.elementType.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.oneOf([PropTypes.string, null]).isRequired,
  extraClassName: PropTypes.string,
};

export default Modal;
