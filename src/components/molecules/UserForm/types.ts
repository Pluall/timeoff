export interface UserFormProps {
  onSubmitForm: (value: UserFormValueProps) => void;
}

export type UserFormValueProps = {
  emailAddress: string;
  password: string;
};
