import React from "react";
import styles from "./ModalHeader.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ModalHeader = ({ onClose, text = null }) => {
  return (
    <div className={styles.header}>
      <h2 className="text text_type_main-large">{text}</h2>
      <CloseIcon type="primary" onClick={() => onClose()} />
    </div>
  );
};

ModalHeader.propTypes = {
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
