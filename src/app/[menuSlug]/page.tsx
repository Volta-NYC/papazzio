import Link from "next/link"
import { notFound } from "next/navigation"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { menuLinks, site } from "@/lib/content"
import { getMenuPage, menuPages } from "@/lib/menu-pages"

type MenuRouteProps = {
  params: Promise<{ menuSlug: string }>
}

export function generateStaticParams() {
  return menuPages.map((page) => ({ menuSlug: page.slug }))
}

export async function generateMetadata({ params }: MenuRouteProps) {
  const { menuSlug } = await params
  const page = getMenuPage(menuSlug)

  if (!page) {
    return {}
  }

  return {
    title: `${page.title} | ${site.name}`,
    description: `${page.title} from ${site.name} in Bayside, NY.`
  }
}

export default async function MenuDetailPage({ params }: MenuRouteProps) {
  const { menuSlug } = await params
  const page = getMenuPage(menuSlug)

  if (!page) {
    notFound()
  }

  const formatted = formatMenuText(page.content)

  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-30">
            <Photo alt={page.title} src={page.image} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/30" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading eyebrow="Papazzio Menu" light title={page.title} text="Menu information copied from the current Papazzio website." />
            <div className="mt-8 flex flex-wrap gap-3">
              {menuLinks.map((link) => (
                <Link className={`button ${link.href.endsWith(menuSlug) ? "button-gold" : "button-outline-light"}`} href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <a className="button button-ghost-light" href={site.orderUrl}>Order Now</a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl bg-cream p-6 shadow-[10px_10px_0_#1f1b16] sm:p-10 lg:p-14">
            <div className="menu-copy">
              {formatted.map((line, index) => {
                if (isHeading(line)) {
                  return (
                    <h2 className="menu-heading" key={`${line}-${index}`}>
                      {line}
                    </h2>
                  )
                }

                return <p key={`${line}-${index}`}>{line}</p>
              })}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

function formatMenuText(content: string) {
  const headings = [
    "DINNER MENU",
    "LUNCH MENU",
    "TRAY MENU",
    "DESSERT MENU",
    "Wine Menu",
    "Happy Hour Menu",
    "ANTIPASTI",
    "INSALATE",
    "SALADS",
    "PASTAS",
    "ENTREES",
    "SIDES",
    "Appetizers",
    "Salads",
    "Pastas",
    "Entrees",
    "Sides",
    "Spumante",
    "Bianco",
    "Rosso Italiano",
    "Rosso Americano",
    "GF Options",
    "SUMMER HAPPY HOUR",
    "ANTIPASTI (Choose One)",
    "SECONDI (Choose One)",
    "DOLCI (Choose One)"
  ]

  let text = content

  for (const heading of headings) {
    text = text.replaceAll(` ${heading} `, `\n${heading}\n`)
  }

  text = text
    .replaceAll(" Lunch Menu ", "\nLunch Menu\n")
    .replaceAll(" Dinner Menu ", "\nDinner Menu\n")
    .replaceAll(" Dessert Menu ", "\nDessert Menu\n")
    .replaceAll(" Tray Menu ", "\nTray Menu\n")
    .replaceAll(/ (?=\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3})?\s+[A-Z][A-Za-z])/g, "\n")
    .replaceAll(/ (?=20% gratuity|GF Indicates|To substitute|Small trays|All tray orders|Wire racks|A 50% deposit|Prices may change|Gluten-Free:|All bottles|50% off all Wine|Weekdays 4-7 PM|Holidays Excluded|Bar Area Only|La Dolce Notte|Great Food|Thursdays Only)/g, "\n")

  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

function isHeading(line: string) {
  const headingWords = [
    "MENU",
    "ANTIPASTI",
    "INSALATE",
    "SALADS",
    "PASTAS",
    "ENTREES",
    "SIDES",
    "Appetizers",
    "Salads",
    "Pastas",
    "Entrees",
    "Sides",
    "Spumante",
    "Bianco",
    "Rosso Italiano",
    "Rosso Americano",
    "GF Options",
    "SUMMER HAPPY HOUR",
    "SECONDI",
    "DOLCI"
  ]

  return headingWords.some((word) => line === word || line.includes(word))
}
