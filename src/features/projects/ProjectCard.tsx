import { fadeUp } from '@/lib/animations';
import { motion, useReducedMotion } from 'motion/react';
import type { ProjectType } from '@/types';
import { Button } from '@/components/ui/button';

const ProjectCard = ({
  imgSrc,
  imageWidth,
  imageHeight,
  tags,
  title,
  desc,
  projectLink,
}: ProjectType) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={
        shouldReduceMotion ? undefined : { y: -6, rotateX: 1.5, rotateY: -1.5 }
      }
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className='relative transform-gpu'
    >
      <figure className='relative overflow-hidden rounded-md'>
        <img
          src={imgSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          loading='lazy'
          decoding='async'
          sizes='(min-width: 768px) 50vw, 100vw'
          className='rounded-md transition duration-500 hover:scale-115 w-full'
        />

        <div className='absolute bottom-0 left-0 p-2 flex gap-2'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='bg-background/90 hover:bg-primary hover:text-primary-foreground py-1 px-2 rounded-sm text-sm cursor-pointer'
            >
              {tag}
            </span>
          ))}
        </div>
      </figure>

      <div className='mt-4'>
        <h3 className='text-xl font-semibold text-card-foreground'>{title}</h3>
        <p className='mt-2 text-sm text-muted-foreground'>{desc}</p>
        <Button
          asChild
          className='mt-4'
        >
          <a
            href={projectLink}
            target='_blank'
            rel='noreferrer'
          >
            View Project
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
