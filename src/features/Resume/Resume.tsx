import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';
import { education, experience } from '@/constants';
import type { ExperienceType } from '@/types';
import EducationCard from './EducationCard';

const TimelineSection = ({
  id,
  subtitle,
  title,
  items,
}: {
  id: string;
  subtitle: string;
  title: string;
  items: ExperienceType[];
}) => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='mt-16 scroll-mt-10'
      id={id}
    >
      <SectionHeader
        subtitle={subtitle}
        title={title}
      />

      <motion.div
        variants={fadeUp}
        className='my-10 space-y-8 border-l border-border pl-6'
      >
        {items.map((item) => (
          <EducationCard
            item={item}
            key={`${item.year}-${item.title}`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

const Resume = () => {
  return (
    <>
      <TimelineSection
        id='experience'
        subtitle='Experience'
        title='Professional Experience'
        items={experience}
      />
      <TimelineSection
        id='education'
        subtitle='Education'
        title='Education'
        items={education}
      />
    </>
  );
};

export default Resume;
