import { ConsultationForm } from "./consultation-form"
import { FadeIn } from "./fade-in"

export function BookConsultation() {
  const steps = [
    { number: 1, title: "Service" },
    { number: 2, title: "Schedule" },
    { number: 3, title: "Details" },
    { number: 4, title: "Confirm" },
  ]

  return (
    <section
      id="book-consultation"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Free Consultation
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Take the first step towards financial security. Our experts are ready to create a personalized plan for
                you.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 mt-8">
          <div className="flex justify-center space-x-4">
            {steps.map((step, index) => (
              <FadeIn key={step.number} direction="down" delay={0.2 + index * 0.1}>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      step.number === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && <div className="h-0.5 w-12 self-center bg-muted mt-6" />}
                  <span className="text-sm mt-2">{step.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.6}>
            <ConsultationForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

