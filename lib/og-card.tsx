import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

export function OgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0C',
          color: '#F5F5F7',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#4F46E5',
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            MH
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#9A9AA2' }}>haddidev.xyz</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Flutter developer in Lahore
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              fontSize: 28,
              color: '#9A9AA2',
            }}
          >
            Production mobile apps, Node.js backends, and AI integrations.
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}

export function IconMark(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4F46E5',
          color: '#ffffff',
          fontSize: Math.round(size * 0.4),
          fontWeight: 700,
        }}
      >
        MH
      </div>
    ),
    { width: size, height: size },
  );
}
