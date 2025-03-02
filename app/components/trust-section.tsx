import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function TrustSection() {
  const trustPoints = [
    "Decades of financial expertise",
    "Personalized strategies for every client",
    "Secure, ethical, and results-driven financial planning",
    "Continuous support and guidance",
    "Transparent fee structure with no hidden costs",
    "Certified financial advisors with proven track records",
  ]

  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-secondary">Why Choose Us</div>
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trust Your Finances With The Experts
            </h2>
            <p className="text-muted-foreground md:text-xl">
              At Chang Financials, we combine industry expertise with personalized service to deliver financial
              solutions that truly work for you.
            </p>
            <ul className="grid gap-2 md:grid-cols-2">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Financial advisors in a meeting"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

