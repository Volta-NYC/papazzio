import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-cream sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-2xl font-semibold">{site.name}</p>
        <p className="text-sm text-cream/70">Built with Next.js, React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  )
}

