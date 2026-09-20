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

type MenuLine = {
  description?: string
  isNote?: boolean
  price?: string
  title: string
}

type MenuSection = {
  lines: MenuLine[]
  title: string
}

const baseSectionHeadings = [
  "DINNER MENU",
  "LUNCH MENU",
  "TRAY MENU",
  "DESSERT MENU",
  "Wine Menu",
  "Happy Hour Menu",
  "$10 HAPPY HOUR MENU STARTING JULY 1ST",
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
  "GF Options",
  "SUMMER HAPPY HOUR",
  "ANTIPASTI (Choose One)",
  "SECONDI (Choose One)",
  "DOLCI (Choose One)"
]

const wineSectionHeadings = ["Spumante", "Bianco", "Rosso Italiano", "Rosso Americano"]

const dessertItems = [
  "Chocolate Oreo Mousse Cake",
  "Homemade Cheesecake",
  "Tiramisu",
  "Homemade Cinnamon Apple Tart",
  "Spumoni Tartufo",
  "Affogato",
  "Cannoli",
  "Brownie",
  "Gluten Free Brownie GF",
  "Gluten Free Cannoli GF",
  "Gluten Free Cheesecake GF",
  "Gluten Free Tiramisu GF",
  "Gluten Free Oreo Mousse GF",
  "Lemon Sorbet GF",
  "Ice Cream GF",
  "*Ala Mode"
]

const titledMenuItems: Record<string, string[]> = {
  "dinner-menu": [
    "Linguine and Meatballs",
    "Gnocchi Bolognese",
    "Tortellini alla Panna",
    "Vitello alla Francese"
  ],
  "lunch-menu": [
    "Pasta Fagioli",
    "Veal Piccata",
    "Veal Parmigiana",
    "Shrimp Parmigiana",
    "Veal Francaise",
    "Veal Marsala",
    "Gnocchi Bolognese",
    "Tortellini alla Panna"
  ]
}

