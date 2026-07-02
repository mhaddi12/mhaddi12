'use client';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/lib/data';

function ProjectCard({ p }: { p: typeof projects[number] }) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = !p.image || imgError;

  return (
    <div className="proj-card reveal">
      <div className="proj-thumb">
        {showPlaceholder ? (
          <div className={`proj-thumb-placeholder proj-accent--${p.num}`}>
            <span className="proj-thumb-icon">{p.icon}</span>
          </div>
        ) : (
          <Image
            src={p.image!}
            alt={`${p.name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            style={{ objectFit: 'cover' }}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="proj-body">
        <div className="proj-num">{p.num}</div>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <div className="proj-tags">
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

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
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
