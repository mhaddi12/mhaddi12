import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Release history</span>
          <h2>Where I&apos;ve shipped</h2>
          <p>Three years of building and maintaining production apps — newest release first.</p>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.version} className="rel reveal">
              <div className="rel-meta">
                <div className="rel-ver">{e.version}</div>
                <div className="rel-date">{e.date}</div>
              </div>
              <div className="rel-body">
                <h3>
                  {e.title}
                  {e.current && <span className="now-pill">● NOW</span>}
                </h3>
                <div className="co">{e.company}</div>
                <ul>
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
