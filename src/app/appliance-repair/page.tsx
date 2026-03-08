import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Home Appliance Repair Guide — Nebraska Institute of Technology',
  description:
    'Learn to diagnose and repair home appliances at the component level. Covers the 5 most common failures, diagnostic process, and hands-on repair techniques from NIT.',
  alternates: { canonical: 'https://nebnit.com/appliance-repair' },
  openGraph: {
    title: 'Home Appliance Repair Guide — Nebraska Institute of Technology',
    description: 'Learn to diagnose and repair home appliances at the component level. Covers the 5 most common failures, diagnostic process, and hands-on repair techniques from NIT.',
    url: 'https://nebnit.com/appliance-repair',
    images: [{ url: '/api/og?title=Appliance+Repair+Guide&desc=Component-level+diagnosis+and+repair+for+home+appliances', width: 1200, height: 630 }],
  },
};

const applianceRepairSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://nebnit.com/appliance-repair#article',
      headline: 'The Complete Guide to Home Appliance Repair',
      description: 'Learn how to diagnose and repair home appliances at the component level. Covers the 5 most common failures, the diagnostic process, and when to DIY vs call a pro.',
      author: { '@id': 'https://nebnit.com/#organization' },
      publisher: { '@id': 'https://nebnit.com/#organization' },
      url: 'https://nebnit.com/appliance-repair',
      mainEntityOfPage: 'https://nebnit.com/appliance-repair',
      datePublished: '2024-01-01',
      dateModified: '2025-01-01',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://nebnit.com/appliance-repair#webpage',
      url: 'https://nebnit.com/appliance-repair',
      name: 'Home Appliance Repair Guide — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'Appliance Repair Guide', item: 'https://nebnit.com/appliance-repair' },
        ],
      },
    },
  ],
};

