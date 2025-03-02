import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
            Chang Financials
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#why-choose-us" className="text-sm font-medium transition-colors hover:text-primary">
            Why Choose Us
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div>
          <Button className="bg-primary hover:bg-primary/90">Book a Consultation</Button>
        </div>
      </div>
    </header>
  )
}

