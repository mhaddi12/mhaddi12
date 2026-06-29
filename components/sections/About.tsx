export default function About() {
  const glance = [
    { label: 'Company',    value: 'Omnisoft · Lahore' },
    { label: 'Working on', value: 'Flutter apps and an email platform' },
    { label: 'Learning',   value: 'System design, SwiftUI' },
    { label: 'Education',  value: 'BS Software Engineering' },
    { label: 'Open to',    value: 'Freelance & full-time roles', green: true },
  ];

  const strengths = [
    { icon: '▸', text: 'Flutter apps for iOS and Android — end to end' },
    { icon: '▸', text: 'Node.js APIs and MongoDB when the project needs a backend' },
    { icon: '▸', text: 'Clean Architecture, Riverpod, MVVM — I care about structure' },
    { icon: '▸', text: 'Firebase, AWS SES, RevenueCat — the integrations that actually matter' },
  ];

  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">About</span>
          <h2>I build things people open every day.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-intro">
              I&apos;ve been writing Flutter apps for three years, working with teams across Lahore
              to ship things that end up in the hands of real users — CRMs, subscription apps, a
              livestreaming platform, an email campaign tool. Along the way I picked up Node.js and
              MongoDB for the backend side of things, mostly because <b>waiting on someone else to
              write the API gets old fast</b>.
            </p>
            <p className="about-intro">
              I care about code that&apos;s easy to read six months later. I&apos;m not precious about
              tech choices — I use what fits. And I&apos;m <b>open to new work</b>, remote or on-site.
            </p>
            <ul className="strength-list">
              {strengths.map((s) => (
                <li key={s.text}>
                  <span className="sl-ico">{s.icon}</span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="at-glance-card reveal">
            <h3 className="agc-title">At a glance</h3>
            {glance.map(({ label, value, green }) => (
              <div key={label} className={`agc-row${green ? ' agc-green' : ''}`}>
                <span className="agc-label">{label}</span>
                <span className="agc-value">{value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
