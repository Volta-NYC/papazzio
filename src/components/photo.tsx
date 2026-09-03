type PhotoProps = {
  alt: string
  className?: string
  fit?: "contain" | "cover"
  src: string
}

export function Photo({ alt, className = "", fit = "cover", src }: PhotoProps) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover"

  return <img alt={alt} className={`h-full w-full ${fitClass} ${className}`} loading="lazy" src={src} />
}
