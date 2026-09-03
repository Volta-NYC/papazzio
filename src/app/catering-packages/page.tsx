import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { images, site } from "@/lib/content"

const packages = [
  {
    title: "Premiere Package - Afternoon",
    price: "$43.95 per person",
    details: [
      "Available Saturdays and Sundays, 12-4 pm or 1-5 pm.",
      "30-adult minimum for exclusive use.",
      "Four-course Italian meal; gluten-free +$3.",
      "Events past 4 pm add $5 per person, based on availability.",
      "Kids under 10 dine at half price.",
      "Includes coffee, tea, and soda.",
      "Bar service and appetizers can be added by request."
    ],
    sections: [
      { title: "Salad - choose one", items: ["House Salad", "Caesar Salad", "Tri-Color Salad"] },
      { title: "Pasta - choose one", items: ["Penne Vodka", "Penne Marinara", "Fettuccine Alfredo", "Penne Filetto di Pomodoro"] },
      {
        title: "Entree - choose three",
        items: [
          "Chicken Parmigiana",
          "Chicken Scarpiello",
          "Chicken Bianco",
          "Chicken Marsala",
          "Chicken Francaise",
          "Veal Saltimbocca",
          "Veal Piccata",
          "Veal Marsala",
          "Veal Parmigiana",
          "Salmon Oreganato",
          "Lemon Basil Salmon",
          "Horseradish Pesto Salmon",
          "Champagne Dill Salmon",
          "Eggplant Parmigiana"
        ]
      },
      { title: "Dessert", items: ["Occasion Cake of your choice", "See Cake Options Menu"] }
    ]
  },
  {
    title: "Buffet Package",
    price: "$41.95 per person",
    details: [
      "Available Saturdays and Sundays from 12-4 pm or 1-5 pm.",
      "30-adult minimum for exclusive use.",
      "Four-course Italian meal; gluten-free +$3.",
      "Events past 5:00 pm add $5 per person, based on availability.",
      "Children under 10 dine at half price.",
      "Includes coffee, tea, and soda.",
      "Wine, cocktails, and appetizers can be added."
    ],
    sections: [
      {
        title: "Choose Six Items",
        items: [
          "House Salad",
          "Caesar Salad",
          "Spinach Salad",
          "Calamari Fritti",
          "Sliced Tomato & Mozzarella",
          "Penne alla Vodka",
          "Penne Marinara",
          "Fettuccine Alfredo",
          "Penne Filetto di Pomodoro",
          "Baked Ziti",
          "Eggplant Parmigiana",
          "Sausage & Peppers",
          "Chicken Parmigiana",
          "Chicken Scarpiello",
          "Chicken Bianco",
          "Chicken Marsala",
          "Chicken Francese",
          "Veal Piccata",
          "Veal Marsala",
          "Veal Parmigiana",
          "Salmon Oreganato",
          "Salmon Lemon Basil",
          "Salmon with Horseradish Pesto Sauce",
          "Salmon with Champagne Dill Sauce",
          "Mixed Vegetables sauteed in garlic and oil"
        ]
      },
      { title: "Dessert", items: ["Occasion Cake of your choice", "See Cake Options Menu"] }
    ]
  },
  {
    title: "Lunch Package",
    price: "$27.95 per person",
    details: [
      "Three-course prix fixe available on-site Wednesday-Friday, 12:00-4:00 pm.",
      "Includes a curated three-course menu with coffee or soda.",
      "Monday or Tuesday lunch service may be arranged by advance reservation.",
      "Monday or Tuesday requires a minimum guarantee of 25 guests."
    ],
    sections: [
      { title: "Salad - choose two", items: ["House Salad", "Caesar Salad", "Tri-Color Salad", "Sliced Tomato & Mozzarella"] },
      {
        title: "Entree - choose four",
        items: [
          "Penne Vodka with Chicken",
          "Fettuccine Alfredo & Broccoli",
          "Penne Filetto di Pomodoro",
          "Capellini alla Rosa",
          "Chicken Parmesan",
          "Chicken Bianco",
          "Chicken Marsala",
          "Chicken Francese",
          "Chicken Piccata",
          "Veal Saltimbocca",
          "Veal Piccata",
          "Veal Marsala",
          "Veal Parmesan",
          "Salmon Oreganato",
          "Lemon Basil Salmon",
          "Horseradish Pesto Salmon",
          "Champagne Dill Salmon",
          "Eggplant Parmesan"
        ]
      },
      { title: "Dessert", items: ["Cheesecake", "Tiramisu"] }
    ]
  },
  {
    title: "Premiere Package - Evening",
    price: "$49.95 per person",
    details: [
      "Available Monday-Thursday after 3:00 pm, based on availability.",
      "Complete four-course Italian meal; gluten-free +$3.",
      "Includes coffee, tea, and soda.",
      "Wine, cocktails, and appetizers can be added from the Additional Options Menu."
    ],
    sections: [
      { title: "Salad - choose one", items: ["House Salad", "Caesar Salad", "Tri-Color Salad"] },
      { title: "Pasta - choose one", items: ["Penne Vodka", "Penne Marinara", "Fettuccine Alfredo", "Penne Filetto di Pomodoro"] },
      {
        title: "Entree - choose three",
        items: [
          "Chicken Parmigiana",
          "Chicken Scarpiello",
          "Chicken Bianco",
          "Chicken Marsala",
          "Chicken Francaise",
          "Veal Saltimbocca",
          "Veal Piccata",
          "Veal Marsala",
          "Veal Parmigiana",
          "Salmon Oreganato",
          "Lemon Basil Salmon",
          "Horseradish Pesto Salmon",
          "Champagne Dill Salmon",
          "Eggplant Parmigiana"
        ]
      },
      { title: "Dessert", items: ["Occasion Cake of your choice", "See Cake Options Menu"] }
    ]
  }
]

