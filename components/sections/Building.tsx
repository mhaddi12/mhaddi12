import { whatImBuilding } from '@/lib/data';

export default function Building() {
  return (
    <section id="building">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">What I&apos;m building</span>
          <h2>Personal experiments</h2>
          <p>Side projects I&apos;m using to actually learn AI engineering, not just read about it.</p>
        </div>
        <div className="build-grid">
          {whatImBuilding.map((b) => (
            <div key={b.name} className="build-card reveal">
              <div className="build-card-head">
                <span className="build-icon">{b.icon}</span>
                <h3>{b.name}</h3>
              </div>
              <span className="build-status">{b.status}</span>
              <p style={{ marginTop: '12px' }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
