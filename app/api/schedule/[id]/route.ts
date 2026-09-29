import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const filePath = path.join(process.cwd(), 'logs', id+'.txt');
    const contents = await readFile(filePath, 'utf-8');

    return new NextResponse(contents, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Failed to read schedule.txt:', error);

    return NextResponse.json({ error: 'Failed to read schedule.txt' }, { status: 500 });
  }
}
