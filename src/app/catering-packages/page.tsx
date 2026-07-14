import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { images, site } from "@/lib/content"

const packages = [
  {
    title: "Premiere Package - Afternoon",
    price: "$43.95 per person",
    href: "https://www.papazzio.com/premiere-afternoon",
    details: [
      "Available Saturdays and Sundays, 12-4 pm or 1-5 pm.",
      "30-adult minimum for exclusive use.",
      "Four-course Italian meal; gluten-free +$3.",
      "Events past 4 pm add $6 per person, based on availability.",
      "Kids under 10 dine at half price.",
      "Includes coffee, tea, and soda."
    ],
    menu: ["Salad: choose one", "Pasta: choose one", "Entree: choose three", "Dessert: Occasion Cake of your choice"]
  },
  {
    title: "Premiere Package - Evening",
    price: "$45.95 per person",
    href: "https://www.papazzio.com/premiere-evening",
    details: [
      "Available Monday-Friday after 3:00 pm, based on availability.",
      "Complete four-course Italian meal; gluten-free +$3.",
      "Includes fresh bread & butter, coffee, tea, and soda.",
      "Wine, cocktails, and appetizers can be added."
    ],
    menu: ["Salad: choose one", "Pasta: choose one", "Entree: choose three", "Dessert: Occasion Cake of your choice"]
  },
  {
    title: "Lunch Package",
    price: "$27.95 per person",
    href: "https://www.papazzio.com/lunch-package",
    details: [
      "Three-course prix fixe available on-site Wednesday-Friday, 12:00-4:00 pm.",
      "Includes a curated three-course menu with coffee or soda.",
      "Monday or Tuesday lunch service may be arranged by advance reservation.",
      "Monday or Tuesday requires a minimum guarantee of 25 guests."
    ],
    menu: ["Salad: choose two", "Entree: choose four", "Dessert: Cheesecake or Tiramisu"]
  },
  {
    title: "Buffet Package",
    price: "$41.95 per person",
    href: "https://www.papazzio.com/buffet-package",
    details: [
      "Available Saturdays and Sundays from 12-4 pm or 1-5 pm.",
      "30-adult minimum for exclusive use.",
      "Four-course Italian meal; gluten-free +$3.",
      "Events past 5:00 pm add $6 per person, based on availability.",
      "Children under 10 dine at half price.",
      "Includes coffee, tea, and soda."
    ],
    menu: ["Choose six buffet items", "Dessert: Occasion Cake of your choice", "Additional wine, cocktails, or appetizers available"]
  }
]

const supportMenus = [
  {
    title: "Cake Menu",
    href: "https://www.papazzio.com/cake-menu",
    details: ["Yellow Cake", "Devils Food Cake", "Multiple fillings and toppings", "Premium cakes available for an additional charge"]
  },
  {
    title: "Additional Options",
    href: "https://www.papazzio.com/additionals-menu",
    details: ["Family-style appetizers", "Passed hors d'oeuvres", "Open bar options", "Fruit, cookies, pastries, valet, and color napkin add-ons"]
  },
  {
    title: "Tray Menu",
    href: "/tray-menu",
    details: ["Take-home trays for at-home events", "Small trays serve 9-10", "Large trays serve 18-20", "Gluten-free tray options available"]
  }
]

export default function CateringPackagesPage() {
  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-32">
            <Photo alt="Papazzio event dining room" src={images.cateringParty} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/28" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading eyebrow="On-Site Catering" light title="Our Catering Packages for On-site Events" text="Call 718.229.1962 to plan your event today. Papazzio's package information and policies are carried over from the current restaurant website." />
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-gold" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="button button-outline-light" href="/tray-menu">Tray Menu</Link>
              <a className="button button-ghost-light" href={site.cateringExternalUrl}>Off-Site Catering</a>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {packages.map((item, index) => (
              <article className={`reveal-on-scroll ${index % 2 === 0 ? "reveal-left" : "reveal-right"} border border-ink/10 bg-cream p-7 shadow-lg shadow-ink/5`} key={item.title}>
                <p className="eyebrow text-tomato">{item.price}</p>
                <h2 className="mt-3 font-heading text-4xl font-black leading-none">{item.title}</h2>
                <ul className="mt-6 grid gap-2 text-sm font-bold leading-6 text-ink/70">
                  {item.details.map((detail) => (
                    <li className="border-t border-ink/12 pt-2" key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-2 bg-paper p-4 text-sm font-black text-ink/72">
                  {item.menu.map((detail) => <p key={detail}>{detail}</p>)}
                </div>
                <a className="button button-dark mt-6" href={item.href}>View Full Package</a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="More Options" title="Cake, add-ons, and take-home trays." text="Package add-ons, cake choices, and tray menus are connected here so visitors can move directly into the right catering option." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {supportMenus.map((item) => (
                <a className="reveal-on-scroll reveal-soft border border-ink/10 bg-paper p-6 shadow-lg shadow-ink/5 transition hover:-translate-y-1 hover:border-tomato" href={item.href} key={item.title}>
                  <h3 className="font-heading text-3xl font-black">{item.title}</h3>
                  <ul className="mt-5 grid gap-2 text-sm font-bold leading-6 text-ink/68">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </a>
              ))}
            </div>
            <p className="mt-10 bg-tomato/10 p-5 text-sm font-bold leading-6 text-ink/70">
              All packages are subject to NY sales tax and 20% service charge. A $300 deposit secures the reservation. Final head count and payment must be made three days before the event. Cash or credit card accepted; credit/debit payments add a 3.5% processing fee.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
