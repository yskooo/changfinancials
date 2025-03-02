'use client'
import { useState } from "react"
import { ConsultationForm } from "./consultation-form"
import { FadeIn } from "./fade-in"
import { cn } from "@/lib/utils"

export function BookConsultation() {
  const steps = [
    { number: 1, title: "Service" },
    { number: 2, title: "Schedule" },
    { number: 3, title: "Details" },
    { number: 4, title: "Confirm" },
  ]

  const [currentStep, setCurrentStep] = useState(1)

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

        {/* Stepper UI */}
        <div className="mx-auto max-w-lg space-y-6 mt-8">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="relative flex flex-col items-center">
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                      currentStep >= step.number
                        ? "border-secondary bg-secondary text-white"
                        : "border-muted-foreground text-muted-foreground"
                    )}
                  >
                    {step.number}
                  </div>
                  <span className="mt-2 text-xs">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn("w-12 h-0.5", currentStep > step.number ? "bg-secondary" : "bg-muted")} />
                )}
              </div>
            ))}
          </div>

          {/* Consultation Form with Step Control */}
          <FadeIn delay={0.6}>
            <ConsultationForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
