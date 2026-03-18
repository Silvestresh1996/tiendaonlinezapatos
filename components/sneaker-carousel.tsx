"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

const sneakers = [
  {
    id: 1,
    name: "Nike Air Max",
    subtitle: "Comfort Redefined",
    price: "$2,899",
    image: "/images/nike-air-max.jpg",
    color: "White / Red"
  },
  {
    id: 2,
    name: "Adidas Samba",
    subtitle: "Classic Heritage",
    price: "$2,199",
    image: "/images/adidas-samba.jpg",
    color: "Black / Gum"
  },
  {
    id: 3,
    name: "New Balance 9060",
    subtitle: "Future Nostalgia",
    price: "$3,499",
    image: "/images/new-balance-9060.jpg",
    color: "Grey / Cream"
  }
]

export function SneakerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sneakers.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sneakers.length) % sneakers.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentSneaker = sneakers[currentIndex]

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-accent mb-2 block">
              Destacados
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Los Mas Buscados
            </h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="border-border hover:bg-foreground/10"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="border-border hover:bg-foreground/10"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>

        <div 
          className="relative overflow-hidden rounded-2xl bg-card"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="relative aspect-square md:aspect-auto md:min-h-[400px] rounded-xl overflow-hidden bg-muted">
              <Image
                src={currentSneaker.image}
                alt={currentSneaker.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-accent mb-2">
                {currentSneaker.color}
              </span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                {currentSneaker.name}
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                {currentSneaker.subtitle}
              </p>
              <p className="text-3xl font-bold mb-8">
                {currentSneaker.price} <span className="text-sm font-normal text-muted-foreground">MXN</span>
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al Carrito
                </Button>
                <Button variant="outline" className="border-border hover:bg-foreground/10">
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 pb-8">
            {sneakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-accent" 
                    : "w-2 bg-foreground/30 hover:bg-foreground/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
