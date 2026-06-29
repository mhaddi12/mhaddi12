import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, heroStats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Flutter · Node.js · Mobile Engineering</span>
          <h1>
            I build <span className="grad">Flutter apps</span> for iOS &amp; Android —{' '}
            and the <span className="grad">backends</span> that run them.
          </h1>
          <p className="lead">
            I&apos;m <b>Muhammad Haddi</b>, a software engineer based in Lahore. I&apos;ve spent{' '}
            <b>3+ years</b> writing Flutter code for apps that actually go on the{' '}
            <b>App Store and Play Store</b>. When a project needs a backend, I write that too —{' '}
            <b>Node.js</b>, <b>MongoDB</b>, <b>Firebase</b>, whatever it takes.
          </p>
          <div className="hero-cta">
            <Link href="#contact" className="btn btn-primary">Hire me →</Link>
            <Link href="#projects" className="btn btn-ghost">View my work</Link>
          </div>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div key={s.l} className="stat">
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="device-stage">
          <div className="profile-card" aria-hidden="true">
            <div className="pc-banner" />
            <div className="pc-body">
              <div className="pc-avatar-wrap">
                <Image
                  className="pc-avatar"
                  src={siteConfig.image}
                  alt="Muhammad Haddi"
                  width={90}
                  height={90}
                  priority
                />
              </div>
              <h3 className="pc-name">Muhammad Haddi</h3>
              <p className="pc-role">Software Engineer</p>
              <span className="pc-badge">Available for work</span>
              <div className="pc-meta">
                <span>📍 Lahore, PK</span>
                <span>💼 3+ Years</span>
              </div>
              <div className="pc-links">
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="pc-link">GitHub</a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="pc-link">LinkedIn</a>
                <a href={`mailto:${siteConfig.email}`} className="pc-link pc-link--primary">Email me</a>
              </div>
              <div className="pc-stats">
                {heroStats.map((s) => (
                  <div key={s.l} className="pc-stat">
                    <span className="pc-stat-n">{s.n}</span>
                    <span className="pc-stat-l">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
