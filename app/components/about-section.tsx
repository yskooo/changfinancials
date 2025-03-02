export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Chang Financials
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              With over two decades of experience, Chang Financials delivers personalized financial strategies that
              prioritize your goals and secure your future. Our client-focused approach ensures that every financial
              plan is as unique as the individual it serves.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

