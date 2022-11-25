import React, { useState } from "react";
import validator from "validator/es";

export function useForm() {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email") {
      if (!validator.isEmail(value)) {
        target.setCustomValidity("Email должен быть корректным!");
      } else {
        target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setIsValid(target.closest("form").checkValidity());
  };

  return { values, handleChange, setValues, isValid };
}
