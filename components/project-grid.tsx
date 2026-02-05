"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const photos = [
  { src: "/photo.png", alt: "Portfolio photography 1" },
  { src: "/photo1.png", alt: "Portfolio photography 2" },
  { src: "/photo2.png", alt: "Portfolio photography 3" },
  { src: "/photo3.png", alt: "Portfolio photography 4" },
  { src: "/photo4.png", alt: "Portfolio photography 5" },
  { src: "/photo5.png", alt: "Portfolio photography 6" },
  { src: "/photo6.png", alt: "Portfolio photography 7" },
  { src: "/photo7.png", alt: "Portfolio photography 8" },
]

export function ProjectGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="container mx-auto px-6 lg:px-12 pb-24">
      {/* Project Title */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">Platte Berlin 2025</h2>
        <p className="text-muted-foreground font-light">Runway Show</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={photos}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </div>
  )
}
