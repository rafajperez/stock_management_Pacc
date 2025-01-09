/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { SizeType } from '../../types/inputs-types';

export interface InputWithValidationProps {
  registerName: string;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
  error: string;
  loadingInput?: boolean;
}

export interface Props extends InputWithValidationProps {
  label: string;
  placeholder?: string;
  initialValue?: string;
  required?: boolean;
  size?: SizeType;
}
