'use client';
import { LoginForm } from '@/components/molecules/LoginForm';
import { LoginFormValueProps } from '@/components/molecules/LoginForm/types';
import { signIn } from 'next-auth/react';

const Login = () => {
  const onSubmitFormHandler = async (value: LoginFormValueProps) => {
    const email = value.emailAddress;
    const password = value.password;
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div className={'flex flex-col items-center justify-center p-4'}>
      <LoginForm onSubmitForm={onSubmitFormHandler} />
    </div>
  );
};

export default Login;
