import Link from "next/link"
import { notFound } from "next/navigation"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/content"
import { getSpecialPage, specialPages } from "@/lib/special-pages"

type SpecialRouteProps = {
  params: Promise<{ specialSlug: string }>
}

export function generateStaticParams() {
  return specialPages.map((page) => ({ specialSlug: page.slug }))
}

export async function generateMetadata({ params }: SpecialRouteProps) {
  const { specialSlug } = await params
  const page = getSpecialPage(specialSlug)

  if (!page) {
    return {}
  }

  return {
    title: `${page.title} | ${site.name}`,
    description: page.subtitle
  }
}

export default async function SpecialDetailPage({ params }: SpecialRouteProps) {
  const { specialSlug } = await params
  const page = getSpecialPage(specialSlug)

  if (!page) {
    notFound()
  }

  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-36">
            <Photo alt={page.title} src={page.image} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/24" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading eyebrow={page.eyebrow} light title={page.title} text={page.subtitle} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button button-outline-light" href="/specials">All Specials</Link>
              {page.ctaHref && page.ctaLabel ? (
                <Link className="button button-gold" href={page.ctaHref}>{page.ctaLabel}</Link>
              ) : null}
              {page.actions?.map((action) => (
                action.href.startsWith("/") ? (
                  <Link className="button button-outline-light" href={action.href} key={action.label}>{action.label}</Link>
                ) : (
                  <a className="button button-outline-light" href={action.href} key={action.label}>{action.label}</a>
                )
              ))}
              <a className="button button-ghost-light" href={site.phoneHref}>Call {site.phone}</a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.55fr_1fr]">
            <aside className="reveal-on-scroll reveal-left self-start border border-ink/10 bg-cream p-6 shadow-lg shadow-ink/5 lg:sticky lg:top-28">
              <p className="eyebrow text-tomato">At a Glance</p>
              <ul className="mt-5 grid gap-3 text-sm font-bold leading-6 text-ink/72">
                {page.details.map((detail) => (
                  <li className="border-t border-ink/12 pt-3" key={detail}>{detail}</li>
                ))}
              </ul>
              {page.note ? <p className="mt-5 bg-tomato/10 p-4 text-sm font-bold leading-6 text-ink/68">{page.note}</p> : null}
            </aside>

            <div className="grid gap-6">
              {page.sections.map((section, index) => (
                <section className={`reveal-on-scroll ${index % 2 === 0 ? "reveal-right" : "reveal-left"} menu-section`} id={slugify(section.title)} key={section.title}>
                  <h2>{section.title}</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <p className="border-t border-ink/12 pt-3 text-base font-bold leading-7 text-ink/72" key={item}>{item}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}
