type SectionHeadingProps = {
  eyebrow?: string
  title: string
  text?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, light = false, text, title }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`eyebrow ${light ? "text-gold" : "text-tomato"}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 font-heading text-4xl font-black leading-[0.95] sm:text-6xl ${light ? "text-cream" : "text-ink"}`}>{title}</h2>
      {text ? <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-cream/68" : "text-ink/70"}`}>{text}</p> : null}
    </div>
  )
}
