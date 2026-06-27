import { PageShell } from "@/components/page-shell"
import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { images, menuLinks, menuPreview, site } from "@/lib/content"
import { menuPages } from "@/lib/menu-pages"

export default function MenuPage() {
  const overviewImages: Record<string, string> = {
    "/dinner-menu": images.pasta,
    "/lunch-menu": images.plate,
    "/tray-menu": images.cateringParty,
    "/dessert-menu": images.dolceNotte,
    "/wine-menu": menuPages.find((page) => page.slug === "wine-menu")?.image || images.wineRoom
  }
  const menuTiles = menuLinks.map((link) => ({
    ...link,
    image: overviewImages[link.href] || images.plate
  }))

  return (
    <PageShell>
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-ink px-4 pb-20 pt-36 text-cream sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-35">
            <Photo alt="Papazzio menu dish" src={images.oysters} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/30" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our Menu" light title="Finest and freshest ingredients." text="At Papazzio we strive to use only the finest and freshest ingredients. Our goal is excellent service and delicious food for everyone who enters our door." />
            <div className="mt-8 flex flex-wrap gap-3">
              {menuLinks.map((link) => (
                <a className="button button-outline-light" href={link.href} key={link.href}>{link.label}</a>
              ))}
              <a className="button button-gold" href={site.orderUrl}>Order Now</a>
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll reveal-soft px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div className="reveal-on-scroll reveal-left">
              <SectionHeading title="Gluten Free Menu Available." text="For celiac and gluten intolerant customers, Papazzio offers a large selection of gluten-free options. Anything with a GF indicates it is available gluten-free. Please be sure to let your server know you are ordering gluten-free." />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {menuPreview.map((group, index) => (
                <article className={`reveal-on-scroll ${index === 0 ? "reveal-left" : index === 1 ? "reveal-soft reveal-delay-1" : "reveal-right reveal-delay-2"} bg-cream p-7 shadow-[8px_8px_0_#b53a2d]`} key={group.title} id={`${group.title.toLowerCase()}-menu`}>
                  <h2 className="font-heading text-4xl font-black">{group.title}</h2>
                  <ul className="mt-6 space-y-4 text-sm font-bold leading-6 text-ink/70">
                    {group.items.map((item) => (
                      <li className="border-t border-ink/12 pt-4" key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal-on-scroll reveal-soft bg-cream px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Menus" title="Dinner, lunch, tray, dessert, and wine." text="The Papazzio website lists dedicated dinner, lunch, tray, dessert, and wine menus." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {menuTiles.map((link, index) => (
                <a className={`menu-image-tile reveal-on-scroll ${index % 2 === 0 ? "reveal-left" : "reveal-right"} ${index > 1 ? "reveal-delay-1" : ""}`} href={link.href} key={link.href}>
                  <Photo alt={link.label} className="absolute inset-0 transition duration-700 group-hover:scale-110" src={link.image} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
