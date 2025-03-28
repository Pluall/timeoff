'use client';
import { LoginForm } from '@/components/molecules/LoginForm';
import { LoginFormValueProps } from '@/components/molecules/LoginForm/types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const onSubmitFormHandler = async (value: LoginFormValueProps) => {
    const email = value.emailAddress;
    const password = value.password;
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    const res = await fetch('/api/auth/session');
    const session = await res.json();

    if (session.user.role === 'admin') {
      router.push('/admin');
    }
    if (session.user.role === 'user') {
      router.push('/users');
    }
  };

  return (
    <div className={'flex flex-col items-center justify-center p-4'}>
      <LoginForm onSubmitForm={onSubmitFormHandler} />
    </div>
  );
};

export default Login;
