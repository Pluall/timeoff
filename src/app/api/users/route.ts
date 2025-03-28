import { supabase } from '@/lib/supabase';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

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
