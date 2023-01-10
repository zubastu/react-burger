import React, { FC } from "react";
import styles from "./PageContentContainer.module.css";
import { TChildrenNode } from "../../types";

type TPageContentContainer = {
  children: TChildrenNode;
  customMargin?: string;
};

const PageContentContainer: FC<TPageContentContainer> = ({
  children,
  customMargin,
}) => {
  return (
    <div
      style={{ marginTop: `${customMargin ? customMargin : "180px"}` }}
      className={`${styles.container}`}
    >
      {children}
    </div>
  );
};

export default PageContentContainer;
