import { createClient } from '@supabase/supabase-js';

const supabaseURl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

export const supabase = createClient(supabaseURl, supabaseKey);
