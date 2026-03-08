import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? 'Nebraska Institute of Technology';
  const desc =
    searchParams.get('desc') ??
    'Electronics training that goes deeper — component-level diagnostics, PCB repair, and more.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #1E3A5F 0%, #2A4F7A 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: '10px 20px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            NIT
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '16px', fontSize: '16px' }}>
            Nebraska Institute of Technology
          </div>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: title.length > 50 ? '40px' : '52px',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '22px',
            lineHeight: 1.5,
            maxWidth: '900px',
          }}
        >
          {desc}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
