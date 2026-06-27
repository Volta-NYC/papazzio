import Link from "next/link"

import { hours, navItems, site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="bg-black px-4 py-14 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="font-heading text-4xl font-bold">{site.name}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-cream/68">{site.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="button button-gold" href={site.orderUrl}>Order Online</a>
            <a className="button button-outline-light" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-cream/70">
            {navItems.map((item) => (
              <Link className="transition hover:text-cream" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="transition hover:text-cream" href={site.giftCardsUrl}>Gift Cards</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Find us</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-cream/70">
            <p>
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </p>
            <p>
              <a className="transition hover:text-cream" href={site.emailHref}>{site.email}</a>
              <br />
              <a className="transition hover:text-cream" href={site.phoneHref}>{site.phone}</a>
            </p>
            <div>
              {hours.map((item) => (
                <p key={item.label}>{item.label}: {item.value}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-cream/10 pt-6 text-xs uppercase tracking-[0.18em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>©2025 All Rights Reserved.</p>
        <div className="flex gap-5">
          <a className="transition hover:text-cream" href={site.facebookUrl}>Facebook</a>
          <a className="transition hover:text-cream" href={site.instagramUrl}>Instagram</a>
        </div>
      </div>
    </footer>
  )
}

