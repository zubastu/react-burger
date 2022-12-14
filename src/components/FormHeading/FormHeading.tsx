import React, { FC } from "react";

type TFromHeadingProps = {
  text?: string;
  extraClass: string;
};

const FormHeading: FC<TFromHeadingProps> = ({ text, extraClass }) => {
  return (
    <>
      {text ? (
        <h3 className={`text text_type_main-medium ${extraClass}`}>{text}</h3>
      ) : null}
    </>
  );
};

export default FormHeading;
