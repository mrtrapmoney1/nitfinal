import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: 'Electronics Fundamentals for Appliance Repair — Nebraska Institute of Technology' },
  description:
    'Understand the core electronics concepts behind every home appliance — voltage, current, resistance, components, and how they fail. Foundation knowledge for real repair work.',
  alternates: { canonical: 'https://nebnit.com/electronics-fundamentals' },
  openGraph: {
    title: 'Electronics Fundamentals for Appliance Repair — Nebraska Institute of Technology',
    description:
      'Voltage, current, resistance, and the components that make every appliance run. Foundation knowledge for technicians who want to go beyond part swapping.',
    url: 'https://nebnit.com/electronics-fundamentals',
    images: [{ url: '/api/og?title=Electronics+Fundamentals&desc=Voltage%2C+current%2C+resistance%2C+and+the+components+that+make+every+appliance+run', width: 1200, height: 630 }],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://nebnit.com/electronics-fundamentals#article',
      headline: 'Electronics Fundamentals: What Every Technician Needs to Know',
      description:
        'Learn the core electronics concepts that power every home appliance — voltage, current, resistance, key components, and how they fail.',
      author: { '@id': 'https://nebnit.com/#organization' },
      publisher: { '@id': 'https://nebnit.com/#organization' },
      url: 'https://nebnit.com/electronics-fundamentals',
      mainEntityOfPage: 'https://nebnit.com/electronics-fundamentals',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://nebnit.com/electronics-fundamentals#webpage',
      url: 'https://nebnit.com/electronics-fundamentals',
      name: 'Electronics Fundamentals — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'Electronics Fundamentals', item: 'https://nebnit.com/electronics-fundamentals' },
        ],
      },
    },
  ],
};

