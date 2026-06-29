import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, heroStats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Software Engineering · Full-Stack · Mobile</span>
          <h1>
            I&apos;m a <span className="grad">Software Engineer</span> building{' '}
            <span className="grad">full-stack</span> mobile products.
          </h1>
          <p className="lead">
            I&apos;m <b>Muhammad Haddi</b>, a <b>Software Engineer</b> in
            Lahore with <b>3+ years</b> shipping scalable Android &amp; iOS apps with <b>Flutter</b> &amp;{' '}
            <b>Dart</b> — plus <b>Node.js</b>, <b>MongoDB</b>, and <b>Firebase</b> backend solutions.
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
          <div className="readme-card" aria-hidden="true">
            <div className="readme-card-bar">
              <span className="rc-dot rc-red" />
              <span className="rc-dot rc-yellow" />
              <span className="rc-dot rc-green" />
              <span className="rc-bar-title">README.md</span>
            </div>
            <div className="readme-card-body">
              <div className="rc-avatar-row">
                <Image
                  className="rc-avatar"
                  src={siteConfig.image}
                  alt="Muhammad Haddi"
                  width={64}
                  height={64}
                  priority
                />
                <div>
                  <div className="rc-name">Muhammad Haddi</div>
                  <div className="rc-role">Software Engineer</div>
                </div>
              </div>
              <div className="rc-divider" />
              <div className="rc-info-list">
                <div className="rc-info-row"><span className="rc-ico">📍</span><span>Lahore, Pakistan</span></div>
                <div className="rc-info-row"><span className="rc-ico">💼</span><span>3+ Years Experience</span></div>
                <div className="rc-info-row"><span className="rc-ico">🚀</span><span>10+ Apps Shipped</span></div>
                <div className="rc-info-row rc-available"><span className="rc-ico">✅</span><span>Open to Opportunities</span></div>
              </div>
              <div className="rc-divider" />
              <div className="rc-section-label">## Tech Stack</div>
              <div className="rc-badges">
                {['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Firebase', 'AWS'].map((b) => (
                  <span key={b} className="rc-badge">{b}</span>
                ))}
              </div>
              <div className="rc-divider" />
              <div className="rc-stats-row">
                {heroStats.map((s) => (
                  <div key={s.l} className="rc-stat">
                    <div className="rc-stat-n">{s.n}</div>
                    <div className="rc-stat-l">{s.l}</div>
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
