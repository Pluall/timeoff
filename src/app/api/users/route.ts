import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const { data, error } = await supabase
    .from('User')
    .select('*')
    .eq('role', 'user');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
};
