import React from "react";
import styles from "./ModalHeader.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

type TModalHeaderProps = {
  onClose: () => void;
  text?: string | null;
};

const ModalHeader: FC<TModalHeaderProps> = ({ onClose, text = null }) => {
  return (
    <div className={styles.header}>
      <h2 className={`text text_type_main-large ${styles.heading}`}>{text}</h2>
      <button
        className={styles.button}
        onClick={() => onClose()}
        data-testid="close"
      >
        <CloseIcon type="primary" />
      </button>
    </div>
  );
};

export default ModalHeader;
