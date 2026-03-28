
"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function About() {
  const metrics = [
    { label: "Global Reach", value: "40M+" },
    { label: "Awards Won", value: "24" },
    { label: "Success Rate", value: "98%" },
    { label: "Experience", value: "12Y" },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-6">Our Philosophy</span>
              <h2 className="font-headline text-5xl sm:text-7xl leading-tight">
                Crafting <span className="italic">Silence</span> in a World of <span className="text-accent">Noise</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We believe in the power of minimalism, precision, and soul. Our approach is not just about making things look beautiful; it's about engineering resonance between the user and the digital object.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-4xl font-headline font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <div className="bg-card p-12 glass-panel">
              <div className="font-headline text-3xl mb-8 leading-relaxed italic">
                "Opus Nexus didn't just build a website; they constructed a digital monument for our brand. The attention to detail is unparalleled."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" className="object-cover w-full h-full grayscale" />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm">Elena Valerious</div>
                  <div className="text-xs text-muted-foreground">CEO, Aether Capital</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 border border-border/30">
              <h4 className="font-headline text-2xl">The Mindset</h4>
              <p className="text-muted-foreground leading-relaxed">
                We operate at the intersection of high-concept art and high-performance technology. Every pixel is intentional, every interaction is a conversation. We don't follow trends; we define them through rigorous exploration and uncompromising standards.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group">
                Deep Dive into our Method
                <span className="w-8 h-px bg-primary group-hover:w-12 transition-all" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
