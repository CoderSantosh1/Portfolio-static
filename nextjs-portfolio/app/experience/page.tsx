import type { Metadata } from "next";
import { ArrowLink, PageEnd, PageHero, SectionHead, TimelineItem } from "@/components/sections";
import { experience } from "@/lib/data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHero crumb="Experience" eyebrow="CAREER"
        title={<>Work history &amp; the teams I&apos;ve <span>built with.</span></>}
        lead="Leading frontend architecture, design systems and full stack products for growing companies." />

      <section className="hx" aria-labelledby="exp-title">
        <div className="hx-wrap">
          <SectionHead align="center" eyebrow="WORK HISTORY" id="exp-title" title={<>Where I&apos;ve <span>worked</span></>} />
          <div className="hx-timeline hx-timeline-single">
            {experience.map((e) => <TimelineItem key={e.title} e={e} />)}
          </div>
          <div className="hx-center-links">
            <ArrowLink href="/education">Education &amp; certifications</ArrowLink>
            <ArrowLink href="/skills">Skills &amp; stack</ArrowLink>
          </div>
        </div>
      </section>

      <PageEnd />
    </>
  );
}
