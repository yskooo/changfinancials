import { ConsultationForm } from "./consultation-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date for your consultation.",
  }),
  goal: z.string().min(10, {
    message: "Please describe your financial goal in at least 10 characters.",
  }),
})

// export function BookConsultation() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       goal: "",
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // In a real application, this would submit the form data to your backend
//     console.log(values)
//     alert("Consultation booked! We'll contact you shortly to confirm.")
//   }

//   return (
//     <section
//       id="book-consultation"
//       className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50"
//     >
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Book Your Free Consultation
//             </h2>
//             <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
//               Take the first step towards financial security. Our experts are ready to create a personalized plan for
//               you.
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto max-w-lg space-y-6 mt-8">
//           <div className="flex justify-center space-x-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
//               1
//             </div>
//             <div className="h-0.5 w-12 self-center bg-secondary/30"></div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
//               2
//             </div>
//             <div className="h-0.5 w-12 self-center bg-muted"></div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
//               3
//             </div>
//             <div className="h-0.5 w-12 self-center bg-muted"></div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
//               4
//             </div>
//           </div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="service"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Select a Service</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a service" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="wealth-management">Wealth Management</SelectItem>
//                         <SelectItem value="investment-planning">Investment Planning</SelectItem>
//                         <SelectItem value="retirement-planning">Retirement Planning</SelectItem>
//                         <SelectItem value="business-consulting">Business Financial Consulting</SelectItem>
//                         <SelectItem value="risk-advisory">Risk & Insurance Advisory</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormDescription>Choose the financial service you're most interested in.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="date"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormLabel>Consultation Date</FormLabel>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <FormControl>
//                           <Button
//                             variant={"outline"}
//                             className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
//                           >
//                             {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
//                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                           </Button>
//                         </FormControl>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                           mode="single"
//                           selected={field.value}
//                           onSelect={field.onChange}
//                           disabled={(date) => date < new Date()}
//                           initialFocus
//                         />
//                       </PopoverContent>
//                     </Popover>
//                     <FormDescription>Select your preferred consultation date.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Your full name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="your.email@example.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="goal"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Financial Goal</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Briefly describe your financial goals or concerns"
//                         className="resize-none"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormDescription>This helps us prepare for your consultation.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
//                 Book Your Free Consultation
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </section>
//   )
// }

export function BookConsultation() {
  return (
    <section
      id="book-consultation"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Book Your Free Consultation
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Take the first step towards financial security. Our experts are ready to create a personalized plan for
              you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 mt-8">
          <div className="flex justify-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              1
            </div>
            <div className="h-0.5 w-12 self-center bg-secondary/30"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              2
            </div>
            <div className="h-0.5 w-12 self-center bg-muted"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              3
            </div>
            <div className="h-0.5 w-12 self-center bg-muted"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              4
            </div>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  )
}

