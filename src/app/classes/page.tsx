import type { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import ClassesForm from '@/components/ClassesForm';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: 'Free DIY Appliance Repair Classes — Nebraska Institute of Technology' },
  description:
    'Bring your broken appliance to our free hands-on repair classes in Lincoln and Omaha, Nebraska. NIT instructors guide you through diagnostics, component testing, and real repairs.',
  alternates: { canonical: 'https://nebnit.com/classes' },
  openGraph: {
    title: 'Free DIY Appliance Repair Classes — Nebraska Institute of Technology',
    description:
      'Bring your broken appliance to our free hands-on repair classes in Lincoln and Omaha, Nebraska. NIT instructors guide you through diagnostics, component testing, and real repairs.',
    url: 'https://nebnit.com/classes',
    images: [{ url: '/api/og?title=Free+DIY+Classes&desc=Bring+your+appliance+%E2%80%94+NIT+instructors+guide+you+through+real+diagnostics+and+repairs', width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    id: 1,
    title: 'Do I need any experience to attend?',
    content: `<p>No experience required. These classes are designed for anyone who wants to understand how their appliance works and learn to fix it themselves. NIT instructors will guide you through every step — from identifying the problem to making the repair.</p>`,
  },
  {
    id: 2,
    title: 'What appliances can I bring?',
    content: `<p>We cover major household appliances: washing machines, dryers, refrigerators, dishwashers, ranges, and microwaves. If you're not sure whether your appliance is in scope, use the optional message field on the sign-up form to describe what you have and we'll confirm before the class.</p>`,
  },
  {
    id: 3,
    title: 'Is there a cost?',
    content: `<p>The class itself is free. If your repair requires parts and NIT has them in stock through Metro TV and Appliance Service's supply chain, we can work out a deal on the spot — typically at or near cost. There's no obligation to purchase anything.</p>`,
  },
  {
    id: 4,
    title: 'What should I bring?',
    content: `<p>Bring your broken appliance and any relevant model or serial number information if you have it. Basic hand tools (screwdrivers, nut drivers) are helpful but not required — NIT has professional diagnostic equipment on hand. Wear closed-toe shoes and clothes you don't mind getting dirty.</p>`,
  },
];

const classesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://nebnit.com/classes#course',
      name: 'Free DIY Appliance Repair Classes',
      description:
        'Free hands-on appliance repair classes in Lincoln and Omaha Nebraska. Bring your appliance — NIT instructors guide you through diagnostics, component testing, and real repairs.',
      provider: { '@id': 'https://nebnit.com/#organization' },
      url: 'https://nebnit.com/classes',
      educationalLevel: 'Beginner',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      teaches: ['Appliance Diagnostics', 'Component Testing', 'PCB Inspection', 'Safe Repair Practices'],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'in-person',
        location: {
          '@type': 'Place',
          name: 'Metro TV and Appliance Service',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1109 N Cotner Blvd',
            addressLocality: 'Lincoln',
            addressRegion: 'NE',
            postalCode: '68505',
            addressCountry: 'US',
          },
        },
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://nebnit.com/classes#webpage',
      url: 'https://nebnit.com/classes',
      name: 'Free DIY Appliance Repair Classes — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'Classes', item: 'https://nebnit.com/classes' },
        ],
      },
    },
  ],
};

export default function ClassesPage() {
  return (
    <>
      <SchemaOrg schema={classesSchema} />
      <main id="main">

        <section className="page-hero">
          <div className="container">
            <span className="hero-badge">Free — No Experience Required</span>
            <h1>Fix Your Appliance. <span className="highlight">Learn How It Works.</span></h1>
            <p>Bring your broken washer, dryer, fridge, or dishwasher to our free hands-on classes. NIT instructors walk you through real component-level diagnostics and guide you through the repair — using the same professional tools and techniques we teach in our full program.</p>
            <div className="hero-actions">
              <a href="#signup" className="btn btn-primary btn-lg">Sign Up for a Class</a>
              <a href="#what-to-expect" className="btn btn-outline btn-lg">What to Expect</a>
            </div>
          </div>
        </section>

        <section id="what-to-expect" className="section" aria-labelledby="expect-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="expect-heading">What to Expect</h2>
              <p>No lectures. No slides. Just your appliance, professional tools, and an NIT instructor beside you.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
                </div>
                <h3>Bring Your Appliance</h3>
                <p>Show up with the machine that&apos;s giving you trouble. This isn&apos;t a simulation — we work on your actual appliance so every diagnostic step has a real outcome.</p>
              </div>
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
                <h3>Professional-Grade Diagnosis</h3>
                <p>We use the same diagnostic equipment and techniques used in professional appliance service. You&apos;ll learn to test components, read failure signatures, and understand what the appliance is actually telling you.</p>
              </div>
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3>Parts at Cost</h3>
                <p>NIT operates in partnership with Metro TV and Appliance Service, one of the region&apos;s largest appliance parts suppliers. If your repair needs a part and we have it in stock, we can work out a deal — typically at or near cost, no markup for attending the class.</p>
              </div>
              <div className="benefit-card animate-on-scroll">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <h3>Real Knowledge, Not Guesses</h3>
                <p>We don&apos;t just tell you which part to order. You&apos;ll understand why the component failed, how to verify the diagnosis, and what to watch for in the future. That knowledge stays with you long after the repair.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="scope-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="scope-heading">What Appliances Are in Scope?</h2>
            <p>Our free classes cover major household appliances: <strong>washing machines, dryers, refrigerators, dishwashers, ranges, and microwaves</strong>. These are the machines that show up most often in homes and that have the most repair-worthy failure modes — a bad control board, a worn motor start capacitor, a failed heating element or thermal fuse that takes the whole machine down.</p>
            <p>If you&apos;re not sure whether your appliance fits, use the optional message field on the sign-up form to describe what you have. We&apos;ll confirm scope before the class so you&apos;re not hauling something across town for nothing.</p>
            <p>We ask that appliances be reasonably transportable. Window AC units and portable appliances are generally fine — built-in or wall units are outside what we can take on during a class session.</p>
          </div>
        </section>

        <section id="signup" className="section" aria-labelledby="signup-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="signup-heading">Sign Up for a Class</h2>
              <p>Reserve your spot. We&apos;ll reach out to confirm the next available session.</p>
            </div>
            <div className="signup-form-wrapper">
              <ClassesForm />
            </div>
          </div>
        </section>

        <section className="section section-alt faq-section" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Common questions about the free DIY appliance repair classes.</p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Want to Go Deeper?</h2>
            <p>The free classes are a taste of what NIT teaches. If you want to understand electronics at the component level — control boards, circuit analysis, failure diagnostics — get in touch about our full training program.</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">Contact NIT</Link>
              <Link href="/about" className="btn btn-outline btn-lg">About Our Training</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
