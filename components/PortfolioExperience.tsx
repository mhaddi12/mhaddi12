"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { experience, projects, siteConfig } from "@/lib/data";
import "./portfolio-experience.css";

type Project = (typeof projects)[number];
type MotionStyle = CSSProperties & {
  "--rx"?: string;
  "--ry"?: string;
  "--mx"?: string;
  "--my"?: string;
};

function Orbit({ paused }: { paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    const ctx = element?.getContext("2d");
    if (!element || !ctx) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      angle = 0,
      visible = true,
      width = 0,
      height = 0;
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      element.width = width * ratio;
      element.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      paint();
    });
    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.4;
      const points: { x: number; y: number; z: number }[] = [];
      for (let ring = 0; ring < 11; ring++) {
        const latitude = (Math.PI * (ring + 1)) / 12;
        for (let i = 0; i < 40; i++) {
          const longitude = (i * Math.PI * 2) / 40 + angle;
          const x = Math.sin(latitude) * Math.cos(longitude);
          const y = Math.cos(latitude);
          const z = Math.sin(latitude) * Math.sin(longitude);
          const yy = y * 0.88 - z * 0.48;
          const zz = y * 0.48 + z * 0.88;
          const scale = 2.5 / (2.5 + zz);
          points.push({
            x: width / 2 + x * radius * scale,
            y: height / 2 + yy * radius * scale,
            z: zz,
          });
        }
      }
      points.forEach((p, i) => {
        ctx.fillStyle = `rgba(158,132,255,${0.12 + (1 - p.z) * 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1 + (1 - p.z) * 0.45, 0, Math.PI * 2);
        ctx.fill();
        if (i % 40 !== 39) {
          const n = points[i + 1];
          ctx.strokeStyle = `rgba(155,128,245,${0.035 + (1 - p.z) * 0.045})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      });
    };
    const tick = () => {
      angle += 0.002;
      paint();
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      if (!paused && !media.matches && visible && !document.hidden)
        frame = requestAnimationFrame(tick);
      else paint();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    resize.observe(element);
    observer.observe(element);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return <canvas className="px-orbit" ref={canvas} aria-hidden="true" />;
}

function tilt(event: PointerEvent<HTMLElement>) {
  if (
    event.pointerType !== "mouse" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const r = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - r.left) / r.width,
    y = (event.clientY - r.top) / r.height;
  event.currentTarget.style.setProperty("--rx", `${(y - 0.5) * -12}deg`);
  event.currentTarget.style.setProperty("--ry", `${(x - 0.5) * 16}deg`);
  event.currentTarget.style.setProperty("--mx", `${x * 100}%`);
  event.currentTarget.style.setProperty("--my", `${y * 100}%`);
}
function resetTilt(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--rx", "0deg");
  event.currentTarget.style.setProperty("--ry", "0deg");
}

