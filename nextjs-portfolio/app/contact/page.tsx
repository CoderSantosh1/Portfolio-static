import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { socialLinks } from "@/components/BrandIcons";
import { IconBadge, PageEnd, PageHero, SectionHead } from "@/components/sections";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" eyebrow="REACH OUT"
        title={<>Let&apos;s start a <span>conversation.</span></>}
        lead="Have a project, a question or just want to say hello? Send a message and I'll get back to you." />

      <section className="hx" aria-labelledby="contact-title">
        <div className="hx-wrap hx-contact-layout">
          <div>
            <SectionHead eyebrow="GET IN TOUCH" id="contact-title" title={<>Tell me about <span>your idea</span></>} style={{ marginBottom: 28 }} />
            <div className="hx-contact-info">
              {contactInfo.map((c) => (
                <div key={c.title} className="hx-info">
                  <IconBadge icon={c.icon} />
                  <div><strong>{c.title}</strong><span>{c.text}</span></div>
                </div>
              ))}
              <div className="hx-socials">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a key={label} href={href} aria-label={label}><Icon /></a>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <PageEnd cta={false} />
    </>
  );
}
