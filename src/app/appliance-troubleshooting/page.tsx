import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Common Appliance Problems & Troubleshooting Guide — Nebraska Institute of Technology',
  description:
    'Diagnose washer, dryer, refrigerator, dishwasher, and range problems at the component level. Learn what\'s actually wrong and how to find it — from NIT\'s electronics training program.',
  alternates: { canonical: 'https://nebnit.com/appliance-troubleshooting' },
  openGraph: {
    title: 'Common Appliance Problems & Troubleshooting Guide — Nebraska Institute of Technology',
    description:
      'Washer won\'t spin. Dryer won\'t heat. Fridge not cooling. Learn what\'s actually failed and how to find it — at the component level.',
    url: 'https://nebnit.com/appliance-troubleshooting',
    images: [{ url: '/api/og?title=Appliance+Troubleshooting&desc=Washer%2C+dryer%2C+fridge%2C+dishwasher%E2%80%94component-level+diagnosis+guide', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://nebnit.com/appliance-troubleshooting#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Why won't my washer spin?",
          acceptedAnswer: { '@type': 'Answer', text: "Common causes include a failed motor control triac or relay on the control board, a worn drive coupling or broken belt, a faulty lid switch (top-load) or door latch switch (front-load), or a motor control board fault. Start with the lid or door switch — these are safety interlocks that prevent spin if the board doesn't see them closed." },
        },
        {
          '@type': 'Question',
          name: 'Why is my dryer not heating?',
          acceptedAnswer: { '@type': 'Answer', text: "The most common cause is a blown thermal fuse — but before replacing it, check for a blocked dryer vent. Restricted airflow causes overheating that blows the fuse. Other causes: failed heating element, faulty cycling thermostat, or a bad heating relay on the control board." },
        },
        {
          '@type': 'Question',
          name: 'Why is my refrigerator not cooling?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by cleaning the condenser coils — dirty coils are the most common cause of cooling loss. If coils are clean, check the condenser fan motor, evaporator fan motor, and compressor start relay. A failed defrost system can also cause ice buildup that blocks airflow to the fridge section.' },
        },
        {
          '@type': 'Question',
          name: 'What do appliance error codes mean?',
          acceptedAnswer: { '@type': 'Answer', text: "Error codes point to a failed system or circuit, not a specific part. An F5 door latch code means the board isn't seeing the door latch switch close — the switch could be bad, the wire harness could be broken, or the board input could be faulty. Always diagnose the root cause rather than just ordering the part the code suggests." },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://nebnit.com/appliance-troubleshooting#webpage',
      url: 'https://nebnit.com/appliance-troubleshooting',
      name: 'Common Appliance Problems & Troubleshooting — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'Appliance Troubleshooting', item: 'https://nebnit.com/appliance-troubleshooting' },
        ],
      },
    },
  ],
};

