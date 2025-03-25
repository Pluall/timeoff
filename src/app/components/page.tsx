'use client';
import { Button } from '@/components/atoms/button';
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
      </div>
    </div>
  );
};

export default Page;
