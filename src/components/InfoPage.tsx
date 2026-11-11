import { useEffect, type ReactNode } from "react"
import { CONTACT_EMAIL } from "../content"

type PageKey = "privacy" | "terms" | "hipaa" | "faq" | "pricing" | "about"

const pages: Record<PageKey, { label: string; title: string; intro: string }> = {
  privacy: {
    label: "Privacy",
    title: "Privacy, with care.",
    intro: "This notice explains how doomhealth handles information submitted through this website. Product use by a healthcare practice or patient may also be governed by separate agreements and notices.",
  },
  terms: {
    label: "Terms",
    title: "Website terms.",
    intro: "These terms cover your use of the doomhealth website. Use of our clinical products is subject to separate agreements with the relevant practice or organization.",
  },
  hipaa: {
    label: "HIPAA & security",
    title: "Built for responsible care.",
    intro: "Healthcare privacy and security depend on clear responsibilities between technology providers, practices, and patients. We work with healthcare organizations to define those responsibilities before product use.",
  },
  faq: {
    label: "FAQs",
    title: "Questions, answered.",
    intro: "A quick guide to doomhealth’s clinician tools, patient app, pricing, and healthcare data practices.",
  },
  pricing: {
    label: "Pricing",
    title: "Straightforward pricing.",
    intro: "Simple starting prices for care teams and patients. Talk with us about practice fit, implementation, and any additional services before getting started.",
  },
  about: {
    label: "About",
    title: "More time for the human part of care.",
    intro: "doomhealth builds AI tools to help care teams spend less time on administrative work and help patients stay connected between visits.",
  },
}

export function InfoPage({ page }: { page: PageKey }) {
  const content = pages[page]

  useEffect(() => {
    document.title = `${content.label} — doomhealth`
    return () => {
      document.title = "doomhealth — See the year before you prescribe"
    }
  }, [content.label])

  return (
    <main className="info-page" id="top">
      <div className="wrap">
        <header className="info-heading">
          <p className="kicker">{content.label}</p>
          <h1>{content.title}</h1>
          <p className="lead">{content.intro}</p>
        </header>
        {page === "privacy" && <Privacy />}
        {page === "terms" && <Terms />}
        {page === "hipaa" && <Hipaa />}
        {page === "faq" && <Faq />}
        {page === "pricing" && <Pricing />}
        {page === "about" && <About />}
      </div>
    </main>
  )
}

function ArticleSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <div className="info-copy">{children}</div>
    </section>
  )
}

function Privacy() {
  return <div className="info-content">
    <p className="info-updated">Website privacy notice · Updated November 11, 2026</p>
    <ArticleSection title="Information you choose to share">
      <p>If you contact us or request a pilot, we may receive the name, work email, organization, role, and message you provide. We use that information to respond, discuss your request, and maintain our business communications.</p>
      <p>Please do not submit patient names, medical records, or other protected health information through this website or its contact form.</p>
    </ArticleSection>
    <ArticleSection title="Website and device information">
      <p>When you visit a website, your browser and hosting provider may process basic technical information such as a network address, browser type, and request time to deliver and protect the site. Contact us for details about the hosting and any analytics or cookies used on the live site.</p>
    </ArticleSection>
    <ArticleSection title="Product and health information">
      <p>This notice covers this public website. Information processed through doomhealth products may be governed by product-specific notices, the healthcare organization’s privacy practices, and written agreements. A healthcare provider generally determines how patient information is used for care. Please ask your provider how your information is handled.</p>
    </ArticleSection>
    <ArticleSection title="Sharing, retention, and your choices">
      <p>We may share information with service providers as needed to operate this website and respond to your request, or when required by law. We keep website inquiry information for as long as needed to handle the inquiry and related business records. You can ask us to access, correct, or delete information you sent by writing to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </ArticleSection>
    <ArticleSection title="Changes and contact">
      <p>We may update this notice as our website or practices change. The date above indicates the latest revision. Questions about this notice can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </ArticleSection>
  </div>
}

function Terms() {
  return <div className="info-content">
    <ArticleSection title="Website information">
      <p>This website provides general information about doomhealth and its products. It is not medical advice, does not create a provider-patient relationship, and is not intended for emergencies. Contact a qualified healthcare professional for care decisions.</p>
    </ArticleSection>
    <ArticleSection title="Product descriptions">
      <p>Features, integrations, and availability may change and may depend on a practice’s systems and configuration. AI-generated content is intended to support workflows. A qualified clinician must review clinical documentation and make clinical decisions.</p>
    </ArticleSection>
    <ArticleSection title="Acceptable use and ownership">
      <p>Use this site lawfully and do not interfere with its operation or security. The site’s text, branding, and design belong to doomhealth or its licensors. You may not copy or reuse them commercially without permission.</p>
    </ArticleSection>
    <ArticleSection title="No warranty; contact">
      <p>The website is provided for general informational purposes and may not always be complete or available. These website terms do not replace a signed product, privacy, or business associate agreement. For questions, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </ArticleSection>
  </div>
}

