import React from "react";
import mainStyles from "./Main.module.css";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Main = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>{children}</main>
    </DndProvider>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
