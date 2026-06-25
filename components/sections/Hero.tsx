import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, heroStats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Flutter · Full-Stack · Mobile</span>
          <h1>
            I&apos;m a <span className="grad">Flutter Developer</span> and{' '}
            <span className="grad">Mobile App Developer</span> building production apps for iOS and Android.
          </h1>
          <p className="lead">
            I&apos;m <b>Muhammad Haddi</b>, a <b>Flutter freelancer</b> and <b>mobile app developer</b> in
            Lahore with <b>3+ years</b> shipping scalable Android &amp; iOS apps in <b>Flutter</b> &amp;{' '}
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
          <div className="phone" aria-hidden="true">
            <div className="screen">
              <div className="screen-top">
                <Image
                  className="avatar"
                  src={siteConfig.image}
                  alt="Muhammad Haddi"
                  width={104}
                  height={104}
                  priority
                />
              </div>
              <div className="screen-body">
                <div className="nm">Muhammad Haddi</div>
                <div className="rl">Flutter Developer</div>
                <div className="badge-verified">✦ Available for work</div>
                <div className="screen-rows">
                  <div className="srow"><span>Experience</span><span>3+ years</span></div>
                  <div className="srow"><span>Specialty</span><span>Flutter</span></div>
                  <div className="srow"><span>Location</span><span>Lahore, PK</span></div>
                  <div className="srow"><span>Status</span><span>Open ✓</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
