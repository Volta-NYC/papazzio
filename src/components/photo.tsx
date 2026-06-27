type PhotoProps = {
  alt: string
  className?: string
  src: string
}

export function Photo({ alt, className = "", src }: PhotoProps) {
  return <img alt={alt} className={`h-full w-full object-cover ${className}`} loading="lazy" src={src} />
}

