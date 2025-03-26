export interface LoginFormProps {
  onSubmitForm: (value: LoginFormValueProps) => void;
}

export type LoginFormValueProps = {
  emailAddress: string;
  password: string;
};
