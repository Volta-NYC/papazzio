import Link from "next/link"

import { navItems, site } from "@/lib/content"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/88 text-cream backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="group flex items-center" href="/" aria-label="Papazzio home">
          <span className="leading-none">
            <span className="block font-heading text-2xl font-bold tracking-wide">{site.name}</span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.28em] text-cream/58">Bayside · NY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-cream/72 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="hidden rounded-full border border-cream/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cream transition hover:border-cream hover:bg-cream hover:text-ink sm:inline-flex" href={site.phoneHref}>
            {site.phone}
          </a>
          <a className="rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink transition hover:bg-cream sm:px-5" href={site.orderUrl}>
            Order Now
          </a>
        </div>
      </div>
    </header>
  )
}
