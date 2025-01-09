'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import InputText from '@/shared/components/input-text/input-text';
import InputTextWithValidate from '@/shared/components/inputs/InputWithValidation/InputText';
import {
  simpleTestSchemaDefaultValues,
  simpleTestSchemaResolver,
} from '@/shared/formSchemas';
import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';

const LoginComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: simpleTestSchemaResolver,
    defaultValues: simpleTestSchemaDefaultValues,
  });

  async function onSubmitForm() {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        document.cookie = `user=${JSON.stringify(res)}`;
        setEmail('');
        setPassword('');
        router.push('/home');
      }
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1500);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-[11px]">
        <div className="">
          <InputTextWithValidate
            label="Login"
            required
            placeholder="Digite seu e-mail"
            registerName={'name'}
            setValue={setValue}
            watch={watch}
            error={errors?.name?.message ? errors?.name?.message : ''}
          />
          {/* <InputText
            label="Login"
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={handleEmailChange}
            required
            size="small"
          /> */}
        </div>
        <div className="">
          <InputText
            label="Senha"
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={handlePasswordChange}
            required
            size="small"
          />
        </div>
        <DefaultFormButton
          description={'Entrar'}
          variant={'contained'}
          loading={loading}
          onClick={handleSubmit(onSubmitForm)}
        />
      </div>
    </div>
  );
};

export default LoginComponent;
