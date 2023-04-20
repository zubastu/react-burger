import React, { FC } from "react";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { TChildrenNode } from "../../types";

type TMain = {
  children: TChildrenNode;
};

const Main: FC<TMain> = ({ children }) => {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <main className={styles.main}>{children}</main>
    </DndProvider>
  );
};

export default Main;
