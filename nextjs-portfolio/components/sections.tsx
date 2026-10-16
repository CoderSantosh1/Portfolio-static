import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  faqs, footerLinks, marqueeTech, PROFILE_IMAGE, techCards,
  type IconType, type Review, type Stat, type Step, type TimelineEntry,
} from "@/lib/data";

/* ---------- Headings ---------- */

export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <span className="hx-eyebrow"><i />{children}{center && <i />}</span>
  );
}

type HeadProps = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  id?: string;
  align?: "left" | "center" | "split";
  link?: { href: string; label: string };
  style?: CSSProperties;
  aside?: ReactNode;
};

/** Section heading: eyebrow, title (wrap the accent word in <span>), optional text and link. */
export function SectionHead({ eyebrow, title, text, id, align = "left", link, style, aside }: HeadProps) {
  const cls = align === "center" ? "hx-head hx-head-center" : align === "split" ? "hx-head hx-head-split" : "hx-head";
  const body = (
    <>
      <Eyebrow center={align === "center"}>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </>
  );
  if (align === "split") {
    return (
      <div className={cls} style={style}>
        <div>{body}</div>
        {link && <ArrowLink href={link.href}>{link.label}</ArrowLink>}
        {aside}
      </div>
    );
  }
  return <div className={cls} style={style}>{body}</div>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="hx-link">{children} <b>→</b></Link>;
}

/** Large header used at the top of every inner page. */
export function PageHero({ crumb, eyebrow, title, lead }: { crumb: string; eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <section className="hx hx-page-hero">
      <div className="hx-wrap">
        <nav className="hx-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <b>{crumb}</b></nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="hx-lead">{lead}</p>
      </div>
    </section>
  );
}

export function IconBadge({ icon: Icon }: { icon: IconType }) {
  return <div className="hx-service-icon"><Icon /></div>;
}

/* ---------- About intro (home + about) ---------- */

export function AboutIntro({ id, withCrumbs = false, children }: { id: string; withCrumbs?: boolean; children?: ReactNode }) {
  return (
    <section id={id} className="home-about-preview">
      <div className="about-preview-bg" aria-hidden="true">
        <span className="about-bg-orb orb-a" />
        <span className="about-bg-orb orb-b" />
        <div className="about-bg-grid" />
      </div>
      <div className="home-about-inner">
        <div className="home-about-visual">
          <div className="about-image-label"><span className="about-status-dot" />FRONTEND DEVELOPER</div>
          <div className="about-image-frame">
            <div className="about-image-accent" />
            <Image src={PROFILE_IMAGE} alt="Santosh Kumar - Frontend Developer" fill sizes="(max-width: 600px) 90vw, 410px" />
            <div className="about-image-bottom"><span>SK.</span><span>CREATIVE DEVELOPER</span></div>
          </div>
        </div>
        <div className="home-about-copy">
          {withCrumbs && <nav className="hx-crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <b>About</b></nav>}
          <div className="about-section-label"><span />GET TO KNOW ME</div>
          <h2>Turning ideas<br />into <span>digital</span><br />experiences.</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="hx hx-stats" aria-label="At a glance">
      <div className="hx-wrap hx-stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="hx-stat hx-reveal">
            <strong>{s.value}{s.suffix && <sup>{s.suffix}</sup>}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Technology ---------- */

export function Marquee({ items = marqueeTech, style }: { items?: string[]; style?: CSSProperties }) {
  return (
    <div className="hx-marquee" aria-hidden="true" style={style}>
      <div className="hx-marquee-track">
        {[...items, ...items].map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export function TechSection() {
  return (
    <section className="hx hx-tech" aria-labelledby="hx-tech-title">
      <div className="hx-wrap">
        <SectionHead align="split" eyebrow="TOOLS I USE" id="hx-tech-title"
          title={<>Technology <span>&amp;</span> skills</>} link={{ href: "/skills", label: "See all skills" }} />
      </div>
      <Marquee />
      <div className="hx-wrap hx-tech-grid">
        {techCards.map(({ title, icon: Icon, items }) => (
          <article key={title} className="hx-tech-card hx-reveal">
            <header><Icon /><h3>{title}</h3></header>
            <ul>
              {items.map((it) => (
                <li key={it.name}>
                  <span>{it.name}</span><em>{it.level}</em>
                  <b style={{ "--lvl": `${it.pct}%` } as CSSProperties} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Process steps ---------- */

export function ProcessSection({ id, eyebrow, title, text, steps }: { id: string; eyebrow: string; title: ReactNode; text?: string; steps: Step[] }) {
  return (
    <section className="hx hx-process" aria-labelledby={id}>
      <div className="hx-wrap">
        <SectionHead align="center" eyebrow={eyebrow} id={id} title={title} text={text} />
        <ol className="hx-steps">
          {steps.map((s, i) => (
            <li key={s.title} className="hx-step hx-reveal">
              <span className="hx-step-dot">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */

export function TimelineItem({ e, points }: { e: TimelineEntry; points?: string[] }) {
  return (
    <article className="hx-tl-item hx-reveal">
      <span className={`hx-tl-tag${e.alt ? " hx-tl-tag-alt" : ""}`}>{e.tag}</span>
      <time>{e.time}</time>
      <h3>{e.title}</h3>
      <p className="hx-tl-org">{e.org}</p>
      <p>{e.text}</p>
      {points && <ul className="hx-tl-points">{points.map((p) => <li key={p}>{p}</li>)}</ul>}
    </article>
  );
}

/* ---------- Reviews ---------- */

export function ReviewCard({ r, featured = false }: { r: Review; featured?: boolean }) {
  return (
    <figure className={`hx-review${featured ? " hx-review-featured" : ""} hx-reveal`}>
      <div className="hx-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“{r.quote}”</blockquote>
      <figcaption>
        <span className="hx-avatar">{r.initials}</span>
        <span><strong>{r.name}</strong><small>{r.role}</small></span>
      </figcaption>
    </figure>
  );
}

/* ---------- FAQ ---------- */

export function FaqSection({ id, alt = false }: { id: string; alt?: boolean }) {
  return (
    <section className={`hx${alt ? " hx-faq" : ""}`} aria-labelledby={id}>
      <div className="hx-wrap hx-faq-layout">
        <SectionHead eyebrow="FAQ" id={id} title={<>Questions, <span>answered</span></>}
          text={<>Can&apos;t find what you&apos;re looking for? <Link href="/contact">Send me a message</Link>.</>} />
        <div className="hx-faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="hx-faq-item" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + footer ---------- */

export function CtaSection() {
  return (
    <section className="hx hx-cta" aria-labelledby="hx-cta-title">
      <div className="hx-wrap">
        <div className="hx-cta-box hx-reveal">
          <span className="hx-badge"><i />Available for new projects</span>
          <h2 id="hx-cta-title">Have a project in mind?<br />Let&apos;s build something <span>great.</span></h2>
          <p>Tell me what you&apos;re working on — I&apos;d be glad to talk through the next steps.</p>
          <div className="hx-cta-actions">
            <Link href="/contact" className="hx-btn hx-btn-gold">Get in touch <b>↗</b></Link>
            <Link href="/work" className="hx-btn hx-btn-ghost">View my work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="hx hx-footer">
      <div className="hx-wrap hx-footer-row">
        <span className="hx-footer-logo">SK<span>.</span></span>
        <nav aria-label="Footer">
          {footerLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <small>© 2026 Santosh Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
}

/** CTA + footer, shown at the end of most pages. */
export function PageEnd({ cta = true }: { cta?: boolean }) {
  return (
    <>
      {cta && <CtaSection />}
      <SiteFooter />
    </>
  );
}
