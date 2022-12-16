import React, { FC } from "react";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TChildrenNode } from "../../types";

type TMain = {
  children: TChildrenNode;
};

const Main: FC<TMain> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.main}>{children}</main>
    </DndProvider>
  );
};

export default Main;
