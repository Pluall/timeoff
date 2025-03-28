import * as React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import { UserCard } from '../UserCard';
import { UserInfoProps } from './types';

export const UserInfo: React.FC<UserInfoProps> = ({
  userData,
  onDeleteUser,
}) => {
  const [open, setOpen] = React.useState(false);
  const onDeleteUserHandler = () => {
    onDeleteUser(userData.id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <UserCard
          userName={userData.name}
          userJob={userData.job}
          variant={'admin'}
          onClickCard={() => setOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>User Information</DialogTitle>
          <DialogDescription>
            Check out this user information. Click Delete User if you want to
            remove them.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Typography as={'label'} size={'sm'}>
              Name:
            </Typography>
            <Typography as={'label'} size={'sm'}>
              {userData.name}
            </Typography>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Typography as={'label'} size={'sm'}>
              Email Address:
            </Typography>
            <Typography as={'label'} size={'sm'}>
              {userData.emailAddress}
            </Typography>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Typography as={'label'} size={'sm'}>
              Phone Number:
            </Typography>
            <Typography as={'label'} size={'sm'}>
              {userData.phoneNumber}
            </Typography>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Typography as={'label'} size={'sm'}>
              Job:
            </Typography>
            <Typography as={'label'} size={'sm'}>
              {userData.job}
            </Typography>
          </div>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Typography as={'label'} size={'sm'}>
              Role:
            </Typography>
            <Typography as={'label'} size={'sm'}>
              {userData.role}
            </Typography>
          </div>
        </div>
        <DialogFooter>
          <Button variant={'destructive'} onClick={onDeleteUserHandler}>
            Delete User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