function Hipaa() {
  return <div className="info-content">
    <ArticleSection title="A shared responsibility">
      <p>HIPAA obligations depend on the parties, the information involved, and how a service is used. Healthcare organizations remain responsible for their own privacy and security programs, patient notices, access decisions, and clinical oversight. Technology providers have obligations that depend on their role and agreements.</p>
    </ArticleSection>
    <ArticleSection title="Before handling protected health information">
      <p>Before a practice uses doomhealth with protected health information, the parties should confirm the applicable relationship, safeguards, and written terms. Where required, a business associate agreement should be in place before that use. Do not send protected health information through this public website.</p>
    </ArticleSection>
    <ArticleSection title="Security information for practices">
      <p>Security controls, subprocessors, retention, incident handling, and integration details should be reviewed during practice onboarding and documented in the applicable agreements. We do not publish a certification or make a blanket compliance claim on this page. Contact us to discuss current documentation and requirements for your organization.</p>
      <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </ArticleSection>
    <ArticleSection title="Clinical oversight">
      <p>AI-generated notes and other outputs are drafts for clinician review. The clinician is responsible for verifying the content, making decisions, and approving or signing documentation in the practice’s workflow.</p>
    </ArticleSection>
  </div>
}

function Faq() {
  return <div className="info-content">
    <ArticleSection title="What does doomhealth do?">
      <p>doomhealth offers AI-supported tools for clinical documentation and practice workflows, alongside a health companion app for patients between visits.</p>
    </ArticleSection>
    <ArticleSection title="Does the ambient tool replace the clinician?">
      <p>No. It helps prepare documentation. Clinicians review, edit, and approve notes and remain responsible for clinical decisions.</p>
    </ArticleSection>
    <ArticleSection title="How much does ambient documentation cost?">
      <p>Ambient is $120 per month per provider. Contact us to discuss onboarding, integrations, and the terms that apply to your practice.</p>
    </ArticleSection>
    <ArticleSection title="Does the health companion app cost anything?">
      <p>All services in the health companion app are free for patients.</p>
    </ArticleSection>
    <ArticleSection title="Is doomhealth HIPAA compliant?">
      <p>HIPAA responsibilities depend on how the product is used and the agreements in place. Practices should review applicable safeguards and execute required agreements before sharing protected health information. See our <a href="/hipaa">HIPAA &amp; security page</a> or contact us for current documentation.</p>
    </ArticleSection>
    <ArticleSection title="Can I send patient information through this website?">
      <p>No. Please use this website only for general inquiries. Do not include patient names, records, or other protected health information in a message.</p>
    </ArticleSection>
  </div>
}

function Pricing() {
  return <div className="info-content pricing-grid">
    <article className="price-card">
      <p className="kicker">For providers</p>
      <h2>Ambient</h2>
      <p className="price"><strong>$120</strong><span> / month / provider</span></p>
      <p>AI-supported ambient documentation to help clinicians prepare visit notes for review.</p>
      <a className="btn" href="/#pilot">Talk with us</a>
    </article>
    <article className="price-card">
      <p className="kicker">For patients</p>
      <h2>Health companion</h2>
      <p className="price"><strong>Free</strong></p>
      <p>All health companion app services are free for patients.</p>
      <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Ask a question</a>
    </article>
    <p className="pricing-note">Pricing shown is the current starting price shared by doomhealth. Any implementation, integration, or additional product terms should be confirmed directly with us before purchase.</p>
  </div>
}

function About() {
  return <div className="info-content">
    <ArticleSection title="Care is more than a visit">
      <p>Important parts of health happen between appointments: symptoms change, routines shift, and questions come up. doomhealth is building tools that help clinicians see more useful context and reduce the administrative work around care.</p>
    </ArticleSection>
    <ArticleSection title="Designed to support care teams">
      <p>Our platform brings together ambient documentation and patient-facing tools. AI can help organize information, but people remain responsible for care: patients share their experiences, and clinicians review documentation and make decisions.</p>
    </ArticleSection>
    <ArticleSection title="Talk with us">
      <p>We’re based in Mountain View and San Francisco. To learn more about a pilot or product, write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or <a href="/#pilot">request a pilot</a>.</p>
    </ArticleSection>
  </div>
}

