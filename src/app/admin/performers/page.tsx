import Link from "next/link"

import { PerformerEditor } from "@/components/performer-editor"
import { images } from "@/lib/content"
import { performerEditorConfigured } from "@/lib/performer-store"

export const dynamic = "force-dynamic"
export const metadata = {
  title: "Performer Editor | Papazzio",
  robots: { index: false, follow: false }
}

export default function PerformerEditorPage() {
  return (
    <main className="min-h-screen bg-paper px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" aria-label="Papazzio home">
          <img alt="Papazzio" className="h-20 w-60 object-contain object-left" src={images.logo} />
        </Link>
        <h1 className="mt-8 font-heading text-5xl font-black">Live music performers</h1>
        <p className="mt-4 text-base font-bold leading-7 text-ink/72">Update performer names, descriptions, and dates. Publish when the lineup is ready for guests.</p>
        <a className="mt-4 inline-block text-sm font-black text-tomato underline" href="/specials/live-music/performers" target="_blank" rel="noreferrer">View the public performer page<span className="sr-only">, opens in a new tab</span></a>
        <PerformerEditor configured={performerEditorConfigured()} />
      </div>
    </main>
  )
}
