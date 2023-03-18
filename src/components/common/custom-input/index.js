import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ label, value, onChange, required, type, onBlur, error, helperText }) => {
  const handleOnChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleOnChange}
      required={required}
      type={type}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default CustomInput;
