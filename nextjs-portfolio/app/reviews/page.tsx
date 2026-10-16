import type { Metadata } from "next";
import { PageEnd, PageHero, ReviewCard, SectionHead } from "@/components/sections";
import { reviews } from "@/lib/data";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <>
      <PageHero crumb="Reviews" eyebrow="FEEDBACK"
        title={<>Kind words from people I&apos;ve <span>worked with.</span></>}
        lead="Honest feedback from founders and product leaders on what it's like to build together." />

      <section className="hx" aria-labelledby="reviews-title">
        <div className="hx-wrap">
          <SectionHead eyebrow="CLIENT REVIEWS" id="reviews-title" title={<>What clients <span>say</span></>} />
          <div className="hx-reviews-grid hx-reviews-2">
            {reviews.map((r, i) => <ReviewCard key={r.name} r={r} featured={i === 0} />)}
          </div>
        </div>
      </section>

      <PageEnd />
    </>
  );
}
