import { siteConfig } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-section reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let&apos;s talk</span>
          <h2 style={{ marginTop: '16px' }}>Let&apos;s build smart software together.</h2>
          <p>
            Whether you need a production-ready mobile application today or someone passionate about
            building AI-powered software tomorrow, I&apos;d love to collaborate.
          </p>
          <div className="contact-links">
            <a className="clink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a className="clink" href={`tel:${siteConfig.phone.replace(/-/g, '')}`}>
              {siteConfig.phone}
            </a>
            <a className="clink" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="clink" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
