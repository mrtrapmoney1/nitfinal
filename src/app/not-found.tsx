import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero-badge">404</span>
          <h1>Page Not Found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--space-xl)' }}>
            <Link href="/" className="btn btn-primary btn-lg">Go Home</Link>
            <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
