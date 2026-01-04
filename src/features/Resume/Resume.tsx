import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import SectionHeader from "@/components/SectionHeader"
import { education, experience, tools } from "@/constants"
import EducationCard from "./EducationCard"
import ToolsCard from "./ToolsCard"

const Resume = () => {
    return (
        <motion.section initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className="mt-30 scroll-mt-10" id="resume">

            <SectionHeader subtitle="" title="Education and practical experience" />

            <motion.p variants={fadeUp} className="mt-4 text-neutral-">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis blanditiis porro consequuntur vel, tenetur officiis rem recusandae laborum suscipit deleniti aspernatur repudiandae aliquid, reprehenderit voluptate asperiores culpa alias. Consequatur, suscipit.
            </motion.p>

            <div className="grid gap-x-10 my-16 md:grid-cols-2">
                <motion.div variants={fadeUp} className="mb-16 md:mb-0">
                    <h2 className="text-3xl font-semibold mb-8">Education</h2>

                    <div className="space-y-8 border-l border-neutral-700 pl-6">
                        {education.map((item, i) => (
                            <EducationCard item={item} key={i} />
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="">
                    <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>

                    <div className="space-y-8 border-l border-border pl-6">
                        {experience.map((item, i) => (
                            <EducationCard item={item} key={i} />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="my-16">
                <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8 capitalize">
                    Tech I like to work with :
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer(0.5)}
                    className="grid grid-cols-2 gap-5 sm:grid-cols-3"
                >
                    {tools.map((tool, i) => (
                        <ToolsCard key={i} tool={tool} />
                    ))}
                </motion.div>


            </div>

        </motion.section>
    )
}

export default Resume