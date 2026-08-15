import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import { projectsData } from '@/features/projects/projects.data';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='mt-16 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My Featured Projects'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.3)}
        className='grid md:grid-cols-2 gap-8 mt-8'
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
