import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Things I&apos;ve built</h2>
          <p>Some of the apps and tools I&apos;ve shipped — what they do and how I built them.</p>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.num} className="proj-card reveal">
              <div className="proj-num">{p.num}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="proj-tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
