import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { images, liveMusicPerformers, site } from "@/lib/content"

export const metadata = {
  description: "Monthly live music performers at Papazzio in Bayside, Queens.",
  title: "Live Music Performers | Papazzio"
}

export default function LiveMusicPerformersPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-38">
            <Photo alt="Papazzio live music dinner" src={images.liveMusic} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="This Month's Performers"
              light
              text="Papazzio hosts live music every Thursday from 6:30 PM to 9:30 PM. Performer lineups may change, so call ahead when planning around a specific artist."
              title="Live music at Papazzio."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-outline-light" href="/specials/live-music">Back to Live Music</Link>
              <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="button button-outline-light" href="/contact">Make a Reservation</Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr]">
            <aside className="reveal-on-scroll reveal-left self-start border border-ink/10 bg-cream p-6 shadow-lg shadow-ink/5 lg:sticky lg:top-28">
              <p className="eyebrow text-tomato">Monthly Listings</p>
              <div className="mt-5 space-y-4 text-sm font-bold leading-6 text-ink/70">
                <p>Every Thursday • 6:30 PM-9:30 PM</p>
                <p>The latest publicly visible performer feature lists Leo and Ailatan/Natalia. Call Papazzio for the current month&apos;s exact dates.</p>
              </div>
            </aside>

            <div className="grid gap-6">
              {liveMusicPerformers.map((performer, index) => (
                <article className={`reveal-on-scroll ${index % 2 === 0 ? "reveal-right" : "reveal-left"} menu-section`} key={performer.name}>
                  <p className="eyebrow text-tomato">Featured Artist</p>
                  <h2 className="mt-3">{performer.name}</h2>
                  <p className="mt-6 text-base font-bold leading-7 text-ink/72">{performer.bio}</p>
                  <div className="mt-6 grid gap-3">
                    {performer.dates.map((date) => (
                      <p className="border-t border-ink/12 pt-3 text-base font-bold leading-7 text-ink/72" key={date}>{date}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
