
"use client"

import * as React from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const heroRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 40,
      y: (clientY / innerHeight - 0.5) * 40,
    })
  }

  const heroImage = PlaceHolderImages.find(img => img.id === "hero-bg")

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
    >
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out pointer-events-none"
        style={{ 
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 z-10" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40 grayscale-[0.5]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>

      <div className="container relative z-20 px-6 mx-auto text-center sm:text-left">
        <div className="max-w-5xl">
          <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-8 animate-fade-in">
            A New Paradigm of Digital Artistry
          </h2>
          
          <h1 className="font-headline text-7xl sm:text-9xl font-bold leading-[0.9] tracking-tighter mb-12 animate-slide-up">
            Transcending <br />
            <span className="text-primary italic font-light pr-4">Boundaries</span>
            <span className="block sm:inline sm:ml-4">of Design</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-12 mt-16 animate-fade-in [animation-delay:400ms]">
            <p className="text-muted-foreground text-lg sm:text-xl max-w-md font-light leading-relaxed">
              Opus Nexus is a curated sanctuary where code meets aesthetics, creating immersive digital experiences that resonate.
            </p>
            
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <span className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary group-hover:border-l-background border-b-[6px] border-b-transparent ml-1" />
              </div>
              <span className="uppercase tracking-widest text-sm font-bold">Watch Showreel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
