import { NextRequest, NextResponse } from 'next/server';
import { isAdminAuthenticated } from 'src/lib/admin-auth';
import { supabaseAdmin } from 'src/lib/supabase-server';

export async function POST(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ message: 'Нэвтрэх шаардлагатай' }, { status: 401 });
  }

  const { error } = await supabaseAdmin
    .from('submissions')
    .update({ status: 'approved' })
    .eq('id', params.id);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
