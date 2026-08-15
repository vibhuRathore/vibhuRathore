import type { ServiceType } from '@/types';

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className='flex items-start justify-between rounded-2xl border border-border bg-card p-8 hover:bg-accent transition-all duration-300 hover:border-primary relative'>
      <div>
        <h3 className='text-lg font-medium text-card-foreground mb-1'>
          {service.title}
        </h3>
        <p className='text-muted-foreground mb-3'>{service.desc}</p>
        <span className='text-sm lining-nums text-muted-foreground font-medium uppercase tracking-wide'>
          {service.projects}
        </span>
      </div>

      <div className='shrink-0'>{service.icon}</div>
    </div>
  );
};

export default ServiceCard;
