import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection, IconBadge, PageEnd, PageHero, ProcessSection, SectionHead } from "@/components/sections";
import { processSteps, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" eyebrow="WHAT I OFFER"
        title={<>Services built to help your product <span>grow.</span></>}
        lead="From early design decisions to a polished, production-ready website — everything you need to launch and keep improving." />

      <section className="hx" aria-labelledby="svc-title">
        <div className="hx-wrap">
          <SectionHead eyebrow="SERVICES OFFERED" id="svc-title" title={<>How I can <span>help</span></>} />
          <div className="hx-svc-grid">
            {services.map((s) => (
              <article key={s.title} className="hx-svc hx-reveal">
                <div className="hx-svc-media">
                  <Image src={s.image} alt={s.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <IconBadge icon={s.icon} />
                </div>
                <div className="hx-svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection id="svc-process-title" eyebrow="HOW I WORK" title={<>A simple, <span>transparent</span> process</>}
        text="Clear steps from the first conversation to a product you're proud to launch." steps={processSteps} />
      <FaqSection id="svc-faq-title" />
      <PageEnd />
    </>
  );
}
