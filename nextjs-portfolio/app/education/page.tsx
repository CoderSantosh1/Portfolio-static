import type { Metadata } from "next";
import { IconBadge, PageEnd, PageHero, SectionHead } from "@/components/sections";
import { education } from "@/lib/data";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <>
      <PageHero crumb="Education" eyebrow="QUALIFICATIONS"
        title={<>Education &amp; <span>certifications.</span></>}
        lead="A strong computer science foundation, backed by professional cloud certification." />

      <section className="hx" aria-labelledby="edu-title">
        <div className="hx-wrap">
          <SectionHead eyebrow="LEARNING" id="edu-title" title={<>Degrees &amp; <span>credentials</span></>} />
          <div className="hx-card-grid">
            {education.map((e) => (
              <article key={e.title} className="hx-card hx-reveal">
                <IconBadge icon={e.icon} />
                <span className={`hx-tl-tag${e.alt ? " hx-tl-tag-alt" : ""}`}>{e.tag}</span>
                <time>{e.time}</time>
                <h3>{e.title}</h3>
                <p className="hx-tl-org">{e.org}</p>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageEnd />
    </>
  );
}
