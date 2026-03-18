"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-foreground">
              INNVICTUS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Hombre
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Mujer
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Kids
            </Link>
            <Link href="#" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              Sale
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Marcas
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hidden sm:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground">
                3
              </span>
              <span className="sr-only">Carrito</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Hombre
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Mujer
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Kids
              </Link>
              <Link href="#" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                Sale
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Marcas
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
