import { useForm } from '@tanstack/react-form';
import * as React from 'react';
import type { AnyFieldApi } from '@tanstack/react-form';
import { Typography } from '@/components/atoms/Typography';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { LoginFormProps } from './types';

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

const LoginForm = React.forwardRef<HTMLDivElement, LoginFormProps>(
  ({ onSubmitForm }, ref) => {
    const form = useForm({
      defaultValues: {
        emailAddress: '',
        password: '',
      },
      onSubmit: async ({ value }) => {
        onSubmitForm(value);
      },
    });

    return (
      <div
        className={
          'flex flex-col border shadow-md rounded-lg px-6 py-8 items-center justify-center w-auto gap-12'
        }
        ref={ref}
      >
        <Typography as={'h2'} size={'4xxl'}>
          Login
        </Typography>
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
                        placeholder={'Email Adress'}
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
                  Login
                </Button>
              </>
            )}
          </form.Subscribe>
        </form>
      </div>
    );
  }
);

LoginForm.displayName = 'LoginForm';

export { LoginForm };
