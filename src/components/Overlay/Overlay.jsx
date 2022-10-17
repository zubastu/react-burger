import React from "react";
import overlayStyles from "./Overlay.module.css";
import PropTypes from "prop-types";

const Overlay = ({ onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={overlayStyles.overlay}
      onClick={() => onClick()}
    ></div>
  );
};

Overlay.propTypes = {
  onClick: PropTypes.func,
};

export default Overlay;