export default function ApplianceTroubleshootingPage() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <main id="main">

        <section className="page-hero">
          <div className="container">
            <h1>Common Appliance Problems — What&apos;s Actually Wrong and How to Find It</h1>
            <p>Most appliance failures come down to a handful of repeatable root causes. A washer that won&apos;t spin, a dryer with no heat, a refrigerator that&apos;s warm — each symptom maps to a specific circuit or component. Understanding that mapping is what makes a diagnosis.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="guide-intro-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="guide-intro-heading">How to Read This Guide</h2>
            <p>The goal here isn&apos;t to give you a part number. It&apos;s to help you understand what system failed and why. Every symptom listed below maps to a circuit or component — a switch, a relay, a motor winding, a sensor. When you know which system the symptom points to, you can test systematically rather than guessing.</p>
            <p>Most failures are not random. A dryer thermal fuse doesn&apos;t blow without a reason. A washer drain pump doesn&apos;t fail without something driving it there. Before you replace a part, understand what caused it to fail — or you&apos;ll be replacing the same part again in six months. This guide gives you the starting point. The multimeter gives you the answer.</p>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="washer-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="washer-heading">Washer Troubleshooting</h2>
              <p>Washing machine faults almost always trace back to one of four systems: the drive system, the water system, the door/lid interlock circuit, or the control board.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
                <div>
                  <h3>Won&apos;t Spin or Agitate</h3>
                  <p>Start with the lid switch (top-load) or door latch switch (front-load) — these are safety interlocks. If the board doesn&apos;t see them closed, it will not allow spin or agitation. Beyond that: motor control triac or relay on the control board, worn drive coupling or broken drive belt, or a failed motor altogether. On direct-drive machines, the drive coupling is the first mechanical failure point.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22V12"/>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
                  <path d="M12 2a10 10 0 0 1 7.39 16.74"/>
                </svg>
                <div>
                  <h3>Won&apos;t Drain</h3>
                  <p>The drain pump motor is the most common cause — check for continuity across the pump motor windings. Before replacing the pump, clear the drain pump filter (front-loaders have one, usually behind a kick plate). A clogged filter causes enough back-pressure to prevent drainage and can burn out a healthy pump. Also check the pump relay on the control board if the pump tests good electrically but won&apos;t run.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8"/>
                  <path d="M12 17v4"/>
                  <path d="M7 8h.01M12 8h.01M17 8h.01"/>
                </svg>
                <div>
                  <h3>Fills with Error Codes</h3>
                  <p>Error codes point to a system, not always a single part. A door latch code (F5, dL, Lid) means the board isn&apos;t seeing the latch switch close — could be the switch, the wire harness, or a damaged board input. A water level code points to the pressure switch or its hose. A motor current code suggests a locked rotor, worn motor brushes, or an overloaded drum. Always check for the obvious mechanical cause before condemning the board.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
                  <line x1="12" y1="2" x2="12" y2="12"/>
                </svg>
                <div>
                  <h3>Won&apos;t Start at All</h3>
                  <p>If the machine is completely dead with no display or response, check the power supply: outlet voltage, lid or door switch, and the thermal fuse on the control board. Thermal fuses on washer control boards open under excessive heat or a surge — if it&apos;s blown, find out why before replacing it. If there&apos;s a display but nothing happens on start, the lid/door switch interlock is the first suspect.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="dryer-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="dryer-heading">Dryer Troubleshooting</h2>
              <p>Dryer faults split cleanly between heat system failures and mechanical failures. The vent system is involved in more failures than most people realize.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
                  <path d="M13 2.05V12l4.25 4.25"/>
                </svg>
                <div>
                  <h3>No Heat — Electric Dryer</h3>
                  <p>The thermal fuse is the most common cause, but it&apos;s a symptom, not the root failure. A thermal fuse blows because something caused the dryer to overheat — almost always a blocked vent duct. Check airflow first. If vent is clear, test the heating element for continuity (open = failed element). Also test the high-limit thermostat and the heating relay on the control board. All of these are in the heat circuit and any one of them open will kill heat entirely.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>
                <div>
                  <h3>No Heat — Gas Dryer</h3>
                  <p>Gas dryer heat failures usually trace to the igniter assembly or the gas valve coils. The igniter glows to open a radiant sensor that then energizes the gas valve coils — if the igniter is weak (glows but won&apos;t get hot enough to trip the sensor), the valve won&apos;t open. Test igniter resistance: a good igniter reads 50–400 ohms depending on brand. Also test the gas valve coils (should show continuity) and the flame sensor (radiant sensor).</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                </svg>
                <div>
                  <h3>Overheats or Clothes Too Hot</h3>
                  <p>Restricted airflow is responsible for the vast majority of overheating complaints — check the vent duct from the dryer to the exterior cap for lint buildup, kinks, or a stuck damper. If airflow is confirmed good, the cycling thermostat is next: if it&apos;s stuck closed (showing continuity at room temperature when it should be open), it won&apos;t cycle the heater off and the drum will overheat continuously.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <div>
                  <h3>Drum Won&apos;t Turn</h3>
                  <p>Open the dryer and check for a broken drive belt — this is the single most common cause. The belt wraps around the drum, over an idler pulley, and drives the motor pulley. A broken belt means the drum spins freely by hand with no resistance. If the belt is intact, check the idler pulley (seized or worn flat), drum glides or felt seal (excessive friction), or the motor itself. A motor that hums but doesn&apos;t turn usually indicates a seized bearing or open start winding.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="15" rx="2"/>
                  <polyline points="17 2 12 7 7 2"/>
                </svg>
                <div>
                  <h3>Won&apos;t Start</h3>
                  <p>The door switch is the first check — the dryer will not run with the door open or if the door switch fails to close. Test it for continuity with the door pressed closed. Next: the thermal fuse on the exhaust duct (not to be confused with the high-limit thermostat on the heater box). If both test good, check the start relay on the control board and confirm the motor windings have continuity and aren&apos;t shorted to ground.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="refrigerator-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="refrigerator-heading">Refrigerator Troubleshooting</h2>
              <p>Refrigerator failures split between the sealed system (compressor, refrigerant) and the electrical/mechanical systems that support it. Most failures that look like sealed system problems are actually electrical.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22V12M12 12C12 7 7 4 2 6"/>
                  <path d="M12 12c0-5 5-8 10-6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
                <div>
                  <h3>Not Cooling (Both Sections)</h3>
                  <p>Start by pulling the condenser coils out from behind or underneath — dirty condenser coils are the single most common cause of complete cooling loss and the most overlooked. If coils are clean, check the condenser fan motor (should run whenever the compressor runs). If the compressor won&apos;t start, test the start relay — it&apos;s a small plug-on component at the compressor; shake it next to your ear, a rattle means it&apos;s failed. Beyond that: main control board compressor relay or a failed compressor.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <path d="M9 7h1M9 17h1"/>
                </svg>
                <div>
                  <h3>Freezer Works, Fresh Food Section Warm</h3>
                  <p>This specific symptom — freezer cold, fridge warm — almost always points to the evaporator fan not circulating air into the fresh food section, or the air damper between them being stuck closed. If both the fan and damper are operating, the defrost system has likely failed: ice builds up on the evaporator coil until it&apos;s completely blocked, and no air can pass through it into the refrigerator section even though the evaporator itself is still cold.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"/>
                  <polyline points="16 19 19 22 22 19"/>
                  <line x1="19" y1="15" x2="19" y2="22"/>
                </svg>
                <div>
                  <h3>Defrost Not Working</h3>
                  <p>The defrost system has three main components: the defrost heater (heats the evaporator to melt frost), the defrost thermostat (cuts power to the heater when the coil reaches ~50°F to prevent overheating), and the defrost timer or control board defrost logic (initiates the cycle). Test the heater for continuity. Test the defrost thermostat — it should be closed (continuous) when cold and open when warm. If both test good, the initiation logic on the board is likely the fault.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <div>
                  <h3>Ice Maker Not Working</h3>
                  <p>Confirm the freezer temperature is actually at or below 0°F — ice makers won&apos;t cycle at warmer temps and this is often the entire problem. If temp is correct: test the water inlet valve solenoid for continuity and confirm water pressure at the valve is adequate (inlet valves need at least 20 PSI). If water fills but no ice is produced, the ice maker module itself (the thermostat, heater, and ejector motor assembly) has likely failed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="dishwasher-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="dishwasher-heading">Dishwasher Troubleshooting</h2>
              <p>Dishwasher faults follow the machine&apos;s cycle: fill, wash, drain, dry. Identifying which phase the machine fails in narrows the fault to a specific subsystem immediately.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
                </svg>
                <div>
                  <h3>Won&apos;t Fill with Water</h3>
                  <p>The water inlet valve is a solenoid-operated valve — test the solenoid coil for continuity (no continuity = failed valve). Also check the float switch inside the tub: this is a safety device that cuts the fill circuit if water rises too high; if the float is stuck in the up position or the switch has failed closed, the board won&apos;t open the inlet valve. Finally, confirm the fill relay on the control board is switching output voltage to the valve during the fill cycle.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="17 1 21 5 17 9"/>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                  <polyline points="7 23 3 19 7 15"/>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                </svg>
                <div>
                  <h3>Won&apos;t Drain</h3>
                  <p>Pull the drain pump filter (usually under the lower spray arm) and clear any debris — a clogged filter is often the entire problem. If clear, test the drain pump motor for continuity and confirm voltage is reaching it during the drain cycle. A stuck or fouled check valve in the drain line can also prevent drainage by allowing water to siphon back in after each pump stroke. Also inspect the drain hose for kinks behind the machine.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
                </svg>
                <div>
                  <h3>Not Cleaning Dishes</h3>
                  <p>Remove and inspect the spray arms — the holes clog with mineral deposits and small debris. Run a wire through each hole and flush under the tap. If spray arms are clear, check that the wash pump motor is actually running and building pressure during the wash cycle. Water temperature is also critical: the heating element in the sump should bring wash water to 120–140°F; if the element is open or the board isn&apos;t energizing it, detergent won&apos;t activate properly and cleaning performance will suffer.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <div>
                  <h3>Door Won&apos;t Latch / Machine Won&apos;t Run</h3>
                  <p>The door latch assembly is a safety interlock — the machine will not run if the board doesn&apos;t see the latch switch closed. This is by design, not a fault. If the door latches mechanically but the machine won&apos;t start, the latch switch has failed (test for continuity with the latch engaged). If the door won&apos;t latch at all, the latch strike or latch assembly has broken or the door is warped from heat. The switch and the mechanical latch are separate parts and either can fail independently.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="range-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="range-heading">Range / Oven Troubleshooting</h2>
              <p>Range and oven faults divide by fuel type. Gas ignition and electric heating element failures have different diagnostic paths, but the control board and sensor circuits are common to both.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>
                <div>
                  <h3>Surface Burner Won&apos;t Ignite — Gas</h3>
                  <p>First check whether you can hear a clicking sound when you turn the knob — clicking means the spark module is firing. If you hear clicking but no ignition, the igniter electrode at that burner is either cracked, coated with grease, or the gap is too wide. Clean the electrode tip carefully and check for visible cracks in the ceramic. If there&apos;s no clicking at all, the igniter switch (inside the burner knob assembly) or the spark module itself has failed. Confirm 120V is reaching the spark module during ignition.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v20M2 12h20"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
                <div>
                  <h3>Oven Won&apos;t Heat — Electric</h3>
                  <p>Pull the oven racks and visually inspect the bake element (bottom) and broil element (top) for visible breaks or burn marks. Test each element for continuity — an open element reads infinite resistance and won&apos;t heat. If elements test good, the problem is in the control circuit: the oven relay on the control board, or the oven temperature sensor (thermistor). A failed thermistor reads outside its normal range at room temperature (typically 1,000–1,100 ohms at 70°F for most brands); a wildly out-of-range reading means the board is seeing incorrect temperature data and won&apos;t energize the heating circuit.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12h20"/>
                  <path d="M12 2a10 10 0 0 1 0 20"/>
                  <path d="M12 6v6l4 4"/>
                </svg>
                <div>
                  <h3>Oven Won&apos;t Heat — Gas</h3>
                  <p>A weak igniter is the most common cause of gas oven no-heat — not a failed igniter, a weak one. The igniter must glow bright enough to generate sufficient current to open the oven safety valve (gas valve). An igniter that glows orange but not white-hot won&apos;t draw enough current to open the valve. Test igniter amperage draw while it&apos;s glowing: it should pull 3.2–3.6 amps to reliably open the valve. Below 3.2 amps, replace the igniter even if it still glows. Also check the oven sensor and gas valve if igniter amperage is confirmed good.</p>
                </div>
              </div>
              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <path d="M7 9h.01M12 9h.01M17 9h.01"/>
                </svg>
                <div>
                  <h3>Control Panel Dead or Unresponsive</h3>
                  <p>A completely dead control panel — no display, no response to any button — usually points to the power supply section of the control board. Check the fuse or breaker at the main panel first; many ranges pull 240V and a single leg can fail while the other remains hot, leaving the range in a partially powered state. If line voltage is confirmed at the range terminal block, check for any inline fuses in the main junction box inside the range. Beyond that, the power supply circuit on the control board itself has failed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="error-codes-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="error-codes-heading">How to Read Appliance Error Codes</h2>
            <p>Most modern appliances display F codes, E codes, or some combination — F5E1, E3, Loc, dL. These codes are the control board&apos;s best attempt to tell you what circuit it can&apos;t read correctly. They are valuable, but they have a specific limitation: they point to a system, not a specific component.</p>
            <p>An F5E1 on a washer means the board is reading a fault in the door latch circuit. But is the door latch switch physically broken? Is the wire harness connector corroded or unplugged? Is the latch switch open due to a bent door? Or is the input circuit on the board itself damaged? The code tells you which system to investigate, not which part to order.</p>
            <p>The correct approach is to take the error code, identify which circuit it references in the service manual (most are available from the manufacturer or third-party service sites), and then test every component and connection in that circuit systematically. Start at the mechanical end — the switch, the sensor, the actuator — and work back toward the board. Most faults are in the field components, not the board itself. But you won&apos;t know until you measure.</p>
            <p>One more thing: clear the code and run the machine through a cycle before condemning anything. Intermittent codes from a loose connector, a momentary power surge, or a door that wasn&apos;t fully closed don&apos;t require parts. They require a second look.</p>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="topics-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="topics-heading">Go Deeper on These Topics</h2>
              <p>Troubleshooting guides show you where to look. Training shows you how to look — and what you&apos;re actually seeing when you do.</p>
            </div>
            <div className="topics-grid">
              <Link href="/appliance-repair" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3>Appliance Repair</h3>
                <p>From symptom to fix — the full repair workflow used in a professional service environment.</p>
              </Link>
              <Link href="/control-board-repair" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                  <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M18 12h.01"/>
                </svg>
                <h3>Control Board Repair</h3>
                <p>Understand the boards that run every appliance — relays, triacs, power supplies, and microcontroller I/O circuits.</p>
              </Link>
              <Link href="/diagnostic-tools" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                <h3>Diagnostic Tools</h3>
                <p>Multimeters, clamp meters, ESR meters, oscilloscopes — how to use the tools that make actual diagnosis possible.</p>
              </Link>
              <Link href="/electronics-fundamentals" className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <h3>Electronics Fundamentals</h3>
                <p>Voltage, current, resistance, and the component-level behavior that explains every failure you&apos;ll ever encounter.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Bring Your Appliance. We&apos;ll Help You Find It.</h2>
            <p>NIT&apos;s hands-on training puts you in front of real equipment with real faults. You&apos;ll learn to measure, trace circuits, and diagnose — not guess. If you&apos;re ready to understand what&apos;s actually wrong and why, this is where to start.</p>
            <Link href="/classes" className="btn btn-primary btn-lg">See Our Classes</Link>
          </div>
        </section>

      </main>
    </>
  );
}
