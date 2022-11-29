import React from "react";
import styles from "./RequestInformation.module.css";
import { useSelector } from "react-redux";
import successImage from "../../images/done.svg";
import errorImage from "../../images/error.svg";

const RequestInformation = () => {
  const { isError, textInfo = "testTextInfo" } = useSelector(
    (store) => store.request
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
