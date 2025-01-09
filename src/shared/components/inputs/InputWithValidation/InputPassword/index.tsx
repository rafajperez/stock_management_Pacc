import { useState } from 'react';
import { Props } from '../interface';
import { IconButton, InputAdornment, Skeleton, TextField } from '@mui/material';
import { InputStyled, txDefault } from '@/shared/constants';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

const InputPasswordWithValidate = ({
  label = '',
  placeholder = '',
  initialValue = '',
  required = false,
  registerName,
  watch,
  setValue,
  size,
  error,
  loadingInput = false,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  function ShowError(): boolean {
    if (error) {
      return true;
    } else {
      return false;
    }
  }

  function ChangeInputValue(value: string) {
    setInputValue(value);
    setValue(registerName, value);
  }

  return (
    <>
      {loadingInput ? (
        <Skeleton variant="rounded" width={'100%'} />
      ) : (
        <div className="w-full">
          <TextField
            required={required}
            fullWidth
            label={label}
            type={showPassword ? 'text' : 'password'}
            sx={InputStyled(error && watch(registerName).length < 1)}
            placeholder={placeholder}
            value={inputValue}
            size={size}
            onChange={(e) => ChangeInputValue(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? 'hide the password'
                          : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          {ShowError() && (
            <span
              className="text-sm"
              style={{ color: txDefault.txDefaultError }}
            >
              * {error}
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default InputPasswordWithValidate;
