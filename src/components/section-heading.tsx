type SectionHeadingProps = {
  as?: "h1" | "h2"
  eyebrow?: string
  title: string
  text?: string
  light?: boolean
}

export function SectionHeading({ as = "h2", eyebrow, light = false, text, title }: SectionHeadingProps) {
  const Heading = as

  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`eyebrow ${light ? "text-gold" : "text-tomato"}`}>{eyebrow}</p> : null}
      <Heading className={`mt-3 font-heading text-4xl font-black leading-[0.95] sm:text-6xl ${light ? "text-cream" : "text-ink"}`}>{title}</Heading>
      {text ? <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-cream/82" : "text-ink/78"}`}>{text}</p> : null}
    </div>
  )
}
