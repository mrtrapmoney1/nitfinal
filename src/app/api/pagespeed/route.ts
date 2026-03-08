import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PSI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'PageSpeed not configured.' }, { status: 503 });
  }

  const url = req.nextUrl.searchParams.get('url') ?? 'https://nebnit.com';
  const strategy = req.nextUrl.searchParams.get('strategy') ?? 'mobile';

  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${apiKey}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const cats = data.lighthouseResult?.categories;
    return NextResponse.json({
      performance: cats?.performance?.score,
      accessibility: cats?.accessibility?.score,
      seo: cats?.seo?.score,
      bestPractices: cats?.['best-practices']?.score,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch PageSpeed data.' }, { status: 500 });
  }
}
