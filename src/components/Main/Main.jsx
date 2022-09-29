import React from "react";
import mainStyles from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={mainStyles.main}>{children}</main>;
};

export default Main;
