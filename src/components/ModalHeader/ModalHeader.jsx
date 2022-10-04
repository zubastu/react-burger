import React from "react";
import modalHeaderStyles from "./ModalHeader.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ModalHeader = ({ onClose, text = null }) => {
  return (
    <div className={modalHeaderStyles.header}>
      <h2 className="text text_type_main-large">{text}</h2>
      <CloseIcon type="primary" onClick={() => onClose()} />
    </div>
  );
};

export default ModalHeader;
