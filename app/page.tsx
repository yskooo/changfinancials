import { BookConsultation } from "./components/book-consultation"
import { Footer } from "./components/footer"
import { FounderProfile } from "./components/founder-profile"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { TrustSection } from "./components/trust-section"
import { AboutSection } from "./components/about-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <Services />
        <FounderProfile />
        <TrustSection />
        <BookConsultation />
      </main>
      <Footer />
    </div>
  )
}

