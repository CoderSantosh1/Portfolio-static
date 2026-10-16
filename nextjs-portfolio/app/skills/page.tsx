import type { Metadata } from "next";
import { IconBadge, Marquee, PageEnd, PageHero, SectionHead } from "@/components/sections";
import { marqueeTech, skillGroups, type Level } from "@/lib/data";

export const metadata: Metadata = { title: "Skills" };

const levelClass: Record<Level, string> = {
  Expert: "hx-level hx-level-expert",
  Advanced: "hx-level hx-level-advanced",
  Intermediate: "hx-level hx-level-mid",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero crumb="Skills" eyebrow="COMPETENCIES"
        title={<>Skills &amp; tech stack I <span>build with.</span></>}
        lead="A practical, modern toolkit covering frontend, backend and the tools that keep projects running smoothly." />

      <section className="hx hx-tech" style={{ paddingTop: 0, paddingBottom: 0 }} aria-hidden="true">
        <Marquee items={[...marqueeTech, "Python"]} style={{ margin: 0, borderTop: 0 }} />
      </section>

      <section className="hx" aria-labelledby="skills-title">
        <div className="hx-wrap">
          <SectionHead align="split" eyebrow="TECH STACK" id="skills-title" title={<>What I <span>work with</span></>}
            aside={
              <div className="hx-chips" style={{ margin: 0 }}>
                {(Object.keys(levelClass) as Level[]).map((l) => <span key={l} className={levelClass[l]}>{l}</span>)}
              </div>
            } />

          {skillGroups.map((g) => (
            <div key={g.title} className="hx-skill-group">
              <h3>{g.title}</h3>
              <div className="hx-skill-grid">
                {g.skills.map((s) => (
                  <div key={s.name} className="hx-skill hx-reveal">
                    <IconBadge icon={s.icon} />
                    <strong>{s.name}</strong>
                    <span className={levelClass[s.level]}>{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageEnd />
    </>
  );
}
