import { TrendingUp, PiggyBank, BarChart4, Building, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Wealth Management",
      description: "Personalized investment strategies tailored to your financial goals and risk tolerance.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
    },
    {
      title: "Investment Planning",
      description: "Strategic approaches to grow your portfolio securely with diversified investment options.",
      icon: <BarChart4 className="h-10 w-10 text-primary" />,
    },
    {
      title: "Retirement Planning",
      description: "Comprehensive plans to ensure financial security and comfort in your retirement years.",
      icon: <PiggyBank className="h-10 w-10 text-primary" />,
    },
    {
      title: "Business Financial Consulting",
      description: "Expert guidance to maximize profitability and operational efficiency for your business.",
      icon: <Building className="h-10 w-10 text-primary" />,
    },
    {
      title: "Risk & Insurance Advisory",
      description: "Protective strategies to safeguard your assets and investments from uncertainties.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive financial solutions designed to meet your unique needs and objectives.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full transition-all hover:shadow-lg group">
              <CardHeader>
                <div className="mb-2 text-primary group-hover:text-secondary transition-colors">{service.icon}</div>
                <CardTitle className="font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="#book-consultation">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

