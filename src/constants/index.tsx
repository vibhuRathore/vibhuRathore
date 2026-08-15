/**
 * Types
 */
import type { ExperienceType, LinksType, TestimonialsType } from '@/types';
import { socialLinks } from './socials';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  Settings,
  User,
  Wrench,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Tools',
    link: '#tools',
    icon: Wrench,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const education: ExperienceType[] = [
  {
    year: '2019 – 2024',
    title: 'Bachelor of Engineering',
    institute: 'Computer Science & Engineering ( Internet of things)',
    desc: '',
  },
  {
    year: '2018 – 2019',
    title: 'Intermediate',
    institute: 'Spring Fields College, Moradabad, Uttar Pradesh',
    desc: '',
  },
  {
    year: '2016-2017',
    title: 'Matriculation',
    institute: 'Spring Fields College, Moradabad, Uttar Pradesh',
    desc: '',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'Sept 2025 – Present',
    title: 'Full Stack Engineer',
    institute: 'Ficode India',
    desc: '',
  },
  {
    year: 'Aug 2024 – April 2025',
    title: 'Full Stack Engineer',
    institute: 'Freelance / Remote Work',
    desc: '',
  },
  {
    year: 'Jan 2024 – July 2024',
    title: 'Full Stack Engineer',
    institute: 'GrayCell Technologies',
    desc: '',
  },
];

// TODO: replace with real client testimonials before enabling the section.
const testimonials: TestimonialsType[] = [];

export { socialLinks, education, experience, navLinks, testimonials };
