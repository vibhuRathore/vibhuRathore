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
        subtitle='Skills'
        title='Technical Skills'
      />
      <div className='my-10'>
        {tools.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className='mb-8 last:mb-0'
          >
            <h2 className='text-2xl font-semibold mb-4'>{group.category}</h2>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer(0.12)}
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
            >
              {group.items.map((tool) => (
                <ToolsCard
                  key={tool.label}
                  tool={tool}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tools;
