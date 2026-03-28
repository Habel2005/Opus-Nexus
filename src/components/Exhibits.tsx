
"use client"

import * as React from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export function Exhibits() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  
  const projects = [
    { id: "project-1", title: "Velvet Void", category: "Architectural Vision", year: "2024" },
    { id: "project-2", title: "Etherial UI", category: "Interface Design", year: "2023" },
    { id: "project-3", title: "Maison Noir", category: "Luxury Branding", year: "2024" },
    { id: "project-4", title: "Quantum Realm", category: "3D Immersive", year: "2024" },
  ]

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY
    }
  }

  return (
    <section id="exhibits" className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">Current Collection</span>
          <h2 className="font-headline text-5xl sm:text-7xl">Featured Exhibits</h2>
        </div>
        <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
          A selection of our most ambitious projects, pushing the limits of digital storytelling.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto hide-scrollbar px-6 sm:px-[10vw] pb-12 cursor-grab active:cursor-grabbing select-none"
        onWheel={handleWheel}
      >
        {projects.map((project, idx) => {
          const img = PlaceHolderImages.find(p => p.id === project.id)
          return (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[80vw] sm:w-[500px] group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-8 group-hover:shadow-[0_0_50px_rgba(181,164,230,0.1)] transition-all duration-700">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                    data-ai-hint={img.imageHint}
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">View Project</span>
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline text-4xl">{project.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowRight className="text-background" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 text-[80px] font-headline font-black text-white/5 pointer-events-none">
                  0{idx + 1}
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-border/50 pb-4">
                <div>
                  <h4 className="font-headline text-2xl mb-1">{project.title}</h4>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">{project.category}</p>
                </div>
                <span className="font-mono text-xs opacity-50">{project.year}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
