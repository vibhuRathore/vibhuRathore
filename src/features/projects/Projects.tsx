import { motion } from "motion/react"
import { staggerContainer } from "@/lib/animations"
import { projectsData } from "@/features/projects/projects.data"
import SectionHeader from "@/components/SectionHeader"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <motion.section initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className="mt-30 scroll-mt-10" id="projects">
       <SectionHeader subtitle='Projects' title='My Featured Projects'/>

       <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0.5)} className="grid md:grid-cols-2 gap-10 mt-10">

        {projectsData.map((project,i)=>(
            <ProjectCard key={i} imgSrc={project.imgSrc} projectLink={project.projectLink} title={project.title} desc={project.desc} tags={project.tags}/>
        ))}
        
       </motion.div>
    </motion.section>
  )
}

export default Projects
