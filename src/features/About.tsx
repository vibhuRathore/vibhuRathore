import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0)}
      className='mt-16 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='👋 Hi there!'
      />

      <motion.div
        variants={fadeUp}
        className='mt-2 space-y-6 text-muted-foreground'
      >
        <p>
          I’m a passionate Full Stack Engineer with around 1.5+ year of hands-on
          experience building and optimizing web applications that solve
          real-world problems. Currently, I’m working at Ficode Software
          Solutions, where I’m involved in developing high-performing
          applications, contributing to impactful projects, and continuously
          learning new technologies.
        </p>

        <p>
          💡 My journey into full-stack development has been transformative —
          blending creativity, logic, and performance-driven design to craft
          solutions that truly make an impact.
        </p>

        <div>
          <p>🌟 What sets me apart?</p>
          <p className='mt-2'>
            I thrive in problem-solving environments. Whether it’s building
            robust backend systems, creating engaging frontends, or optimizing
            workflows, I approach every challenge with curiosity and
            determination. My goal? To deliver applications that are not only
            efficient but also intuitive and visually engaging.
          </p>
        </div>

        <div>
          <p>💼 What I’ve been working on:</p>
        </div>

        <div>
          <p>⚙️ Backend Expertise:</p>
          <ul className='mt-2 list-disc space-y-1 pl-6'>
            <li>Developed and optimized RESTful APIs using Node.js.</li>
            <li>
              Worked with both MongoDB and MySQL databases for flexible,
              scalable, and reliable data management.
            </li>
            <li>
              Implemented authentication, middleware, and error handling to
              enhance security and performance.
            </li>
          </ul>
        </div>

        <div>
          <p>💻 Frontend Excellence:</p>
          <ul className='mt-2 list-disc space-y-1 pl-6'>
            <li>
              Built responsive, user-friendly interfaces using React with
              Tailwind CSS and Material UI (MUI) for clean and modern design.
            </li>
            <li>
              Managed state efficiently with Redux and Redux Toolkit, ensuring
              predictable and scalable app architecture.
            </li>
            <li>
              Focused on delivering seamless user experiences with fast,
              accessible, and mobile-friendly designs.
            </li>
          </ul>
        </div>

        <div>
          <p>🤝 Collaboration & Learning:</p>
          <ul className='mt-2 list-disc space-y-1 pl-6'>
            <li>
              Collaborate closely with designers and backend teams to align user
              needs with technical solutions.
            </li>
            <li>
              Continuously explore emerging tools and frameworks to enhance
              productivity and performance.
            </li>
          </ul>
        </div>

        <div>
          <p>🌱 Always Growing:</p>
          <p className='mt-2'>
            With a year of experience and a growth mindset, I’m constantly
            improving my technical and problem-solving skills to stay at the
            forefront of modern web development.
          </p>
        </div>

        <div>
          <p>📈 What’s Next?</p>
          <p className='mt-2'>
            I’m excited to keep contributing to meaningful projects, collaborate
            with innovative teams, and continue evolving as a developer.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button
          className='mt-5 cursor-pointer'
          asChild
        >
          <a href='#contact'>Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default About;
