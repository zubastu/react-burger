import React from "react";

const FormHeading = ({ text, extraClass }) => {
  return (
    <>
      {text ? (
        <h3 className={`text text_type_main-medium ${extraClass}`}>{text}</h3>
      ) : null}
    </>
  );
};

export default FormHeading;
