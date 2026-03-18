import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, ArrowRight } from "lucide-react"

const stats = [
  { value: "50K+", label: "Miembros" },
  { value: "120+", label: "Eventos" },
  { value: "32", label: "Ciudades" },
]

export function CommunitySection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-accent mb-4 block">
              Comunidad
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-none">
              Legends
              <br />
              <span className="text-muted-foreground">Legado</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
              Unite a la comunidad de sneakerheads mas grande de Mexico. Comparte tu coleccion, 
              conoce a otros apasionados y se parte de eventos exclusivos.
            </p>

            <div className="flex gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-black text-accent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                Unite Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-border hover:bg-foreground/10">
                <Instagram className="mr-2 h-4 w-4" />
                @innvictus
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/community-1.jpg"
                  alt="Comunidad Innvictus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Proximo Evento</p>
                <p className="font-bold text-lg">Sneaker Con CDMX</p>
                <p className="text-accent font-medium">15 Abril 2026</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-accent rounded-xl p-6">
                <p className="text-accent-foreground font-bold text-lg mb-2">
                  Construye tu legado
                </p>
                <p className="text-accent-foreground/80 text-sm">
                  Cada paso cuenta. Cada sneaker tiene una historia.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/community-2.jpg"
                  alt="Coleccion de sneakers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
