import { UseQueryResult } from '@tanstack/react-query';

export interface useUsersQueryProps {
  users: User[];
}

export type useUsersProps = () => UseQueryResult<useUsersQueryProps, Error>;

export type User = {
  id: string;
  name: string;
  emailAddress: string;
  phoneNumber?: number;
  job: string;
  role: string;
  vacationDays?: string[];
};
