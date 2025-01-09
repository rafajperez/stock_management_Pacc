import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().required('Campo obrigatório.').email('Email inválido.'),
  password: yup
    .string()
    .required('Campo obrigatório.')
    .min(6, 'Senha deve ter no mínimo 6 caracteres.'),
});

export type LoginSchemaProps = yup.InferType<typeof loginSchema>;

export const loginSchemaDefaultValues: LoginSchemaProps = {
  email: '',
  password: '',
};

export const loginSchemaResolver = yupResolver(loginSchema);
