import React, { FC } from "react";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import {HTML5Backend} from "react-dnd-html5-backend";


import { TChildrenNode } from "../../types";
import {useWindowSize} from '../../utils/useWindowSize';

type TMain = {
  children: TChildrenNode;
};


const Main: FC<TMain> = ({ children }) => {
  const { width } = useWindowSize();
  const isMediumSize = width <= 1140;

  return (
    <DndProvider backend={isMediumSize ? TouchBackend : HTML5Backend }>
      <main className={styles.main}>{children}</main>
    </DndProvider>
  );
};

export default Main;
