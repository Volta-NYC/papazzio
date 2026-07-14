import Link from "next/link"

import { ImageCarousel } from "@/components/image-carousel"
import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { galleryImages, hours, images, menuPreview, reviews, site, specials, storyParagraphs } from "@/lib/content"

const ticker = ["Authentic Italian cuisine", "Craft cocktails", "Wine and beer", "Gluten-Free dishes", "Bayside, Queens"]

export default function HomePage() {
  return (
    <PageShell>
      <main>
        <section className="relative min-h-screen overflow-hidden bg-ink pt-24 text-cream">
          <div className="absolute inset-0 opacity-42">
            <Photo alt="Papazzio dining table" src={images.hero} />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,0.96),rgba(19,17,14,0.72),rgba(19,17,14,0.18))]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.8fr] lg:px-8">
            <div>
              <p className="eyebrow text-gold">Bayside, Queens · Est. 1990</p>
              <h1 className="mt-5 max-w-5xl font-heading text-6xl font-black leading-[0.88] sm:text-8xl lg:text-9xl">
                Join Us For Family Dinner
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/76">
                At Papazzio's we serve authentic Italian cuisine, craft cocktails, wine and beer, as well as a fresh menu of Gluten-Free dishes in the comfort of your neighborhood.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-gold" href={site.orderUrl}>Order Online</a>
                <Link className="button button-outline-light" href="/menu">View Menu</Link>
                <a className="button button-ghost-light" href={site.phoneHref}>Call {site.phone}</a>
                <a className="button button-outline-light" href={site.googleReviewsUrl}>Google Reviews</a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rotate-2 overflow-hidden rounded-[2rem] border border-cream/20 bg-cream/8 p-3 shadow-2xl shadow-black/40">
                <Photo alt="Papazzio plated dish" className="aspect-[4/5] rounded-[1.45rem]" src={images.plate} />
              </div>
              <div className="absolute -bottom-8 -left-10 max-w-xs -rotate-3 bg-tomato p-6 shadow-2xl shadow-black/35">
                <p className="font-heading text-4xl font-black leading-none">Over 95%</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-cream/75">of dishes can be prepared gluten free</p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-ink bg-gold py-4 text-ink">
          <div className="ticker-track flex min-w-max gap-8 text-sm font-black uppercase tracking-[0.22em]">
            {[...ticker, ...ticker, ...ticker].map((item, index) => (
              <span className="flex items-center gap-8" key={`${item}-${index}`}>
                {item}
                <span className="h-2 w-2 rounded-full bg-tomato" />
              </span>
            ))}
          </div>
        </section>

        <section className="bg-paper px-4 py-18 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            <InfoCard className="reveal-left" title="Find us" lines={[site.addressLine1, site.addressLine2]} />
            <InfoCard className="reveal-soft reveal-delay-1" title="Hours" lines={hours.map((item) => `${item.label}: ${item.value}`)} />
            <InfoCard className="reveal-right reveal-delay-2" title="Reach us" lines={[site.email, site.phone]} />
          </div>
        </section>

        <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-center">
            <div className="reveal-on-scroll reveal-left mx-auto max-w-56 overflow-hidden rounded-full border border-ink/10 bg-white p-4 shadow-xl shadow-ink/10 lg:mx-0">
              <img alt="OKGF Certified Gluten-Free Celiac Safe" className="h-full w-full object-contain" src={images.okgf} />
            </div>
            <div className="reveal-on-scroll reveal-right">
              <SectionHeading eyebrow="Certified Gluten-Free" title="Gluten-Free & Celiac Safe dining is central to Papazzio." text="Papazzio offers a large selection of gluten-free options, marks items available gluten-free with GF, and asks gluten-free guests to tell their server so the kitchen can take care with each order." />
              <Link className="button button-dark mt-8" href="/menu">Explore Gluten-Free Options</Link>
            </div>
          </div>
        </section>

        <section className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div className="reveal-on-scroll reveal-left">
              <SectionHeading eyebrow="About" title="A Bell Boulevard restaurant with a family legacy." text={storyParagraphs.slice(0, 3).join(" ")} />
              <Link className="button button-dark mt-8" href="/contact">Reserve a Table</Link>
            </div>
            <div className="reveal-on-scroll reveal-right relative">
              <div className="overflow-hidden rounded-[2rem] border-8 border-paper shadow-2xl shadow-ink/18">
                <Photo alt="Papazzio restaurant interior" className="aspect-[5/4]" src={images.diningRoom} />
              </div>
              <div className="absolute -bottom-8 right-8 max-w-sm bg-ink p-6 text-cream">
                <p className="font-heading text-3xl font-black leading-tight">Warm brick, white tablecloths, and the neighborhood dining room atmosphere Papazzio is known for.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink px-4 py-24 text-cream sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-on-scroll reveal-soft flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Our Menu" light title="Finest and freshest ingredients." text="At Papazzio we strive to use only the finest and freshest ingredients. Our goal is excellent service and delicious food for everyone who enters our door." />
              <Link className="button button-gold shrink-0" href="/menu">See Menus</Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {menuPreview.map((group, index) => (
                <article className={`reveal-on-scroll ${index === 0 ? "reveal-left" : index === 1 ? "reveal-soft reveal-delay-1" : "reveal-right reveal-delay-2"} group border border-cream/14 bg-cream/[0.04] p-7 transition hover:-translate-y-1 hover:bg-cream/[0.08]`} key={group.title}>
                  <p className="font-heading text-6xl font-black text-tomato/80">0{index + 1}</p>
                  <h3 className="mt-6 font-heading text-3xl font-black">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-cream/70">
                    {group.items.map((item) => (
                      <li className="border-t border-cream/12 pt-3" key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-tomato px-4 py-24 text-cream sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-on-scroll reveal-soft flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Specials" light title="Seasonal offers, bold nights, and family meals." text="Papazzio's specials include happy hour, Winesdays, La Dolce Notte, Sunday steak, and weekday family meals." />
              <Link className="button button-light shrink-0" href="/specials">View Specials</Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {specials.map((item, index) => (
                <Link className={`special-mini reveal-on-scroll ${index % 3 === 0 ? "reveal-left" : index % 3 === 1 ? "reveal-soft reveal-delay-1" : "reveal-right reveal-delay-2"} group`} href={item.href || "/specials"} key={item.title}>
                  <Photo alt={item.title} className="absolute inset-0 opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-72" src={item.image} />
                  <span className="relative mt-auto block">
                    <span className="block text-xs font-black uppercase tracking-[0.2em] text-gold">{item.subtitle}</span>
                    <span className="mt-2 block font-heading text-3xl font-black leading-none">{item.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr]">
            <div className="reveal-on-scroll reveal-left">
              <SectionHeading eyebrow="Kind Words" title="Cozy, warm ambience and friendly service." text="Papazzio shares guest notes from diners, catering customers, and gluten-free guests." />
              <a className="button button-dark mt-8" href={site.googleReviewsUrl}>Read Google Reviews</a>
            </div>
            <div className="grid gap-5">
              {reviews.map((review, index) => (
                <blockquote className={`reveal-on-scroll ${index % 2 === 0 ? "reveal-right" : "reveal-soft reveal-delay-1"} border-l-4 border-tomato bg-cream p-6 shadow-lg shadow-ink/5`} key={review.author}>
                  <p className="text-lg leading-8 text-ink/78">"{review.quote}"</p>
                  <cite className="mt-4 block text-sm font-black uppercase tracking-[0.18em] text-tomato">- {review.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-on-scroll reveal-soft mb-10 text-cream">
              <SectionHeading eyebrow="Gallery" light title="A closer look at Papazzio." text="Restaurant, food, wine, and event photos from Papazzio's current website and supplied assets." />
            </div>
            <ImageCarousel images={galleryImages} />
          </div>
        </section>

        <section className="bg-cream px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <SectionHeading eyebrow="Visit" title="Pull up on Bell Boulevard." text="Papazzio Restaurant is located at 39-38 Bell Boulevard in Bayside, NY." />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a className="button button-dark" href={site.mapsUrl}>Get Directions</a>
              <a className="button button-outline-dark" href={site.phoneHref}>Call {site.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function InfoCard({ className = "", lines, title }: { className?: string; lines: string[]; title: string }) {
  return (
    <article className={`reveal-on-scroll border border-ink bg-cream p-6 shadow-[8px_8px_0_#1f1b16] ${className}`}>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-tomato">{title}</p>
      <div className="mt-4 space-y-1 font-heading text-2xl font-black leading-tight text-ink">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  )
}
