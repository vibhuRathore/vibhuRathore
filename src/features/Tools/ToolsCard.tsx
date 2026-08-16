import type { ToolsType } from '@/types';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';

const shouldUseBrandColor = (hex: string) => hex !== '000000' && hex !== '0A0A0A';

const ToolsCard = ({ tool }: { tool: ToolsType['items'][number] }) => {
  return (
    <motion.div
      variants={fadeUp}
      aria-label={tool.label}
      className='border border-border bg-card rounded-md flex items-center gap-3 px-4 py-3'
    >
      {tool.icon.type === 'simple' ? (
        <svg
          role='img'
          aria-label={`${tool.label} icon`}
          viewBox='0 0 24 24'
          className='size-7 shrink-0'
          style={
            shouldUseBrandColor(tool.icon.hex)
              ? { color: `#${tool.icon.hex}` }
              : undefined
          }
        >
          <path
            fill='currentColor'
            d={tool.icon.path}
          />
        </svg>
      ) : (
        <img
          src={tool.icon.src}
          alt={`${tool.label} icon`}
          width={28}
          height={28}
          loading='lazy'
          decoding='async'
          className='size-7 shrink-0 object-contain'
        />
      )}
      <p className='text-sm font-semibold'>{tool.label}</p>
    </motion.div>
  );
};

export default ToolsCard;
