
"use client"

import * as React from "react"

export function Footer() {
  return (
    <footer id="connect" className="pt-24 pb-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.5em] block mb-8">Ready to evolve?</span>
          <h2 className="font-headline text-6xl sm:text-9xl tracking-tighter mb-12 hover:italic hover:text-accent transition-all duration-700 cursor-pointer">
            Let's Build <br /> Something <span className="text-primary">Great</span>
          </h2>
          <a 
            href="mailto:hello@opusnexus.studio" 
            className="inline-block px-12 py-6 border border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-background transition-all duration-500"
          >
            Start a Project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          <div>
            <div className="font-headline text-2xl font-bold mb-6">OPUS NEXUS</div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              An independent digital studio specializing in high-fidelity interactive experiences and luxury visual systems.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold opacity-50">Studio</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Behance</a>
              <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-right">
            <h4 className="text-xs uppercase tracking-widest font-bold opacity-50">Newsletter</h4>
            <div className="flex justify-end gap-2 border-b border-border py-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-xs w-48 text-right"
              />
              <button className="text-xs font-bold uppercase hover:text-primary">Join</button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-4">
              &copy; 2024 OPUS NEXUS STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
