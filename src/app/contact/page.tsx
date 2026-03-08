import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Accordion from '@/components/Accordion';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contact — Nebraska Institute of Technology',
  description: 'Get in touch with Nebraska Institute of Technology. Ask about enrollment and starting your career in electronics.',
  alternates: { canonical: 'https://nebnit.com/contact' },
  openGraph: {
    title: 'Contact — Nebraska Institute of Technology',
    description: 'Contact NIT to learn about enrollment and hands-on electronics training.',
    url: 'https://nebnit.com/contact',
    images: [{ url: '/api/og?title=Contact+NIT&desc=Reach+out+about+enrollment+and+electronics+training', width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    id: 1,
    title: 'Do I need prior electronics experience to enroll?',
    content: `<p>No. We start from the fundamentals — electrical safety, basic circuit concepts, and tool identification. The program builds progressively, so you develop real depth over time regardless of where you start.</p>`,
  },
  {
    id: 2,
    title: 'How is NIT different from other repair training?',
    content: `<p>Most programs teach you to identify a faulty part and replace it. NIT goes deeper — we teach you to understand the electronics inside that part. You'll learn to read schematics, test individual components on a circuit board, and diagnose failures at the component level. That depth of understanding is what separates a technician from someone who just swaps parts.</p>`,
  },
  {
    id: 3,
    title: 'Do I need to bring my own tools?',
    content: `<p>Yes, students are expected to bring their own tools to class. Repair parts and components are provided through Metro TV's parts department. A recommended tool list is provided upon enrollment.</p>`,
  },
  {
    id: 4,
    title: 'How do I get started?',
    content: `<p>Send us a message using the form above or email us at <a href="mailto:service@metrotv-audiotech.com">service@metrotv-audiotech.com</a>. We'll walk you through the enrollment process, including the Safety Training and Waiver of Responsibility document required before beginning coursework.</p>`,
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://nebnit.com/contact#faqpage',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need prior electronics experience to enroll?', acceptedAnswer: { '@type': 'Answer', text: 'No. We start from the fundamentals — electrical safety, basic circuit concepts, and tool identification. The program builds progressively, so you develop real depth over time regardless of where you start.' } },
        { '@type': 'Question', name: 'How is NIT different from other repair training?', acceptedAnswer: { '@type': 'Answer', text: "Most programs teach you to identify a faulty part and replace it. NIT goes deeper — we teach you to understand the electronics inside that part. You'll learn to read schematics, test individual components on a circuit board, and diagnose failures at the component level." } },
        { '@type': 'Question', name: 'Do I need to bring my own tools?', acceptedAnswer: { '@type': 'Answer', text: "Yes, students are expected to bring their own tools to class. Repair parts and components are provided through Metro TV's parts department. A recommended tool list is provided upon enrollment." } },
        { '@type': 'Question', name: 'How do I get started?', acceptedAnswer: { '@type': 'Answer', text: 'Send us a message using the contact form or email us at service@metrotv-audiotech.com. We\'ll walk you through the enrollment process, including the Safety Training and Waiver of Responsibility document required before beginning coursework.' } },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://nebnit.com/contact#webpage',
      url: 'https://nebnit.com/contact',
      name: 'Contact — Nebraska Institute of Technology',
      isPartOf: { '@id': 'https://nebnit.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nebnit.com/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://nebnit.com/contact' },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactSchema} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Have questions about enrollment or our training? We&apos;d like to hear from you.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading" className="sr-only">Contact Form and Information</h2>
            <div className="contact-grid">
              <ContactForm />

              <div>
                <div className="contact-info-card">
                  <h2>Get in Touch</h2>
                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/></svg>
                    <div>
                      <h3>Phone</h3>
                      <a href="tel:+14024669090">(402) 466-9090</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:service@metrotv-audiotech.com">service@metrotv-audiotech.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <h3>Location</h3>
                      <p>1109 N Cotner Blvd, Lincoln, NE 68505</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt faq-section" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Common questions about enrollment and training at NIT.</p>
            </div>
            <Accordion items={faqItems} />
          </div>
        </section>
      </main>
    </>
  );
}