export default function ElectronicsFundamentalsPage() {
  return (
    <>
      <SchemaOrg schema={pageSchema} />
      <main id="main">

        <section className="page-hero">
          <div className="container">
            <h1>Electronics Fundamentals: <span className="highlight">What Every Technician Needs to Know</span></h1>
            <p>Anyone can look up a part number and place an order. What separates a technician from a parts swapper is understanding what that part actually does — how it behaves in a circuit, how it interacts with every component around it, and exactly how it fails. That understanding starts here, with the foundational concepts that govern every electronic device you will ever work on.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="three-laws-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="three-laws-heading">The Three Laws Every Technician Lives By</h2>
              <p>Voltage, current, and resistance. These three quantities describe everything happening in any circuit, in any appliance, at any moment.</p>
            </div>
            <div className="pillars-grid">

              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <h3>Voltage</h3>
                <p>Voltage is electrical pressure — the force that pushes electrons through a circuit. Measured in volts (V), it is always a difference between two points: higher potential and lower potential. Your home outlet is 120V between hot and neutral. A 9V battery is 9V between its terminals. There is no such thing as voltage at a single point in isolation; it only exists as a comparison.</p>
                <p>In appliance circuits, you will measure voltage constantly: confirming that 120V is reaching a component, checking that a power supply is delivering its rated DC output, verifying that a control board is sending the correct signal voltage to a relay coil. Voltage that should be present and isn&apos;t tells you exactly where a circuit is open.</p>
              </div>

              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
                <h3>Current</h3>
                <p>Current is the flow of electrons through a conductor, measured in amperes (A). If voltage is pressure, current is flow rate. A motor under load draws several amperes. A sensor circuit may draw only a few milliamps. The amount of current flowing through a conductor determines how much heat it generates — which is why wire gauge, fuse ratings, and component power ratings all matter.</p>
                <p>Ohm&apos;s Law ties voltage, current, and resistance together in a single relationship: V = I × R. Double the voltage across a fixed resistance and you double the current. Halve the resistance at a fixed voltage and you double the current. This relationship governs everything from how a heating element is sized to why a shorted component immediately blows a fuse.</p>
              </div>

              <div className="pillar-card animate-on-scroll">
                <svg className="pillar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="6" y2="12"/>
                  <path d="M6 9l2 3-2 3"/>
                  <rect x="8" y="9" width="4" height="6" rx="1"/>
                  <path d="M12 9l2 3-2 3"/>
                  <line x1="14" y1="12" x2="22" y2="12"/>
                </svg>
                <h3>Resistance</h3>
                <p>Resistance is opposition to current flow, measured in ohms (Ω). Every material has some resistance. Copper wire has very little — which is why we use it to carry current without wasting energy as heat. A heating element has a carefully calculated resistance — which is precisely why it gets hot when current flows through it.</p>
                <p>Real-world examples make this concrete immediately. A dryer heating element is a resistor: its resistance determines how much current it draws at 240V, and therefore how much heat it produces. A motor winding is a resistor (and an inductor). A thermistor is a resistor whose value changes with temperature — that changing resistance is how a control board reads the temperature inside a refrigerator. A fuse is a deliberate weak point: a thin conductor engineered to fail at a specific current, protecting everything downstream.</p>
              </div>

            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="components-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="components-heading">The Components Inside Every Appliance</h2>
              <p>Six component families appear on virtually every control board and in every appliance circuit. Learn how each one works — and how each one fails.</p>
            </div>
            <div className="topics-grid">

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="5" y2="12"/>
                  <rect x="5" y="9" width="4" height="6" rx="1"/>
                  <rect x="11" y="9" width="4" height="6" rx="1"/>
                  <line x1="15" y1="12" x2="22" y2="12"/>
                </svg>
                <h3>Resistors</h3>
                <p>Resistors limit current and set voltage ratios. On a control board, they divide voltages down to the level a microcontroller can read, set the bias point for transistors, and protect LEDs from overcurrent. They are rated by resistance value (ohms) and power dissipation (watts).</p>
                <p>They fail in two ways: open (the resistive element burns through, breaking the circuit) or shorted (the resistance drops to near zero, usually from catastrophic overload). A burned, discolored, or cracked resistor is often a symptom of a deeper problem elsewhere in the circuit — finding what caused the overload matters more than replacing the resistor alone.</p>
              </div>

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="7" y2="12"/>
                  <line x1="7" y1="7" x2="7" y2="17"/>
                  <line x1="11" y1="7" x2="11" y2="17"/>
                  <line x1="11" y1="12" x2="22" y2="12"/>
                </svg>
                <h3>Capacitors</h3>
                <p>Capacitors store energy in an electric field and release it quickly. In power supply circuits, they smooth the ripple out of rectified AC, delivering cleaner DC to sensitive components. In motor circuits, a start capacitor provides the phase shift needed to get a single-phase motor spinning. In signal circuits, they filter out noise and block DC from passing between stages.</p>
                <p>Electrolytic capacitors — the tall cylindrical ones common on control boards — are the most failure-prone component in any appliance. The electrolyte inside them dries out or vents over time, especially when mounted near heat sources like transformers or power transistors. A bulging or domed top is the visual signature of a failed electrolytic cap. They typically fail short (causing an immediate overcurrent fault) or open (causing intermittent operation or complete loss of the supply rail they were filtering).</p>
              </div>

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="8" y2="12"/>
                  <polygon points="8,8 16,12 8,16"/>
                  <line x1="16" y1="8" x2="16" y2="16"/>
                  <line x1="16" y1="12" x2="22" y2="12"/>
                </svg>
                <h3>Diodes</h3>
                <p>A diode is a one-way gate for current. It allows current to flow in one direction (from anode to cathode) and blocks it in the other. This property makes diodes essential in two critical appliance applications: rectification and protection.</p>
                <p>Four diodes arranged in a bridge configuration form a bridge rectifier — the circuit that converts alternating current (AC) from the wall into direct current (DC) that a control board can use. Flyback diodes protect transistor and relay driver circuits from the voltage spike generated when an inductive load (motor winding, relay coil) is switched off. Diodes almost always fail shorted, which means a shorted diode in a bridge rectifier passes AC where only DC should be — often destroying the capacitors and ICs downstream before anything else shows visible damage.</p>
              </div>

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="8" y2="12"/>
                  <line x1="8" y1="7" x2="8" y2="17"/>
                  <line x1="8" y1="9" x2="14" y2="6"/>
                  <line x1="8" y1="15" x2="14" y2="18"/>
                  <line x1="14" y1="6" x2="14" y2="9"/>
                  <line x1="14" y1="15" x2="14" y2="18"/>
                  <line x1="14" y1="12" x2="22" y2="12"/>
                  <line x1="11" y1="12" x2="14" y2="12"/>
                </svg>
                <h3>Transistors &amp; MOSFETs</h3>
                <p>Transistors and MOSFETs are electronic switches. A small signal at the control terminal (base for a BJT transistor, gate for a MOSFET) allows a much larger current to flow between the other two terminals. This is how a microcontroller with only milliamps to spare can switch a relay coil drawing hundreds of milliamps, or how a motor controller can modulate power to a variable-speed fan motor.</p>
                <p>In appliance control boards, you will find small signal transistors driving relay coils, indicator LEDs, and buzzer circuits. You will find power MOSFETs in switching power supplies, inverter motor drives, and high-current output stages. Both types tend to fail shorted when overstressed — the result is often a permanently active output: a relay that won&apos;t release, a motor that runs continuously, or a heating element that won&apos;t shut off.</p>
              </div>

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="8" width="8" height="8" rx="1"/>
                  <path d="M10 11h3"/>
                  <path d="M10 13h3"/>
                  <line x1="13" y1="10" x2="13" y2="14"/>
                  <path d="M13 10l5-2v8l-5-2"/>
                </svg>
                <h3>Relays</h3>
                <p>A relay is an electromechanical switch. A coil of wire, when energized, generates a magnetic field that physically moves a set of contacts. This separates the low-voltage control circuit (the board) from the high-current load circuit (the compressor, the heating element, the motor). The control board never carries the full load current — the relay does.</p>
                <p>Relays fail in several ways: the coil can open (no actuation), the contacts can weld together from arcing (a permanently closed output — dangerous for heating elements), or the contacts can become pitted and resistive (intermittent operation under load). You can test coil continuity with a multimeter and verify contact switching with power applied. On a board, a relay that clicks but the connected load does not respond almost always means failed contacts, not a board-level problem.</p>
              </div>

              <div className="topic-card animate-on-scroll">
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="2" y1="12" x2="6" y2="12"/>
                  <path d="M6 8l4 4-4 4"/>
                  <line x1="10" y1="12" x2="14" y2="12"/>
                  <circle cx="17" cy="12" r="3"/>
                  <line x1="20" y1="12" x2="22" y2="12"/>
                </svg>
                <h3>Fuses &amp; Thermal Cutoffs</h3>
                <p>A fuse is a calibrated sacrificial conductor. When current exceeds the fuse rating, the element melts and breaks the circuit, protecting everything downstream from sustained overcurrent. A thermal cutoff (TCO) does the same thing, but responds to temperature rather than current — when the protected area gets too hot, a pellet inside the TCO melts and opens the circuit permanently.</p>
                <p>An open fuse or TCO is never the root cause of a problem — it is always the symptom. A fuse blows because something downstream drew too much current. A TCO opens because something upstream got too hot. Replacing a fuse or TCO without finding the cause guarantees a repeat failure, often with more damage the second time. The correct diagnostic process is to identify the fault that triggered the protection device before restoring power.</p>
              </div>

            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="acdc-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="acdc-heading">AC and DC in Home Appliances</h2>
            <p>The power coming from your wall outlet is alternating current (AC). In North America, that means 120V at 60Hz — the voltage alternates between positive and negative 60 times per second. Heavy appliances like electric ranges and dryers use 240V AC, delivered on two hot legs 180 degrees out of phase with each other.</p>
            <p>AC is well suited to resistive and inductive loads: heating elements, motors, and transformers all work directly on AC. The heating element in a dryer, the magnetron in a microwave, the water pump motor in a dishwasher — these all run on AC, often switched directly through relays on the control board.</p>
            <p>Control electronics, however, require DC. A microcontroller cannot run on 120V AC — it runs on 3.3V or 5V DC. Sensors, indicator circuits, and communication interfaces all need stable DC power. Every appliance with a control board therefore contains a power supply stage whose job is to convert household AC into the low-voltage DC rails the electronics need.</p>
            <p>Older designs used a step-down transformer followed by a bridge rectifier and filter capacitors — a linear supply. Most modern appliances use a switching power supply, which operates at high frequency to achieve greater efficiency in a much smaller package. Either way, the boundary between the AC line and the DC control side is one of the most important diagnostic boundaries you will learn to identify on any board.</p>
            <p>Understanding which circuits in an appliance are AC and which are DC tells you immediately what to expect when you put a meter on them — and what a wrong reading means. Measuring 120V AC on a DC rail is a fault. Measuring 0V DC on a rail that should be 5V isolates the problem to the power supply stage. This is not guesswork; it follows directly from understanding how the circuit is designed.</p>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="read-circuit-heading">
          <div className="container about-content animate-on-scroll">
            <h2 id="read-circuit-heading">How to Read a Simple Circuit</h2>
            <p>A schematic is a map. It shows every component in a circuit and every connection between them, drawn with standardized symbols so that any trained technician anywhere in the world can read it the same way. You do not need to memorize every symbol before you start — you need to understand the logic of following a circuit from its source to its load and back.</p>
            <p>Current follows a complete loop. It leaves the power source, travels through one or more components that do work (resistors, motors, heating elements, LEDs), and returns to the source. In a schematic, you trace this path by following the lines from the supply rail, through each component, to the return (neutral or ground). Every component you pass through is in the loop, and its behavior affects every other component in that same loop.</p>
            <p>Start by identifying the power supply connections — the source voltage enters the circuit at one point, and the return path exits at another. Then locate the load: the component that is actually doing the useful work. Between the source and the load, you will find switching elements (relays, transistors, triacs) that control whether the load receives power, and protection elements (fuses, thermal cutoffs) that interrupt the circuit if something goes wrong.</p>
            <p>Schematic symbols carry meaning. A zigzag line is a resistor. Parallel lines of unequal length are a capacitor. A triangle with a vertical line at its tip is a diode, and the direction of the triangle tells you which way current can flow. A coil symbol is an inductor or relay coil. An X inside a circle is a lamp or indicator. Once you know these shapes, a schematic stops being a puzzle and starts being a readable description of how a circuit works.</p>
            <p>When diagnosing a fault, use the schematic to identify the section most likely at fault based on the symptom, then measure voltages at key nodes to confirm where the circuit is open, shorted, or out of specification. You are not probing randomly — you are testing predictions the schematic gives you.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="failure-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="failure-heading">How Components Fail — and How to Find Them</h2>
              <p>Failed components leave evidence. Learning to read that evidence — visually and with instruments — is what makes diagnosis fast and accurate.</p>
            </div>
            <div className="benefits-grid">

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <h3>Bulging Capacitors</h3>
                  <p>The top of a healthy electrolytic capacitor is flat. A bulging or domed top means the electrolyte inside has been heated past its limit and is venting. The capacitor has failed or is very close to failure. This is one of the most reliable visual failure indicators on any control board — if you see it, that capacitor comes out.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <div>
                  <h3>Burned Resistors and Discolored Traces</h3>
                  <p>A resistor that has dissipated more power than it was rated for will scorch its body — cracking, blackening, or leaving a burn mark on the PCB beneath it. Copper traces that have carried excessive current show up as brown or black discoloration on the board. Both indicate that something upstream caused an overcurrent condition. The trace or resistor is the casualty; find the cause.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
                <div>
                  <h3>Cracked Solder and Lifted Pads</h3>
                  <p>Solder joints crack from thermal cycling — the board expands and contracts with every power cycle, and joints under mechanical stress develop hairline cracks over years of use. A cracked joint looks dull or grainy rather than smooth and shiny, and may show a visible gap around the component lead. A lifted pad occurs when a trace or pad separates from the board substrate, usually from excessive heat during rework or from corrosion. Both are repairable but require good soldering technique and sometimes trace repair wire.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <div>
                  <h3>Multimeter Continuity and Resistance Checks</h3>
                  <p>With power removed, a multimeter in continuity mode tells you whether a circuit path is complete. An open fuse reads infinite resistance (no continuity). A shorted component across a supply rail reads near zero ohms. A resistor out of tolerance reads outside its marked value. Diode check mode lets you verify that a diode conducts in only one direction — a diode that reads near zero in both directions is shorted; one that reads open in both directions is failed open.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                <div>
                  <h3>ESR Testing for Capacitors In-Circuit</h3>
                  <p>A standard capacitance meter often cannot detect a failing electrolytic capacitor because the capacitance value may still read correctly even as the internal resistance (ESR — equivalent series resistance) has risen far above spec. High ESR means the capacitor can no longer filter effectively at the frequencies it is supposed to handle, causing supply rail ripple, erratic microcontroller behavior, and intermittent faults that are difficult to reproduce. An ESR meter measures this resistance directly, in-circuit, without needing to desolder the component. A capacitor that reads good on capacitance but high on ESR is failing and should be replaced.</p>
                </div>
              </div>

              <div className="benefit-card animate-on-scroll">
                <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <div>
                  <h3>Voltage Measurement Under Load</h3>
                  <p>A power supply that reads correct voltage with no load attached can collapse when the load is connected — a sign of failing filter capacitors, a weak regulator, or a supply operating at the edge of its current rating. Always measure supply voltages with the circuit operating normally. A 5V rail that reads 4.6V under load is a problem. A rail that sags to 3.8V under load will cause the microcontroller to reset, throw fault codes, or behave unpredictably — symptoms that look like a board fault but are actually a power supply fault.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="related-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="related-heading">Apply These Fundamentals</h2>
              <p>Electronics fundamentals are the foundation. These topics show you how they apply to real diagnostic and repair work.</p>
            </div>
            <div className="topics-grid">

              <Link href="/control-board-repair" className="topic-card animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <rect x="6" y="8" width="4" height="4" rx="1"/>
                  <rect x="14" y="8" width="4" height="4" rx="1"/>
                  <line x1="6" y1="14" x2="10" y2="14"/>
                  <line x1="14" y1="14" x2="18" y2="14"/>
                </svg>
                <h3>Control Board Repair</h3>
                <p>Component-level repair of appliance control boards — identifying failed components, reading board schematics, soldering and desoldering technique, and testing the repaired board before reinstallation.</p>
              </Link>

              <Link href="/diagnostic-tools" className="topic-card animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h3>Diagnostic Tools</h3>
                <p>How to use a multimeter, ESR meter, and oscilloscope for appliance diagnostics — the right measurement for each situation, how to interpret what you see, and what a healthy signal looks like versus a fault.</p>
              </Link>

              <Link href="/appliance-troubleshooting" className="topic-card animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3>Appliance Troubleshooting</h3>
                <p>A systematic approach to diagnosing appliance faults — how to use symptoms to narrow down the failing subsystem, where to measure, and how to confirm a diagnosis before ordering parts or beginning repairs.</p>
              </Link>

              <Link href="/appliance-repair" className="topic-card animate-on-scroll" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <svg className="topic-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <h3>Appliance Repair</h3>
                <p>An overview of home appliance repair from the electronics perspective — what systems are common across all appliance types, how control electronics interface with mechanical systems, and what it takes to repair rather than replace.</p>
              </Link>

            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading">Learn This Hands-On</h2>
            <p>Reading about electronics fundamentals is a start. Understanding them at the workbench — with real boards, real instruments, and real faults in front of you — is what makes it permanent. NIT&apos;s training program teaches these concepts in a working appliance service environment.</p>
            <Link href="/classes" className="btn btn-primary btn-lg">View Classes</Link>
          </div>
        </section>

      </main>
    </>
  );
}
