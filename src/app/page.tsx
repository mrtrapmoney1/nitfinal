import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Nebraska Institute of Technology — Electronics Training That Goes Deeper',
  description:
    'Nebraska Institute of Technology teaches you to understand electronics at the component level. Not just replacing parts — learning how they work, why they fail, and how to bring them back.',
  alternates: { canonical: 'https://nebnit.com/' },
  openGraph: {
    title: 'Nebraska Institute of Technology — Electronics Training That Goes Deeper',
    description: 'Go beyond part swapping. Understand the electronics inside the machines the world depends on.',
    url: 'https://nebnit.com/',
    images: [{ url: '/api/og?title=Nebraska+Institute+of+Technology&desc=Electronics+training+that+goes+deeper', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Nebraska Institute of Technology — Electronics Training That Goes Deeper',
    description: 'Go beyond part swapping. Understand the electronics inside the machines the world depends on.',
    images: ['/api/og?title=Nebraska+Institute+of+Technology&desc=Electronics+training+that+goes+deeper'],
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://nebnit.com/#organization',
      name: 'Nebraska Institute of Technology',
      alternateName: 'NIT',
      url: 'https://nebnit.com',
      telephone: '(402) 466-9090',
      email: 'service@metrotv-audiotech.com',
      foundingDate: '2003',
      description:
        'Nebraska Institute of Technology teaches electronics at the component level — control boards, circuit analysis, failure diagnostics, and the precise engineering inside every appliance.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1109 N Cotner Blvd',
        addressLocality: 'Lincoln',
        addressRegion: 'NE',
        postalCode: '68505',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 40.8509, longitude: -96.6484 },
      areaServed: [
        { '@type': 'City', name: 'Lincoln', containedInPlace: { '@type': 'State', name: 'Nebraska' } },
        { '@type': 'City', name: 'Omaha', containedInPlace: { '@type': 'State', name: 'Nebraska' } },
      ],
      sameAs: [],
      knowsAbout: [
        'Electronics Repair',
        'Component-Level Diagnostics',
        'PCB Repair',
        'Appliance Servicing',
        'Circuit Analysis',
        'Schematic Reading',
        'DIY Appliance Repair',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nebnit.com/#localbusiness',
      name: 'Nebraska Institute of Technology',
      url: 'https://nebnit.com',
      telephone: '(402) 466-9090',
      email: 'service@metrotv-audiotech.com',
      foundingDate: '2003',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1109 N Cotner Blvd',
        addressLocality: 'Lincoln',
        addressRegion: 'NE',
        postalCode: '68505',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 40.8509, longitude: -96.6484 },
      areaServed: [{ '@type': 'City', name: 'Lincoln' }, { '@type': 'City', name: 'Omaha' }],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      priceRange: 'Free',
      description:
        'Electronics training program in partnership with Metro TV and Appliance Service, serving Lincoln and Omaha, Nebraska.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nebnit.com/#website',
      url: 'https://nebnit.com',
      name: 'Nebraska Institute of Technology',
      publisher: { '@id': 'https://nebnit.com/#organization' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={homeSchema} />
      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-content">
            <span className="hero-badge">Now Enrolling</span>
            <h1>Look Inside the Electronics <span className="highlight">the World Depends On</span></h1>
            <p>
              Electronics are everywhere — in every home, every building, every system we rely on. NIT doesn&apos;t
              teach you to swap parts. We teach you to understand them. How a single component works in small,
              precise, delicate ways. How to see what others overlook.
            </p>
            <div className="hero-actions">
              <Link href="/classes" className="btn btn-primary btn-lg">Free DIY Classes</Link>
              <Link href="/about" className="btn btn-outline btn-lg">About NIT</Link>
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="section" aria-labelledby="pillars-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="pillars-heading">Why NIT?</h2>
              <p>We go deeper than anyone else.</p>
            </div>
            <div className="pillars-grid">
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                <h3>Component-Level Understanding</h3>
                <p>We don&apos;t stop at the part number. You&apos;ll learn what&apos;s happening inside the component itself — the circuits, the tolerances, the failure modes that separate a real technician from a parts swapper.</p>
              </div>
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                <h3>Electronics Are Everywhere</h3>
                <p>Every appliance in every home runs on electronic systems. Control boards, sensors, relays, switching circuits — these are the systems that keep modern life running, and they all need people who understand them.</p>
              </div>
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3>Repair, Don&apos;t Replace</h3>
                <p>Anyone can order a new board. We teach you to read a schematic, trace a circuit, identify a failed component on a PCB, and fix what others throw away. That&apos;s a skill that never goes obsolete.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section section-alt" aria-labelledby="about-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="about-heading">Training That Goes Beyond the Surface</h2>
            <p>Most training programs teach you to identify a bad part and order a replacement. NIT is different. We put the component under a magnifying glass — sometimes literally. A single control board in a washing machine contains dozens of discrete electronic components, each one operating within tight tolerances, each one with its own failure signature.</p>
            <p>We show you how to read schematics, use diagnostic equipment, and understand why a capacitor failed — not just that it did. We partner with Metro TV and Appliance Service to give you access to real equipment, real failures, and real repair scenarios in a supervised lab environment.</p>
            <Link href="/about" className="btn btn-primary">About Our Training</Link>
          </div>
        </section>

        {/* Free DIY Classes CTA */}
        <section className="section" aria-labelledby="classes-cta-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="classes-cta-heading">Free DIY Appliance Repair Classes</h2>
              <p>Bring your broken appliance. Our instructors guide you through real diagnostics and repairs — no experience required.</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
              <Link href="/classes" className="btn btn-primary btn-lg">Sign Up Free</Link>
            </div>
          </div>
        </section>

        {/* Technical Resources */}
        <section className="section section-alt" aria-labelledby="resources-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="resources-heading">Learn Electronics &amp; Appliance Repair</h2>
              <p>Technical guides covering the knowledge NIT teaches — from fundamentals to component-level diagnostics.</p>
            </div>
            <div className="pages-grid">
              <Link href="/appliance-repair" className="page-link-card animate-on-scroll">
                <h3>Home Appliance Repair Guide</h3>
                <p>The 5 most common appliance failures, the diagnostic process, and when to DIY vs call a pro.</p>
                <span className="page-link-arrow">Read the guide &rarr;</span>
              </Link>
              <Link href="/electronics-fundamentals" className="page-link-card animate-on-scroll">
                <h3>Electronics Fundamentals</h3>
                <p>Voltage, current, resistance, components, and how they fail — explained with real appliance examples.</p>
                <span className="page-link-arrow">Start learning &rarr;</span>
              </Link>
              <Link href="/control-board-repair" className="page-link-card animate-on-scroll">
                <h3>Control Board Repair</h3>
                <p>Diagnosis over replacement. How to inspect, test, and repair the electronics inside appliance control boards.</p>
                <span className="page-link-arrow">Learn board repair &rarr;</span>
              </Link>
              <Link href="/diagnostic-tools" className="page-link-card animate-on-scroll">
                <h3>Diagnostic Tools Guide</h3>
                <p>Multimeters, clamp meters, ESR meters, oscilloscopes — what each tool measures and how to use it.</p>
                <span className="page-link-arrow">See the tools &rarr;</span>
              </Link>
              <Link href="/appliance-troubleshooting" className="page-link-card animate-on-scroll">
                <h3>Appliance Troubleshooting</h3>
                <p>Common washer, dryer, refrigerator, dishwasher, and range problems — root causes and where to start.</p>
                <span className="page-link-arrow">Troubleshoot now &rarr;</span>
              </Link>
              <Link href="/classes" className="page-link-card animate-on-scroll">
                <h3>Free DIY Classes</h3>
                <p>Bring your appliance to a free hands-on session. We guide you through the diagnosis and repair.</p>
                <span className="page-link-arrow">Sign up free &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
