import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';
import ToolsCard from './ToolsCard';
import { tools } from './tool.data';

const Tools = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='mt-16 scroll-mt-10'
      id='tools'
    >
      <SectionHeader
        subtitle='Tools'
        title='Technologies I Work With'
      />
      <div className='my-10'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          Tech I like to work with :
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.3)}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3'
        >
          {tools.map((tool, i) => (
            <ToolsCard
              key={i}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Tools;
