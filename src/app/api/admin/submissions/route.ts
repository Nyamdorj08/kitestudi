import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from 'src/lib/admin-auth';
import { supabaseAdmin } from 'src/lib/supabase-server';

export async function GET(_req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ message: 'Нэвтрэх шаардлагатай' }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('submissions')
    .select('id, email, status, styles, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
