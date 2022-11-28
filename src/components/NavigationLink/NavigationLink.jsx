import React from "react";
import styles from "./NavigationLink.module.css";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const NavigationLink = ({ path = "/", text, propStyles = null, children }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Link
      className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ${propStyles} `}
      to={path}
    >
      {children}
      <p
        className={`text ${
          pathname === path ? "text_color_primary" : "text_color_inactive"
        } ml-2`}
      >
        {text}
      </p>
    </Link>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  propStyles: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
