import { COMPANY, CONTACT_EMAIL, SITE_URL } from "../content"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a className="logo" href="/#top">
            {COMPANY}
          </a>
          <p>
            <a href={SITE_URL}>doomhealth.com</a>
            <span> · Mountain View · San Francisco</span>
          </p>
        </div>
        <p className="legal">
          doomhealth supports clinicians and patients. It does not diagnose,
          prescribe, or replace clinical judgment. Medication requests and
          supply orders go to the practice. Patients should talk with their
          clinician before changing treatment. Remote patient monitoring
          depends on payer rules, eligible devices, and the practice’s own
          billing.
        </p>
        <nav className="footer-links" aria-label="Company">
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">FAQs</a>
          <a href="/hipaa">HIPAA &amp; security</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <p className="footer-mail">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>© {year} {COMPANY}</span>
        </p>
      </div>
    </footer>
  )
}
