import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SneakerCarousel } from "@/components/sneaker-carousel"
import { ProductGrid } from "@/components/product-grid"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <SneakerCarousel />
      <ProductGrid />
      <CommunitySection />
      <Footer />
    </main>
  )
}
