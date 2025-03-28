import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    vacationDays: string[];
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;
    vacationDays: string[];
  }
}
