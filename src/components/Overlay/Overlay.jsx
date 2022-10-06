import React from "react";
import overlayStyles from "./Overlay.module.css";

const Overlay = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={overlayStyles.overlay}
      onClick={() => onClick()}
    ></div>
  );
});

export default Overlay;
