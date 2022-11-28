import React from "react";
import PropTypes from "prop-types";

const FormHeading = ({ text, extraClass }) => {
  return (
    <>
      {text ? (
        <h3 className={`text text_type_main-medium ${extraClass}`}>{text}</h3>
      ) : null}
    </>
  );
};
FormHeading.propTypes = {
  text: PropTypes.string,
  extraClass: PropTypes.string,
};
export default FormHeading;
