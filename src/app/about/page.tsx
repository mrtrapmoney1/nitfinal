import type { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'About — Nebraska Institute of Technology',
  description:
    'NIT teaches electronics at the component level. Understand control boards, circuit analysis, failure diagnostics, and the precise engineering inside every appliance.',
  alternates: { canonical: 'https://nebnit.com/about' },
  openGraph: {
    title: 'About — Nebraska Institute of Technology',
    description: 'Deep electronics training. Understand what\'s inside the machines the world depends on.',
    url: 'https://nebnit.com/about',
    images: [{ url: '/api/og?title=About+NIT&desc=Deep+electronics+training+%E2%80%94+component-level+understanding+of+every+appliance', width: 1200, height: 630 }],
  },
};

const curriculumItems = [
  {
    id: 1,
    title: 'Electrical Fundamentals and Circuit Analysis',
    content: `<p>Before you can diagnose a failed component, you need to understand how electricity behaves. We cover voltage, current, resistance, and power — not as abstract formulas, but as measurable properties you'll observe in live circuits. You'll learn Ohm's law by measuring real loads. You'll understand the difference between AC and DC behavior in appliance circuits, how household 120V and 240V systems are wired, and how to safely work with both.</p>
<p>From there, we move into series and parallel circuits, voltage dividers, current limiting, and the behavior of reactive components (capacitors and inductors) in AC circuits. You'll understand impedance, phase relationships, and why a motor start capacitor has a specific microfarad rating — not just what rating to order.</p>`,
  },
  {
    id: 2,
    title: 'Component Identification and Failure Analysis',
    content: `<p>We go component by component. Resistors — carbon film, metal film, wirewound, fusible — and how each type fails differently. Capacitors — electrolytic, ceramic, film — and why an electrolytic cap near a heat source is a ticking clock. Diodes, rectifiers, and how a single shorted diode in a bridge rectifier changes the entire output waveform. Transistors and MOSFETs — how they switch, how they amplify, and what thermal runaway looks like on a board.</p>
<p>You'll learn to read component markings, decode color bands, interpret SMD codes, and visually identify common failure modes: bulging caps, cracked solder joints, heat-discolored resistors, and burned traces. Then you'll confirm what your eyes see with a multimeter, ESR meter, and oscilloscope.</p>`,
  },
  {
    id: 3,
    title: 'Schematic Reading and PCB Trace Analysis',
    content: `<p>A schematic is a map of how a circuit thinks. We teach you to read them — following signal flow from input to output, identifying power supply stages, control logic sections, and output driver circuits. You'll learn standard symbols, reference designators, and how to cross-reference a schematic to the physical layout of a PCB.</p>
<p>On the board itself, you'll trace copper pathways, identify power planes and signal traces, understand via connections between layers, and locate test points for measurement. When a trace is burned or a pad is lifted, you'll know how to repair it. When a schematic isn't available, you'll learn to reverse-engineer a circuit by following traces and identifying component functions from their placement and values.</p>`,
  },
  {
    id: 4,
    title: 'Control Systems in Home Appliances',
    content: `<p>Modern appliances are embedded systems. A refrigerator's main board reads thermistor inputs, drives compressor relays through transistor switching stages, manages defrost cycles with timed logic, and controls fan motors and damper actuators — all coordinated by a microcontroller running firmware. We break down each of these subsystems.</p>
<p>You'll study how sensor circuits convert physical measurements (temperature, pressure, position) into electrical signals. How those signals are conditioned, filtered, and read by control logic. How output stages amplify low-power control signals to drive high-current loads like compressor motors, heating elements, and solenoid valves. Across washers, dryers, dishwashers, ranges, refrigerators, freezers, microwave ovens, and ice machines — every appliance becomes a case study in applied electronics.</p>`,
  },
  {
    id: 5,
    title: 'Diagnostic Equipment and Measurement Technique',
    content: `<p>Your multimeter is your most important tool, and most people only use a fraction of it. We cover DC and AC voltage measurement, resistance and continuity testing, diode check mode, capacitance measurement, and current measurement — including when and how to use a clamp meter for non-invasive current readings on live appliance circuits.</p>
<p>Beyond the multimeter, we introduce ESR (equivalent series resistance) testing for in-circuit capacitor evaluation, and oscilloscope use for observing waveforms — PWM signals from motor controllers, rectified AC from power supplies, and switching transients from relay contacts. You'll learn what a healthy signal looks like and what a failing circuit shows you before it goes completely dead.</p>`,
  },
  {
    id: 6,
    title: 'Safety, Shop Practices, and Professional Standards',
    content: `<p>Electronics work is precise, and it can be dangerous. We start every student with thorough safety training: lockout/tagout procedures, safe discharge of capacitors (including high-voltage caps in microwave oven circuits), proper grounding practices, and the physiological effects of electrical shock. You'll learn to respect stored energy — a charged capacitor in a microwave magnetron circuit holds enough energy to be lethal even after the unit is unplugged.</p>
<p>We also cover proper use of hand tools, soldering and desoldering technique, ESD (electrostatic discharge) precautions when handling sensitive semiconductor components, and shop organization for safe and efficient work. All training takes place in a supervised lab environment in partnership with Metro TV and Appliance Service.</p>`,
  },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://nebnit.com/about#course',
      name: 'Electronics Technology Training Program',
      description:
        'Progressive electronics training covering component-level diagnostics, circuit analysis, PCB repair, schematic reading, and hands-on appliance servicing.',
      provider: { '@id': 'https://nebnit.com/#organization' },
      url: 'https://nebnit.com/about',
      educationalLevel: 'Beginner to Advanced',
      coursePrerequisites: 'No prior electronics experience required',
      teaches: [
        'Electrical Fundamentals and Circuit Analysis',
        'Component Identification and Failure Analysis',
        'Schematic Reading and PCB Trace Analysis',
        'Control Systems in Home Appliances',
        'Diagnostic Equipment and Measurement Technique',
        'Safety, Shop Practices, and Professional Standards',
      ],
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
      '@id': 'https://nebnit.com/about#webpage',
      url: 'https://nebnit.com/about',
      name: 'About — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://nebnit.com/about' },
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={aboutSchema} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <h1>About Nebraska Institute of Technology</h1>
            <p>Electronics are in everything we depend on. We don&apos;t teach you how to replace a part on a machine — we show you how to look inside it. One component. Precise. Delicate. Complex. That&apos;s where the real understanding begins.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="philosophy-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="philosophy-heading">Electronics Are the Foundation of Everything</h2>
            <p>Open any appliance built in the last twenty years and you&apos;ll find electronics at its core. A modern washing machine doesn&apos;t just fill and spin — it&apos;s governed by a microcontroller-driven control board that manages motor speed through variable frequency drives, reads water temperature through thermistor circuits, monitors drum load via current-sensing resistors, and communicates fault codes through LED multiplexing or digital displays. Every one of those functions relies on discrete electronic components working within precise parameters.</p>
            <p>Most training teaches you to pull that board and order a new one. We think that&apos;s a waste. That board is full of components you can understand, test, and repair: capacitors that filter and store energy, transistors and MOSFETs that switch high-current loads, relays that bridge control logic to power circuits, voltage regulators that keep sensitive ICs within operating range, and trace networks that route signals across multi-layer PCBs.</p>
            <p>NIT exists to show you what&apos;s inside. When a dryer stops heating, we don&apos;t just point to the element — we walk you through the relay that switches it, the triac that controls it, the thermistor circuit that regulates it, and the control board logic that ties it all together. You learn how one small component, working in precise and delicate ways, can bring an entire system down — and how to bring it back.</p>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="partnership-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="partnership-heading">Built on Real-World Experience</h2>
              <p>NIT operates in partnership with Metro TV and Appliance Service.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <div>
                  <h3>Real Equipment, Real Failures</h3>
                  <p>You train on actual appliances with actual faults — not simulations. Every board you examine has a real history and a real problem to solve.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <div>
                  <h3>Industry-Standard Parts Access</h3>
                  <p>Components and parts come through Metro TV&apos;s parts department — the same supply chain used in professional service work.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div>
                  <h3>Supervised Lab Environment</h3>
                  <p>Every hands-on session is guided by experienced professionals. You work at your own pace with support when you need it.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                <div>
                  <h3>Progressive Depth</h3>
                  <p>Start with safety and fundamentals. Build through orientation, maintenance, and servicing. End with advanced diagnostics and special projects on complex systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="learn-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="learn-heading">What You&apos;ll Learn</h2>
              <p>A deeper look at the technical knowledge NIT training builds.</p>
            </div>
            <Accordion items={curriculumItems} />
          </div>
        </section>

        <section className="section" aria-labelledby="resources-about-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="resources-about-heading">Go Deeper — Technical Reading</h2>
              <p>Explore the topics NIT covers in depth.</p>
            </div>
            <div className="pages-grid">
              <Link href="/electronics-fundamentals" className="page-link-card animate-on-scroll">
                <h3>Electronics Fundamentals</h3>
                <p>Voltage, current, components, and failure modes — the foundation of everything we teach.</p>
                <span className="page-link-arrow">Read &rarr;</span>
              </Link>
              <Link href="/control-board-repair" className="page-link-card animate-on-scroll">
                <h3>Control Board Repair</h3>
                <p>How to diagnose and repair appliance control boards at the component level.</p>
                <span className="page-link-arrow">Read &rarr;</span>
              </Link>
              <Link href="/diagnostic-tools" className="page-link-card animate-on-scroll">
                <h3>Diagnostic Tools</h3>
                <p>The instruments that make component-level diagnosis possible — and how to use them.</p>
                <span className="page-link-arrow">Read &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Look Deeper?</h2>
            <p>Sign up for a free DIY class or get in touch to learn about NIT&apos;s training program.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/classes" className="btn btn-primary btn-lg">Free DIY Classes</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
