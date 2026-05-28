import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from 'src/lib/supabase-server';
import { calculateStyles } from 'src/utils/calculate-styles';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, answers } = body;

    if (!email || !answers) {
      return NextResponse.json({ message: 'Email болон хариултууд шаардлагатай' }, { status: 400 });
    }

    const styles = calculateStyles(answers);

    const { data, error } = await supabaseAdmin
      .from('submissions')
      .insert({ email, answers, styles, status: 'pending' })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ _id: data.id, status: data.status });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || 'Алдаа гарлаа' }, { status: 500 });
  }
}
