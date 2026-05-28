import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from 'src/lib/supabase-server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { data, error } = await supabaseAdmin
      .from('submissions')
      .select('id, email, status, styles, created_at')
      .eq('id', params.id)
      .single();

    if (error || !data) {
      return NextResponse.json({ message: 'Олдсонгүй' }, { status: 404 });
    }

    return NextResponse.json({
      _id: data.id,
      email: data.email,
      status: data.status,
      styles: data.styles,
      created_at: data.created_at,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || 'Алдаа гарлаа' }, { status: 500 });
  }
}
