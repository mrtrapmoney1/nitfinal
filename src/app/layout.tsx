import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import GsapInit from '@/components/GsapInit';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nebnit.com'),
  title: {
    default: 'Nebraska Institute of Technology — Electronics Training That Goes Deeper',
    template: '%s — Nebraska Institute of Technology',
  },
  description:
    'Nebraska Institute of Technology teaches you to understand electronics at the component level. Not just replacing parts — learning how they work, why they fail, and how to bring them back.',
  openGraph: {
    siteName: 'Nebraska Institute of Technology',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true },
  authors: [{ name: 'Nebraska Institute of Technology' }],
};

export const viewport: Viewport = {
  themeColor: '#1E3A5F',
};

const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
          </>
        )}
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <GsapInit />
      </body>
    </html>
  );
}
