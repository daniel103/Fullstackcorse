import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({ register, errors, label, inputName, type = "text" }) => {
  return (
    <TextField
      error={Boolean(errors[inputName])}
      helperText={errors[inputName] && errors[inputName].message}
      variant="filled"
      label={label}
      type={type}
      {...register(inputName, { required: `Please provide ${label}` })}
    />
  );
};

export default FormInput;
