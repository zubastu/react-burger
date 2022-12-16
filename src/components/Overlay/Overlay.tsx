import React, { FC } from "react";
import styles from "./Overlay.module.css";

type TOverlayProps = {
  onClick: () => void;
};

const Overlay: FC<TOverlayProps> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={() => onClick()}></div>;
};

export default Overlay;
