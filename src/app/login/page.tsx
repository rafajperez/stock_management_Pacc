'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import InputTextWithValidate from '@/shared/components/inputs/InputWithValidation/InputText';
import {
  loginSchemaDefaultValues,
  loginSchemaResolver,
} from '@/shared/formSchemas/loginSchema';
import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import InputPasswordWithValidate from '@/shared/components/inputs/InputWithValidation/InputPassword';

const LoginComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: loginSchemaResolver,
    defaultValues: loginSchemaDefaultValues,
  });

  // async function onSubmitForm() {
  //   setLoading(true);
  //   try {
  //     const res = await signInWithEmailAndPassword(email, password);
  //     if (res) {
  //       document.cookie = `user=${JSON.stringify(res)}`;
  //       setEmail('');
  //       setPassword('');
  //       router.push('/home');
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //     router.back();
  //   }, 1500);
  // }

  function onSubmitForm() {
    console.log(watch('email'));
    console.log(watch('password'));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <form className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-[11px]">
        <InputTextWithValidate
          label="Login"
          required
          placeholder="Digite seu e-mail"
          registerName={'email'}
          setValue={setValue}
          watch={watch}
          size="small"
          error={errors?.email?.message ? errors?.email?.message : ''}
        />
        <InputPasswordWithValidate
          label="Senha"
          required
          placeholder="Digite sua senha"
          registerName={'password'}
          setValue={setValue}
          watch={watch}
          size="small"
          error={errors?.password?.message ? errors?.password?.message : ''}
        />
        <DefaultFormButton
          description={'Entrar'}
          variant={'contained'}
          loading={loading}
          onClick={handleSubmit(onSubmitForm)}
        />
      </div>
    </form>
  );
};

export default LoginComponent;
