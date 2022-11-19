import React from "react";
import styles from "./NavigationLink.module.css";
import PropTypes from "prop-types";

const NavigationLink = ({ path = "/", text, propStyles = null, children }) => {
  return (
    <a className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ${propStyles} `} href="#">
      {children}
      <p className="text text_color_inactive ml-2">{text}</p>
    </a>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  propStyles: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
