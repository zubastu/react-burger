import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalHeader from "../ModalHeader/ModalHeader";
import Overlay from "../Overlay/Overlay";
import { TChildrenNode } from "../../types";

type TModalProps = {
  text?: string;
  onClose: () => any;
  extraClassName?: string;
  children: TChildrenNode;
  container: HTMLElement;
};

const Modal: FC<TModalProps> = ({
  children,
  onClose,
  text = null,
  extraClassName,
  container,
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
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
    container
  );
};

export default Modal;
