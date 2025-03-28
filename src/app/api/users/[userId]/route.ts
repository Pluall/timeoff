import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export const PUT = async (req: Request) => {
  const { userId, vacationDays } = await req.json();

  const { error } = await supabase
    .from('User')
    .update({ vacationDays })
    .eq('id', userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Updated' }, { status: 200 });
};

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const userId = url.pathname.split('/').pop(); // Extract last part of URL
  const { data: users, error } = await supabase
    .from('User')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(users);
};
