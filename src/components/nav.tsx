import { site } from "@/lib/site"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary navigation">
        <a className="font-heading text-2xl font-semibold tracking-wide text-ink" href="#">
          {site.name}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-ink/70 sm:flex">
          {site.nav.map((item) => (
            <a className="transition hover:text-tomato" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="rounded-full bg-tomato px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink" href="#visit">
          Reserve
        </a>
      </nav>
    </header>
  )
}

