import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { reactModalRootElement } from "../../utils/constants";
import ModalHeader from "../ModalHeader/ModalHeader";
import PropTypes from "prop-types";
import Overlay from "../Overlay/Overlay";

const Modal = ({ children, onClose, text = null, extraClassName }) => {
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
    <div className={styles.container}>
      <Overlay onClick={onClose} />

      <div className={`${styles.modal} pt-10 pl-10 pr-10 ${extraClassName}`}>
        <ModalHeader text={text} onClose={onClose} />
        {children}
      </div>
    </div>,
    reactModalRootElement
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
};

export default Modal;
