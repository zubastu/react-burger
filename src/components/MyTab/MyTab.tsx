import React from "react";
import styles from "./styles.module.css";

export const Tab: React.FC<
  React.PropsWithChildren<{
    active: boolean;
    value: string;
    onClick: (value: string) => void;
  }>
> = ({ active, value, children, onClick: handleClick }) => {
  const onClick = React.useCallback(() => {
    if (typeof handleClick === "function") {
      handleClick(value);
    }
  }, [handleClick, value]);

  return (
    <div
      className={`styles.tab_type_current ${styles.tab} ${
        active ? styles.tab_type_current : ""
      }`}
      onClick={onClick}
    >
      <span className="text text_type_main-default">{children}</span>
    </div>
  );
};
