import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { supabase } from '@/lib/supabase';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Senha', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const { data: user } = await supabase
          .from('User')
          .select('*')
          .eq('emailAddress', credentials.email)
          .single();

        if (!user) throw new Error('User Not Found.');

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error('Wrong Password');

        return { id: user.id, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.role = token.role as 'user' | 'admin';
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
