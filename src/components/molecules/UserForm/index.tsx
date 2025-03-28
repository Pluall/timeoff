import { useForm } from '@tanstack/react-form';
import * as React from 'react';
import type { AnyFieldApi } from '@tanstack/react-form';
import { Typography } from '@/components/atoms/Typography';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/Dialog';
import { UserFormProps } from './types';

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(',')}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
};

export const UserForm: React.FC<UserFormProps> = ({ onSubmitForm }) => {
  const [open, setOpen] = React.useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      emailAddress: '',
      phoneNumber: '',
      job: '',
      role: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      onSubmitForm(value);
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>
            Register a new user with the necessary information. Click Add User
            when you are done.
          </DialogDescription>
        </DialogHeader>
        <form
          className={'flex flex-col gap-6'}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className={'flex flex-col gap-4'}>
            <div>
              <form.Field
                name='name'
                validators={{
                  onChange: ({ value }) =>
                    !value ? 'A name is required' : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') && 'No "error" allowed in name'
                    );
                  },
                }}
              >
                {(field) => {
                  return (
                    <>
                      <Typography as={'label'} size={'sm'}>
                        Name
                      </Typography>
                      <Input
                        placeholder={'Name'}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              </form.Field>
            </div>
            <div>
              <form.Field
                name='emailAddress'
                validators={{
                  onChange: ({ value }) =>
                    !value ? 'A email address is required' : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') &&
                      'No "error" allowed in email address'
                    );
                  },
                }}
              >
                {(field) => {
                  return (
                    <>
                      <Typography as={'label'} size={'sm'}>
                        Email Address
                      </Typography>
                      <Input
                        placeholder={'Email Address'}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              </form.Field>
            </div>
            <div>
              <form.Field name='phoneNumber'>
                {(field) => {
                  return (
                    <>
                      <Typography as={'label'} size={'sm'}>
                        Phone Number
                      </Typography>
                      <Input
                        placeholder={'Phone Number'}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              </form.Field>
            </div>
            <div>
              <form.Field
                name='job'
                validators={{
                  onChange: ({ value }) =>
                    !value ? 'A Job is required' : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') && 'No "error" allowed in job'
                    );
                  },
                }}
              >
                {(field) => {
                  return (
                    <>
                      <Typography as={'label'} size={'sm'}>
                        Job
                      </Typography>
                      <Input
                        placeholder={'Job'}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              </form.Field>
            </div>
            <div>
              <form.Field
                name='role'
                validators={{
                  onChange: ({ value }) =>
                    !value
                      ? 'A Role is required'
                      : value !== 'admin'
                        ? value !== 'user'
                          ? 'It must be user or admin'
                          : undefined
                        : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') && 'No "error" allowed in role'
                    );
                  },
                }}
              >
                {(field) => {
                  return (
                    <>
                      <Typography as={'label'} size={'sm'}>
                        Role (admin or user)
                      </Typography>
                      <Input
                        placeholder={'Role'}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              </form.Field>
            </div>
            <div>
              <form.Field
                name='password'
                validators={{
                  onChange: ({ value }) =>
                    !value ? 'A password is required' : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({ value }) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') &&
                      'No "error" allowed in password'
                    );
                  },
                }}
              >
                {(field) => (
                  <>
                    <Typography as={'label'} size={'sm'}>
                      Password
                    </Typography>
                    <Input
                      id={field.name}
                      placeholder={'Password'}
                      type={'password'}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              </form.Field>
            </div>
          </div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit]) => (
              <>
                <Button
                  className={'w-full'}
                  type={'submit'}
                  disabled={!canSubmit}
                >
                  Add User
                </Button>
              </>
            )}
          </form.Subscribe>
        </form>
      </DialogContent>
    </Dialog>
  );
};
