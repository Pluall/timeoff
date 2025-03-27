import { Typography } from '@/components/atoms/Typography';
import React from 'react';
import { UserCardProps } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const userCardVariants = cva(
  'flex flex-col items-start justify-start border rounded-lg shadow-md px-6 py-5 w-auto',
  {
    variants: {
      variant: {
        default: '',
        user: 'cursor-pointer bg-foreground text-background hover:bg-foreground/80',
        admin: 'cursor-pointer hover:bg-foreground/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const UserCard = React.forwardRef<HTMLDivElement, UserCardProps>(
  ({ userName, userJob, variant, onClickCard }, ref) => {
    const onClickHandler = () => {
      if (variant !== 'default' && onClickCard) {
        onClickCard();
      }
    };

    return (
      <div
        className={cn(userCardVariants({ variant }))}
        ref={ref}
        onClick={onClickHandler}
      >
        <Typography as={'h5'} size={'xl'}>
          {userName}
        </Typography>
        <Typography as={'div'} size={'base'}>
          {userJob}
        </Typography>
      </div>
    );
  }
);

UserCard.displayName = 'UserCard';

export { UserCard };
