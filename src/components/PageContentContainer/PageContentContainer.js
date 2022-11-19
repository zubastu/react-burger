import React from "react";
import styles from "./PageContentContainer.module.css";
const PageContentContainer = ({ children }) => {
  return <div className={`${styles.container} mt-30`}>{children}</div>;
};

export default PageContentContainer;
