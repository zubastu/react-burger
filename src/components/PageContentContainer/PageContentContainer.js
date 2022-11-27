import React from "react";
import styles from "./PageContentContainer.module.css";
import PropTypes from "prop-types";
const PageContentContainer = ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};

PageContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContentContainer;
