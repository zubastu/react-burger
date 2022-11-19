import React from "react";
import styles from "./Overlay.module.css";
import PropTypes from "prop-types";

const Overlay = ({ onClick }) => {
  return <div className={styles.overlay} onClick={() => onClick()}></div>;
};

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
