'use client';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { redirect } from 'next/navigation';

const Page = () => {
  if (process.env.NODE_ENV !== 'development') {
    redirect('/');
  }
  return (
    <div>
      <div className={'flex flex-col items-start gap-5 p-4'}>
        <div>
          <Button variant={'default'}>Primary</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'link'}>Link</Button>
        </div>
        <Typography as={'h1'} size={'5xl'}>
          H1
        </Typography>
        <Typography as={'h2'} size={'4xxl'}>
          H2
        </Typography>
        <Typography as={'h3'} size={'3xxl'}>
          H3
        </Typography>
        <Typography as={'h4'} size={'2xl'}>
          H4
        </Typography>
        <Typography as={'h5'} size={'lg'}>
          H5
        </Typography>
        <Typography as={'h6'} size={'sm'}>
          H6
        </Typography>
      </div>
    </div>
  );
};

export default Page;
