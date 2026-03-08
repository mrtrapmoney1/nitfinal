import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" aria-label="NIT Home">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              NIT
            </Link>
            <p>Nebraska Institute of Technology — electronics training that goes deeper, in partnership with Metro TV and Appliance Service.</p>
          </div>

          <div className="footer-links">
            <h4>Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/classes">Classes</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <Link href="/appliance-repair">Appliance Repair</Link>
            <Link href="/electronics-fundamentals">Electronics Fundamentals</Link>
            <Link href="/control-board-repair">Control Board Repair</Link>
            <Link href="/diagnostic-tools">Diagnostic Tools</Link>
            <Link href="/appliance-troubleshooting">Troubleshooting</Link>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <a href="tel:+14024669090">(402) 466-9090</a>
            <a href="mailto:service@metrotv-audiotech.com">service@metrotv-audiotech.com</a>
            <a href="https://nebnit.com">nebnit.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nebraska Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
