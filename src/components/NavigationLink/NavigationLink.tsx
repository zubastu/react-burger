import React from "react";
import styles from "./NavigationLink.module.css";
import { Link, useLocation } from "react-router-dom";
import { TPathnameString, TChildrenNode } from "../../types";

interface INavigationLinkProps {
  path: string;
  text: string;
  propStyles?: string | undefined;
  include?: string;
  children: TChildrenNode;
}
const NavigationLink: React.FC<INavigationLinkProps> = ({
  path = "/",
  text,
  propStyles = undefined,
  children,
  include,
}) => {
  const location = useLocation();
  const { pathname }: TPathnameString = location;
  return (
    <Link
      className={`${styles.link} pl-5 pr-5 pb-4 pt-4 ${propStyles} `}
      to={path}
    >
      {children}
      <p
        className={`text text_type_main-default ${
          include
            ? pathname.includes(include)
              ? "text_color_primary"
              : "text_color_inactive"
            : pathname === path
            ? "text_color_primary"
            : "text_color_inactive"
        } ml-2`}
      >
        {text}
      </p>
    </Link>
  );
};

export default NavigationLink;
