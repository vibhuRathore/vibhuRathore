import type { ToolsType } from '@/types';
import type { SimpleIcon } from 'simple-icons';
import {
  siDocker,
  siExpress,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedis,
  siShadcnui,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';
import awsIcon from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import cssIcon from 'devicon/icons/css3/css3-original.svg';
import sqlServerIcon from 'devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg';
import zustandIcon from 'devicon/icons/zustand/zustand-plain.svg';

const simpleIcon = ({ path, hex }: SimpleIcon) => ({
  type: 'simple' as const,
  path,
  hex,
});

const imageIcon = (src: string) => ({
  type: 'image' as const,
  src,
});

export const tools: ToolsType[] = [
  {
    category: 'Languages',
    items: [
      { label: 'TypeScript', icon: simpleIcon(siTypescript) },
      { label: 'JavaScript (ES6+)', icon: simpleIcon(siJavascript) },
      { label: 'HTML5', icon: simpleIcon(siHtml5) },
      { label: 'CSS3', icon: imageIcon(cssIcon) },
    ],
  },
  {
    category: 'Backend',
    items: [
      { label: 'Node.js', icon: simpleIcon(siNodedotjs) },
      { label: 'Express.js', icon: simpleIcon(siExpress) },
      { label: 'Redis', icon: simpleIcon(siRedis) },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { label: 'React.js', icon: simpleIcon(siReact) },
      { label: 'Zustand', icon: imageIcon(zustandIcon) },
      { label: 'Tailwind CSS', icon: simpleIcon(siTailwindcss) },
      { label: 'ShadCN', icon: simpleIcon(siShadcnui) },
    ],
  },
  {
    category: 'Databases',
    items: [
      { label: 'MongoDB', icon: simpleIcon(siMongodb) },
      { label: 'PostgreSQL', icon: simpleIcon(siPostgresql) },
      { label: 'SQL Server', icon: imageIcon(sqlServerIcon) },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { label: 'AWS', icon: imageIcon(awsIcon) },
      { label: 'Docker', icon: simpleIcon(siDocker) },
      { label: 'GitHub Actions', icon: simpleIcon(siGithubactions) },
      { label: 'CI/CD', icon: simpleIcon(siGithubactions) },
    ],
  },
  {
    category: 'Tools',
    items: [{ label: 'Git', icon: simpleIcon(siGit) }],
  },
];
