import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, heroStats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Flutter · Node.js · Learning AI Engineering</span>
          <h1>
            I build <span className="grad">mobile experiences</span> people love to use.
          </h1>
          <p className="lead">
            I have <b>3+ years</b> of experience building production-ready mobile applications with{' '}
            <b>Flutter</b>. I&apos;m now expanding into <b>AI Engineering</b>, LLMs, AI agents, backend
            development, and scalable SaaS architecture to create smarter software solutions.
          </p>
          <div className="hero-cta">
            <Link href="#projects" className="btn btn-primary">Explore Projects</Link>
            <Link href="#contact" className="btn btn-ghost">Get in Touch</Link>
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
          <div className="hero-portrait">
            <div className="hero-portrait-frame">
              <Image
                src={siteConfig.image}
                alt={siteConfig.imageAlt}
                width={340}
                height={425}
                priority
                fetchPriority="high"
                sizes="(max-width: 860px) 70vw, 340px"
              />
              <div className="hero-portrait-caption">
                <span className="hero-portrait-name">Muhammad Haddi</span>
                <span className="hero-portrait-role">Software Engineer · Lahore, PK</span>
                <span className="hero-portrait-status">Available for freelance &amp; full-time work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
