import { siteConfig } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-section reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let&apos;s talk</span>
          <h2 style={{ marginTop: '16px' }}>Have a project in mind?</h2>
          <p>
            I&apos;m available for freelance and full-time roles. Tell me what you&apos;re building and
            let&apos;s make it ship.
          </p>
          <div className="contact-links">
            <a className="clink" href={`mailto:${siteConfig.email}`}>✉ {siteConfig.email}</a>
            <a className="clink" href={`tel:${siteConfig.phone.replace(/-/g, '')}`}>
              📞 {siteConfig.phone}
            </a>
            <a className="clink" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              in LinkedIn
            </a>
            <a className="clink" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              ◐ GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
