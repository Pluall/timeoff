'use client';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Typography } from '@/components/atoms/Typography';
import { LoginForm } from '@/components/molecules/LoginForm';
import { UserCard } from '@/components/molecules/UserCard';
import { UserForm } from '@/components/molecules/UserForm';
import { UserInfo } from '@/components/molecules/UsersInfo';
import { redirect } from 'next/navigation';

const Page = () => {
  if (process.env.NODE_ENV !== 'development') {
    redirect('/');
  }
  const user = {
    name: 'Marcos Martins',
    emailAddress: 'marcos@admin.com',
    id: 'a2e7b090-9eec-49db-ba8a-9ae6d3e5a0fe',
    role: 'admin',
    job: 'Fullstack Developer',
    phoneNumber: undefined,
    vacationDays: [],
  };

  return (
    <div className={'flex flex-col items-start gap-5 p-4 w-full'}>
      <div>
        <Button variant={'default'}>Primary</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'destructive'}>Destructive</Button>
        <Button variant={'link'}>Link</Button>
      </div>
      <Typography as={'h1'} size={'5xl'}>
        H1
      </Typography>
      <Typography as={'h2'} size={'4xxl'}>
        H2
      </Typography>
      <Typography as={'h3'} size={'3xxl'}>
        H3
      </Typography>
      <Typography as={'h4'} size={'2xl'}>
        H4
      </Typography>
      <Typography as={'h5'} size={'lg'}>
        H5
      </Typography>
      <Typography as={'h6'} size={'sm'}>
        H6
      </Typography>
      <Input />
      <UserCard
        userName={'Marcos Martins'}
        userJob={'FullstackDeveloper'}
        variant={'default'}
      />
      <UserCard
        userName={'Marcos Martins'}
        userJob={'FullstackDeveloper'}
        variant={'user'}
      />
      <UserCard
        userName={'Marcos Martins'}
        userJob={'FullstackDeveloper'}
        variant={'admin'}
      />
      <UserInfo
        userData={user}
        onDeleteUser={(userId) => console.log('deleting: ', userId)}
      />
      <UserForm onSubmitForm={(value) => console.log(value)} />
      <LoginForm onSubmitForm={(value) => console.log(value)} />
    </div>
  );
};

export default Page;
