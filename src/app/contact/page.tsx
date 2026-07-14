import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { hours, images, site } from "@/lib/content"

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="grid min-h-screen bg-ink pt-20 text-cream lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex items-center px-4 py-20 sm:px-6 lg:px-12">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Reservations" light title="Contact us. Reserve A Table. Find Us." text="Papazzio Restaurant & Caterer is located at 39-38 Bell Boulevard in Bayside, NY." />
              <div className="mt-9 grid gap-3 text-lg font-bold text-cream/78">
                <a href={site.emailHref}>{site.email}</a>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
                <a className="button button-outline-light" href={site.mapsUrl} rel="noreferrer" target="_blank">Get Directions</a>
              </div>
            </div>
          </div>
          <div className="min-h-[28rem]">
            <Photo alt="Papazzio contact" src={images.contact} />
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <SectionHeading title="Book our Wine Room!" text="Enjoy a relaxed dinner in our private wine cellar. For Reservations, call 718-229-1962." />
              <p className="mt-6 text-lg font-black uppercase tracking-[0.18em] text-tomato">Minimum 6 Guests</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="bg-cream p-7 shadow-[8px_8px_0_#1f1b16]">
                <h2 className="font-heading text-4xl font-black">Address</h2>
                <p className="mt-5 text-xl font-bold leading-8 text-ink/72">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </p>
              </article>
              <article className="bg-tomato p-7 text-cream shadow-[8px_8px_0_#1f1b16]">
                <h2 className="font-heading text-4xl font-black">Hours</h2>
                <div className="mt-5 space-y-2 text-base font-bold leading-7 text-cream/80">
                  {hours.map((item) => (
                    <p key={item.label}>{item.label}: {item.value}</p>
                  ))}
                </div>
              </article>
            </div>
            <div className="lg:col-span-2">
              <div className="map-frame">
                <iframe
                  aria-label="Papazzio on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={site.mapsEmbedUrl}
                  title="Papazzio map"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
