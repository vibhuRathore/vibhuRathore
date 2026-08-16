import { motion, useReducedMotion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { SparkleIcon } from 'lucide-react';
import HeroVisual from './hero/HeroVisual';

const headingWords = ["I'm", 'Vibhu Rathore,', 'Full Stack', 'Engineer'];

const wordReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const headingVariants = shouldReduceMotion
    ? fadeUp
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      };
  const ctaHover = shouldReduceMotion ? undefined : { x: 3, y: -3, scale: 1.03 };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='relative isolate overflow-hidden pt-10'
      id='hero'
    >
      <HeroVisual />

      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span>Introduction</span>
      </motion.p>

      <motion.h2
        variants={headingVariants}
        aria-label="I'm Vibhu Rathore, Full Stack Engineer"
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-4xl md:leading-16'
      >
        <span
          aria-hidden='true'
          className='inline-flex flex-wrap gap-x-3'
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={word}
              variants={shouldReduceMotion ? undefined : wordReveal}
              className={index === 1 ? 'text-primary' : undefined}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <motion.a
            href='#projects'
            whileHover={ctaHover}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            My Projects
          </motion.a>
        </Button>

        <Button
          variant='outline'
          asChild
        >
          <motion.a
            href='/Resume.pdf'
            download
            whileHover={ctaHover}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Download Cv
          </motion.a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
