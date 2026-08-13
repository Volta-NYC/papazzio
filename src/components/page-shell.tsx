import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollReveal />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
