'use client';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { UserForm } from '@/components/molecules/UserForm';
import { UserFormValueProps } from '@/components/molecules/UserForm/types';
import { UserInfo } from '@/components/molecules/UsersInfo';
import { VacationCalendar } from '@/components/organisms/VacationCalendar';
import { VacationDataProps } from '@/components/organisms/VacationCalendar/types';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/hooks/useUsers/types';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Admin = () => {
  const query = useUsers();
  const users: User[] = query.data;
  const [usersList, setUsersList] = useState<User[]>([]);
  const [vacationDays, setVacationDays] = useState<VacationDataProps[]>([]);

  useEffect(() => {
    if (users && usersList.length === 0) {
      setUsersList(users);
      users.map((user) => {
        const vacationDates = user.vacationDays;
        if (vacationDates) {
          const vacationData = vacationDates.map((date) => {
            return { title: user.name, date: date };
          });
          setVacationDays([...vacationDays, ...vacationData]);
        }
      });
    }
  }, [users, usersList.length, vacationDays]);

  const onLogoutHandler = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  const addUserHandler = async (value: UserFormValueProps) => {
    const requestUrl = `/api/users`;
    const data = await axios.post(requestUrl, {
      name: value.name,
      emailAddress: value.emailAddress,
      phoneNumber: value.phoneNumber,
      job: value.job,
      role: value.role,
      password: value.password,
    });

    const newUser = {
      id: data.data[0].id,
      name: value.name,
      emailAddress: value.emailAddress,
      phoneNumber: Number(value.phoneNumber),
      job: value.job,
      role: value.role,
      vacationDays: [],
    };

    setUsersList([...usersList, newUser]);
  };

  const onDeleteUserHandler = async (userId: string) => {
    const requestUrl = `/api/users/${userId}`;
    await axios.delete(requestUrl);

    const filteredUsers = usersList.filter((user) => user.id !== userId);
    setUsersList(filteredUsers);
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
            <UserForm onSubmitForm={addUserHandler} />
          </div>
          <div className={'flex flex-col gap-2'}>
            {usersList ? (
              usersList.map((user) => {
                return (
                  <UserInfo
                    key={user.id}
                    userData={user}
                    onDeleteUser={onDeleteUserHandler}
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
          <VacationCalendar
            vacationDays={vacationDays}
            setVacationDays={setVacationDays}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
