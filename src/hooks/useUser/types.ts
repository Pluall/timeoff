import { UseQueryResult } from '@tanstack/react-query';
import { User } from '../useUsers/types';

export interface useUserQueryProps {
  user: User;
}

export type useUserProps = (
  userId: string
) => UseQueryResult<useUserQueryProps, Error>;
