import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Toolbox</span>
          <h2>Technical skills</h2>
          <p>The technologies I use to design, build and ship mobile and full-stack products.</p>
        </div>
        <div className="skill-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card reveal">
              <div className="sc-head">
                <div className="sc-ico">{s.icon}</div>
                <h3>{s.name}</h3>
                <span className="sc-pct">{s.level}%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-fill" style={{ width: `${s.level}%` }} />
              </div>
              <div className="tags">
                {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
