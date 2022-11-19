import React from "react";

const FormHeading = ({ text, extraClass }) => {
  return (
    <h3 className={`text text_type_main-default ${extraClass}`}>{text}</h3>
  );
};

export default FormHeading;