const introLabels = [
  "Small trays",
  "All tray orders",
  "Wire racks",
  "A 50% deposit",
  "Prices may change",
  "Gluten-Free:",
  "All bottles",
  "50% off with the purchase of one entree.",
  "Wednesdays only.",
  "50% off all Wine",
  "Weekdays 4-7 PM",
  "Holidays Excluded",
  "Bar Area Only",
  "La Dolce Notte",
  "Great Food",
  "Thursdays Only",
  "20% gratuity",
  "GF Indicates",
  "To substitute"
]

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

  const sections = parseMenu(page.content, page.title, page.slug)

  return (
    <PageShell>
      <main id="main-content" className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-30">
            <Photo alt={page.title} src={page.image} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/30" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading as="h1" eyebrow="Papazzio Menu" light title={page.title} text="Current menu information from Papazzio's website, organized for easier browsing." />
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
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[16rem_1fr]">
            <aside className="hidden self-start border border-ink/10 bg-cream p-5 shadow-lg shadow-ink/5 lg:sticky lg:top-28 lg:block">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-tomato">Sections</p>
              <div className="mt-5 grid gap-2">
                {sections.map((section) => (
                  <a className="text-sm font-bold text-ink/78 transition hover:text-tomato" href={`#${slugify(section.title)}`} key={section.title}>
                    {section.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="grid gap-6">
              {sections.map((section) => (
                <section className="menu-section" id={slugify(section.title)} key={section.title}>
                  <h2>{section.title}</h2>
                  <div className="mt-5 grid gap-1">
                    {section.lines.map((line, index) => (
                      <MenuItem hidePrice={page.slug === "wine-menu"} line={line} key={`${line.title}-${index}`} />
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

function MenuItem({ hidePrice = false, line }: { hidePrice?: boolean; line: MenuLine }) {
  if (line.isNote) {
    return <p className="menu-note">{line.title}</p>
  }

  return (
    <article className="menu-item">
      <div>
        <h3>{line.title}</h3>
        {line.description ? <p>{line.description}</p> : null}
      </div>
      {line.price && !hidePrice ? <span>{line.price}</span> : null}
    </article>
  )
}

function parseMenu(content: string, fallbackTitle: string, slug: string): MenuSection[] {
  const lines = lineBreaks(content, slug)
  const sections: MenuSection[] = []
  let current: MenuSection = { title: fallbackTitle, lines: [] }

  for (const line of lines) {
    if (isNavigationLine(line)) {
      continue
    }

    if (isSectionHeading(line)) {
      if (current.lines.length > 0 || current.title !== fallbackTitle) {
        sections.push(current)
      }
      current = { title: normalizeHeading(line), lines: [] }
      continue
    }

    current.lines.push(parseLine(line, slug))
  }

  if (current.lines.length > 0) {
    sections.push(current)
  }

  const cleanedSections = sections
    .map((section) => ({
      ...section,
      lines: section.lines.filter((line) => !isOrphanedPrice(line) && !isStrayTrayPrice(line, slug))
    }))
    .filter((section) => section.lines.length > 0)

  return organizeMenuSections(cleanedSections, slug)
}

function lineBreaks(content: string, slug: string) {
  let text = content
    .replaceAll("wire racks.Wire", "wire racks. Wire")
    .replaceAll("Gluten-Free:“GF”", "Gluten-Free: “GF”")
  const sectionHeadings = slug === "wine-menu" ? [...baseSectionHeadings, ...wineSectionHeadings] : baseSectionHeadings

  for (const heading of sectionHeadings) {
    text = text.replaceAll(` ${heading} `, `\n${heading}\n`)
    if (text.startsWith(`${heading} `)) {
      text = text.replace(`${heading} `, `${heading}\n`)
    }
  }

  text = text
    .replaceAll(" Lunch Menu ", "\nLunch Menu\n")
    .replaceAll(" Dinner Menu ", "\nDinner Menu\n")
    .replaceAll(" Dessert Menu ", "\nDessert Menu\n")
    .replaceAll(" Tray Menu ", "\nTray Menu\n")
    .replaceAll(/(?<![/$]) (?=\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)?\s+[A-Z][A-Za-zÀ-ÿ])/g, "\n")

  for (const label of introLabels) {
    text = text.replaceAll(` ${label}`, `\n${label}`)
  }

  if (slug === "dessert-menu") {
    for (const item of dessertItems) {
      text = text.replaceAll(` ${item}`, `\n${item}`)
    }
  }

  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
}

function parseLine(line: string, slug: string): MenuLine {
  if (slug === "dessert-menu") {
    if (line.startsWith("*Ala Mode")) {
      return {
        description: "Vanilla or Chocolate",
        title: "A la Mode"
      }
    }

    const dessertItem = dessertItems.find((item) => line === item || line.startsWith(`${item} `))

    if (dessertItem) {
      return {
        description: dessertItem.startsWith("Gluten Free")
          ? undefined
          : line.slice(dessertItem.length).trim() || undefined,
        title: dessertItem
      }
    }
  }

  const priced = line.match(/^(\$?\s?(?:market price|\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)*))\s+(.+)$/i)

  if (!priced) {
    return { isNote: true, title: line }
  }

  const price = normalizePrice(priced[1])
  const body = priced[2].trim()
  const cleanBody = body.replace(/\s+\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)*\s*$/g, "").trim()

  const titledItem = titledMenuItems[slug]?.find((item) => cleanBody.startsWith(`${item} `))
  if (titledItem) {
    return {
      description: cleanBody.slice(titledItem.length).trim(),
      price,
      title: titledItem
    }
  }

  const glutenFreeIndex = cleanBody.indexOf(" GF ")
  if (glutenFreeIndex > 0) {
    return {
      description: cleanBody.slice(glutenFreeIndex + 4).trim(),
      price,
      title: cleanBody.slice(0, glutenFreeIndex + 3).trim()
    }
  }

  const descriptionStart = cleanBody.search(/\s(?:Clams|Fried|Drizzled|New|Grilled|Served|Sautéed|Sauteed|With|On|In|Crisp|Layers|Egg|Chicken|Veal|Shrimp|Penne|Fettuccine|Linguine|Smooth|Creamy|Classic|House|Homemade|Roasted|Choice|Small|Large|Gulf|Jumbo|Tossed|Bow|Angel|Pan|Whole|Potato|Marinated|Broiled|Italian|Crispy|Four|Three|Fresh|Arugula|Cold|Two|Sliced|Jumbo|Breaded|Lightly|Topped)\\b/)

  if (descriptionStart > 0) {
    return {
      description: cleanBody.slice(descriptionStart).trim(),
      price,
      title: cleanBody.slice(0, descriptionStart).trim()
    }
  }

  return { price, title: cleanBody }
}

function normalizePrice(value: string) {
  return value.replace(/\s+/g, " ").replace("$ ", "$").trim()
}

function isOrphanedPrice(line: MenuLine) {
  return line.isNote && /^\$?\s?\d{1,3}(?:\.\d{2})?(?:\s?\/\s?\$?\s?\d{1,3}(?:\.\d{2})?)*$/.test(line.title)
}

function isStrayTrayPrice(line: MenuLine, slug: string) {
  return slug === "tray-menu" && line.title === "/" && Boolean(line.price)
}

function organizeMenuSections(sections: MenuSection[], slug: string) {
  if (slug === "tray-menu") {
    return organizeTrayMenu(sections)
  }

  if (slug === "dinner-menu" || slug === "lunch-menu") {
    return moveGlutenFreePastaNote(sections)
  }

  return sections
}

function moveGlutenFreePastaNote(sections: MenuSection[]) {
  const glutenFreeNotes = sections.flatMap((section) =>
    section.lines.filter((line) => line.isNote && line.title.startsWith("To substitute Gluten Free penne or spaghetti"))
  )

  if (glutenFreeNotes.length === 0) {
    return sections
  }

  const withoutGlutenFreeNotes = sections.map((section) => ({
    ...section,
    lines: section.lines.filter((line) => !glutenFreeNotes.includes(line))
  }))

  return withoutGlutenFreeNotes.map((section) =>
    section.title === "PASTAS"
      ? { ...section, lines: [glutenFreeNotes[0], ...section.lines] }
      : section
  )
}

function organizeTrayMenu(sections: MenuSection[]) {
  const trayInformation = sections.find((section) => section.title === "Tray Menu")?.lines ?? []
  const menuSections = sections
    .filter((section) => section.title !== "Tray Menu")
    .map((section) => ({
      ...section,
      lines: section.lines
        .filter((line) => line.title !== "Dessert Menu Dinner Menu")
        .map((line) =>
          line.title === "Penne Classico GF"
            ? {
                ...line,
                description: "Seasoned Sweet Sausage and Tomatoes in a Fresh Pink Sauce"
              }
            : line
        )
    }))

  return trayInformation.length > 0
    ? [...menuSections, { lines: trayInformation, title: "Tray Information" }]
    : menuSections
}

function normalizeHeading(line: string) {
  return line.replace(/\s+/g, " ").trim()
}

function isNavigationLine(line: string) {
  return ["Lunch Menu", "Dinner Menu", "Dessert Menu", "Tray Menu"].includes(line)
}

function isSectionHeading(line: string) {
  return [...baseSectionHeadings, ...wineSectionHeadings].some((heading) => line === heading)
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}
