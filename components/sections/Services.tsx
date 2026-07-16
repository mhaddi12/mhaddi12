import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Services</span>
          <h2>What I can do for you today</h2>
          <p>Confidently, right now — no exaggeration about where I am with AI.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.name} className="service-card reveal">
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
