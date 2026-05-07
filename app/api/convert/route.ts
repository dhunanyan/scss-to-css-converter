import { NextResponse } from 'next/server';
import { convertDetailed } from '@dhunanyan/scss-to-css-converter';

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { scss?: string };
    const scss = typeof body?.scss === 'string' ? body.scss : '';

    const result = convertDetailed(scss);

    if (!result.isSCSSValid) {
      return NextResponse.json(
        { css: '', error: result.error ?? 'SCSS conversion failed.' },
        { status: 400 }
      );
    }

    return NextResponse.json({ css: result.CSS });
  } catch (error) {
    return NextResponse.json(
      {
        css: '',
        error: error instanceof Error ? error.message : 'Unexpected server error.',
      },
      { status: 500 }
    );
  }
}
