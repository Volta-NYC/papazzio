import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { images, site } from "@/lib/content"
import { publicPerformerSchedule } from "@/lib/performer-store"

export const revalidate = 60

export const metadata = {
  description: "Monthly live music performers at Papazzio in Bayside, Queens.",
  title: "Live Music Performers | Papazzio"
}

export default async function LiveMusicPerformersPage() {
  const schedule = await publicPerformerSchedule()
  const hasPerformers = schedule.performers.length > 0
  return (
    <PageShell>
      <main id="main-content" className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-38">
            <Photo alt="Papazzio live music dinner" src={images.liveMusic} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/20" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              as="h1"
              eyebrow="This Month's Performers"
              light
              text="Papazzio hosts live music every Thursday from 6:30 PM to 9:30 PM. Join us for dinner and an evening with local musicians."
              title={schedule.heading}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-outline-light" href="/specials/live-music">Back to Live Music</Link>
              <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
              <a className="button button-outline-light" href={site.reservationsUrl}>Make a Reservation</a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr]">
            <aside className="reveal-on-scroll reveal-left self-start border border-ink/10 bg-cream p-6 shadow-lg shadow-ink/5 lg:sticky lg:top-28">
              <p className="eyebrow text-tomato">Monthly Listings</p>
              <div className="mt-5 space-y-4 text-sm font-bold leading-6 text-ink/70">
                <p>Every Thursday • 6:30 PM-9:30 PM</p>
                <p>Reserve ahead to enjoy dinner with your favorite performer. Please call Papazzio with any questions about the lineup.</p>
              </div>
            </aside>

            {hasPerformers ? (
              <div className="grid gap-6">
                {schedule.performers.map((performer, index) => (
                  <article className="menu-section reveal-on-scroll reveal-right" key={`${performer.name}-${index}`}>
                    <h2>{performer.name}</h2>
                    {performer.bio ? <p className="mt-5 text-base font-bold leading-7 text-ink/72">{performer.bio}</p> : null}
                    <ul className="mt-6 grid gap-3 text-base font-black text-tomato">
                      {performer.dates.map((date, dateIndex) => <li className="border-t border-ink/12 pt-3" key={`${date}-${dateIndex}`}>{date}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            ) : (
              <div className="menu-section reveal-on-scroll reveal-right flex min-h-[18rem] items-center justify-center text-center">
                <div>
                  <p className="eyebrow text-tomato">Coming Soon</p>
                  <h2 className="mt-3">The next lineup is coming soon.</h2>
                  <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-7 text-ink/72">Please call Papazzio to confirm this month&apos;s performers and dates.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageShell>
  )
}
