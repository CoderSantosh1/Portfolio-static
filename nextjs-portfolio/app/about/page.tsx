import type { Metadata } from "next";
import Link from "next/link";
import { AboutIntro, PageEnd, ProcessSection, StatsBand, TechSection } from "@/components/sections";
import { aboutStats, approachSteps } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro id="about-profile-preview" withCrumbs>
        <p className="about-description">
          I&apos;m Santosh Kumar, a frontend developer focused on building clean, responsive and engaging web experiences.
          I care about the details — from reusable components and smooth interactions to fast, accessible pages that work on every screen.
        </p>
        <div className="about-skills">
          <span>React.js</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Redux Toolkit</span>
        </div>
        <div className="about-bottom-row">
          <Link href="/contact" className="home-about-link">Let&apos;s work together <span>→</span></Link>
          <span className="about-signature">SANTOSH KUMAR · FRONTEND DEVELOPER</span>
        </div>
      </AboutIntro>

      <StatsBand stats={aboutStats} />
      <TechSection />
      <ProcessSection id="about-approach-title" eyebrow="MY APPROACH" title={<>How I build <span>better</span> experiences</>} steps={approachSteps} />
      <PageEnd />
    </>
  );
}
