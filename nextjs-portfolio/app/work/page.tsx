import type { Metadata } from "next";
import Image from "next/image";
import { PageEnd, PageHero, SectionHead } from "@/components/sections";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function WorkPage() {
  return (
    <>
      <PageHero crumb="Work" eyebrow="SELECTED WORK"
        title={<>Projects that turn ideas into <span>real products.</span></>}
        lead="A selection of dashboards, trading tools, stores and productivity apps — each built with a focus on clean code and a great user experience." />

      <section className="hx" aria-labelledby="work-title">
        <div className="hx-wrap">
          <SectionHead eyebrow="FEATURED PROJECTS" id="work-title" title={<>Recent <span>work</span></>} />
          <div className="hx-proj-grid">
            {projects.map((p) => (
              <article key={p.title} className="hx-proj hx-reveal">
                <div className="hx-proj-media">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 850px) 100vw, 50vw" />
                </div>
                <div className="hx-proj-body">
                  <div className="hx-chips">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  <h3>{p.title} <b>↗</b></h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageEnd />
    </>
  );
}
