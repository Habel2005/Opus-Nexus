
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Exhibition", href: "#exhibits" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "About", href: "#about" },
    { name: "Connect", href: "#connect" },
  ]

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 flex justify-between items-center",
        scrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent"
      )}>
        <div className="font-headline text-2xl font-bold tracking-tighter cursor-pointer hover:text-primary transition-colors">
          OPUS NEXUS
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors"
        >
          <span className="hidden sm:inline">Menu</span>
          <div className="w-8 h-8 flex flex-col justify-center items-end gap-1.5 overflow-hidden">
            <span className="w-full h-px bg-current group-hover:w-1/2 transition-all duration-300" />
            <span className="w-1/2 h-px bg-current group-hover:w-full transition-all duration-300" />
          </div>
        </button>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl transition-all duration-700 ease-in-out flex flex-col items-center justify-center",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-4 hover:rotate-90 transition-transform duration-500"
        >
          <X className="w-10 h-10 stroke-1" />
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-headline text-5xl sm:text-7xl hover:text-primary transition-all duration-500 hover:italic hover:tracking-widest",
                isOpen ? "animate-slide-up" : ""
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12 flex gap-8 text-muted-foreground text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Behance</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </>
  )
}
