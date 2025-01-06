import React, { useState } from 'react';

import { SizeType, InputTypes } from '@/shared/types/inputs-types';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputTextProps {
  label?: string;
  type?: InputTypes;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  size?: SizeType;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  fullWidth = true,
  required = false,
  error = false,
  helperText,
  disabled = false,
  size,
}) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
   };

  return (
    <TextField
      label={label}
      type={type === 'password' && showPassword ? 'text' : type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
      required={required}
      error={error}
      helperText={helperText}
      disabled={disabled}
      size={size}
      variant="outlined"
      slotProps={{
        input: {
            endAdornment: type === 'password' ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={showPassword ? 'hide the password' : 'display the password'}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ) : null,
          }}
        }
    />
  );
};

export default InputText;
