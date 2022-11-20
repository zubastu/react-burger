import React from "react";
import styles from "./PageContentContainer.module.css";
const PageContentContainer = ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};

export default PageContentContainer;
