'use client';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { UserCard } from '@/components/molecules/UserCard';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/hooks/useUsers/types';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Users = () => {
  const session = useSession();
  const router = useRouter();

  const query = useUsers();
  const users: User[] = query.data;

  const onLogoutHandler = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  const onOpenCalendarHandler = () => {
    console.log('clicking');
    const userId = session.data?.user.id;
    router.push(`/users/${userId}`);
  };

  return (
    <div className={'flex flex-col items-start w-full px-40 py-10 gap-10'}>
      <div className={'flex items-center justify-between w-full'}>
        <Typography as={'h1'} size={'5xl'}>
          Users List
        </Typography>
        <Button onClick={onLogoutHandler}>Log out</Button>
      </div>
      <div className={'flex flex-wrap gap-2'}>
        {users ? (
          users.map((user) => {
            let cardVariant: 'default' | 'user' = 'default';
            if (user.id === session.data?.user.id) {
              cardVariant = 'user';
            }
            return (
              <UserCard
                key={user.id}
                userName={user.name}
                userJob={user.job}
                variant={cardVariant}
                onClickCard={onOpenCalendarHandler}
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
  );
};

export default Users;
