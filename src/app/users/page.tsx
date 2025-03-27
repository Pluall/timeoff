'use client';
import { Typography } from '@/components/atoms/Typography';
import { UserCard } from '@/components/molecules/UserCard';
import { useSession } from 'next-auth/react';

const fakeUsers = [
  {
    id: '1',
    name: 'Marcos Martins',
    job: 'Fullstack Developer',
  },
  {
    id: '2',
    name: 'Paula Ferreira',
    job: 'Marketing',
  },
  {
    id: '3',
    name: 'Paula Ferreira',
    job: 'Marketing',
  },
  {
    id: '4',
    name: 'Paula Ferreira',
    job: 'Marketing',
  },
];

const Users = () => {
  const session = useSession();

  console.log(session);

  return (
    <div className={'flex flex-col items-start w-full px-40 py-10 gap-10'}>
      <Typography as={'h1'} size={'5xl'}>
        Users List
      </Typography>
      <div className={'flex flex-wrap gap-2'}>
        {fakeUsers.map((user) => {
          return (
            <UserCard
              key={user.id}
              userName={user.name}
              userJob={user.job}
              variant={'default'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
