"use client"

import { cn } from "@/lib/utils"

interface StepperProps {
  currentStep: number
  steps: {
    number: number
    title: string
  }[]
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex justify-center items-center w-full max-w-3xl mx-auto mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="relative">
            <div
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                currentStep >= step.number
                  ? "border-secondary bg-secondary text-white"
                  : "border-muted-foreground text-muted-foreground",
              )}
            >
              {step.number}
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn("h-0.5 w-12 mx-2", currentStep > step.number ? "bg-secondary" : "bg-muted")} />
          )}
        </div>
      ))}
    </div>
  )
}

