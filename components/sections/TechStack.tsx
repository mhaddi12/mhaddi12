import { experiencedWith, currentlyLearningStack, skills } from '@/lib/data';

function StackGroup({
  title,
  status,
  items,
}: {
  title: string;
  status: 'experienced' | 'learning';
  items: typeof skills;
}) {
  return (
    <div className="stack-group">
      <div className="stack-group-head reveal">
        <span className={`status-dot status-dot--${status}`} />
        <h3>{title}</h3>
      </div>
      <div className="skill-grid">
        {items.map((s, i) => (
          <div key={s.name} className="skill-card reveal">
            <div className="sc-head">
              <span className="sc-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.name}</h3>
            </div>
            <div className="tags">
              {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Toolbox</span>
          <h2>Tech stack</h2>
          <p>What I&apos;m confident with today, and what I&apos;m actively growing into.</p>
        </div>
        <StackGroup title="Experienced With" status="experienced" items={experiencedWith} />
        <StackGroup title="Currently Learning" status="learning" items={currentlyLearningStack} />
      </div>
    </section>
  );
}
