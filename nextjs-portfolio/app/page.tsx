import Image from "next/image";
import Link from "next/link";
import {
  AboutIntro, ArrowLink, FaqSection, IconBadge, PageEnd, ReviewCard, SectionHead, StatsBand, TimelineItem,
} from "@/components/sections";
import { featuredProjects, homeReviews, homeServices, homeStats, journey, PROFILE_IMAGE } from "@/lib/data";

export default function HomePage() {
  return (
    <div id="tab-home">
      {/* HERO */}
      <section className="minimal-hero hero-simple">
        <div className="hero-animated-bg" aria-hidden="true">
          <div className="hero-background-image" />
          <div className="hero-background-overlay" />
        </div>

        <div className="simple-hero-content">
          <div className="simple-profile-wrap">
            <div className="profile-ring" />
            <div className="simple-profile">
              <Image src={PROFILE_IMAGE} alt="Santosh Kumar" fill sizes="130px" priority />
            </div>
          </div>

          <p className="simple-greeting">HELLO, I&apos;M</p>
          <h1>SANTOSH KUMAR<span>.</span></h1>
          <h2>
            <span id="typed-role">Frontend Developer</span>
            <span className="typing-cursor">|</span>
          </h2>

          <div className="simple-hero-actions">
            <Link href="/work">View My Work</Link>
            <Link href="/contact">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <AboutIntro id="home-about-preview">
        <p className="about-description">
          I&apos;m Santosh Kumar, a frontend developer focused on building clean, responsive and engaging web experiences.
        </p>
        <div className="about-skills">
          <span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span>
        </div>
      </AboutIntro>

      {/* FEATURED PROJECTS */}
      <section id="home-featured-projects" className="home-projects">
        <div className="home-projects-container">
          <div className="home-projects-heading">
            <div>
              <span className="home-projects-eyebrow">MY RECENT WORK</span>
              <h2>Featured <span>Projects</span></h2>
              <p>A few projects showcasing my frontend development skills.</p>
            </div>
            <Link href="/work" className="home-projects-view-all">View All Projects</Link>
          </div>

          <div className="home-projects-grid">
            {featuredProjects.map((p) => (
              <article key={p.title} className="home-project-card">
                <div className="home-project-image">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 520px) 100vw, 50vw" />
                </div>
                <div className="home-project-info">
                  <span className="home-project-tech">{p.tech}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="home-projects-bottom">
            <Link href="/work" className="home-projects-bottom-btn">Explore All Projects</Link>
          </div>
        </div>
      </section>

      <StatsBand stats={homeStats} />

      {/* SERVICES */}
      <section className="hx hx-services" aria-labelledby="hx-services-title">
        <div className="hx-wrap">
          <SectionHead align="split" eyebrow="WHAT I DO" id="hx-services-title"
            title={<>Services that take ideas <span>to launch</span></>} link={{ href: "/services", label: "Explore services" }} />
          <div className="hx-services-grid">
            {homeServices.map((s) => (
              <article key={s.title} className="hx-service hx-reveal">
                <IconBadge icon={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="hx hx-journey" aria-labelledby="hx-journey-title">
        <div className="hx-wrap">
          <SectionHead align="center" eyebrow="THE JOURNEY" id="hx-journey-title" title={<>Experience <span>&amp;</span> education</>} />
          <div className="hx-timeline">
            {journey.map((e) => <TimelineItem key={e.title} e={e} />)}
          </div>
          <div className="hx-center-links">
            <ArrowLink href="/experience">Full experience</ArrowLink>
            <ArrowLink href="/education">Education &amp; certs</ArrowLink>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="hx hx-reviews" aria-labelledby="hx-reviews-title">
        <div className="hx-wrap">
          <SectionHead align="split" eyebrow="KIND WORDS" id="hx-reviews-title"
            title={<>What clients <span>say</span></>} link={{ href: "/reviews", label: "All reviews" }} />
          <div className="hx-reviews-grid">
            {homeReviews.map((r, i) => <ReviewCard key={r.name + i} r={r} featured={i === 0} />)}
          </div>
        </div>
      </section>

      <FaqSection id="hx-faq-title" alt />
      <PageEnd />
    </div>
  );
}