const cakeMenu = [
  { title: "Cake Choices", items: ["Yellow Cake", "Devils Food Cake"] },
  {
    title: "Fillings",
    items: [
      "Strawberry Jam",
      "Fresh Strawberry",
      "Peaches",
      "Bananas",
      "Fresh Peaches",
      "Pineapple",
      "Lemon",
      "Butter Cream",
      "Chocolate Butter Cream",
      "Bavarian Cream",
      "Chocolate Pudding",
      "Vanilla Pudding",
      "Vanilla & Chocolate Pudding",
      "Chocolate Custard",
      "Vanilla Custard",
      "Chocolate Mousse",
      "Cannoli Filling"
    ]
  },
  { title: "Toppings", items: ["Chocolate Fudge Icing", "Cream Cheese Icing", "Whipped Cream", "Chocolate Whipped Cream", "Butter Cream", "Chocolate Butter Cream"] },
  {
    title: "Cakes Available for Additional Charge",
    items: ["Carrot Cake", "Napoleon Cake", "German Chocolate Cake", "Black Forest Cake", "Chocolate Dream Cake", "Mocha Cake"]
  }
]

const supportMenus = [
  {
    title: "Additional Options",
    href: "https://www.papazzio.com/additionals-menu",
    details: ["Family-style appetizers", "Passed hors d'oeuvres", "Open bar options", "Fruit, cookies, pastries, valet, and color napkin add-ons"]
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
                <div className="mt-6 grid gap-4 bg-paper p-4">
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-black uppercase tracking-[0.18em] text-tomato">{section.title}</h3>
                      <div className="mt-3 grid gap-2 text-sm font-black leading-6 text-ink/72 sm:grid-cols-2">
                        {section.items.map((detail) => <p key={detail}>{detail}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Cake Menu" title="Occasion cake options." text="Included occasion cakes can be customized with classic cake bases, fillings, and toppings. Premium cakes are available for an additional charge." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cakeMenu.map((item) => (
                <article className="reveal-on-scroll reveal-soft border border-ink/10 bg-paper p-6 shadow-lg shadow-ink/5" key={item.title}>
                  <h3 className="font-heading text-3xl font-black">{item.title}</h3>
                  <ul className="mt-5 grid gap-2 text-sm font-bold leading-6 text-ink/68">
                    {item.items.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="More Options" title="Add-ons." text="Package add-ons are connected here so visitors can move directly into the right catering option." />
            <div className="mt-10 grid max-w-2xl gap-5">
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
