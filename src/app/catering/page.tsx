import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { catering, images, site } from "@/lib/content"

export default function CateringPage() {
  return (
    <PageShell>
      <main className="bg-cream">
        <section className="grid min-h-screen bg-ink pt-20 text-cream lg:grid-cols-2">
          <div className="flex items-center px-4 py-20 sm:px-6 lg:px-12">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Catering" light title={catering.title} text={catering.paragraphs.slice(0, 2).join(" ")} />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.emailHref}>Contact our Catering Manager</a>
                <a className="button button-outline-light" href={site.cateringExternalUrl}>Papazzio Catering page</a>
              </div>
            </div>
          </div>
          <div className="min-h-[28rem]">
            <Photo alt="Papazzio catering" src={images.cateringHero} />
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15">
              <Photo alt="Papazzio event table" className="aspect-[4/5]" src={images.cateringParty} />
            </div>
            <div>
              <SectionHeading title="Private events at Papazzio." text={catering.paragraphs.slice(2).join(" ")} />
              <p className="mt-8 border-l-4 border-tomato pl-5 text-xl font-bold leading-8 text-ink/78">{catering.managerText}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a className="menu-tile" href="/gallery-2">{catering.onSiteLabel}</a>
                <a className="menu-tile" href={site.cateringExternalUrl}>{catering.offSiteLabel}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

