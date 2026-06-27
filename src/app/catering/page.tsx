import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { catering, images, site } from "@/lib/content"

const eventTypes = ["Showers", "Birthdays", "Graduations", "Christenings", "Communions"]

export default function CateringPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-28">
            <Photo alt="Papazzio catering spread" src={images.cateringHero} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <SectionHeading eyebrow="Catering" light title={catering.title} text={catering.paragraphs.slice(0, 2).join(" ")} />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
                <a className="button button-outline-light" href={site.emailHref}>Email Catering</a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {eventTypes.map((event) => (
                <div className="border border-cream/14 bg-cream/[0.06] p-5" key={event}>
                  <p className="font-heading text-3xl font-black">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[1.5rem] shadow-2xl shadow-ink/18">
                <Photo alt="Papazzio event table" className="aspect-[4/5]" src={images.cateringParty} />
              </div>
              <div className="absolute -bottom-8 left-6 right-6 bg-tomato p-6 text-cream shadow-xl shadow-ink/20">
                <p className="eyebrow text-gold">Private Events</p>
                <p className="mt-2 font-heading text-3xl font-black leading-tight">Exclusive occupancy with a guaranteed minimum of 30 people.</p>
              </div>
            </div>

            <div className="pt-10 lg:pt-0">
              <SectionHeading title="Packages, parties, and trays." text={catering.paragraphs.slice(2).join(" ")} />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Feature title="Included" text="Coffee, tea, soda, and an Occasion Cake are included in party packages." />
                <Feature title="Customizable" text="Menus can be customized by adding appetizers and bar options." />
                <Feature title="Planning" text={catering.managerText} />
                <Feature title="At home" text="Tray Menu options are available for take-home catering." />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            <a className="catering-card" href="/gallery-2">
              <span>On-site Events</span>
              <strong>{catering.onSiteLabel}</strong>
            </a>
            <a className="catering-card" href="/tray-menu">
              <span>Take-home trays</span>
              <strong>Tray Menu</strong>
            </a>
            <a className="catering-card" href={site.cateringExternalUrl}>
              <span>Off-site catering</span>
              <strong>{catering.offSiteLabel}</strong>
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function Feature({ text, title }: { text: string; title: string }) {
  return (
    <article className="border-l-4 border-tomato bg-cream p-5 shadow-lg shadow-ink/5">
      <h2 className="font-heading text-2xl font-black">{title}</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-ink/68">{text}</p>
    </article>
  )
}
