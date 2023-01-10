import React, { FC } from "react";
import styles from "./RequestInformation.module.css";
import successImage from "../../images/done.svg";
import errorImage from "../../images/error.svg";
import { TStore } from "../../types";
import { useAppSelector } from "../../utils/constants";

const RequestInformation: FC = () => {
  const { isError, textInfo = "testTextInfo" } = useAppSelector(
    (store: TStore) => store.request
  );
  const image = isError ? errorImage : successImage;

  return (
    <div className={styles.container}>
      <p
        className={`text text_type_main-medium ${
          isError ? "text_color_error" : "text_color_accent"
        } mb-4`}
      >
        {textInfo}
      </p>
      <img
        className={styles.img}
        src={image}
        alt={isError ? "Ошибка" : "Успешно"}
      />
    </div>
  );
};

export default RequestInformation;
