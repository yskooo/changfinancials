import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { FadeIn } from "./fade-in"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-4">
              <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
                Chang Financials
              </Link>
              <p className="text-sm text-muted-foreground">
                Providing expert financial guidance and personalized solutions since 2000.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                  Services
                </Link>
                <Link href="#why-choose-us" className="text-sm text-muted-foreground hover:text-foreground">
                  Why Choose Us
                </Link>
                <Link href="#book-consultation" className="text-sm text-muted-foreground hover:text-foreground">
                  Book Consultation
                </Link>
              </nav>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold">Contact Us</h3>
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>123 Financial District, New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@changfinancials.com</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for financial tips and updates.
              </p>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="max-w-[220px]" />
                <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Chang Financials. All rights reserved.
              </p>
              <nav className="flex gap-4 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

