import React from "react";
import styles from "./ModalHeader.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

type TModalHeaderProps = {
  onClose: () => any;
  text?: string | null;
};

const ModalHeader: FC<TModalHeaderProps> = ({ onClose, text = null }) => {
  return (
    <div className={styles.header}>
      <h2 className="text text_type_main-large">{text}</h2>
      <CloseIcon type="primary" onClick={() => onClose()} />
    </div>
  );
};

export default ModalHeader;