export default function ApplianceRepairPage() {
  return (
    <>
      <SchemaOrg schema={applianceRepairSchema} />
      <main id="main">

        <section className="page-hero">
          <div className="container">
            <h1>The Complete Guide to Home Appliance Repair</h1>
            <p>Most appliances fail at the component level — a single capacitor, a burned relay contact, a seized motor bearing. Understanding what broke and why is a skill you can learn. Here&apos;s how to start thinking like a technician, not a parts replacer.</p>
            <Link href="/classes" className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>See NIT Classes &rarr;</Link>
          </div>
        </section>

        <section className="section" aria-labelledby="repair-vs-replace-heading">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 id="repair-vs-replace-heading">Why Repair Instead of Replace?</h2>
              <p>Buying new feels like the easy answer. It rarely is — financially, environmentally, or intellectually.</p>
            </div>
            <div className="pillars-grid">
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <h3>Save Money</h3>
                <p>A new mid-range washing machine runs $700–$1,200. The part that failed is often a $15 lid switch, a $40 motor coupler, or a $60 control board repair. Even a complete motor replacement typically costs under $150 in parts. Professional repair visits average $150–$300 including labor — still a fraction of replacement. When you can diagnose and repair yourself, you keep the machine and the money.</p>
              </div>
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                </svg>
                <h3>Reduce Waste</h3>
                <p>The EPA estimates that Americans discard roughly 9–11 million tons of major appliances annually. A refrigerator that ends up in a landfill contains compressor oil, refrigerant, and dozens of pounds of mixed metals and plastics that are costly and difficult to recover. Manufacturing a replacement appliance consumes significant raw materials and energy. Repairing a machine that works extends its useful life by years and keeps it out of the waste stream entirely.</p>
              </div>
              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <h3>Build a Skill</h3>
                <p>Understanding electronics is permanent knowledge. The principles governing a washing machine control board — voltage regulation, relay switching, thermistor sensing, transistor drive circuits — are the same principles inside an HVAC controller, an industrial motor drive, a commercial dishwasher. Once you can read a schematic and test a component, that ability travels with you across every machine you&apos;ll ever encounter. It compounds. A replaced part teaches you nothing; a diagnosed failure teaches you everything.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="common-failures-heading">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 id="common-failures-heading">The 5 Most Common Appliance Failures</h2>
              <p>Across washers, dryers, dishwashers, refrigerators, and ranges, most failures trace back to one of five subsystems. Here&apos;s what to look for in each.</p>
            </div>
            <div className="benefits-grid">

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <div>
                  <h3>Control Board Failure</h3>
                  <p><strong>Symptoms:</strong> Appliance is completely dead, displays a fault code, behaves erratically, or cycles stop at the same point every time. Sometimes the unit powers on but refuses to advance past one stage of a cycle.</p>
                  <p><strong>Check first:</strong> Confirm incoming power at the board&apos;s supply terminals with a multimeter before condemning the board — a blown thermal fuse or failed power supply capacitor upstream of the board is far cheaper to fix. On the board itself, visually inspect for bulging or leaking electrolytic capacitors (especially near heat sources), burned resistors, cracked solder joints around relay pins, and lifted PCB pads. Many &ldquo;failed&rdquo; control boards are actually repairable at the component level for a few dollars in parts.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <div>
                  <h3>Heating Element</h3>
                  <p><strong>Symptoms:</strong> Dryer tumbles but produces no heat. Oven heats unevenly or not at all. Dishwasher doesn&apos;t dry dishes. Water won&apos;t heat in an electric water heater.</p>
                  <p><strong>Check first:</strong> With the appliance unplugged, use a multimeter set to resistance to check the element terminals for continuity. A healthy element reads some resistance (typically 8–50 ohms depending on wattage); an open element reads infinite resistance (OL on most meters). Also check the thermal cutoff fuse and any high-limit thermostat in series with the element — these safety devices open permanently when an element overheats, protecting the machine. If the cutoff keeps blowing, restricted airflow is usually the underlying cause, not a faulty thermostat.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
                <div>
                  <h3>Motor / Drive System</h3>
                  <p><strong>Symptoms:</strong> Washer agitates but won&apos;t spin (or spins but won&apos;t agitate). Dryer drum doesn&apos;t turn. Loud humming with no movement. Burning smell during operation. Motor runs but output shaft doesn&apos;t turn.</p>
                  <p><strong>Check first:</strong> On direct-drive washers, the motor coupler — a three-piece plastic and rubber coupling between the motor shaft and transmission — is the most common failure point, and it&apos;s designed to sacrifice itself before the motor burns out. Inspect the drive belt on belt-drive machines for glazing, cracking, or breakage. Check that the motor start capacitor hasn&apos;t failed (a bulged or leaking cap means no starting torque). Test motor winding resistance to identify an open or shorted winding. On variable-speed machines, the motor controller board may be responsible.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
                <div>
                  <h3>Door Latch / Lid Switch</h3>
                  <p><strong>Symptoms:</strong> Washer fills but never agitates or spins. Dryer won&apos;t start. Microwave won&apos;t run. Dishwasher won&apos;t begin a cycle. Machine appears completely dead despite having power.</p>
                  <p><strong>Check first:</strong> These switches are safety interlocks — the machine will not operate unless the control board receives confirmation that the door or lid is properly closed. With a multimeter in continuity mode, check switch continuity in both the open and closed positions; a failed switch often shows open in both states or fails to actuate at the correct point. The plastic strike, striker pin, or door hook that actuates the switch also commonly breaks or wears — inspect the physical mechanism before condemning the electrical component. On front-load washers, the door lock assembly contains both a latch mechanism and a bimetal delay element; either can fail independently.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <div>
                  <h3>Water Pump / Drain System</h3>
                  <p><strong>Symptoms:</strong> Washer or dishwasher won&apos;t drain, leaves standing water at the end of a cycle, triggers an error code (F21, E24, and similar drain fault codes), or stops mid-cycle at the drain phase.</p>
                  <p><strong>Check first:</strong> Start with the drain filter — on front-load washers it&apos;s usually behind a small access panel at the lower front; on dishwashers it&apos;s at the bottom of the tub. A clogged filter accounts for a significant percentage of &ldquo;failed pump&rdquo; calls. If the filter is clear, check the drain hose for kinks, clogs, or improper installation height (the hose must loop high enough to prevent siphoning). If both are clear, test the pump motor for continuity and check whether the pump impeller turns freely — socks, coins, and debris can jam the impeller without blocking the filter. On electronic models, confirm the drain relay or triac on the control board is firing the pump before assuming the pump itself is at fault.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="diagnostic-process-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="diagnostic-process-heading">The Diagnostic Process</h2>
            <p>Professional appliance technicians follow a systematic diagnostic process rather than guessing at parts. This is the core of what NIT teaches, and it applies equally well whether you&apos;re working on a washer that won&apos;t spin or a refrigerator that won&apos;t cool.</p>
            <p><strong>Start with the symptom.</strong> Define it precisely. &ldquo;Doesn&apos;t work&rdquo; is not a symptom. &ldquo;Fills with water, agitates for two minutes, stops, displays F5E3, then drains&rdquo; is a symptom. The more precisely you can characterize what the machine does and doesn&apos;t do, the more efficiently you can isolate the failure.</p>
            <p><strong>Retrieve error codes.</strong> Most appliances built after 2000 have onboard diagnostic systems that store fault codes. Consult the service manual for your specific model to enter diagnostic mode — it&apos;s often a specific button sequence or switch position sequence within 30 seconds of power-up. Fault codes are an invaluable starting point, but treat them as a direction to investigate, not a parts list. An F5E3 door lock fault could mean a failed door lock assembly, a wiring harness fault, a damaged connector, or a control board output driver that can&apos;t energize the lock solenoid.</p>
            <p><strong>Visual inspection before measuring.</strong> Before you reach for a multimeter, look carefully. Open the access panels, move harnesses, examine connectors. Burned insulation, melted connectors, corroded terminals, broken wires, cracked plastic components, and signs of water intrusion are often visible before any electrical measurement is needed. A burned relay contact or a heat-discolored resistor on a control board tells you where to start measuring.</p>
            <p><strong>Component testing with instruments.</strong> Use a multimeter for resistance, continuity, and voltage measurements. Measure resistance with the circuit de-energized. Measure voltage in operation. An ESR meter lets you test capacitors in-circuit without desoldering. An oscilloscope reveals waveform problems invisible to a multimeter — a motor control PWM signal that should be a clean square wave but shows heavy ringing, or a power supply output that looks correct on DC voltage but carries an AC ripple that&apos;s destabilizing the control logic.</p>
            <p><strong>Targeted repair, not parts replacement.</strong> Once you&apos;ve identified the specific failed component — not just the subsystem — replace or repair that component. Verify the repair by running the machine through a complete cycle. Then understand why it failed: a capacitor near a heat source has a shortened lifespan by design; if you don&apos;t improve airflow or add thermal insulation, the replacement will fail again in the same timeframe.</p>
            <p>This sequence — symptom definition, fault code retrieval, visual inspection, instrument measurement, targeted repair, root cause analysis — is the structured methodology NIT trains into every student. It works on every appliance you&apos;ll ever encounter.</p>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="diy-vs-pro-heading">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 id="diy-vs-pro-heading">When to DIY vs. Call a Pro</h2>
              <p>Honest guidance on where the limits are — and why most appliance problems don&apos;t hit them.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <h3>Call a Licensed Pro For These</h3>
                  <p><strong>Gas lines and gas valves.</strong> Improper gas line work creates explosion and carbon monoxide hazards. Gas appliance work involving supply lines, connectors, or main gas valves belongs to licensed gas fitters.</p>
                  <p><strong>Refrigerant systems.</strong> Handling refrigerants (R-410A, R-134a, R-600a, and others) legally requires EPA Section 608 certification. Refrigerant is also handled under pressure — improper work can result in serious injury. Sealed system work in refrigerators and air conditioners is certified-technician territory.</p>
                  <p><strong>Structural damage.</strong> A washing machine that has shaken its cabinet apart due to a failed suspension system, or a range with a distorted chassis from a fire, may have compromised safety interlocks and mounting geometry that isn&apos;t obvious from electrical testing alone.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <div>
                  <h3>Excellent DIY Candidates</h3>
                  <p><strong>Everything electronic.</strong> Control boards, motor controllers, lid switches, door latches, heating elements, thermal fuses, thermistors, water inlet valves, drain pumps, drive belts, motor couplers, start capacitors — these are all standard electrical components that can be safely tested and replaced with the unit unplugged. The vast majority of appliance failures fall into this category.</p>
                  <p><strong>Water-side components (electric).</strong> Water inlet valves, drain pumps, hose fittings, and door gaskets involve water but no gas or refrigerant. They are well within DIY range with the unit unplugged and the water supply shut off at the valve behind the machine.</p>
                  <p><strong>Any failure where you can identify the specific component.</strong> If you can measure a failed component with a multimeter and source its replacement part, you can make the repair. The skill is in the diagnosis, not the removal and installation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="dig-deeper-heading">
          <div className="container">
            <div className="section-header animate-on-scroll">
              <h2 id="dig-deeper-heading">Dig Deeper</h2>
              <p>Related guides covering the knowledge that makes appliance diagnostics possible.</p>
            </div>
            <div className="topics-grid">
              <Link href="/electronics-fundamentals" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <h3>Electronics Fundamentals</h3>
                <p>Voltage, current, resistance, and power — the foundation everything else is built on. Understand Ohm&apos;s law not as a formula but as a measurable reality inside the circuits you work on.</p>
              </Link>
              <Link href="/control-board-repair" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3>Control Board Repair</h3>
                <p>How to read a control board, identify failed components visually and with instruments, and perform component-level repairs. Covers capacitor replacement, relay testing, and solder joint inspection.</p>
              </Link>
              <Link href="/diagnostic-tools" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3>Diagnostic Tools</h3>
                <p>Multimeters, ESR meters, clamp meters, and oscilloscopes — what each tool measures, when to use it, and how to interpret the readings you get from a live appliance circuit.</p>
              </Link>
              <Link href="/appliance-troubleshooting" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3>Appliance Troubleshooting</h3>
                <p>Symptom-by-symptom troubleshooting guides for washers, dryers, dishwashers, refrigerators, and ranges. Walk through the diagnostic process with real-world failure examples and measurement targets.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Hands-On?</h2>
            <p>NIT training puts real appliances in front of you with real faults to diagnose. You&apos;ll leave knowing how to think through a failure — not just which part to order.</p>
            <Link href="/classes" className="btn btn-primary btn-lg">View Classes</Link>
          </div>
        </section>

      </main>
    </>
  );
}
