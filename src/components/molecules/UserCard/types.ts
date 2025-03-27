export interface UserCardProps {
  userName: string;
  userJob: string;
  variant: 'default' | 'user' | 'admin';
  onClickCard?: VoidFunction;
}
