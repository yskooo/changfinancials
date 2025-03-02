import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Trusted Financial Advisory Since 2000
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                Secure Your Financial Future with Expert Guidance
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg sm:text-xl md:text-2xl">
                Tailored financial solutions to grow, protect, and manage your wealth with confidence and clarity.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                size="lg"
                asChild
              >
                <Link href="#book-consultation">Book a Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-secondary text-secondary hover:bg-secondary/10 rounded-full"
                asChild
              >
                <Link href="#services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8 items-center">
              <div className="space-y-2">
                <h4 className="text-3xl font-bold">23+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold">5K+</h4>
                <p className="text-muted-foreground">Clients Served</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold">98%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-transparent rounded-2xl" />
            <Image
              src="/hero-finance.jpg"
              alt="Professional financial planning"
              width={800}
              height={900}
              className="rounded-2xl object-cover w-full h-full shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

