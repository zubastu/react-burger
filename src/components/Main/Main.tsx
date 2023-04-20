import React, { CSSProperties, FC } from "react";
import styles from "./Main.module.css";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { usePreview } from "react-dnd-preview";

import { TChildrenNode, TConstructorIngredient } from "../../types";

type TMain = {
  children: TChildrenNode;
};
type TPreview = {
  display: boolean;
  itemType: string;
  item: TConstructorIngredient;
  style: CSSProperties;
};

const Main: FC<TMain> = ({ children }) => {
  const MyPreview = () => {
    const { display, item, style } = usePreview() as TPreview;
    if (!display) {
      return null;
    }
    return (
      <img
        className={styles.image}
        src={item.image}
        style={style}
        alt="image"
      />
    );
  };
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <main className={styles.main}>{children}</main>
      <MyPreview />
    </DndProvider>
  );
};

export default Main;
