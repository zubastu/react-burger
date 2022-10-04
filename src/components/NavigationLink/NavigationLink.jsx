import React from "react";
import navigationLinkStyles from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationLink = ({ path = "/", text, styles = null, children }) => {
  return (
    <NavLink
      className={`${navigationLinkStyles.link} pl-5 pr-5 pb-4 pt-4 ${styles} `}
      to={path}
    >
      {children}
      <p className="text text_color_inactive ml-2">{text}</p>
    </NavLink>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  styles: PropTypes.string,
  children: PropTypes.node,
};

export default NavigationLink;
