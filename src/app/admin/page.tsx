'use client';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { UserCard } from '@/components/molecules/UserCard';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/hooks/useUsers/types';
import { signOut } from 'next-auth/react';

const Admin = () => {
  const query = useUsers();
  const users: User[] = query.data;

  const onLogoutHandler = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  const onAddUserHandler = () => {
    console.log('add User');
  };

  return (
    <div className={'flex flex-col items-start w-full px-40 py-10 gap-10'}>
      <div className={'flex items-center justify-between w-full'}>
        <Typography as={'h1'} size={'5xl'}>
          Admin Board
        </Typography>
        <Button onClick={onLogoutHandler}>Log out</Button>
      </div>
      <div className={'flex flex-row gap-5'}>
        <div
          className={
            'flex flex-col items-start justify-start gap-2 border rounded-lg shadow-md px-6 py-5 w-auto'
          }
        >
          <div className={'flex items-center justify-between w-full'}>
            <Typography as={'h3'} size={'2xl'}>
              Users List
            </Typography>
            <Button onClick={onAddUserHandler}>Add</Button>
          </div>
          <div className={'flex flex-col gap-2'}>
            {users ? (
              users.map((user) => {
                return (
                  <UserCard
                    key={user.id}
                    userName={user.name}
                    userJob={user.job}
                    variant={'admin'}
                  />
                );
              })
            ) : (
              <Typography as={'h1'} size={'5xl'}>
                No Users
              </Typography>
            )}
          </div>
        </div>
        <div
          className={
            'flex flex-col items-start justify-start gap-2 border rounded-lg shadow-md px-6 py-5 w-auto'
          }
        >
          <Typography as={'h3'} size={'2xl'}>
            Calendar
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Admin;
