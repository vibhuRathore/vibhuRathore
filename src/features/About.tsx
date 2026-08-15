import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';

const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='👋 Hi there !!!'
      />

      <motion.p
        variants={fadeUp}
        className='mt-2 text-muted-foreground'
      >
        I’m a passionate Full Stack Engineer with around 1 year of hands-on
        experience building and optimizing web applications that solve
        real-world problems. Currently, I’m working at Ficode Software
        Solutions, where I’m involved in developing high-performing
        applications, contributing to impactful projects, and continuously
        learning new technologies.
        <br />
        <br />
        🌟 What sets me apart?
        <br />
        I thrive in problem-solving environments. Whether it’s building robust
        backend systems, creating engaging frontends, or optimizing workflows, I
        approach every challenge with curiosity and determination. My goal? To
        deliver applications that are not only efficient but also intuitive and
        visually engaging.
        <br />
        <br />
        💼 What I’ve been working on:
        <br />
        <br />
        ⚙️ Backend Expertise:
        <br />
        Developed and optimized RESTful APIs using Node.js.
        <br />
        Worked with both MongoDB and MySQL databases for flexible, scalable, and
        reliable data management.
        <br />
        Implemented authentication, middleware, and error handling to enhance
        security and performance.
        <br />
        <br />
        💻 Frontend Excellence:
        <br />
        Built responsive, user-friendly interfaces using React with Tailwind CSS
        and Material UI (MUI) for clean and modern design.
        <br />
        Managed state efficiently with Redux and Redux Toolkit, ensuring
        predictable and scalable app architecture.
        <br />
        Focused on delivering seamless user experiences with fast, accessible,
        and mobile-friendly designs.
        <br />
        <br />
        🤝 Collaboration & Learning:
        <br />
        Collaborate closely with designers and backend teams to align user needs
        with technical solutions.
        <br />
        Continuously explore emerging tools and frameworks to enhance
        productivity and performance.
        <br />
        <br />
        🌱 Always Growing:
        <br />
        With a year of experience and a growth mindset, I’m constantly improving
        my technical and problem-solving skills to stay at the forefront of
        modern web development.
        <br />
        <br />
        📈 What’s Next?
        <br />
        I’m excited to keep contributing to meaningful projects, collaborate
        with innovative teams, and continue evolving as a developer.
      </motion.p>

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
