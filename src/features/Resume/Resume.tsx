import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';
import { education, experience } from '@/constants';
import EducationCard from './EducationCard';

const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and practical experience'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-muted-foreground'
      >
        A concise view of my engineering education and hands-on full-stack work
        across React, Node.js, API integrations, and production-focused web
        applications.
      </motion.p>

      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {education.map((item, i) => (
              <EducationCard
                item={item}
                key={i}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className=''
        >
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>

          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, i) => (
              <EducationCard
                item={item}
                key={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
