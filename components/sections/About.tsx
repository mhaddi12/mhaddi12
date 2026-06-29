export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">About</span>
          <h2>Software engineer, full-stack mindset.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m a results-driven <b>Software Engineer</b> who turns ideas into{' '}
              <b>scalable, store-ready mobile apps</b>. Over the last three years I&apos;ve built enterprise
              CRM platforms, subscription products, real-time communication apps and cloud-integrated tools —
              for Android and iOS alike.
            </p>
            <p>
              My work covers the full picture: clean <b>Riverpod</b> architecture and reusable UI on the
              front, and <b>Node.js + MongoDB</b> services, REST APIs and <b>AWS SES</b> email infrastructure
              on the back. I care about clean code, performance, and shipping things people actually use.
            </p>
            <p>
              I&apos;ve published and maintained apps on both stores, collaborated across cross-functional
              teams, and worked end-to-end through the software development lifecycle.{' '}
              <b>Open to freelance and full-time roles</b> — remote or on-site.
            </p>
          </div>
          <aside className="about-card reveal">
            <h3>Quick facts</h3>
            {[
              { k: 'Role',       v: 'Software Engineer' },
              { k: 'Location',   v: 'Lahore, Pakistan' },
              { k: 'Experience', v: '3+ years' },
              { k: 'Education',  v: 'BS Software Engineering' },
            ].map(({ k, v }) => (
              <div key={k} className="info-row">
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
            <div className="info-row">
              <span className="k">Status</span>
              <span className="v"><span className="live-dot" />Available for work</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
