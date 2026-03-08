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
  const email = sanitize(data.email, 254);
  const phone = sanitize(data.phone);
  const message = sanitize(data.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: 'NIT Website <noreply@resend.dev>',
      to: 'service@metrotv-audiotech.com',
      replyTo: email,
      subject: `NIT Contact: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        `\nMessage:\n${message}`,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
