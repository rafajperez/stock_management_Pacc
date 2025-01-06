"use client";

import React, { useState } from 'react';
import InputText from '@/shared/components/input-text/input-text';

const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }


  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col gap-[11px]'>
        <div className="">
          <InputText
            label="Login"
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={handleEmailChange}
            required
            size='small'
          />
        </div>
        <div className="">
          <InputText
            label="Senha"
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={handlePasswordChange}
            required
            size='small'
          />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
