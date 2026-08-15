import { motion } from "motion/react"
import SectionHeader from "@/components/SectionHeader"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { testimonials } from "@/constants"

const Testimonials = () => {
  if (!testimonials.length) {
    return null
  }

  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
    >
      <SectionHeader subtitle="Testimonials" title="Client Feedback" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.article key={`${testimonial.name}-${testimonial.role}`} variants={fadeUp} className="rounded-lg border border-border bg-card p-5 text-card-foreground">
            <p className="text-sm text-muted-foreground">{testimonial.text}</p>
            <div className="mt-5">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Testimonials
