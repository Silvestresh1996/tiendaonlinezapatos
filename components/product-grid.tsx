"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"

const promotions = [
  { id: "season", label: "End of Season Sale", color: "bg-red-500" },
  { id: "adidas", label: "Adidas Week", color: "bg-blue-500" },
  { id: "nike", label: "Nike Days", color: "bg-orange-500" },
]

const products = [
  {
    id: 1,
    name: "Jordan 1 Retro High",
    brand: "Nike",
    price: 4299,
    originalPrice: 5299,
    image: "/images/product-1.jpg",
    promotion: "nike",
    isNew: true,
  },
  {
    id: 2,
    name: "Gazelle Indoor",
    brand: "Adidas",
    price: 2499,
    originalPrice: null,
    image: "/images/product-2.jpg",
    promotion: "adidas",
    isNew: false,
  },
  {
    id: 3,
    name: "Dunk Low Panda",
    brand: "Nike",
    price: 2799,
    originalPrice: 3499,
    image: "/images/product-3.jpg",
    promotion: "season",
    isNew: false,
  },
  {
    id: 4,
    name: "550 White Green",
    brand: "New Balance",
    price: 2999,
    originalPrice: null,
    image: "/images/product-4.jpg",
    promotion: null,
    isNew: true,
  },
  {
    id: 5,
    name: "Forum Low",
    brand: "Adidas",
    price: 1899,
    originalPrice: 2499,
    image: "/images/product-5.jpg",
    promotion: "adidas",
    isNew: false,
  },
  {
    id: 6,
    name: "Air Force 1 07",
    brand: "Nike",
    price: 2299,
    originalPrice: null,
    image: "/images/product-6.jpg",
    promotion: "nike",
    isNew: false,
  },
]

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProducts = activeFilter
    ? products.filter((p) => p.promotion === activeFilter)
    : products

  const getPromotionLabel = (promoId: string | null) => {
    if (!promoId) return null
    return promotions.find((p) => p.id === promoId)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-accent mb-2 block">
              Ofertas Especiales
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              No Te Los Pierdas
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(null)}
              className={activeFilter === null ? "bg-foreground text-background" : "border-border"}
            >
              Todos
            </Button>
            {promotions.map((promo) => (
              <Button
                key={promo.id}
                variant={activeFilter === promo.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(promo.id)}
                className={activeFilter === promo.id ? promo.color + " text-white border-0" : "border-border"}
              >
                {promo.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const promo = getPromotionLabel(product.promotion)
            return (
              <div
                key={product.id}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase bg-foreground text-background rounded">
                        Nuevo
                      </span>
                    )}
                    {promo && (
                      <span className={`px-2 py-1 text-[10px] font-bold uppercase text-white rounded ${promo.color}`}>
                        {promo.label}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Agregar a favoritos</span>
                    </Button>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Agregar al Carrito
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <h3 className="font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price.toLocaleString()} MXN
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="border-border hover:bg-foreground/10 font-bold px-12">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  )
}
