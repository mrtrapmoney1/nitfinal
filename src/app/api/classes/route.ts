import { NextRequest, NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';

function sanitize(s: unknown, max = 1000): string {
  if (typeof s !== 'string') return '';
  return s.trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = sanitize(data.name);
  const contact = sanitize(data.contact, 254);
  const message = sanitize(data.message);

  if (!name || !contact) {
    return NextResponse.json({ error: 'Name and contact are required.' }, { status: 400 });
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: 'NIT Website <noreply@resend.dev>',
      to: 'service@metrotv-audiotech.com',
      subject: `NIT Class Signup: ${name}`,
      text: [
        `Name: ${name}`,
        `Contact: ${contact}`,
        message ? `\nNotes:\n${message}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send signup. Please try again.' }, { status: 500 });
  }
}
