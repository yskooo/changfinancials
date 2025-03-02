import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "./fade-in"

export function FounderProfile() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeIn direction="right" className="relative aspect-square lg:aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent rounded-2xl" />
            <Image
              src="/chang.webp"
              alt="Michael Chang - Founder & CEO"
              width={600}
              height={800}
              className="rounded-2xl object-cover w-full h-full shadow-xl"
            />
          </FadeIn>
          <div className="space-y-8">
            <div className="space-y-6">
              <FadeIn direction="left" delay={0.2}>
                <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary">
                  Meet Our Founder
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.3}>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Chang Velasco III
                </h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.4}>
                <p className="text-xl font-medium text-primary">Founder & CEO, Chang Financials</p>
              </FadeIn>
              <div className="space-y-4 text-muted-foreground">
                <FadeIn direction="left" delay={0.5}>
                  <p>
                    With over two decades of experience in financial services, Chang has established himself as
                    a trusted advisor to individuals and businesses seeking to achieve their financial goals.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.6}>
                  <p>
                    After graduating from Harvard Business School and spending 10 years at leading financial
                    institutions, Chang founded Chang Financials with a vision to provide personalized, comprehensive
                    financial solutions that put clients first.
                  </p>
                </FadeIn>
                <FadeIn direction="left" delay={0.7}>
                  <p>
                    Under his leadership, Chang Financials has grown to serve over 5,000 clients while maintaining the
                    personalized attention that each client deserves.
                  </p>
                </FadeIn>
              </div>
            </div>
            <FadeIn direction="left" delay={0.8}>
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold">Credentials & Recognition</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li className="flex items-center gap-2">• Certified Financial Planner (CFP®)</li>
                  <li className="flex items-center gap-2">• Chartered Financial Analyst (CFA)</li>
                  <li className="flex items-center gap-2">• Named "Top 40 Under 40" in Financial Advisory</li>
                  <li className="flex items-center gap-2">• Regular contributor to Financial Times and Bloomberg</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.9}>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="w-5 h-5 mr-2" />
                    Follow on Twitter
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

