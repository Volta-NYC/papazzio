import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { featuredSpecials, moreSpecials, site } from "@/lib/content"

export default function SpecialsPage() {
  return (
    <PageShell>
      <main className="bg-ink text-cream">
        <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Specials" light title="Current promotions, curated for easier planning." text="Start with Papazzio's strongest weekly experiences, then browse smaller recurring ways to enjoy the restaurant." />
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8">
            {featuredSpecials.map((special, index) => (
              <article className={`special-panel reveal-on-scroll scroll-mt-28 ${index % 2 === 1 ? "lg:grid-flow-dense reveal-left" : "reveal-right"}`} id={special.title.toLowerCase().replaceAll(" ", "-")} key={special.title}>
                <div className={`relative min-h-[24rem] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Photo alt={special.title} className="absolute inset-0" src={special.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/16 to-transparent" />
                </div>
                <div className="flex flex-col justify-center bg-cream p-8 text-ink sm:p-10 lg:p-14">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-tomato">{special.subtitle}</p>
                  <h2 className="mt-4 font-heading text-5xl font-black leading-[0.9] sm:text-7xl">{special.title}</h2>
                  <ul className="mt-8 grid gap-3 text-lg font-bold leading-7 text-ink/72">
                    <li className="border-t border-ink/15 pt-3">{special.description}</li>
                  </ul>
                  <a className="button button-dark mt-8 w-fit" href={special.href}>
                    View Details
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-paper px-4 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-on-scroll reveal-soft">
              <SectionHeading eyebrow="More Ways to Enjoy Papazzio" title="Recurring promotions and takeout favorites." text="Secondary offers live here so the page stays easy to scan while regulars can still find their weekly favorites." />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {moreSpecials.map((special, index) => (
                <article className={`secondary-special reveal-on-scroll ${index % 2 === 0 ? "reveal-left" : "reveal-right"} group`} key={special.title}>
                  <Photo alt={special.title} className="absolute inset-0 transition duration-500 group-hover:scale-105" src={special.image} />
                  <div className="relative mt-auto">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">{special.subtitle}</p>
                    <h3 className="mt-3 font-heading text-3xl font-black leading-none text-cream">{special.title}</h3>
                    <p className="mt-4 text-sm font-bold leading-6 text-cream/72">{special.details[0]}</p>
                    <a className="button button-light mt-6" href={special.href}>View Details</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cream/10 bg-black px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow text-gold">Questions</p>
              <h2 className="mt-3 font-heading text-4xl font-black">Call Papazzio for details.</h2>
            </div>
            <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
