import React from "react";
import navigationLinkStyles from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

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

export default NavigationLink;
