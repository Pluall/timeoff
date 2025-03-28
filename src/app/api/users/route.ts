import { supabase } from '@/lib/supabase';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import bcrypt from 'bcryptjs';

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { data: users, error } = await supabase
    .from('User')
    .select('*')
    .eq('role', 'user');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (session.user.role === 'admin') {
    return NextResponse.json(users);
  } else {
    const filteredUsers = users.map(
      ({ id, name, emailAddress, phoneNumber, job, role }) => ({
        id,
        name,
        emailAddress,
        phoneNumber,
        job,
        role,
      })
    );

    return NextResponse.json(filteredUsers);
  }
};

export const POST = async (req: Request) => {
  const user = await req.json();

  const hashedPassword = await bcrypt.hash(user.password, 12);

  const { data, error } = await supabase
    .from('User')
    .insert([
      {
        name: user.name,
        emailAddress: user.emailAddress,
        phoneNumber: Number(user.phoneNumber),
        job: user.job,
        role: user.role,
        password: hashedPassword,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
};
