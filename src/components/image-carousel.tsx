"use client"

import { useEffect, useState } from "react"

import { Photo } from "@/components/photo"

type CarouselImage = {
  alt: string
  src: string
}

export function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [images.length])

  const activeImage = images[activeIndex]

  return (
    <div className="gallery-carousel">
      <div className="gallery-carousel-main">
        <Photo alt={activeImage.alt} src={activeImage.src} />
      </div>
      <div className="gallery-carousel-controls">
        <button aria-label="Previous photo" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} type="button">
          ‹
        </button>
        <div className="gallery-carousel-dots" aria-label="Gallery photos">
          {images.map((image, index) => (
            <button
              aria-label={`Show ${image.alt}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? "is-active" : ""}
              key={image.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button aria-label="Next photo" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} type="button">
          ›
        </button>
      </div>
    </div>
  )
}
