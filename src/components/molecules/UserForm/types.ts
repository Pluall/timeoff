export interface UserFormProps {
  onSubmitForm: (value: UserFormValueProps) => void;
}

export type UserFormValueProps = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  job: string;
  role: string;
  password: string;
};
