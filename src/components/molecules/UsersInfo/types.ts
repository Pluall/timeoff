import { User } from '@/hooks/useUsers/types';

export interface UserInfoProps {
  userData: User;
  onDeleteUser: (userId: string) => void;
}
