import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sneaker.jpg"
          alt="Sneakers destacados"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider uppercase bg-accent text-accent-foreground rounded-full">
            Nueva Coleccion 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-6 text-balance">
            Tu Estilo,
            <br />
            <span className="text-accent">Tu Legado</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
            Descubre los sneakers mas exclusivos y define tu propio camino en la cultura urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8">
              Comprar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 font-bold text-base px-8">
              Ver Coleccion
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
