import React, { FC } from "react";
import styles from "./PageContentContainer.module.css";
import { TChildrenNode } from "../../types";

type TPageContentContainer = {
  children: TChildrenNode;
};

const PageContentContainer: FC<TPageContentContainer> = ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};

export default PageContentContainer;
