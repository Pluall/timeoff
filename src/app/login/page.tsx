'use client';
import { LoginForm } from '@/components/molecules/LoginForm';
import { LoginFormValueProps } from '@/components/molecules/LoginForm/types';

const Login = () => {
  const onSubmitFormHandler = (value: LoginFormValueProps) => {
    console.log(value);
  };

  return (
    <div className={'flex flex-col items-center justify-center p-4'}>
      <LoginForm onSubmitForm={onSubmitFormHandler} />
    </div>
  );
};

export default Login;
