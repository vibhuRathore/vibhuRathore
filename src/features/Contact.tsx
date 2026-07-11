import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "motion/react"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { staggerContainer } from "@/lib/animations"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState("")
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = () => {
    setSubmitMessage("Thanks. Your message is ready to be sent.")
    form.reset()
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
    >
      <SectionHeader subtitle="Contact" title="Let's Work Together" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell me about your project" rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitMessage ? (
            <p className="text-sm text-primary" role="status">
              {submitMessage}
            </p>
          ) : null}

          <Button type="submit" className="w-fit" disabled={form.formState.isSubmitting}>
            Send Message
          </Button>
        </form>
      </Form>
    </motion.section>
  )
}

export default Contact
