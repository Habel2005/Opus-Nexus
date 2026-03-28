
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Exhibits } from "@/components/Exhibits"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-accent">
      <Navigation />
      <Hero />
      <Exhibits />
      <About />
      
      {/* Credibility / Logo section */}
      <section className="py-24 border-y border-border/30 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-headline text-3xl font-bold tracking-tighter">AETHER</span>
            <span className="font-headline text-3xl font-bold tracking-tighter">VANTAGE</span>
            <span className="font-headline text-3xl font-bold tracking-tighter">ZENITH</span>
            <span className="font-headline text-3xl font-bold tracking-tighter">ORBIT</span>
            <span className="font-headline text-3xl font-bold tracking-tighter">LUMOS</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
