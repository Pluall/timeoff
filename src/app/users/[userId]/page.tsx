'use client';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { VacationCalendar } from '@/components/organisms/VacationCalendar';
import { VacationDataProps } from '@/components/organisms/VacationCalendar/types';
import { useUser } from '@/hooks/useUser';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Users = () => {
  const session = useSession();
  const userId = session.data?.user.id;
  const userQueryData = useUser(userId as string);

  const [vacationDays, setVacationDays] = useState<VacationDataProps[]>([]);

  useEffect(() => {
    if (userQueryData.data?.user && vacationDays.length === 0) {
      const vacationDays = userQueryData.data.user.vacationDays;
      if (vacationDays) {
        const vacationData = vacationDays?.map((date) => {
          return { title: userQueryData.data.user.name, date: date };
        });
        setVacationDays(vacationData);
      }
    }
  }, [userQueryData, vacationDays.length]);

  const onLogoutHandler = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };

  const saveVacationHandler = async (vacationDates: string[]) => {
    const putUrl = `/api/users/${userId}`;
    await axios.put(putUrl, {
      userId,
      vacationDays: vacationDates,
    });
  };

  return (
    <div className={'flex flex-col items-start w-full px-40 py-10 gap-10'}>
      <div className={'flex items-center justify-between w-full'}>
        <Typography as={'h1'} size={'5xl'}>
          My Vacations
        </Typography>
        <Button onClick={onLogoutHandler}>Log out</Button>
      </div>
      <VacationCalendar
        vacationDays={vacationDays}
        setVacationDays={setVacationDays}
        vacationSaveHandler={saveVacationHandler}
      />
    </div>
  );
};

export default Users;
