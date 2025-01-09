'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

const HomePage: React.FC = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
};

export default HomePage;
