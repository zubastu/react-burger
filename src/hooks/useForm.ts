import React, { useState } from "react";
import { TForm } from "../types";

export function useForm(data: TForm) {
  const [values, setValues] = useState(data);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setValues({ ...values, [target.name]: target.value });

    setIsValid(target.closest("form")!.checkValidity());
  };

  return { values, handleChange, setValues, isValid };
}
