import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) {
    return NextResponse.json({ error: 'GSC not configured.' }, { status: 503 });
  }

  try {
    const key = JSON.parse(keyJson);
    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchConsole = google.searchconsole({ version: 'v1', auth });
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const res = await searchConsole.searchanalytics.query({
      siteUrl: 'https://nebnit.com',
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 20,
      },
    });

    return NextResponse.json({ rows: res.data.rows ?? [] });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch GSC data.' }, { status: 500 });
  }
}
