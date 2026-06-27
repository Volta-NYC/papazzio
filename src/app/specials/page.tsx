import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { specials, site } from "@/lib/content"

export default function SpecialsPage() {
  return (
    <PageShell>
      <main className="bg-ink text-cream">
        <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Specials" light title="Happy Hour, Winesdays, La Dolce Notte, steak, and family meals." text="Current Papazzio specials, with the same details and restrictions shown on the restaurant website." />
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8">
            {specials.map((special, index) => (
              <article className={`special-panel scroll-mt-28 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`} id={special.title.toLowerCase().replaceAll(" ", "-")} key={special.title}>
                <div className={`relative min-h-[24rem] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Photo alt={special.title} className="absolute inset-0" src={special.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/16 to-transparent" />
                </div>
                <div className="flex flex-col justify-center bg-cream p-8 text-ink sm:p-10 lg:p-14">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-tomato">{special.subtitle}</p>
                  <h2 className="mt-4 font-heading text-5xl font-black leading-[0.9] sm:text-7xl">{special.title}</h2>
                  <ul className="mt-8 grid gap-3 text-lg font-bold leading-7 text-ink/72">
                    {special.details.map((detail) => (
                      <li className="border-t border-ink/15 pt-3" key={detail}>{detail}</li>
                    ))}
                  </ul>
                  {special.href && special.cta ? (
                    <a className="button button-dark mt-8 w-fit" href={special.href}>
                      {special.cta}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
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
