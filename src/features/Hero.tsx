import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { SparkleIcon } from "lucide-react"

const Hero = () => {
    return (
        <motion.section initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className="pt-15" id="hero">
            <motion.p variants={fadeUp} className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32">
                <SparkleIcon size={15} /> <span>Introduction</span>
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-4xl md:leading-16">
                I'm <span className="text-primary">Vibhu Rathore,</span> Full Stack Engineer
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-5 flex gap-2">

                <Button asChild>
                    <a href="#projects">My Projects</a>
                </Button>

                <Button variant='outline' asChild>
                    <a href="/Resume.pdf" download>Download Cv</a>
                </Button>

            </motion.div>

        </motion.section>
    )
}

export default Hero
