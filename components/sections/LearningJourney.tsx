import { learningJourney } from '@/lib/data';

export default function LearningJourney() {
  return (
    <section id="learning">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Currently learning</span>
          <h2>My AI learning journey</h2>
          <p>
            I&apos;m not an AI expert — I&apos;m actively working through these, in roughly this order.
            Here&apos;s exactly what I&apos;m studying and experimenting with right now.
          </p>
        </div>
        <div className="journey-grid">
          {learningJourney.map((item, i) => (
            <div key={item.name} className="journey-card reveal">
              <div className="sc-head">
                <span className="sc-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.name}</h3>
              </div>
              <p className="journey-note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
