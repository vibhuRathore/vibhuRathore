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
  GraduationCap,
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
  { label: 'Experience', link: '#experience', icon: FileText },
  { label: 'Education', link: '#education', icon: GraduationCap },
  {
    label: 'Skills',
    link: '#tools',
    icon: Wrench,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const education: ExperienceType[] = [
  {
    year: '2019 – 2023',
    title: 'B.E./B.Tech Computer Science and Engineering',
    institute: 'Chandigarh University',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'Sept 2025 – Present',
    title: 'Full Stack Developer',
    institute: 'Ficode India',
    bullets: [
      'Contributed to a large-scale veterinary surgery simulation platform serving 8,000-10,000 users, built using TypeScript, 7 independent microservices, and distributed systems principles.',
      'Designed and developed scalable RESTful APIs using Node.js and Express to power core platform functionality.',
      'Owned Single Sign-On (SSO) implementation using SurfConext, with JWT-based token propagation and secure session lifecycle management.',
      'Contributed to migrating monolithic deployment to AWS EC2, S3, CloudFront, SES, and Secrets Manager, reducing deployment time by 40% via a GitHub Actions CI/CD pipeline.',
      'Containerized Redis using Docker to manage caching across microservices, improving repeated data retrieval performance and simplifying local development setup.',
      'Owned iOS and macOS delivery using Capacitor and Electron, implementing jailbreak detection for clinical security compliance and resolving critical shutdown bugs.',
    ],
  },
  {
    year: 'Jan 2024 – June 2024',
    title: 'Full Stack Developer',
    institute: 'GrayCell Technologies',
    bullets: [
      'Refactored API response handling and optimized SQL Server query performance, reducing average response times by 25% across core application endpoints.',
      'Established a structured debugging and triage workflow for production incidents, cutting average resolution time by 40%.',
      'Delivered 15+ features in collaboration with cross-functional teams, consistently meeting sprint deadlines in an Agile development environment.',
    ],
  },
];

// TODO: replace with real client testimonials before enabling the section.
const testimonials: TestimonialsType[] = [];

export { socialLinks, education, experience, navLinks, testimonials };
