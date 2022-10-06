import React from "react";
import mainStyles from "./Main.module.css";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className={mainStyles.main}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