export default function PortfolioExperience() {
  const [paused, setPaused] = useState(false);
  const [screen, setScreen] = useState<"mobile" | "ai">("mobile");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);
  useEffect(() => {
    const elements = root.current?.querySelectorAll(".px-reveal");
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((e) => observer.observe(e));
    root.current?.classList.add("px-enhanced");
    return () => observer.disconnect();
  }, []);
  const filtered = projects.filter(
    (p) =>
      filter === "All" ||
      (filter === "Backend"
        ? p.tags.includes("Node.js")
        : !p.tags.includes("Node.js")),
  );
  const openProject = (p: Project, button: HTMLButtonElement) => {
    trigger.current = button;
    setSelected(p);
  };
  return (
    <div className={`px-experience${paused ? " px-paused" : ""}`} ref={root}>
      <a className="px-skip" href="#projects">
        Skip to projects
      </a>
      <section className="px-hero" id="top">
        <div className="px-hero-grid px-wrap">
          <div className="px-hero-copy">
            <div className="px-availability">
              <span /> Available for your next big idea
            </div>
            <p className="px-kicker">MUHAMMAD HADDI / SOFTWARE ENGINEER</p>
            <h1>
              I build apps.
              <br />
              <span>You feel</span>
              <br />
              <span className="px-gradient">the difference.</span>
            </h1>
            <p className="px-intro">
              From the first tap to the last detail. I craft Flutter experiences
              that feel right — and I’m exploring what AI can bring to them.
            </p>
            <div className="px-actions">
              <a className="px-button" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a
                className="px-secondary"
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>
            </div>
            <div className="px-hero-proof">
              <div className="px-avatar">
                <Image
                  src={siteConfig.image}
                  alt="Muhammad Haddi"
                  width={44}
                  height={44}
                />
              </div>
              <p>
                3+ years building. 10+ apps shipped.
                <br />
                <span>Lahore, Pakistan · Working everywhere.</span>
              </p>
            </div>
          </div>
          <div className="px-scene-wrap">
            <div
              className="px-scene"
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
              style={{ "--rx": "0deg", "--ry": "0deg" } as MotionStyle}
            >
              <Orbit paused={paused} />
              <div className="px-scene-light" />
              <div className="px-ring px-ring-one" />
              <div className="px-ring px-ring-two" />
              <div className="px-float px-float-code">
                <span className="px-symbol">⌘</span>
                <div>
                  Built with Flutter<small>One codebase. Every screen.</small>
                </div>
                <i />
              </div>
              <div className="px-phone-float">
                <div className="px-phone">
                  <div className="px-phone-side" />
                  <div className="px-phone-screen">
                    <div className="px-island" />
                    <div className="px-phone-status">
                      <span>9:41</span>
                      <span>▮▮▮ ▰</span>
                    </div>
                    <div className="px-phone-content" key={screen}>
                      <div className="px-phone-top">
                        <span className="px-app-icon">
                          {screen === "mobile" ? "◈" : "✳"}
                        </span>
                        <span>
                          {screen === "mobile"
                            ? "Your workspace"
                            : "Your AI copilot"}
                          <small>INTERFACE EXPLORATION</small>
                        </span>
                        <b>···</b>
                      </div>
                      <p className="px-phone-greeting">
                        {screen === "mobile"
                          ? "Less friction."
                          : "A little smarter."}
                        <br />
                        <strong>
                          {screen === "mobile"
                            ? "More possibility."
                            : "A lot more possible."}
                        </strong>
                      </p>
                      {screen === "mobile" ? (
                        <>
                          <div className="px-app-card">
                            <span>Everything, connected.</span>
                            <div className="px-app-orb">◈</div>
                            <small>DESIGNED TO JUST FLOW</small>
                          </div>
                          <div className="px-app-tiles">
                            <div>
                              <span>↗</span>
                              <strong>Projects</strong>
                              <small>Ideas in motion</small>
                            </div>
                            <div>
                              <span>⌁</span>
                              <strong>Activity</strong>
                              <small>Stay in the loop</small>
                            </div>
                          </div>
                          <div className="px-phone-row">
                            <i /> A smoother everyday <span>↗</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="px-chat-message">
                            What could we build next?
                          </div>
                          <div className="px-ai-response">
                            <span>✳</span>
                            <p>
                              Something useful.
                              <br />
                              Something thoughtful.
                              <br />
                              Something that feels like magic.
                            </p>
                            <div className="px-typing">
                              <i />
                              <i />
                              <i />
                            </div>
                          </div>
                          <div className="px-chat-input">
                            Your next idea… <span>↑</span>
                          </div>
                        </>
                      )}
                      <div className="px-phone-nav">
                        <span>⌂</span>
                        <span>▦</span>
                        <span>◉</span>
                        <span>☰</span>
                      </div>
                    </div>
                    <div className="px-home-indicator" />
                  </div>
                </div>
              </div>
              <div className="px-float px-float-ship">
                <span className="px-check">✓</span>
                <div>
                  From idea to release<small>Thoughtfully engineered.</small>
                </div>
              </div>
              <div className="px-float px-float-ai">
                <span>✳</span> Exploring AI
              </div>
            </div>
            <div className="px-scene-controls">
              <div role="group" aria-label="Choose interface concept">
                <button
                  className={screen === "mobile" ? "active" : ""}
                  aria-pressed={screen === "mobile"}
                  onClick={() => setScreen("mobile")}
                >
                  Mobile
                </button>
                <button
                  className={screen === "ai" ? "active" : ""}
                  aria-pressed={screen === "ai"}
                  onClick={() => setScreen("ai")}
                >
                  AI concept
                </button>
              </div>
              <button
                className="px-motion"
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
                aria-label={paused ? "Play animations" : "Pause animations"}
              >
                {paused ? "▷" : "Ⅱ"}
              </button>
            </div>
            <p className="px-scene-caption">
              INTERACTIVE CONCEPT · MOVE YOUR POINTER TO EXPLORE
            </p>
          </div>
        </div>
        <div className="px-hero-bottom px-wrap">
          <span>ENGINEERED WITH CARE. BUILT FOR PEOPLE.</span>
          <a href="#projects">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
          <span>01 / 05</span>
        </div>
      </section>
      <div className="px-stack-strip">
        <div className="px-wrap">
          <span>THE TOOLS BEHIND THE CRAFT</span>
          <p>
            Flutter <b>✳</b> Dart <b>✳</b> Riverpod <b>✳</b> Node.js <b>✳</b>{" "}
            Firebase <b>✳</b> MongoDB
          </p>
        </div>
      </div>
      <section className="px-section px-wrap" id="projects">
        <div className="px-section-head px-reveal">
          <div>
            <span className="px-kicker">01 / SELECTED WORK</span>
            <h2>
              Ideas made real.
              <br />
              <span>Details made better.</span>
            </h2>
          </div>
          <p>
            Mobile apps. Connected systems.
            <br />A few things I’ve brought to life.
          </p>
        </div>
        <div className="px-filters" role="group" aria-label="Filter projects">
          {["All", "Mobile", "Backend"].map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "All" && <small>06</small>}
            </button>
          ))}
        </div>
        <div className="px-projects">
          {filtered.map((p) => (
            <article
              className={`px-project px-project-${p.num}`}
              key={p.num}
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
            >
              <button
                className="px-project-open"
                onClick={(e) => openProject(p, e.currentTarget)}
                aria-label={`View ${p.name} case study`}
              >
                <div className="px-project-art">
                  <div className="px-project-glow" />
                  <span className="px-project-number">{p.num} / PROJECT</span>
                  <Image
                    src={p.image}
                    alt={`${p.name} interface illustration`}
                    width={800}
                    height={500}
                  />
                  <span className="px-project-view">Explore case study ↗</span>
                </div>
                <div className="px-project-info">
                  <div>
                    <p>{p.tags.join(" / ")}</p>
                    <h3>{p.name}</h3>
                  </div>
                  <span>↗</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="px-about-section" id="about">
        <div className="px-wrap px-about-grid">
          <div className="px-about-visual px-reveal">
            <div className="px-photo-halo" />
            <div className="px-photo-frame">
              <Image
                src={siteConfig.image}
                alt={siteConfig.imageAlt}
                width={420}
                height={520}
                sizes="(max-width: 760px) 85vw, 420px"
              />
              <span>
                MUHAMMAD HADDI
                <br />
                <small>THE HUMAN BEHIND THE CODE</small>
              </span>
            </div>
            <div className="px-location">
              <i /> Lahore, PK <span>↗</span>
            </div>
            <span className="px-about-star" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="px-about-copy px-reveal">
            <span className="px-kicker">02 / A LITTLE ABOUT ME</span>
            <h2>
              Serious about craft.
              <br />
              <span>Curious about everything.</span>
            </h2>
            <p>
              I’m Haddi, a software engineer who cares as much about how an app
              feels as how it works. I’ve spent three years shipping Flutter
              apps with teams across Lahore — from field-team CRMs to
              livestreaming and subscription products.
            </p>
            <p>
              I like clean architecture, small details, and solving the problem
              behind the ticket. These days, I’m also getting hands-on with AI
              engineering, one experiment at a time.
            </p>
            <div className="px-about-facts">
              <div>
                <strong>3+</strong>
                <span>YEARS OF CRAFT</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>APPS SHIPPED</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>THINGS TO LEARN</span>
              </div>
            </div>
            <a
              className="px-secondary"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              More about my journey ↗
            </a>
          </div>
        </div>
      </section>
      <section className="px-section px-wrap" id="services">
        <div className="px-section-head px-reveal">
          <div>
            <span className="px-kicker">03 / WHAT I BRING</span>
            <h2>
              From the interface.
              <br />
              <span>To the infrastructure.</span>
            </h2>
          </div>
          <a className="px-secondary" href="#contact">
            Let’s build something ↗
          </a>
        </div>
        <div className="px-services">
          {[
            {
              n: "01",
              symbol: "▱",
              title: "Mobile experiences",
              text: "Production-ready Flutter apps for iOS and Android. Thoughtful UI, clean architecture, and the details that make it feel native.",
              tags: "Flutter · Dart · Riverpod",
            },
            {
              n: "02",
              symbol: "⌘",
              title: "Connected products",
              text: "The backend that makes your app work. APIs, authentication, subscriptions, notifications, and integrations that fit the product.",
              tags: "Node.js · MongoDB · Firebase",
            },
            {
              n: "03",
              symbol: "✳",
              title: "Ideas into first releases",
              text: "From an early concept to a working MVP. A practical approach to shipping, learning, and improving — including AI API integrations.",
              tags: "MVPs · REST APIs · AI integrations",
            },
          ].map((s) => (
            <article className="px-service px-reveal" key={s.n}>
              <div>
                <span>{s.n}</span>
                <b aria-hidden="true">{s.symbol}</b>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <small>{s.tags}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="px-now-section" id="learning">
        <div className="px-wrap px-now-grid">
          <div className="px-reveal">
            <span className="px-kicker">04 / THE NEXT CHAPTER</span>
            <h2>
              Built on Flutter.
              <br />
              <span className="px-gradient">Growing into AI.</span>
            </h2>
            <p>
              I’m learning in public, building small experiments, and connecting
              the dots between mobile apps and intelligent software.
            </p>
            <div className="px-learning-tags">
              {["LLMs", "AI agents", "LangGraph", "RAG", "MCP", "NestJS"].map(
                (t) => (
                  <span key={t}>{t}</span>
                ),
              )}
            </div>
            <Link className="px-secondary" href="/blog">
              Notes from the journey ↗
            </Link>
          </div>
          <div className="px-terminal px-reveal">
            <div className="px-terminal-bar">
              <i />
              <i />
              <i />
              <span>haddi / always-learning</span>
            </div>
            <div className="px-terminal-body">
              <p>
                <span>~</span> what&apos;s next?
              </p>
              <div>
                <span className="px-terminal-line">01</span>
                <span>foundation:</span>
                <strong> Flutter & Dart</strong>
              </div>
              <div>
                <span className="px-terminal-line">02</span>
                <span>exploring:</span>
                <strong> AI engineering</strong>
              </div>
              <div>
                <span className="px-terminal-line">03</span>
                <span>building:</span>
                <strong> agents & integrations</strong>
              </div>
              <div>
                <span className="px-terminal-line">04</span>
                <span>mindset:</span>
                <strong> never stop learning</strong>
              </div>
              <p className="px-terminal-end">
                → One experiment at a time.
                <span className="px-caret" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-section px-wrap" id="experience">
        <div className="px-section-head px-reveal">
          <div>
            <span className="px-kicker">05 / EXPERIENCE</span>
            <h2>
              A few chapters.
              <br />
              <span>A lot of shipping.</span>
            </h2>
          </div>
          <p>
            Teams I’ve built with.
            <br />
            Lessons I’ve carried forward.
          </p>
        </div>
        <div className="px-timeline">
          {experience
            .filter((e) => !e.current)
            .map((e, i) => (
              <details className="px-job px-reveal" key={e.company}>
                <summary>
                  <span className="px-job-date">{e.date}</span>
                  <div>
                    <h3>{e.company.split(" · ")[0]}</h3>
                    <p>{e.title}</p>
                  </div>
                  <span className="px-job-badge">
                    {i === 0 ? "CURRENT" : "LAHORE"}
                  </span>
                  <span className="px-job-expand">+</span>
                </summary>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </details>
            ))}
        </div>
      </section>
      <footer className="px-footer" id="contact">
        <div className="px-wrap">
          <div className="px-footer-top">
            <span className="px-availability">
              <span /> OPEN TO FREELANCE & FULL-TIME
            </span>
            <span>GOOD WORK STARTS WITH A CONVERSATION.</span>
          </div>
          <a className="px-footer-heading" href={`mailto:${siteConfig.email}`}>
            Your next idea.
            <br />
            <span>Let’s build it.</span>
            <b>↗</b>
          </a>
          <div className="px-footer-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} ↗</a>
            <div>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <Link href="/blog">Blog ↗</Link>
            </div>
          </div>
          <div className="px-footer-bottom">
            <span>© {new Date().getFullYear()} Muhammad Haddi</span>
            <Link href="/privacy-policy">Privacy</Link>
            <button aria-pressed={paused} onClick={() => setPaused(!paused)}>
              {paused ? "Play motion ▷" : "Pause motion Ⅱ"}
            </button>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <dialog
        className="px-dialog"
        ref={dialog}
        onClose={() => {
          setSelected(null);
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            const r = e.currentTarget.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              dialog.current?.close();
          }
        }}
        aria-labelledby="px-project-title"
      >
        <button
          className="px-dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label="Close case study"
        >
          ×
        </button>
        {selected && (
          <>
            <span className="px-kicker">
              PROJECT {selected.num} / CASE STUDY
            </span>
            <h2 id="px-project-title">{selected.name}</h2>
            <Image
              src={selected.image}
              alt={`${selected.name} interface illustration`}
              width={800}
              height={500}
            />
            <p>{selected.description}</p>
            {[
              ["The challenge", selected.challenge],
              ["The approach", selected.solution],
              ["The outcome", selected.impact],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
            <div className="px-learning-tags">
              {selected.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
