import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"

const menuHighlights = ["Wood-fired classics", "Seasonal pastas", "House cocktails"]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-tomato">Neighborhood Italian</p>
            <h1 className="font-heading text-5xl font-semibold leading-[0.98] text-ink sm:text-7xl">
              A warm table, a good glass, and something fresh from the oven.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
              A flexible starter page for a restaurant website, ready for real copy, photography, menus, reservations, and location details.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-tomato px-7 py-3.5 text-center font-semibold text-cream transition hover:bg-ink" href="#menu">
                View Menu
              </a>
              <a className="rounded-full border border-ink/20 px-7 py-3.5 text-center font-semibold text-ink transition hover:border-tomato hover:text-tomato" href="#visit">
                Plan a Visit
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-olive p-8 text-cream shadow-2xl shadow-ink/15">
            <div className="absolute inset-x-8 top-8 h-28 rounded-full bg-cream/15 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-cream/25 p-7">
              <p className="max-w-xs font-heading text-4xl font-semibold leading-tight">Starter block for hero photography or a featured dish.</p>
              <div className="space-y-3">
                {menuHighlights.map((item) => (
                  <div className="flex items-center justify-between border-t border-cream/20 pt-3 text-sm uppercase tracking-[0.16em]" key={item}>
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-cream" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream px-5 py-20 sm:px-8" id="menu">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-ink sm:text-5xl">Menu Preview</h2>
              <p className="mt-4 max-w-md leading-7 text-ink/70">
                Replace these starter cards with real dishes, prices, categories, or online ordering links.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Antipasti", "Pasta", "Pizza"].map((item) => (
                <article className="rounded-2xl border border-ink/10 bg-paper p-6" key={item}>
                  <h3 className="font-heading text-2xl font-semibold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65">Short description, featured item, or category callout.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2" id="about">
          <div className="rounded-[2rem] bg-tomato p-8 text-cream">
            <p className="font-heading text-4xl font-semibold leading-tight">A simple reusable section for brand story, private dining, or catering.</p>
          </div>
          <div className="self-center">
            <h2 className="font-heading text-4xl font-semibold">Ready for content</h2>
            <p className="mt-5 leading-8 text-ink/70">
              The template includes global design tokens, app-router structure, metadata, navigation, a homepage composition, and responsive Tailwind styling.
            </p>
          </div>
        </section>

        <section className="border-t border-ink/10 px-5 py-16 sm:px-8" id="visit">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-4xl font-semibold">Visit Us</h2>
              <p className="mt-3 text-ink/70">Address, hours, phone, and reservation links can live here.</p>
            </div>
            <a className="rounded-full bg-ink px-7 py-3.5 text-center font-semibold text-cream transition hover:bg-tomato" href="mailto:hello@example.com">
              Contact
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

