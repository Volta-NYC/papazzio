import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollReveal />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
