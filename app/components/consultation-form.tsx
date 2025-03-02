"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

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

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ConsultationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      goal: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    alert("Consultation booked! We'll contact you shortly to confirm.")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <motion.div variants={formFieldVariants} initial="hidden" animate="visible">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select a Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="wealth-management">Wealth Management</SelectItem>
                    <SelectItem value="investment-planning">Investment Planning</SelectItem>
                    <SelectItem value="retirement-planning">Retirement Planning</SelectItem>
                    <SelectItem value="business-consulting">Business Financial Consulting</SelectItem>
                    <SelectItem value="risk-advisory">Risk & Insurance Advisory</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Choose the financial service you're most interested in.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Consultation Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Select your preferred consultation date.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Financial Goal</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Briefly describe your financial goals or concerns"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This helps us prepare for your consultation.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={formFieldVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
            Book Your Free Consultation
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}

