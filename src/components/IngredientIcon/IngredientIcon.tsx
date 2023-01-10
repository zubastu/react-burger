import React, { FC } from "react";
import styles from "./IngredientIcon.module.css";

type TIngredientIcon = {
  zIndex?: string;
  src: string;
  type: "big" | "small";
  opacity?: boolean;
  counter?: {
    hasCounter: boolean;
    counterNumber: number;
  };
};

const IngredientIcon: FC<TIngredientIcon> = ({
  zIndex,
  src,
  type,
  opacity,
  counter,
}) => {
  return (
    <div
      className={`${styles.imageContainer} ${
        type === "big" ? styles.imageContainerBig : styles.imageContainerSmall
      }`}
      style={{ zIndex: `${zIndex}` }}
    >
      <img
        src={src}
        className={`${styles.image} ${
          type === "big" ? styles.imageBig : styles.imageSmall
        } ${opacity ? styles.opacity : null} `}
        alt="Ингредиент"
      />
      {counter?.hasCounter ? (
        <p className={`${styles.counter} text text_type_digits-default`}>
          +{counter.counterNumber}
        </p>
      ) : null}
    </div>
  );
};

export default IngredientIcon;
